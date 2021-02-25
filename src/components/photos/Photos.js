import React, { Component, Fragment } from 'react';
import { API, Storage, Auth } from 'aws-amplify';
import ImageGallery from 'react-image-gallery';
import config from '../../config';

let images = [];  

async function getPresignedURLS(orig, thumb) {
  let presignOriginal = await Storage.get(orig, { level: 'private' });
  let presignThumb = await Storage.get(thumb, { level: 'private', bucket:  config.s3.thumbBucket});
  let results = [ presignOriginal, presignThumb];
  return Promise.resolve(results);
}

async function getPhotoLabels(key) {
  const apiName = 'imageAPI';
  const path = '/images'; 

  const myInit = { // OPTIONAL
    headers: { 
      'Content-Type': 'application/json'
    },
    response: true, // OPTIONAL (return the entire Axios response object instead of only response.data)
    queryStringParameters: {  // OPTIONAL
      action: 'getLabels',
      key: key
    },
  };

  let apiResponse = await API.get(apiName, path, myInit);
  let results = [ apiResponse ];

  return Promise.resolve(results);
}

export default class Photos extends Component {

  state = {
    response: '',
    filelist: '',
    cognitoSub: '',
    loaded: false,
    pr: ''
  };

  getId = () => {
    Auth.currentUserInfo()
      .then(response => {
        // console.log(response.id)
        this.setState({cognitoSub: response.id});
      });
  }

  listImages = async () => {
    
    const result = await Storage.list('photos/', { level: 'private' });
      
    let fileArray = Object.values(result);
    const cognitoID = this.state.cognitoSub;

    const fileNames = fileArray.map(function (image) { 
      return image.key.replace('photos/', ''); 
    });

    this.setState({ filelist: fileNames });

    // console.log(fileNames)

    fileNames.forEach(addImagesToList);

    function addImagesToList(filename) {

      let orig = 'photos/'.concat(filename);
      let fullName = 'private/'.concat(cognitoID).concat('/photos/').concat(filename);
      getPresignedURLS(orig, orig)
        .then (result => { 
          let originalImageSigned = result[0];
          let thumbImageSigned = result[1];
          let currentImg = {
            original: originalImageSigned,
            thumbnail: thumbImageSigned,
            description: 'Testing Description',
            isSelected: false,
          };
          images.push(currentImg);

          getPhotoLabels(fullName)
            .then (result => {  

              let allLabels = result[0].data;
              // console.log(allLabels)
              if (allLabels) {
                let labelsDetected = Object.values(allLabels);

                const filterLabels = (cut, list) =>
                  list.filter(label => !label.includes(cut));

                let filtered = filterLabels('private', labelsDetected).join(' * ');
                for (let i in images) {
                  if (images[i].original.includes(filename)) {
                    images[i].description = filtered;
                    break; //Stop this loop, we found it!
                  }
                }
              }
            });
        }); 

    }
    this.setState({pr: true});


  };

  componentDidMount = async () => {
    this.getId();
    this.listImages();
    this.setState({loaded: true});
  }
    
  render() {
    return (
      <Fragment>
        <section className="section">
          <div className="container">
            <h1>Your Photos</h1>
            <p className="subtitle is-5">Review your photographs and labels</p>
            <br />
            <div className="columns">
              <div className="column">
                {this.state.pr ? <ImageGallery items={images} thumbnailPosition='left' />  : null }
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

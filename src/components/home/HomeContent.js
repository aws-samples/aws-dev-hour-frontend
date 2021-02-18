import React from 'react';

export default function HomeContent() {
  return (
    <section className="container">
      <div className="columns features">
        <div className="column is-4">
          <div className="card is-shady">
            <div className="card-content">
              <div className="content">
                <h4>We use Amazon Rekognition</h4>
                <p>Amazon Rekognition makes it easy to add image and video analysis to your applications using proven, highly scalable, deep learning technology that requires no machine learning expertise to use. With Amazon Rekognition, you can identify objects, people, text, scenes, and activities in images and videos, as well as detect any inappropriate content. Amazon Rekognition also provides highly accurate facial analysis and facial search capabilities that you can use to detect, analyze, and compare faces for a wide variety of user verification, people counting, and public safety use cases.</p>
                <p><a href="https://aws.amazon.com/rekognition/">Learn more</a></p>
              </div>
            </div>
          </div>
        </div>
        <div className="column is-4">
          <div className="card is-shady">
            <div className="card-content">
              <div className="content">
                <h4>Photos stored in Amazon S3</h4>
                <p>Amazon Simple Storage Service (Amazon S3) is an object storage service that offers industry-leading scalability, data availability, security, and performance. This means customers of all sizes and industries can use it to store and protect any amount of data for a range of use cases, such as data lakes, websites, mobile applications, backup and restore, archive, enterprise applications, IoT devices, and big data analytics. Amazon S3 provides easy-to-use management features so you can organize your data and configure finely-tuned access controls to meet your specific business, organizational, and compliance requirements. Amazon S3 is designed for 99.999999999% (11 9's) of durability, and stores data for millions of applications for companies all around the world.</p>
                <p><a href="https://aws.amazon.com/s3/">Learn more</a></p>
              </div>
            </div>
          </div>
        </div>
        <div className="column is-4">
          <div className="card is-shady">
            <div className="card-content">
              <div className="content">
                <h4>Amazon DynamoDB</h4>
                <p>DynamoDB supports some of the world’s largest scale applications by providing consistent, single-digit millisecond response times at any scale. You can build applications with virtually unlimited throughput and storage. DynamoDB global tables replicate your data across multiple AWS Regions to give you fast, local access to data for your globally distributed applications. For use cases that require even faster access with microsecond latency, DynamoDB Accelerator (DAX) provides a fully managed in-memory cache.</p>
                <p><a href="https://aws.amazon.com/dynamodb/">Learn more</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

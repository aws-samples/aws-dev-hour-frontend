# AWS Dev Hour - Series 1 Demo Application (Frontend)
### Type: Demo
### Repository:  https://github.com/aws-samples/aws-dev-hour-frontend

## AWS Dev Hour - On Twitch!
Do you have the skills it takes to build modern applications that are distributed and designed for scale and agility? If you’re interested in learning to build cloud native applications and architecture practices, join us for AWS Dev Hour: Building Modern Apps, a weekly Twitch show presented by AWS Training and Certification. Built by developers for developers, the series offers a hands-on approach. Over the course of 8 episodes, AWS expert hosts Ben Newton and May Kyaw will take you through the end-to-end build of a serverless application in the AWS cloud. You’ll have the chance to learn by doing, following along with the hosts and developing a cloud-native application using the AWS free tier. You’ll learn best practices for modern applications and better understand how AWS cloud-native applications differ from on-premises. Throughout the series, you’ll receive code, white papers, links to documentation, and other resources to help you progress. 


## Architecture
<img width="1042" alt="architecture-screenshot" src="https://awsdevhour.s3-accelerate.amazonaws.com/architecture.jpg">

## Episodes

During each episode, we will be progressively building this full-stack application together. Please see the following URL for schedule and episode details: 

[AWS DEV HOUR TWITCH SCHEDULE AND LINKS TO PREVIOUS SHOWS](https://pages.awscloud.com/traincert-twitch-dev-hour?sc_icampaign=event_twitch_devhour_launch_hosts&sc_channel=sm)


### Services used during the series:

- Amazon Cognito
- Amazon S3
- Amazon Simple Queue Service
- AWS Lambda
- Amazon DynamoDB
- Amazon Rekognition
- AWS Cloud Development Kit
- Amazon API Gateway
- AWS CodeBuild
- AWS CodePipeline

## Pre-requisites

This front-end will leverage the back-end serverless infrastructure deployed using the following repository:

[AWS Dev Hour Back-end Repository](https://github.com/aws-samples/aws-dev-hour-frontend)

When you deploy the back-end using the AWS Cloud Development Kit (CDK), you will recieve outputs from the AWS CloudFormation stack. These values need to be used in the config.json file within this project, as follows.

```json
{
  "api": {
    "invokeUrl": "https://123456789.execute-api.ap-southeast-2.amazonaws.com/prod"
  },
  "cognito": {
    "REGION": "ap-southeast-2",
    "USER_POOL_ID": "ap-southeast-2_abcdefgh",
    "APP_CLIENT_ID": "abcdefghijklmnopqrstuvwqyz",
    "IDENTITY_POOL_ID": "ap-southeast-2:ab12345-a123-b123-c123-123456789"
  },
  "s3": {
    "bucket": "devhourseries1stack-cdkreknimagebucket12345-123456789",
    "thumbBucket": "devhourseries1stack-cdkreknimagebucketresized12345-123456789"
  }
}
```

This project uses the React Library and Node.js:

[React - A JavaScript library for building user interfaces](https://reactjs.org/docs/getting-started.html)

[Node.js - A JavaScript runtime built on Chrome's V8 JavaScript engine](https://nodejs.org/)

## Useful commands

 * `npm install`     install packages
 * `npm start`       run the website locally. [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Contributions

We would encourage all of our AWS Dev Hour viewers to contribute to this project. For more details, please refer to 'CONTRIBUTING.md'.

### License

This software is licensed under the Apache License, Version 2.0.

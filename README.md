# PortafolioNodeJsWebApp

## Portfolio WebApp

This is a basic project webapp that consumes REST API on AWS API Gateway, finally to connect AWS DynamoDB database.

## Application Info

This project was created with ExpressJS Framework.

## Available Scripts

In the project directory, you can run:

### `npm install`

Install all the dependences to run the app.<br>


### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

You will also see any lint errors in the console.

### `./node_modules/.bin/cypress open`

Open a new window, where it list few test cases. You can run each one!

## Technologies used in this WebApp

### aws-sdk

AWS sdk library to run some commands to connect with DynamoDB.

### axios

Axios library to do request. It allows us to connect API GateWay Functions by one endpoint.

### express

express library to create WebApp, including manage routes and request - response interaction by user.

### pug

Pug library to create simple templates, and show greats frontend pages.

### twitter

twitter library in nodejs to consume some api request i.e. get timelines of user.


## Task and Time spend:

- (1h) Prepare the project: nodejs, visualcode, github, account in aws, dynamodb, credentials developen in twitter.
- (15min) Planning to do
- (15min) Migrate mysql table to dynamodb collection 
(mysql --user=zemoga_test_db --port=3306 --host=zemoga-test-db.crhpedy9xxto.us-east-1.rds.amazonaws.com --database=zemoga_test_db --skip-ssl -p)
- (2h) Create lambda functions to CRUD a dynamoDB data
Read portfolios (GET ALL)
Read profile (GET)
Update profile (POST)
Put portfolio (PUT)
Delete portfolio (DELETE)
- (2h) Configure APIGateway to expose the services for comsuming
Invoke URL: https://bo21t0ju3b.execute-api.us-east-1.amazonaws.com/prod
- (3h) Create WebApp to request those services and show it. Also create simple test cases.
HOME (/) : Consume 'Read all portfolios' and list user with a link to view each one
Profile (/{idportfolio}): Consume 'Read single profile' and show profile data and twitter timelines

## Feel free to contact me!

- hanssebastian.osorio@gmail.com
# ExpressJS server and Google Sheets

## Description

This **API REST** is developed using **ExpressJS** to edit a **Google Sheet**.

## Architecture

This **API REST** uses this technology:
* ExpressJS: to create API REST.
* NodeJS: to create API REST infrastructure with Express.
* Google Sheet: to create rows.

## Prerequisite Creating access credentials

<ol>
<li>Visit the <a href="https://console.cloud.google.com/getting-started?pli=1" rel="nofollow noreferrer">console.cloud.google.com</a>.</li>
<li>Create a new project if you do not have an existing project.</li>
<li>Select the project and select APIs and services.</li>
<li>Click on ENABLE APIS AND SERVICES.</li>
<li>In the search box, search for google sheets API then enable it for
the project created.</li>
<li>Once you have enabled the API, select CREATE CREDENTIALS to access the API. In the drop-down menu, select Service Account.</li>
<li>In the next screen, provide the details required then click CREATE.</li>
<li>The next two steps are optional, just click CONTINUE and then DONE.</li>
<li>Copy the email address and save it on the clipboard. Click on the email address to go to the next screen. Under keys, select Create new key.</li>
<li>Select JSON as the key type then Create. This process downloads a
JSON file of the Key.</li>
<li>Move the downloaded JSON file into the same folder as the project
and, since the name is too long, we can rename it as credentials.json.</li>
</ol>

## Setup
```js
cp .env.example .env
```

## Install and run

Follow this steps to install and run this project:

1. Install [NodeJS](http://nodejs.org/) in your server.
2. Download this project.
3. Execute ``npm start`` command into project folder.
4. Now a webservice is running on port 8888 (by default).



## Docker 
### Build Image
```js
docker build -t google-sheets-server .
```


### Run image
```js
docker run --restart=always --name google-sheets-server -p 8888:8888 -d  google-sheets-server
```


### Docker-compose
```js
docker-compose up -d
```

## Endpoints
### **spread-sheet** 
```js
curl --location --request GET 'http://localhost:8888/spread-sheet'
```

### **spread-sheet-values** 
```js
curl --location --request GET 'http://localhost:8888/spread-sheet-values'
```

### **append-spread-sheet-values** 
```js
curl --location --request POST 'http://localhost:8888/append-spread-sheet-values?A=2022-02-13 05:24:25&B=867553057962847&C=New value 3003:;3004:;'
```

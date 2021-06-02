# Online version

This project is deployed via Netlify, live demo can be found:  [https://starwar-hank.netlify.app/](https://starwar-hank.netlify.app/).

## Available Scripts

make sure you are using same node version, if you have nvm installed, run 
### `nvm use`

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
### `yarn build`

build the project

## Run with docker
A simple dockerfile is added, you can run the project in docker. Exposed port is 
```
docker build -t starwar .
docker run -p 3000:3000 -t starwar
```

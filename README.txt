Initializing this project consisted of utilizing client and server cmd commands as follows:

CLIENT:
cd client
npx create-react-app ./
npm install axios moment react-file-base64 redux redux-thunk

SERVER:
cd server
npm init -y
npm install express body-parser cors mongoose nodemon

Server package.json lines must be changed/included:
"type": "module",
"scripts": {
    "start": "nodemon index.js"
  }


Command to start application:
npm start
# How to use Inventory Tracker

This web app allow users to create, view, update and delete inventory items.

## Server

Go to `server` directory

To install the packages run
`npm install`

### initial setup

First we need to create some enviroment variable in `.env` file

```
NODE_ENV=
PORT=
MONGO_URI=
```

To test the server run
`npm test`

To start the server run
`npm start`

## client

Go to `client` directory

To install the packeges run
`npm install`

### initial setup

First we need to create some enviroment variable in `.env.development` file

```
REACT_APP_API_ENDPOINT=http://localhost:3001
```

To start the front app run
`npm start`

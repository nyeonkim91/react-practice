# About

create a project using create-react-app, use Express.js server, and apply react-hot-loader

# How to Run

`yarn` in root directory and server folder to install dependencies

after run `yarn start` in server folder to run server (if not, cannot access to server),
run `yarn start` in root directory to run client.

# The Gist

To use server api running locally in webpack-dev-server, need to fix some codes in `config/webpack.config.dev.js` and `scripts/start.js`.

In `config/webpack.config.dev.js`, change host and port from `localhost:3000` to `0.0.0.0:8081`. Now you can view the app in `0.0.0.0:8081` not `localhost:3000`. `0.0.0.0` allows to access from outside.

In `scripts/start.js`, add server URI to proxy, make listen to 0.0.0.0 not localhost, and replace port from 3000 to 8081.

Now, open `0.0.0.0:8081` to view the app, and try `0.0.0.0:8081/api/post` and see the result from server terminal.

webpack-dev-server 의 proxy 를 적용하였기 때문에 해당 서버에서 Express.js 서버에 구현된 라우트에 접근 가능하다.

# Reference

<https://velopert.com/2037>

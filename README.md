# Cài đặt môi trường

### Cài đặt Babel

1. npm i --save-dev babel-cli babel-preset-env babel-preset-stage-0

2. Tạo file .babelrc
   `{ "presets" : ["env", "stage-0"] }`
3. package.json
   `{ "start": "nodemon ./src/app.js --exec babel-node -e js" }`
   Nếu bị lỗi babel-node
   `{npm i -g babel-node}`

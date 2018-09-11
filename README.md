# monbo-project

This project was built with Turbo 360. To learn more, click here: https://www.turbo360.co

## Instructions
After cloning into repo, cd to project root directory and create a .env file. This file requires a TURBO_APP_ID and SESSION_SECRET keys:

```
TURBO_ENV=dev
SESSION_SECRET=YOUR_SESSION_SECRET
TURBO_APP_ID=123abc
```

Then run npm install from the root directory:

```
$ npm install
```

To run dev server, install Turbo CLI globally:

```
$ sudo npm install turbo-cli -g
```

Then run devserver from project root directory:

```
$ turbo devserver
```

To build for production, run build:

```
$ npm run build
```


## メモ
- mongoimport --db mongo-project --collection profiles --file initial/profiles.json
- 作ったjsonをmongoに突っ込める

## turbo360
- ログインして、Myprojectからサイトを作るしてappidとかメモ
- ターミナルから操作
- turbo login
- 登録したときのメルアド、パスワード入れればログインできる
- turbo app xxxx(ここにmyprojectで作ったappidを入れる)
- turbo deploy
- これでプロジェクトがデプロイされてターミナルで書かれているurlにアクセスすると使える
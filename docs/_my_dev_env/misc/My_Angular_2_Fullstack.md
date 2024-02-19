# My Angular 2 Fullstack



    "scripts": {
        "ng": "ng",
        "build": "ng build",
        "start": "node dist/server/app.js",
        "predev": "tsc -p server",
        "dev": "concurrently \"mongod\" \"ng serve -pc proxy.conf.json --open\" \"tsc -w -p server\" \"nodemon dist/server/app.js\"",
        "prod": "concurrently \"mongod\" \"ng build -aot -prod && tsc -p server && node dist/server/app.js\"",
        "test": "ng test",
        "lint": "ng lint",
        "lintbe": "tslint server/**/**.ts{,x}",
        "e2e": "ng e2e"
      },


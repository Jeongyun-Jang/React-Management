const express = require('express');
const bodyParser = require('body-parser'); //서버 모듈과 관련된 것들
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('api/hello',(req,res)=>{

    res.send({message: 'Hello Express!'});

});//server에 접속하는 client 입장에서 api의 hello로 접속하면 어떤 처리를 할 것인지.

app.listen(port,() => console.log(`Listening on port .. ${port}`)); //실제 앱 동작

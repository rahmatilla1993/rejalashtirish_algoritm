var express = require('express');
var app = express();

app.get('/hello', function (req, res) {
    console.log("hhdhdhghghghghghghdh")
    res.send(`<form method="post" action="http://192.168.246.77:3000/form_post">
    <label for="">
    <input type="text" name="name_user" value="Jhon Wick" placeholder="Add your name">
    </label>
    <label>
    <input type="email" name="email_user" value="jhonw@gmail.com" placeholder="Add your email">
    </label>
    <button type="submit">Click</button>
    </form>`);
});

app.post('/form_post', (req, res) => {
    console.log(req)
    console.log("jfhdsjfhdjsfh")

    res.send("thanks")
})



app.listen(3000);
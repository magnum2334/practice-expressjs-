const { response } = require('express');
const express = require('express');
const app = express();


app.listen(3000,() => {
   console.log('escuchando')
})

app.use(express.json());

app.get('/', (req, res)=>{
    res.send('hello')
})


app.get('/hello', (req, res)=>{
    res.send('hello get')
})

app.get('/test', (req, res)=>{
    res.json({
        user_name: "jeff",
        last_name: "stun" 
    });
})

app.post('/user/:id', (req, res) => {
    console.log(req.body)
    console.log(req.params)
    res.send('post received')
})

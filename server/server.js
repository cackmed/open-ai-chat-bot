require('dotenv').config();
const { Configuration, OpenAIApi } = require('openai');
const express = require('express');


const app = new express();
app.use(express.json());


const openai = new OpenAIApi(new Configuration({
    apiKey: process.env.SECRET_KEY
}))


app.get('/', async (req, res) => {
    const userInput = req.body

   openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{
            role: "user",
            content: userInput
        }]
    }).then((response) => {
        res.status(200).send({
            message: response.data.choices[0].message.content
        })
    }).err(err => {
        console.log(err);
        res.status(500).send(err);
    })
})

app.use(require('./middleware/not-found'));

app.listen(3001, () => {
    console.log('Listening on 3001. Ctrl+c to stop this server.')
})


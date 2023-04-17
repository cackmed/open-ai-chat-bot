require('dotenv').config();
const { Configuration, OpenAIApi } = require('openai');

const openai = new OpenAIApi(new Configuration({
    apiKey: process.env.SECRET_KEY
}))

openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{
        role: "user",
        content: "Hello ChatGPT"
    }]
}).then(res => {
    console.log(res)
})




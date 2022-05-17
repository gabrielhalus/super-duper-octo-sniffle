const mongoose = require('mongoose')

mongoose
    .connect('mongodb+srv://'+ process.env.DB_USER_PASS + '@cluster0.4hkbt.mongodb.net/api-bde',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => { console.log('Connected to MongoDB') })
    .catch((err) => { console.log(('Faild to connect to MongoDB', err)); })
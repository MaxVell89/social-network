const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const mongoose       = require('mongoose');
const bodyParser     = require('body-parser');
const cors = require('cors');

const User = require('./app/models/user');

const feedRouter = require('./app/routes/feed');

const app = express();

app.use(cors());
app.use(express.urlencoded({extended: true}));
//app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.use('/feed', feedRouter);

const PORT = process.env.PORT || 4000;
const DB = 'mongodb+srv://social-network:1q2w3e4r@cluster0.xnwpr.mongodb.net/social';

async function start() {
    try {
        await mongoose.connect(DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        const candidate = await User.findOne()
        if (!candidate) {
            const user = new User({
                email: 'max@max.ru',
                name: 'Maxim'
            })
            await user.save()
        }
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`)
        })
    } catch (e) {
        console.log(e)
    }
}

start();

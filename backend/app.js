const express = require('express');
const app = express();
const client = require('./src/db/database');
const authRoutes = require('./src/routes/authRoutes');
const taskRoutes = require('./src/routes/taskRoutes');
const userRoutes = require('./src/routes/userRoutes');
require('dotenv').config();
const cookieParser = require("cookie-parser");
app.use(cookieParser());
const cors = require('cors');
app.use(express.json());
app.use(cors({
    origin: ['http://localhost:5173', 'https://task-mananement-app.vercel.app/login', 'https://task-mananement-app.vercel.app/signup', 'https://task-mananement-app.vercel.app'],
    methods: ['GET', 'POST'],
    credentials: true,
    optionsSuccessStatus: 200,
  }));
client.connect().then(() => {
    console.log('Database connected');
}).catch((err) => {
    console.log(err);
})


app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/tasks', taskRoutes);
app.use('/api/v1/user', userRoutes);


app.listen(3000, () => console.log('Server running on port 3000'));
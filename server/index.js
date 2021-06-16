import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import studentRoutes from './routes/student.js';

const app = express();

app.use(express.json());
app.use(cors());
app.use('/students', studentRoutes);

// Lines 14-23 are necessary to establish a connection to MongoDB
const CONNECTION_URL = 'mongodb+srv://jnobile91:Mypassword!1@cluster0.aojvd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000; // Designates port 5000 for back-end/server

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => app.listen(PORT, () =>
    console.log(`Connection is established and running on port: ${PORT}`) // Prints success message
)).catch((err) => console.log(err.message)); // Otherwise prints error message

mongoose.set('useFindAndModify', false);
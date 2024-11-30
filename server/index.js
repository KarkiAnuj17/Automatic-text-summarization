const express = require('express')
const app = express()
app.use(express.json())
const port = 9000
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/majorprojectDb');

const { Schema } = mongoose;

const userSchema = new Schema({
    email: { type: String, required: true},
  fullName: { type: String, required: true },
  phoneNumber: { type: Number, required: true },
  gender: {
    type: String,
    enum: ["Male", "Female", "Other"],
    required: true
  },
  password: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

app.post('/register', (req, res) => {
User.create(req.body)
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
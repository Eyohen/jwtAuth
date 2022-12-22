const express = require('express')
const mongoose = require('mongoose');
require('dotenv').config();
const users = require("./routes/user");
const cookieParser = require("cookie-parser")


// const posts = require("./routes/post");
const auth = require("./routes/auth");
const cors = require('cors')


const app = express();


const port = 4000

// middlewares
app.use(cors());
app.use(express.json());
app.use(cookieParser());


// routes

app.use("/auth", auth);
// app.use("/user", users);
// app.use("/post", posts);

//connections
mongoose.connect(`mongodb+srv://henro19:${process.env.MONGO_PASSWORD}@geocluster.ezsl8.mongodb.net/jwtAuth?retryWrites=true&w=majority`).then(()=>

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
).catch((err)=> console.log(err));

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })


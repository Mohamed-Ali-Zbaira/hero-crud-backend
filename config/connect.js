// 1
const mongoose = require('mongoose');
// 2
mongoose.connect( 'mongodb+srv://medalizbaira:7mBB5wom4TMJxbZ3@cluster0.rrzziuw.mongodb.net/?retryWrites=true&w=majority' )
    .then(
        ()=>{
            console.log('connected to db !');
        }
    )
    .catch(
        ()=>{
            console.log('error in connection');
        }
    )

// mongodb://127.0.0.1:27017/hero-crud-backend
module.exports = mongoose;
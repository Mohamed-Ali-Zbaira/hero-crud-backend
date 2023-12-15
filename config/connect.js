// 1
const mongoose = require('mongoose');
// 2
mongoose.connect( 'mongodb+srv://mohamed:ORu6EGIzS2Lb2BZ5@Hero.oasxjxs.mongodb.net/hero?retryWrites=true&w=majority' )
    //
.then(
        ()=>{
            console.log('connected to db !');
        }
    )
    .catch(
        (error)=>{
            console.log('error in connection'+error);
        }
    )

// mongodb://127.0.0.1:27017/hero-crud-backend
module.exports = mongoose;
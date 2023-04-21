const mongoose = require('mongoose');

//Schema
const schema = mongoose.Schema({
    _number:Number,
});


//Clase

class Copy {
    constructor(number){
        this._number = number;
    }
    get number(){
        return this._number;
    }
    set number(v){
        this._number = v;
    }

}

schema.loadClass(Copy);
module.exports = mongoose.model('Copy',schema);
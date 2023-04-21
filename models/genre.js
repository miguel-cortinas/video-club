const mongoose = require('mongoose');

//Schema
const schema = mongoose.Schema({
    _description:String

});


//Clase

class Genre {
    constructor(description){
        this._description = name;
    }
    get description(){
        return this._description;
    }
    set description(v){
        this._description = v;
    }

}

schema.loadClass(Genre);
module.exports = mongoose.model('Genre',schema);
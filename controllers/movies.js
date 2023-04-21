const express = require('express');
const Director = require('../models/director');
const Movie = require('../models/movie');


function list(req, res, next) {
    Movie.find().populate("_director").then(objs => res.status(200).json({
        message: "Listado de peliculas",
        obj:objs
    })).catch(ex => res.status(500).json({
        message: "No se puso listar las peliculas",
        obj:ex
    }));
}

function index(req, res, next) {
    res.send(`respond with a index of a movie= ${req.params.id}`);
}

async function create(req, res, next) {
    const title = req.body.title;
    const directorId = req.body.directorId;

    let director = await Director.findOne({"_id":directorId});
    let movie = new Movie({
        title:title,
        director:director
    });

    movie.save()
         .then(obj => res.status(200).json({
            message: "Pelicula creada correctamente",
            obj:obj
         }))
         .catch(ex => res.status(500).json({
            message: "No se creo la pelicula",
            obj:ex
         }));

}

function replace(req, res, next) {
    const id = req.params.id;
    let name = req.body.name ? req.body.name : "";
    let lastName = req.body.lastName ? req.body.lastName : "";
    let phone = req.body.phone ? req.body.phone : "";

    let User = new Object({
        _name: name,
        _lastName: lastName,
        _phone: phone
    });
    //User.findOneAndUpdate({},director,{}).then().catch();
    User.findOneAndUpdate({"_id":id},User,{new : true})
            .then(obj => res.status(200).json({
                message: "User actualizado correctamente",
                obj: obj
            })).catch(ex => res.status(500).json({
                message: "No se pudo actualizar la informacion",
                obj:ex
            }));
}

function update(req, res, next) {
    res.send(`respond with a update movie = ${req.params.id}`);
}

function destroy(req, res, next) {
    res.send(`respond with a destory movie= ${req.params.id}`);
}

module.exports = { 
    list,
    index,
    create,
    replace,
    update,
    destroy
};
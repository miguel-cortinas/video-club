const express = require('express');
const Genre = require('../models/genres');
function list(req, res, next) {
    Genre.find().then(objs => res.status(200).json({
        message: "Lista de generos",
        obj: objs
    })).catch(ex => res.status(500).json({
        message: "No se pudo consultar la informacion",
        obj: ex
    }));
}

function index(req, res, next) {
    const id = req.params.id;
    Genre.findOne({"_id":id}).then(obj => res.status(200).json({
        message: `Genre con id ${id}`, // Interpolacion
        obj: obj
    })).catch(ex => res.status(500).json({
        message: "No se pudo consultar la informacion",
        obj:ex
    }));
}

function create(req, res, next) {
    let description = req.body.description;

    let genre = new Genre({
        description:description,
    });

    genre.save().then(obj => res.status(200).json({
        message:"Genre creado correctamente.",
        obj:obj
    })).catch(ex => res.status(500).json({
        message: "Genre no se pudo crear.",
        ex:ex
    }));
}

function replace(req, res, next) {
    const id = req.params.id;
    let description = req.body.description ? req.body.description : "";

    let Genre = new Object({
        _description: description,
    });
    //Genre.findOneAndUpdate({},director,{}).then().catch();
    Genre.findOneAndUpdate({"_id":id},Genre,{new : true})
            .then(obj => res.status(200).json({
                message: "Genre actualizado correctamente",
                obj: obj
            })).catch(ex => res.status(500).json({
                message: "No se pudo actualizar la informacion",
                obj:ex
            }));
}

function update(req, res, next) {
    const id = req.params.id;
    let description = req.body.description;

    let Genre = new Object(); // Para poder llenar los atributos y hacer los cambios

    if(description){
        Genre._name = description;
    }

    Genre.findOneAndUpdate({"_id":id},Genre)
            .then(obj => res.status(200).json({
                message:"Genre actualizado correctamente.",
                obj:obj
            })).catch(ex => res.status(500).json({
                message: "No se pudo actualizar la Genre",
                obj:ex
            }));
}

function destroy(req, res, next) {
    const id = req.params.id;
    Genre.findByIdAndRemove({"_id":id})
            .then(obj => res.status(200).json({
                message: "Genre eliminado correctamente",
                obj:obj
            })).catch(ex => res.status(500).json({
                message: "No se pudo eliminar la Genre",
                obj:ex
            }));
}

module.exports = { 
    list,
    index,
    create,
    replace,
    update,
    destroy
};
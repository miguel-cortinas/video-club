const express = require('express');
const User = require('../models/user');
function list(req, res, next) {
    User.find().then(objs => res.status(200).json({
        message: "Lista de usuarios",
        obj: objs
    })).catch(ex => res.status(500).json({
        message: "No se pudo consultar la informacion",
        obj: ex
    }));
}

function index(req, res, next) {
    const id = req.params.id;
    User.findOne({"_id":id}).then(obj => res.status(200).json({
        message: `User con id ${id}`, // Interpolacion
        obj: obj
    })).catch(ex => res.status(500).json({
        message: "No se pudo consultar la informacion",
        obj:ex
    }));
}

function create(req, res, next) {
    let name = req.body.name;
    let lastName = req.body.lastName;
    let phone = req.body.phone;

    let user = new User({
        name:name,
        lastName:lastName,
        phone:phone
    });

    user.save().then(obj => res.status(200).json({
        message:"User creado correctamente.",
        obj:obj
    })).catch(ex => res.status(500).json({
        message: "User no se pudo crear.",
        ex:ex
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
    const id = req.params.id;
    let name = req.body.name;
    let lastName = req.body.lastName;
    let phone = req.body.phone;

    let User = new Object(); // Para poder llenar los atributos y hacer los cambios

    if(name){
        User._name = name;
    }
    if(lastName){
        User._lastName = lastName;
    }
    if(phone){
        User._phone = phone;
    }

    User.findOneAndUpdate({"_id":id},User)
            .then(obj => res.status(200).json({
                message:"User actualizado correctamente.",
                obj:obj
            })).catch(ex => res.status(500).json({
                message: "No se pudo actualizar la User",
                obj:ex
            }));
}

function destroy(req, res, next) {
    const id = req.params.id;
    User.findByIdAndRemove({"_id":id})
            .then(obj => res.status(200).json({
                message: "User eliminado correctamente",
                obj:obj
            })).catch(ex => res.status(500).json({
                message: "No se pudo eliminar la User",
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
const express = require('express');
const Member = require('../models/member'); 

function list(req, res, next) {
    member.find().then(objs => res.status(200).json({
        message: "lista de miebros",
        obj:objs
    })).catch(ex => res.status(500).json({
        message: "no se pudo mostrar socios",
        obj:ex
    }));
}

function index(req, res, next) {
    res.send(`respond with a index of a actor= ${req.params.id}`);
}

function create(req, res, next) {
    let name = req.body.name;
    let lastName = req.body.lastName;
    let phone = req.body.phone;
    let address = new Object();
    address.street = req.body.street;
    address.number = req.body.number;
    address.zip = req.body.zip;
    address.state = req.body.state;

    let member = new Member({
        name: name,
        lastName: lastName,
        phone: phone,
        address: address

    });

    member.save().then(obj => res.status(200).json({
        message: "Miembro creado correctamente",
        obj:obj
    })).catch(ex => res.status(500).json({
        message: "Error al crear el miembro",
        obj:ex
    }));

}

function replace(req, res, next) {
    res.send(`respond with a replace actor= ${req.params.id}`);
}

function update(req, res, next) {
    res.send(`respond with a update actor = ${req.params.id}`);
}

function destroy(req, res, next) {
    res.send(`respond with a destory actor= ${req.params.id}`);
}

module.exports = { 
    list,
    index,
    create,
    replace,
    update,
    destroy
};
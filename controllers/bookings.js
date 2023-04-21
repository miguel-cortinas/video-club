const express = require('express');
const Booking = require('../models/booking');
function list(req, res, next) {
    Booking.find().then(objs => res.status(200).json({
        message: "Lista de copias",
        obj: objs
    })).catch(ex => res.status(500).json({
        message: "No se pudo consultar la informacion",
        obj: ex
    }));
}

function index(req, res, next) {
    const id = req.params.id;
    Booking.findOne({"_id":id}).then(obj => res.status(200).json({
        message: `Booking con id ${id}`, // Interpolacion
        obj: obj
    })).catch(ex => res.status(500).json({
        message: "No se pudo consultar la informacion",
        obj:ex
    }));
}

function create(req, res, next) {
    let date = req.body.date;

    let booking = new Booking({
        date:date
    });

    booking.save().then(obj => res.status(200).json({
        message:"Booking creado correctamente.",
        obj:obj
    })).catch(ex => res.status(500).json({
        message: "Booking no se pudo crear.",
        ex:ex
    }));
}

function replace(req, res, next) {
    const id = req.params.id;
    let date = req.body.date ? req.body.date : "";

    let booking = new Object({
        _number: date
    });
    //Booking.findOneAndUpdate({},director,{}).then().catch();
    Booking.findOneAndUpdate({"_id":id},Booking,{new : true})
            .then(obj => res.status(200).json({
                message: "Booking actualizado correctamente",
                obj: obj
            })).catch(ex => res.status(500).json({
                message: "No se pudo actualizar la informacion",
                obj:ex
            }));
}

function update(req, res, next) {
    const id = req.params.id;
    let date = req.body.date;

    let booking = new Object(); // Para poder llenar los atributos y hacer los cambios

    if(date){
        booking._number = date;
    }

    Booking.findOneAndUpdate({"_id":id},Booking)
            .then(obj => res.status(200).json({
                message:"Booking actualizado correctamente.",
                obj:obj
            })).catch(ex => res.status(500).json({
                message: "No se pudo actualizar la booking",
                obj:ex
            }));
}

function destroy(req, res, next) {
    const id = req.params.id;
    Booking.findByIdAndRemove({"_id":id})
            .then(obj => res.status(200).json({
                message: "Booking eliminado correctamente",
                obj:obj
            })).catch(ex => res.status(500).json({
                message: "No se pudo eliminar la booking",
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
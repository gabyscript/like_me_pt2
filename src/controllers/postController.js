
const {obtenerPost, agregarPost, darLike, eliminarPost} = require('../services/postService');
const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.urlencoded({extended: true}));

const controlador = {

    show: async (req, res) => {

        const post = await obtenerPost();
        res.json(post)           
        console.log("Mostrando imagenes")
        
    }, 

    create: async (req, res) => {
        try {
            const {titulo, url, descripcion} = req.body;
            await agregarPost(titulo, url, descripcion);
            res.send("Post agregado con exito")            
        } catch(error) {
            res.status(500).send(error)      
        }     
    },  
    
    edit: async (req, res) => {
        const {id} = req.params; 
        try {
            await darLike(id);  
            res.send("Has dado like con éxito")  
        } catch ({code, message}) {
            res.status(code).send(message)
        }  
               

    },  

    remove: async (req, res) => {
        const {id} = req.params;
        try {
            await eliminarPost(id);
            res.send("Post eliminado correctamente")
        } catch ({code, message}) {
            res.status(code).send(message)
        }        
    }  

}

module.exports = controlador;
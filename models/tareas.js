const Tarea = require("./tarea")
const fs = require("fs")
let tareasListadas = require("../Tareas.json")
class Tareas {
   __listado = tareasListadas
    crear(desc = ""){
    let tarea = new Tarea(desc);
    this.__listado.push(tarea)
    }
    completar(desc){
       this.__listado = tareasListadas
       this.__listado.find((Element)=>{
           if(Element.desc == desc){
           return Element.completadoEn = new Date(), Element.completado = true;
        } 
        })
        }
    eliminar(desc){
        this.__listado = tareasListadas
       let borrar = this.__listado.find((Element)=>{
            return Element.desc == desc
        })
        if(borrar){
            let numero = this.__listado.indexOf(borrar)
            this.__listado.splice(numero,1)
            return this.__listado
        }
    }    
    }
    module.exports = Tareas
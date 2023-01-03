const fs = require('fs');

let archivoTareas = {
    archivo: 'tareas.json',
    leerArchivo: function () {
        return JSON.parse(fs.readFileSync(this.archivo, 'utf-8'));
    },
    
    escribirJSON: function (arrayDeTareas) {
        fs.writeFileSync(this.archivo,
         JSON.stringify(arrayDeTareas),
         "utf-8")
    },
    guardarTarea: function(tarea){
        //obtuvimos el ayyay de tareas
        let listaDeTareas = this.leerArchivo();
        //agregamos la nueva tarea al array
        listaDeTareas.push(tarea);
        //sobreescribimos el json con la nueva lista de tareas
        this.escribirJSON(listaDeTareas);
    },
    filtrarPorEstado: function(estado){
        let listaDeTareas = this.leerArchivo();
        let tareasFiltradas = listaDeTareas.filter((tarea) => tarea.estado === estado);
        return tareasFiltradas;
    }
}
module.exports = archivoTareas;
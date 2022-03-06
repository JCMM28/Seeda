const express = require('express');
const TareaController = require('../controllers/tarea')
const api = express()

api.get('/obter_tareas', TareaController.obtenerTodasTareas)
api.get('/obter_tarea_usuario/:id', TareaController.tareasPorUsuario)
api.post('/registrar_tarea', TareaController.agregarTareas)
api.put('/completar_tarea/:id', TareaController.completarTarea)
api.put('/editar_tarea/:id', TareaController.editarTarea)
api.delete('/eliminar_area/:id', TareaController.eliminarTarea)

module.exports = api
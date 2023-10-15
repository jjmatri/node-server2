const express = require('express');
/*module.exports = app;*/


const app = express();
const port = 1000;

const tareas = [
    
    {"id": 1,"descripcion": "dormir","estado": false},
  
    {"id": 2,"descripcion": "salir","estado": true}
]

function saludar( req, res,next){
const id=req.params.id
    console.log('hola'+id)
next();
}
        
//const tareas={};
app.post('/tarea/:id',saludar, (req, res) => {

    const newtarea = {
        "id":3,
         descripcion:'Walk the dog',
         "estado":false,
        
    }
   
      tareas.push(newtarea)
    res.status(200).send('tarea creada')
    
    		
})


app.get('/tarea', (req, res) => {
    
    res.status(200).send(tareas)
			
})


app.listen(port, () => {
    console.log(`Example app listeng on port ${port}`)
})

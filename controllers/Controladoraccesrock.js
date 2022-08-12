class ControladorHabitacion{

    constructor(){}
    
    //Buscar Habitacione 
    buscarHabitacion(request,response){

        //Intento resolver la peticion
        try {
        
            response.status(200).json({})

        } catch (error) { // Fallo resolviendo la peticion
            response(400).json({})
        }
    
    }
   
    //Buscar Habitacion por id
    buscarHabitacionPorId(request,response){

        try {
        
            response.status(200).json({})

        } catch (error) { // Fallo resolviendo la peticion
            response(400).json({})
        }
    

    }

    //Agregar Habitción 
    AgregarHabitacion(request,response){

        try {
        
            response.status(200).json({})

        } catch (error) { // Fallo resolviendo la peticion
            response(400).json({})
        }
    

    }

    //Editar Habitacion
    editarHabitacion(request,response){

        try {
        
            response.status(200).json({})

        } catch (error) { // Fallo resolviendo la peticion
            response(400).json({})
        }
    

    }

    //Eliminar hbaitación
    eliminarHabitacion(request, respopnse){

        try {
        
            response.status(200).json({})

        } catch (error) { // Fallo resolviendo la peticion
            response(400).json({})
        }
    
    }

}
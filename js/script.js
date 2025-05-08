$(document).ready(()=>{

    // TAREA
    $(".tarea").mouseenter(()=>{
        $(".tarea").css("transform","scale:1.2")
    });


    // BOTÓN DE CHECK
    $("#btn_completada").click(()=>{
        $(".tarea").css("background","rgb(126, 255, 79)");
    });
    $("#btn_completada").mouseenter(()=>{
        $("#btn_completada").css("background","rgb(144, 239, 80)");
    
    });
    $("#btn_completada").mouseleave(()=>{
        $("#btn_completada").css("background","rgb(227, 255, 221)");
    });


    // BOTÓN DE ELIMINAR
    $("#btn_eliminar").click(()=>{
        $(".tarea").remove();
    });
    $("#btn_eliminar").mouseenter(()=>{
        $("#btn_eliminar").css("background","rgb(254, 153, 153)");
    });
    $("#btn_eliminar").mouseleave(()=>{
        $("#btn_eliminar").css("background","rgb(255, 221, 221)");
    });
    

    // AÑADIR TAREA A LA LISTA
    const crear_tarea = ()=>{
        const tarea = $("<div class='tarea'>");
        const input = $("<p id='input_tarea'>Refactorizar</p>");
        $("#contenido").append(tarea);
        $("#contenido").append(input);
    }
   
    $("#btn_add").click(()=>{
        crear_tarea();
    });

});
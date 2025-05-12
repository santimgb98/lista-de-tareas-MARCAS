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
        $(".tarea").slideUp(150);
    });
    $("#btn_eliminar").mouseenter(()=>{
        $("#btn_eliminar").css("background","rgb(254, 153, 153)");
    });
    $("#btn_eliminar").mouseleave(()=>{
        $("#btn_eliminar").css("background","rgb(255, 221, 221)");
    });

    // BOTÓN DE DESMARCAR
    $("#btn_desmarcar").click(()=>{
        $(".tarea").css("background","");
    })
    

    // AÑADIR TAREA A LA LISTA
    const crear_tarea = ()=>{
        /*const tarea = $("<div class='tarea'>");
        $("#contenido").append(tarea);

        const texto = ("<p id='input_tarea'></p>").val("<input id='input_add'>");
        const input_completada = $("<button id='btn_completada' class='btn></button>").text('✔️');
        const input_eliminar = $("<button id='btn_eliminar' class='btn'></button>").text('❌');
        const input_desmarcar = $("<button id='btn_desmarcar' class='btn'></button>").text('➖');
        $(".tarea").append(texto,input_completada,input_eliminar,input_desmarcar)*/

        $(".tarea").clone().appendTo("#contenido");
        
    }
   
    $("#btn_add").click(()=>{
        crear_tarea();
        
    });

});
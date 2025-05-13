$(document).ready(() => {
    
    let contador = 0;
    const max_tareas = 7;

    // AÑADIR TAREA A LA LISTA
    $("#btn_add").click(() => {
        if(contador < max_tareas){
            crearTarea();
            contador++;
        } else { 
            alert("No se pueden crear más tareas");
        }
    });

    const crearTarea = () => {
        const nueva_tarea = $("#input_add").val();

        const tarea = `<div class="tarea">
                <p class="input_tarea">${nueva_tarea}</p>
                <button class="btn btn_completada">✔️</button>
                <button class="btn btn_eliminar">✖️</button>
                <button class="btn btn_desmarcar">➖</button>
            </div>`;

        $(tarea).prependTo("#contenido");
        $("#input_add").val("");

        const $nuevaTarea = $(".tarea").first();

        // Botón COMPLETADA
        $nuevaTarea.find(".btn_completada").click(function() {
            $(this).closest(".tarea").css("background", "rgb(126, 255, 79)");
            $(this).css("background", "rgb(184, 239, 147)");
        });

        // Botón ELIMINAR
        $nuevaTarea.find(".btn_eliminar").click(function() {
            const $tarea = $(this).closest(".tarea");
            $tarea.slideUp(150, function() {
                $tarea.remove();
                $(this).css("background", "rgb(254, 153, 153)");
                // Contador resta, porque al eliminar tarea le resta
                // respecto al número máximo que puede haber
                contador--;
            });
        });

        // Botón DESMARCAR
        $nuevaTarea.find(".btn_desmarcar").click(function() {
            $(this).closest(".tarea").css("background", "");
        });
    };
});
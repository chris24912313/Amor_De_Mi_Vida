/*
 * http://love.hackerzhou.me
 */

// variables
var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function() {
    var newWidth = $win.width();
    var newHeight = $win.height();
    if (newWidth != clientWidth && newHeight != clientHeight) {
        location.replace(location);
    }
});

(function($) {
	$.fn.typewriter = function() {
		this.each(function() {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			var timer = setInterval(function() {
				var current = str.substr(progress, 1);
				if (current == '<') {
					progress = str.indexOf('>', progress) + 1;
				} else {
					progress++;
				}
				$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
				if (progress >= str.length) {
					clearInterval(timer);
				}
			}, 75);
		});
		return this;
	};
})(jQuery);

function timeElapse(date) {
    // Crear un objeto de fecha a partir de la fecha proporcionada
    var startDate = new Date(date);
    
    // Obtener la fecha y hora actuales
    var current = new Date(); // Se obtiene directamente la fecha actual en la zona horaria local
    
    // Mostrar la fecha actual en formato legible
    var currentDateFormatted = current.getFullYear() + "-" + 
                               ("0" + (current.getMonth() + 1)).slice(-2) + "-" + 
                               ("0" + current.getDate()).slice(-2) + " " + 
                               ("0" + current.getHours()).slice(-2) + ":" + 
                               ("0" + current.getMinutes()).slice(-2) + ":" + 
                               ("0" + current.getSeconds()).slice(-2);

    console.log("Fecha actual: " + currentDateFormatted); // Mostrar en consola la fecha actual

    // Calcular la diferencia en segundos
    var seconds = (current - startDate) / 1000;

    // Calcular días, horas, minutos y segundos
    var days = Math.floor(seconds / (3600 * 24));
    seconds = seconds % (3600 * 24);
    
    var hours = Math.floor(seconds / 3600);
    if (hours < 10) {
        hours = "0" + hours;
    }
    
    seconds = seconds % 3600;
    var minutes = Math.floor(seconds / 60);
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    
    seconds = seconds % 60;
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    // Crear el resultado con la fecha actual
    var result = "<span class=\"digit\">" + currentDateFormatted ; 
    $("#clock").html(result); // Mostrar en el HTML
}


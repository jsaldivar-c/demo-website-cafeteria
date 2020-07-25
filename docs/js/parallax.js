$(document).ready(function() {

    $(window).scroll(function() {
        var windowWidth = $(window).width();

        if (windowWidth > 800) {
            // ScrollTop nos da la posion en altura cuando hacemos un scroll, al inicio estamos en 0.
            var scroll = $(window).scrollTop();

            $('header .textos').css({
                //transform: translate(0px, 30%)
                // 0px es el valor horizontal, no se hace nada por que solo utilizaremos el valor vertical.
                'transform': 'translate(0px,' + scroll / 2 + '%)'
            });
            // En este caso el translate es negativo para que el article vaya subiendo en lugar de bajar.
            $('.acerca-de article').css({
                'transform': 'translate(0px, -' + scroll / 5 + '%)'
            });
        }
    });
    // Regresamos el article a su posicion original en dispositivos moviles.
    $(window).resize(function() {
        var windowWidth = $(window).width();
        if (windowWidth < 800) {
            $('.acerca-de article').css({
                'transform': 'translate(0px, 0px)'
            });
        }
    });
});
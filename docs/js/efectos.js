$(document).ready(function() {

    // Efecto Menu
    // Each funciona como un For, en este caso accede a cada elemento 'a'.
    $('.menu a').each(function(index, elemento) {
        // Ocultamos los elementos 'a' colocandolos fuera del documento.
        $(this).css({
            'top': '-200px'
        });

        $(this).animate({
            top: '0'
                // El primer elemento 'a' tardara 2 segundos - (2000 + (0*400) = 2000) el segundo elemento
                // tardara (2000 + (1*400) = 2400 y asi sucesivamente.
                // El index contiene el indice del arreglo de elementos 'a'.
        }, 2000 + (index * 400));
    });

    // Efecto Header
    if ($(window).width() > 800) {
        $('header .textos').css({
            opacity: 0,
            marginTop: 0
        });

        $('header .textos').animate({
            opacity: 1,
            marginTop: '-52px'
        }, 1500);
    }

    // Scroll Elementos Menu
    // Con offset estamos calculando la posion del elemento.
    var acercaDe = $('#acerca-de').offset().top,
        menu = $('#platillos').offset().top,
        ubicacion = $('#ubicacion').offset().top,
        galeria = $('#galeria').offset().top;

    $('#btn-acerca-de').on('click', function(e) {
        // Evita que enviemos en el URL en este caso el simbolo #
        e.preventDefault();
        $('html, body').animate({
            scrollTop: acercaDe - 100
        }, 500);
    });

    $('#btn-menu').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: menu
        }, 500);
    });

    $('#btn-galeria').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: galeria
        }, 500);
    });

    $('#btn-ubicacion').on('click', function(e) {
        //     e.preventDefault();

        $('html, body').animate({

            scrollTop: ubicacion
        }, 500);
    });
});
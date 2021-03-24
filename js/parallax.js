(function(){
//Propiedades
var proParallax={
    seccion:document.querySelector('.parallax'),
    recorrido:null,
    limite:null
}
//Metodos
var metParallax={
    inicio:function(){
        window.addEventListener('scroll',metParallax.scrollParallax);
    },
    scrollParallax:function(){
        proParallax.recorrido=window.pageYOffset;
        proParallax.limite=proParallax.seccion.offsetTop +proParallax.seccion.offsetHeight;

        if(proParallax.recorrido>proParallax.seccion.offsetTop-window.outerHeight && proParallax.recorrido<=proParallax.limite){
            proParallax.seccion.style.backgroundPositionY=(proParallax.recorrido-proParallax.seccion.offsetTop)/1.5 + 'px';
        }else{
            proParallax.seccion.style.backgroundPositionY=0;
        }
    }
}

metParallax.inicio();
}())

(function(){
//Propiedades
var proScroll={
    posicion:window.pageYOffset,
    scroll_suave:document.getElementsByClassName('scroll-suave'),
    volver_arriba:document.getElementsByClassName('volver-arriba'),
    destino:null,
    seccion_distancia:null,
    intervalo:null
}
//Metodos
var metScroll={
    inicio:function(){
        for(var i=0;i<proScroll.scroll_suave.length;i++){
            proScroll.scroll_suave[i].addEventListener('click',metScroll.moverse);
        }
        
        for(var i=0;i<proScroll.volver_arriba.length;i++){
            proScroll.volver_arriba[i].addEventListener('click',metScroll.subir);
        }
    },
    moverse:function(e){
        e.preventDefault();
        clearInterval(proScroll.intervalo);
        proScroll.destino=this.getAttribute('href');
        proScroll.seccion_distancia=document.querySelector(proScroll.destino).offsetTop-94;        
     
        proScroll.posicion=window.pageYOffset;
        proScroll.intervalo=setInterval(function(){

            if(proScroll.posicion<proScroll.seccion_distancia){
                proScroll.posicion+=30;
                if(proScroll.posicion>=proScroll.seccion_distancia){
                    clearInterval(proScroll.intervalo);
                }
            }else{
                proScroll.posicion-=30;
                if(proScroll.posicion<=proScroll.seccion_distancia){
                    clearInterval(proScroll.intervalo);
                }
            }

            window.scrollTo(0,proScroll.posicion)
        }, 15);
    },
    subir:function(e){
        e.preventDefault();
        clearInterval(proScroll.intervalo);
        proScroll.posicion=window.pageYOffset;
        proScroll.intervalo=setInterval(function(){
            if(proScroll.posicion>0){
                proScroll.posicion-=30;
                if(proScroll.posicion<=0){
                    clearInterval(proScroll.intervalo);
                }
            }else{
                return;
            }
            window.scrollTo(0,proScroll.posicion)
        },15);

    }
}

metScroll.inicio();
}())

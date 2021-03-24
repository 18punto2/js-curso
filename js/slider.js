(function(){
    //Propiedades
var proSlider={
    slider:document.getElementById('slider'),
    primerSlide:null
}
//Metodos
var metSlider={
    inicio: function(){
        setInterval(metSlider.moverSlide,3000);
    },
    moverSlide:function(){
        proSlider.slider.style.transition='all 1s ease';
        proSlider.slider.style.marginLeft='-100%';

        setTimeout(function(){
            proSlider.primerSlide=proSlider.slider.firstElementChild;

            proSlider.slider.appendChild(proSlider.primerSlide);

            proSlider.slider.style.transition='unset';

            proSlider.slider.style.marginLeft=0;
        },1000);
    }
}

metSlider.inicio();
}())

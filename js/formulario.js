(function(){
//Propiedades
var proForm={
    formulario:document.formulario_contacto,
    elementos:document.formulario_contacto.elements,
    error:null,
    textoError:null
}
//Metodos
var metForm={
    inicio:function(){
        for(var i=0;i<proForm.elementos.length;i++){
            if(proForm.elementos[i].type=='text'||proForm.elementos[i].type=='email'||proForm.elementos[i].nodeName.toLowerCase()=='textarea'){
                proForm.elementos[i].addEventListener('focus',metForm.focusInput);
                proForm.elementos[i].addEventListener('blur',metForm.blurInput);
            }
        }
        proForm.formulario.addEventListener('submit',metForm.validarImputs);
    },
    focusInput:function(){
        this.parentElement.children[1].className='label active'; 
    },
    blurInput:function(){
        if(this.value==''){
            this.parentElement.children[1].className='label'; 
        }        
    },
    validarImputs:function(e){
        for(var i=0;i<proForm.elementos.length-1;i++){
            if(proForm.elementos[i].value==''){
                e.preventDefault();

                if(proForm.elementos[i].parentElement.children.length<3){
                    proForm.error=document.createElement('p');
                    proForm.textoError=document.createTextNode('Debe ingresar el campo con su '+proForm.elementos[i].name);
                    proForm.error.appendChild(proForm.textoError);
                    proForm.error.className='error';
    
                    proForm.elementos[i].parentElement.appendChild(proForm.error);
                }

            }else{
                if(proForm.elementos[i].parentElement.children.length>=3){
                    proForm.error=proForm.elementos[i].parentElement.getElementsByTagName('p')[0];
                    proForm.elementos[i].parentElement.removeChild(proForm.error);
                }
            }
        }
    }
}

metForm.inicio();
}())

let formulario:any = document.getElementById("formulario");
let mensaje:any = document.getElementById("mess");
let input_rt = document.querySelectorAll("#rut");
let input_nm = document.querySelectorAll("#nombre");
let input_ap = document.querySelectorAll("#apellidos");
let input_tl = document.querySelectorAll("#telf");
let input_ml = document.querySelectorAll("#mail");
let input_sl = document.querySelectorAll("#mail");

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, 
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^[Z0-9]/ ,
    rut: /^[Z0-9\-]/
}

let campos={
    nombre: false,
    apellidos: false,
    rut: false,
    email: false,
    numero: false
}

function valRUT (e:any){
    if(expresiones.rut.test(e.target.value)){
        switch(e.target.value.length ){
            case 10:
                if (e.target.value[8] == "-") {
                    campos["rut"]=true;
                }
                else {
                    campos["rut"]=false;
                }
                break;
            case 9:
                if (e.target.value[7] == "-") {
                    campos["rut"]=true;
                }
                else {
                    campos["rut"]=false;
                }
            break;
            default:     
                campos["rut"]=false;
            break;
        }
    }
    else{
        campos["nombre"]=false;
    }
}
input_rt.forEach((input) =>{
    input.addEventListener("blur",valRUT);
})

function valNM (e:any){
    if(expresiones.nombre.test(e.target.value)){
        campos["nombre"]=true;
    }
    else{
        campos["nombre"]=false;
    }
}
input_nm.forEach((input) =>{
    input.addEventListener("blur",valNM);
})

function valAP (e:any){
    if(expresiones.nombre.test(e.target.value)){
        campos["apellidos"]=true;
    }
    else{
        campos["apellidos"]=false;
    }
}
input_ap.forEach((input) =>{
    input.addEventListener("blur",valAP);
})

function valTL (e:any){
    if(expresiones.telefono.test(e.target.value)  && e.target.value.length==9){
        campos["numero"]=true;
    }
    else{
        campos["numero"]=false;
    }
}
input_tl.forEach((input) =>{
    input.addEventListener("blur",valTL);
})

function valML (e:any){
    if(expresiones.correo.test(e.target.value)){
        campos["email"]=true;
    }
    else{
        campos["email"]=false;
    }
}

input_ml.forEach((input) =>{
    input.addEventListener("blur",valML);
})

/*function limpiarDatos(e:any) {
    e.target.reset();
}*/

formulario.addEventListener("button",limpiarDatos);

formulario.addEventListener("submit", (e:any)=> {
    if(campos["nombre"]==false){
        alert("Ingrese nombre válido");
    }
    if(campos["apellidos"]==false){
        alert("Ingrese apellidos válidos");
    }
    if(campos["rut"]==false){
        alert("Ingrese rut válido (sin puntos y con guión)");
    }
    if(campos["email"]==false){
        alert("Ingrese email válido");
    }
    if(campos["numero"]==false){
        alert("Ingrese numero telefónico válido");
    }
    if(campos["nombre"] && campos["apellidos"] && campos["rut"] && campos["email"] && campos["numero"]){
        formulario.style.display="none";
        mensaje.style.display="block";
        mensaje.innerHTML="hemos recibido sus datos, pronto nos estaremos comunicando con usted";
        mensaje.style.color="#ff0000";
        e.preventDefault();
    }
    e.preventDefault();
});

function limpiarDatos() {
    formulario.reset();
};










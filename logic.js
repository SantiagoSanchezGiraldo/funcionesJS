//Valores Constantes
const Pi = 3.1416;
const gravedad = 9.8;

//Variables 
let num1 = 4;
let num2 = 70.2; 
let usuario = "Santiago";
let clave = 1234;
let persona = " kg Adulto";

//Funciones 
//Funcion de 0 parametros
const UserInfo = () => {
    console.log("Usuario: " + usuario);
    console.log("Contraseña: " + clave);
    console.log("Longitud del usuario "+usuario.length+" caracteres");
};
UserInfo();


//Funcion y una constante de 1 parametro 
const areaCirculo = (radio) => {
    return (radio**2)*Pi;
};
console.log("Area: " + areaCirculo(num1));


//Funcion de mas de 2 parametros con metodo math
let peso=(aceleracion,masa,tipo)=>{
    return Math.floor(aceleracion*masa) + tipo
};
console.log("Peso: " + peso(gravedad,num2,persona));

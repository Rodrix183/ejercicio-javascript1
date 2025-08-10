//Funcion del boton de calcular
document.getElementById("btnCalcular").addEventListener("click", () => {
const base = parseFloat(document.getElementById("base").value);
const altura = parseFloat(document.getElementById("altura").value);
const areaInput = document.getElementById("area");


//Numeros validos
if(isNaN(base) || isNaN(altura)){
Swal.fire("Error", "Ingrese valores numericos validos", "error");
return;
}

//Numeros positivos
if(base <= 0 || altura <= 0){
Swal.fire("Error", "Valores deben ser positivos", "error");
return;

}

//Calcular el area
const area = base * altura;
areaInput.value = area;
Swal.fire("Exito","Area calculada exitosamente","success");

});


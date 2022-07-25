
function promediar(total, cantidad){
    let resultado = acumulador / 7
    return resultado
}

let sumaGastos = 0;
let acumulador = 0;
let promedio = 0;

for (i = 0; i <7; i++){
    sumaGastos =parseInt(prompt("Ingresa gasto total por día comenzando de Lun al Dom "))
    acumulador = acumulador + sumaGastos;
    
    console.log("acumulador parcial " + acumulador); 

}
promedio = promediar(acumulador / 7)
alert("El promedio de gasto por día es $" + promedio)

if(promedio >= 1000){
    alert(" Superaste tu límite de gastos diarios")
}else if(promedio >= 800){
    alert(" CUIDADO estas llegando al tu límite para gastos diarios")
}else if(promedio >= 500){
    alert(" CUIDADO superaste la mitad de tu límite para gastos diarios")
}else{
    alert("Muy bien, estas controlando tus gastos!!!")
}

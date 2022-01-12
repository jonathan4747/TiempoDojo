function eliminarCokkie(click){
    let eliminar = click.closest('.spam');
    eliminar.remove()
}

function cambioCiudad(elemento){
    let ciudad = elemento.innerText
    alert("Cargando informe metereologico "+ ciudad)
}

function temperatura(elemento){
    //console.log(elemento);
    let temp1 = document.querySelector('.tmp1');
    let temp2 = document.querySelector('.tmp2');
    let temp3 = document.querySelector('.tmp3');
    let temp4 = document.querySelector('.tmp4');
    let temp5 = document.querySelector('.tmp5');
    let temp6 = document.querySelector('.tmp6');
    let temp7 = document.querySelector('.tmp7');
    let temp8 = document.querySelector('.tmp8');

    num1=Number(temp1.innerText);
    num2=Number(temp2.innerText);
    num3=Number(temp3.innerText);
    num4=Number(temp4.innerText);
    num5=Number(temp5.innerText);
    num6=Number(temp6.innerText);
    num7=Number(temp7.innerText);
    num8=Number(temp8.innerText);
    if(elemento.innerText == "°F"){
        let nuv1 = Math.trunc((9/5)*num1+32);
        let nuv2 = Math.trunc((9/5)*num2+32);
        let nuv3 = Math.trunc((9/5)*num3+32);
        let nuv4 = Math.trunc((9/5)*num4+32);
        let nuv5 = Math.trunc((9/5)*num5+32);
        let nuv6 = Math.trunc((9/5)*num6+32);
        let nuv7 = Math.trunc((9/5)*num7+32);
        let nuv8 = Math.trunc((9/5)*num8+32);
        temp1.innerText = nuv1;
        temp2.innerText = nuv2;
        temp3.innerText = nuv3;
        temp4.innerText = nuv4;
        temp5.innerText = nuv5;
        temp6.innerText = nuv6;
        temp7.innerText = nuv7;
        temp8.innerText = nuv8;
    }

}
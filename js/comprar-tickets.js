const valorTicket= 200;
let descuentoEstudiante=80;
let descuentoTrainee=50;
let descuentoJunior=15;

let nombre          = document.getElementById("nombre");
let apellido        = document.getElementById("apellido");
let mail            = document.getElementById("mail");
let cantidadTickets = document.getElementById("cantidad");
let categoria       = document.getElementById("categoria");

// const quitarClaseError =()=> {
//     let listaNodos = document.querySelectorAll(".form-control, .form-select");
//     for(let1=0; i < listaNodos.length; i++){
//         listaNodos[i].classList.remove("is-invalid");
//     }
// }

const totalAPagar =()=>{
    // quitarClaseError();
    // if (nombre.value ===""){
    //     alert("Por favor, escribí tu nombre.");
    //     nombre.classList.add("is-invalid");
    //     nombre.focus();
    //     return;        
    // }
    let totalValorTickets=(cantidad.value) * valorTicket;
    switch (categoria.value){
        case "0":
            totalValorTickets=totalValorTickets;
            break;
        case "1":
            totalValorTickets= totalValorTickets - (descuentoEstudiante/100*totalValorTickets);
            break;
        case "2":
            totalValorTickets=totalValorTickets - (descuentoTrainee/100*totalValorTickets);
            break;
        case "3":
            totalValorTickets=totalValorTickets - (descuentoJunior/100*totalValorTickets)
            break;
    } 
    totalPago.innerHTML = totalValorTickets;
    btnResumen.addEventListener("click", totalAPagar);
   
}
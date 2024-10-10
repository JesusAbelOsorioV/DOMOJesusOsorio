class data{
    constructor(name, email, message){
        this.name = name,
        this.email = email,
        this. message = message
    }

    
}

let dataConsult = []
function consultPerson(array) {
    
    let namePerson = document.getElementById("namePerson")
    let emailPerson = document.getElementById("emailPerson")
    let messagePerson = document.getElementById("messagePerson")
    if (namePerson.value == 0 || emailPerson == 0 || messagePerson == 0){
        Swal.fire({
            title: `Todos los campos son requeridos`,
            icon: "warning",
            confirmButtonColor: "#022b41",
            confirmButtonText: "Complete los datos por favor",
      
          })
    } else {
       const newConsult = new data(namePerson.value, emailPerson.value, messagePerson.value,)
    dataConsult.push(newConsult)
    console.log(newConsult)
    namePerson.value = ""
    emailPerson.value = ""
    messagePerson.value = ""
    //cartel para que el usuario sepa que se envio la consulta
    Toastify(
      {
        text: `Hola ${newConsult.name} se ha enviado su consulta`,
        duration: 2500,
        gravity: "top",//top o buttom,
        position: "center",//left, right o center
        style: {
          color: "white",
          background: "#022b41"
        }
      }
    ).showToast() 
    }
    
  
}
let sendData = document.getElementById("sendBtn")
sendData.addEventListener("click", function (event) {
    event.preventDefault()

    consultPerson(dataConsult)
    console.log(dataConsult)
})



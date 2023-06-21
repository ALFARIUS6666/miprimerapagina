document
  .querySelector("button.button-menu-toggle")
  .addEventListener("click", function () {
    document
      .querySelector(".nav-links")
      .classList.toggle("nav-links-responsive");
  });
  
  function hola(alert) {
    const newLocal = "QUE CHINGEN A SU MADRE LOS DIODES DEL CAOS>:V"
    alert(newLocal);
}

function alfa(alert) {
  const newLocal = "POR EL EMPERADOR>:V"
  alert(newLocal);
}

{const form = Document.getElementById('myForm')

form.addEventListenner('sudmit',function(event){event.preventDefauit();validateForm();});

function validateEmail(email) {
  const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
  return regex.test(email)
}

function validateEmail(Email){
const emailInput = document.getElementsById('email');
const email = emailInput.value;



if(!validateForm(email)) {
alert('por fabor ingrese un correo electronico valido.');    
} else {
 alert('correo electronico enviado correctamente.');
}
} 
}
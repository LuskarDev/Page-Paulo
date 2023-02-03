const form = document.querySelector(".formE")

form.addEventListener("submit", (e) => {
    e.preventDefault();
    CheckInput();
})

function CheckInput() {
    let Name = document.querySelector("#name");
    let nameValue = Name.value.trim();
    let Email = document.querySelector("#email");
    let EmailValue = Email.value.trim();
    let Adress = document.querySelector("#adress");
    let AdressValue = Adress.value.trim();
    let cep = document.querySelector("#cep");
    let cepValue = cep.value.trim();
    let Phone = document.querySelector("#phone");
    let PhoneValue = Phone.value.trim();
    let assunto = document.querySelector("#assunto");
    let AssuntoValue = assunto.value.trim();

    if(nameValue === "") {
        ErrorValidation(Name, "Preencha o Campo")
    } else {
        Validation(Name)
    }

    if(EmailValue === "") {
        ErrorValidation(Email, "Preencha o Campo")
    } else {
        Validation(Email)
    }

    if(PhoneValue === "") {
        ErrorValidation(Phone, "Preencha o Campo")
    } else {
        Validation(Phone)
    }
    
    if(AdressValue === "") {
        ErrorValidation(Adress, "Preencha o Campo")
    } else {
        Validation(Adress)
    }

    if(cepValue === "") {
        ErrorValidation(cep, "Preencha o Campo")
    } else {
        Validation(cep)
    }

    if(AssuntoValue === "") {
        ErrorValidation(assunto, "Preencha o Campo")
    } else {
        Validation(assunto)
    }
}

function ErrorValidation(input,message) {
    const control = input.parentElement;
    const formput = control.parentElement;
    const small = formput.querySelector('small');

    small.innerText = message;
    small.style.opacity = 1;
    control.className = "border-put error";
}


function Validation(input) {
    const control = input.parentElement;
    const formput = control.parentElement;
    const small = formput.querySelector('small');

    small.style.opacity = 0;
    control.className = "border-put sucess";
}

function ShowMenu(){
    let menu = document.querySelector("header .menu-mobile");
    if(menu.classList.contains("show")){
        menu.classList.remove("show")
    }else {
        menu.classList.add("show");
    }
}

function InteractionMenu(){
    let options = document.querySelectorAll("header nav .menu-mobile ul li");
    let menu = document.querySelector("header .menu-mobile");
   options.forEach( e => {
    e.addEventListener("click", e => {
        menu.classList.remove("show");
        let li = e.target.parentElement;
        let link = li.querySelector("a");
        console.log(link)
        let elements = document.getElementsByClassName('active');
        for(var i = 0; i < elements.length; i++){
            elements[i].classList.remove("active");
        }
            li.classList.add("active");
    })
   })
}

InteractionMenu()
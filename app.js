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
    let iconMenu = document.querySelectorAll(".menu i");
    if(menu.classList.contains("show")){
        menu.classList.remove("show");
        iconMenu[1].classList.remove('show');
        iconMenu[0].style.opacity = 1;
    }else {
        menu.classList.add("show");
        iconMenu[0].style.opacity = 0;
        iconMenu[1].classList.add('show');
    }
}

window.addEventListener("load", () => {
    let loading = document.querySelector(".loader-bx");

    setInterval(() => {
        loading.style.display = "none"
    }, 5700)
})

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

ShowComent(Cometary) 

function ShowComent(data) {
    let wrapper = document.querySelector(".swiper-wrapper");    

    data.forEach(e => { 

        let li = ` <li class="swiper-slide">
        <div class="bxt">
            <div class="tpx">
                <div class="img">
                    <figure>
                        <img src="${e.img}" alt="">
                    </figure>
                </div>
                <div class="ifn">
                    <div class="name">
                        <h2>${e.nome}</h2>
                    </div>
                    <div class="city">
                        <p>${e.city}</p>
                    </div>
                </div>
            </div>
            <div class="descri">
                <p>${e.coment}</p>
            </div>
            <div class="rks">
                <ul class="stars">
                    <li><i class="fa-solid fa-star"></i></li>
                    <li><i class="fa-solid fa-star"></i></li>
                    <li><i class="fa-solid fa-star"></i></li>
                    <li><i class="fa-solid fa-star"></i></li>
                    <li><i class="fa-solid fa-star"></i></li>
                </ul>
            </div>
        </div>
    </li>`

    wrapper.innerHTML += li;
  
    })
}

const ShowServices = (e) => {
    let ul = document.querySelector(".info-jb ul");

    e.forEach(service => {
        let li = `
            <li>
                <div class="title-srv">
                    <figure>
                        <img src="${service.img}" alt="${service.title}">
                    </figure>
                    <h3>${service.title}</h3>
                </div>
                <div class="descri">
                    <p>${service.desc}</p>
                </div>
            </li>
        `

        ul.innerHTML += li;
    })


}

ShowServices(service);

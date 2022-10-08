let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");


menu.onclick = () =>{
    navbar.classList.toggle("navbar-y");
    menu.classList.toggle("move");
}

window.onscroll = () =>{
    navbar.classList.remove("navbar-y");
    menu.classList.remove("move");
}

const text=document.querySelector('.sec-text');
const text1=document.querySelector('.first-text');

const textLoad = () =>{ 
    
    setTimeout(()=>{
        text.textContent="a Web Developer";
    },0 );

    setTimeout(()=>{
        text.textContent="an Undergraduate";
    },4000 );

    setTimeout(()=>{
        text.textContent="an AIESECer";
    },8000 );
    
}

textLoad();
setInterval(textLoad,16000);

function validate()
{
    let name=document.querySelector(".name");
    let email=document.querySelector(".email");
    let msg=document.querySelector(".message");
    let sendBtn=document.querySelector(".send-btn");

    sendBtn.addEventListener('click',(e)=>{
        e.preventDefault();
        if(name.value =="" || email.value=="" || msg.value=="")
        {
            emptyerror();
        }
        else
        {
            sendmail(name.value,email.value,msg.value);
            success();
        }
    })
}

validate();

function sendmail(name,email,msg)
{
    emailjs.send("service_jvvmy17","template_5xzg56h",{
        from_name: email,
        to_name: name,
        message: msg,
        });

}

function emptyerror()
{
    swal({
        title: "Oh no!",
        text: "Fields can't be empty!",
        icon: "error",
      });
}

function success()
{
    swal({
        title: "Email sent successfully",
        text: "I will reply with 24 hours",
        icon: "success",
      });
}

let header=document.querySelector('header');

window.addEventListener("scroll",()=>{
    header.classList.toggle("header-active",window.scrollY>0);
});

let scrollTop=document.querySelector('.scroll-top');

window.addEventListener("scroll",()=>{
    scrollTop.classList.toggle("scroll-active",window.scrollY>=400);
});
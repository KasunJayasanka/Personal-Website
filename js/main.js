// Navigation Bar
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

let header=document.querySelector('header');

window.addEventListener("scroll",()=>{
    header.classList.toggle("header-active",window.scrollY>0);
});

let scrollTop=document.querySelector('.scroll-top');

window.addEventListener("scroll",()=>{
    scrollTop.classList.toggle("scroll-active",window.scrollY>=400);
});

// Text Animation

const text=document.querySelector('.sec-text');
const text1=document.querySelector('.first-text');

const textLoad = () =>{ 
    
    setTimeout(()=>{
        text.textContent="an Undergraduate";
    },0 );

    setTimeout(()=>{
        text.textContent="a Web Developer";
    },4000 );

    setTimeout(()=>{
        text.textContent="an AIESECer";
    },8000 );
    
}

textLoad();
setInterval(textLoad,16000);

//Contact Form

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
        text: "I will reply within 24 hours",
        icon: "success",
      });
}

// Timeline

"use strict";

function qs(selector, all = false) {
  return all ? document.querySelectorAll(selector) : document.querySelector(selector);
}

const sections = qs('.sec', true);
const timeline = qs('.timeline');
const line = qs('.line');
line.style.bottom = `calc(100% - 20px)`;
let prevScrollY = window.scrollY;
let up, down;
let full = false;
let set = 0;
const targetY = window.innerHeight * .8;

function scrollHandler(e) {
  const {
    scrollY
  } = window;
  up = scrollY < prevScrollY;
  down = !up;
  const timelineRect = timeline.getBoundingClientRect();
  const lineRect = line.getBoundingClientRect(); // const lineHeight = lineRect.bottom - lineRect.top;

  const dist = targetY - timelineRect.top;
  console.log(dist);

  if (down && !full) {
    set = Math.max(set, dist);
    line.style.bottom = `calc(100% - ${set}px)`;
  }

  if (dist > timeline.offsetHeight + 50 && !full) {
    full = true;
    line.style.bottom = `-50px`;
  }

  sections.forEach(item => {
    // console.log(item);
    const rect = item.getBoundingClientRect(); //     console.log(rect);

    if (rect.top + item.offsetHeight / 5 < targetY) {
      item.classList.add('show-me');
    }
  }); // console.log(up, down);

  prevScrollY = window.scrollY;
}

scrollHandler();
line.style.display = 'block';
window.addEventListener('scroll', scrollHandler);
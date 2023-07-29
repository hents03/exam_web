let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querrySelector('.navbar');
menuIcon.onclick =()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active')
}


let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll= () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id =sec.getAttribute('id');

        if(top >= offset && top <= offset +height){
            navlinks.foreach(links => {
                links.classlist.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    }
        
    )
}
const typed = new typed('.multiple-text',{
    strings:['back-end developer','fullstack','Devops'],
    typeSpeed:100,
    backspeed:100,
    backDelay:1000,
    loop:true
});
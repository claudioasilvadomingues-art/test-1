const nav = document.querySelector("nav");


window.addEventListener("scroll", () =>{
    
    if(window.scrollY > 200){
        nav.style.top = 0 ;
    } else {
        nav.style.top ="-50px";
    }
});

// alert("bonjour")


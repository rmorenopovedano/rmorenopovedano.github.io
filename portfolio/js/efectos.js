/**
 * Created by Raul on 04/02/2016.
 */
window.addEventListener("load",function(){
    var flechaWork=document.getElementById('flecha_work');
    var work=document.getElementById("work2");
    var mywork=document.getElementById('mywork');
    var flechaAbout=document.getElementById('flecha_about');
    var about=document.getElementById('about2');
    var aboutme=document.getElementById('aboutme');
    flechaWork.addEventListener("click",function(){
        if(work.style.left=="50%"){
            work.style.left="-80%";
            work.style.transition = "all 1.1s";
            mywork.style.transition = "all 1.1s";
            mywork.style.left="50%";
            // Code for Chrome, Safari, Opera
            flechaWork.style.WebkitTransform = "rotate(0deg)";
            // Code for IE9
            flechaWork.style.msTransform = "rotate(0deg)";
            // Standard syntax
            flechaWork.style.transform = "rotate(0deg)";
        }
        else{
            work.style.left="50%";
            work.style.transition = "all 1.1s";
            mywork.style.transition = "all 1.1s";
            mywork.style.left="-80%";
            // Code for Chrome, Safari, Opera
            flechaWork.style.WebkitTransform = "rotate(180deg)";
            // Code for IE9
            flechaWork.style.msTransform = "rotate(180deg)";
            // Standard syntax
            flechaWork.style.transform = "rotate(180deg)";
        }
    });
    flechaAbout.addEventListener("click", function(){
        flechaAbout.style.WebkitTransform  = "rotate(180deg)";
        if(about.style.left=="50%"){
            about.style.left="180%";
            about.style.transition="all 1.1s";
            aboutme.style.transition = "all 1.1s";
            aboutme.style.left="50%";
            // Code for Chrome, Safari, Opera
            flechaAbout.style.WebkitTransform = "rotate(0deg)";
            // Code for IE9
            flechaAbout.style.msTransform = "rotate(0deg)";
            // Standard syntax
            flechaAbout.style.transform = "rotate(0deg)";
        }else{
            about.style.left="50%";
            about.style.transition = "all 1.1s";
            aboutme.style.transition = "all 1.1s";
            aboutme.style.left="180%";
            // Code for Chrome, Safari, Opera
            flechaAbout.style.WebkitTransform = "rotate(180deg)";
            // Code for IE9
            flechaAbout.style.msTransform = "rotate(180deg)";
            // Standard syntax
            flechaAbout.style.transform = "rotate(180deg)";
        }
    })
    if(window.screen.width>800){
        var casas=document.getElementById('casas');
        var basket=document.getElementById('basket');
        var portal=document.getElementById('portal');
        casas.addEventListener('mouseover',function(){
            var foto_casas=document.getElementById('foto_casas');
            foto_casas.style.display="block";
            foto_casas.style.position="absolute";
            foto_casas.style.top="50px";
            foto_casas.style.left="50%";
            foto_casas.style.marginLeft="-150px";
        })
        casas.addEventListener('mouseout', function(){
            foto_casas.style.display="none";
        })
        basket.addEventListener('mouseover', function(){
            var foto_basket=document.getElementById('foto_basket');
            foto_basket.style.display="block";
            foto_basket.style.position="absolute";
            foto_basket.style.top="30px";
            foto_basket.style.left="50%";
            foto_basket.style.marginLeft="-150px";
        })
        basket.addEventListener('mouseout', function(){
            foto_basket.style.display="none";
        })
        portal.addEventListener('mouseover', function(){
            var foto_basket=document.getElementById('foto_portal');
            foto_portal.style.display="block";
            foto_portal.style.position="absolute";
            foto_portal.style.top="40px";
            foto_portal.style.left="50%";
            foto_portal.style.marginLeft="-150px";
        })
        portal.addEventListener('mouseout', function(){
            foto_portal.style.display="none";
        })
        casas.addEventListener('click', function(){
            // Code for Chrome, Safari, Opera
            foto_casas.style.WebkitTransform = "scale(0.8)";
            // Code for IE9
            foto_casas.style.msTransform = "scale(0.8)";
            // Standard syntax
            foto_casas.style.transform = "scale(0.8)";
        })
        basket.addEventListener('click', function(){
            // Code for Chrome, Safari, Opera
            foto_basket.style.WebkitTransform = "scale(0.8)";
            // Code for IE9
            foto_basket.style.msTransform = "scale(0.8)";
            // Standard syntax
            foto_basket.style.transform = "scale(0.8)";
        })
        portal.addEventListener('click', function(){
            // Code for Chrome, Safari, Opera
            foto_portal.style.WebkitTransform = "scale(0.8)";
            // Code for IE9
            foto_portal.style.msTransform = "scale(0.8)";
            // Standard syntax
            foto_portal.style.transform = "scale(0.8)";
        })
        // Code for Chrome, Safari, Opera
        flechaWork.style.WebkitTransform = "rotate(180deg)";
        // Code for IE9
        flechaWork.style.msTransform = "rotate(180deg)";
        // Standard syntax
        flechaWork.style.transform = "rotate(180deg)";
    }
    var correo=document.getElementById('correo');
    correo.addEventListener('click', function(){
        location.href="mailto:rmorenopovedano@gmail.com";
    })

});




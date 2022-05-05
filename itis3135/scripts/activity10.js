
    img1 = document.getElementById('click1');
    img2 = document.getElementById('click2');
    img3 = document.getElementById('click3');
    img4 = document.getElementById('click4');
    img5 = document.getElementById('click5');
    img6 = document.getElementById('click6');

  

   function reload(){
    location.reload();
   }


    img1.addEventListener('click', function(e){ 
        e.preventDefault();
        document.getElementById("img1").style.marginLeft = "0";
        document.getElementById("img1").style.animationName = "fadeInOpacity";
        document.getElementById("img1").style.opacity = "1";
        document.getElementById("img1").style.animationIterationCount = "1";
        document.getElementById("img1").style.animationTimingFunction = "ease-in";
        document.getElementById("img1").style.animationDuration = "2s";

        
    });

    img2.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById("img1").style.marginLeft = "-100%";
        document.getElementById("img2").style.animationName = "fadeInOpacity";
        document.getElementById("img2").style.opacity = "1";
        document.getElementById("img2").style.animationTimingFunction = "ease-in";
        document.getElementById("img3").style.animationIterationCount = "1";
        document.getElementById("img2").style.animationDuration = "2s";
        document.getElementById("img3").style.transition = "all 500ms linear";
       
        
        

    });

    img3.addEventListener('click', function(e){
        e.preventDefault();
        document.getElementById("img1").style.marginLeft = "-200%";
        document.getElementById("img3").style.animationName = "fadeInOpacity";
        document.getElementById("img3").style.opacity = "1";
        document.getElementById("img3").style.animationIterationCount = "1";
        document.getElementById("img3").style.animationTimingFunction = "ease-in";
        document.getElementById("img3").style.animationDuration = "2s";
       
       
    

    });

    img4.addEventListener('click',  function(e){
        e.preventDefault();
        document.getElementById("img1").style.marginLeft = "-300%";
        document.getElementById("img4").style.animationName = "fadeInOpacity";
        document.getElementById("img4").style.opacity = "1";
        document.getElementById("img4").style.animationIterationCount = "1";
        document.getElementById("img4").style.animationTimingFunction = "ease-in";
        document.getElementById("img4").style.animationDuration = "2s";
        
        

        
    });

    img5.addEventListener('click', function(e){
        e.preventDefault();
        document.getElementById("img1").style.marginLeft = "-400%";
        document.getElementById("img5").style.animationName = "fadeInOpacity";
        document.getElementById("img5").style.opacity = "1";
        document.getElementById("img5").style.animationIterationCount = "1";
        document.getElementById("img5").style.animationTimingFunction = "ease-in";
        document.getElementById("img5").style.animationDuration = "2s";
       
        
    });

    img6.addEventListener('click', function(e){
        e.preventDefault();
        document.getElementById("img1").style.marginLeft = "-500%";
        document.getElementById("img6").style.animationName = "fadeInOpacity";
        document.getElementById("img6").style.opacity = "1";
        document.getElementById("img6").style.animationIterationCount = "1";
        document.getElementById("img6").style.animationTimingFunction = "ease-in";
        document.getElementById("img6").style.animationDuration = "2s";
        
        
    });




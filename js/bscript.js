    function mybuttons(x,y){
        let checker = document.querySelector("." + y).classList.toggle("slidein");
        if(checker){
           document.getElementById(x).textContent = "close info";
        }else{
            document.getElementById(x).textContent = "View more";
        }
    }
var x = 0; 

    function STINKY(){
        if(x==0){
            document.getElementById("STINKY_POOP").innerHTML="STINKY";
            x++;
        }
        else if(x==1){
            document.getElementById("STINKY_POOP").innerHTML="POOP";
            x--;
        }
    }

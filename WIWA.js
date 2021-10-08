var x = 0; 

    function STINKY(){
        if(x==0){
            document.getElementById("FUNNY-HAHA").innerHTML="STINKY";
            x++;

        var image = document.createElement('img');
            image.src  = 'APA.png';
            document.getElementById('BILD').appendChild(image);
    
        }
        else if(x==1){
            document.getElementById("FUNNY-HAHA").innerHTML="POOP";
            x--;

            var image = document.createElement('img');
            image.src  = 'APA2.png';
            document.getElementById('BILD2').appendChild(image);

        }

        
    }

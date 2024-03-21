function moriskan(){
    
    let age = document.getElementById('age').value;
    let vip = document.getElementById('vip').checked;
    let resultat = document.getElementById('resultat');
    let subresultat = document.getElementById('subresultat');
    
//4 timmar och ett prövat tålamod senare... Checkbox be difficult AF


 if (vip == true && age >= 18){  //Är du både of age och en vip så har du tur
    resultat.innerHTML = "Enjoy your stay, dear VIP.";
    subresultat.innerHTML = "Your table is being prepared, you rock!"
    /*console.log('Drinks are free')*/
}
    else if (age >= 18) {
        resultat.innerHTML = "Welcome";
    subresultat.innerHTML = "Your ticket has been sent to your email adress"
        /*
        console.log("Välkommen")*/;}

         else if (vip == true){
            resultat.innerHTML = "Enjoy";
    subresultat.innerHTML = "Our vip-teen special is now active"
        /*
            console.log("Om någon frågar är du 18");*/
        }

    
        else {
            resultat.innerHTML = "Oh no! Your'e not of age :(";


                

            
            /*
            console.log("Ledsen"); 
        */
        }
    }

    //Om du är 18 är du välommen in. Om du är under 18 men VIP, är du välkommen in. 
    /*
    else {
        console.log("nejdu");
    } 
    */
   
   

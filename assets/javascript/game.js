$(document).ready(function(){
   
    var random = 0;
    var num1 = 0;
    var num2 = 0;
    var num3 = 0;
    var num4 = 0;
    var userTotal = 0 ;
    var wins = 0 ;
    var losses = 0 ;
     function start() {
     num1 = Math.floor((Math.random() * 12) + 1);
     num2 = Math.floor((Math.random() * 12) + 1);
     num3 = Math.floor((Math.random() * 12) + 1);
     num4 = Math.floor((Math.random() * 12) + 1);

     random = Math.floor((Math.random() * 108) + 17)
     $("#randomNumber").text(random);
     userTotal = 0;
     $("#finalTotal").text( userTotal);
     $("#numberWins").text(wins);
     $("#numberLosses").text(losses);

     //console.log(num1);
	// console.log(num2);
	 //console.log(num3);
	 //console.log(num4);
	// console.log(randomNum);

 }
 start();

//resets the game
    function reset(){
        random = Math.floor((Math.random() * 108) + 17)
        $("#randomNumber").text(random);
        
        num1 = Math.floor((Math.random() * 12) + 1);
        num2 = Math.floor((Math.random() * 12) + 1);
        num3 = Math.floor((Math.random() * 12) + 1);
        num4 = Math.floor((Math.random() * 12) + 1);
        userTotal = 0;
        $("#finalTotal").text( userTotal);
       
    }
//adds the wins to the userTotal
function yes(){
    consol.log("You Win!");
    wins ++ ;
    $("#numberWins").text(wins);
    reset();
}
//addes the losses to the userTotal
function losser(){
    alert("You Lose!");
    losses ++ ;
    $("#numberLosses").text(losses);
    reset();
}
//sets up click for jewels

$("#one").click( function(){
    userTotal = userTotal + num1 ;
    $("#finalTotal").text(userTotal);
    if ( userTotal == random){
        yes();
    }
        else if(userTotal>random){
            losser();
        }

        });
$("#two").click( function(){
    userTotal = userTotal + num2 ;
      $("#finalTotal").text( userTotal);
    if ( userTotal == random){
         yes();
    }
     else if(userTotal>random){
        losser();
    }
        
    });
$("#three").click( function(){
     userTotal = userTotal + num3 ;
   
    $("#finalTotal").text(userTotal);
    if ( userTotal == random){
        yes();
     }
     else if(userTotal>random){
          losser();
    }
                
    });
     $("#four").click( function(){
         userTotal = userTotal + num4 ;
     
        $("#finalTotal").text( userTotal);
         if ( userTotal == random){
           yes();
         }
          else if(userTotal>random){
              losser();
        }
                        
    }) ;            
});

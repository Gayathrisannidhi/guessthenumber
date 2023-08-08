var randomNumber=Math.floor(Math.random()*100)+1;
var attempts=0;

document.getElementById('btn').addEventListener('click',function(){
    var guess=parseInt(document.getElementById('guessInput').value);
    attempts++;
    if(guess===randomNumber){
         displayMessage("Ahaa Bale Guess Chesav Anna " + attempts + " Attempts lo 🥳...Party Ivvadam Marchipoku");
         document.getElementById('btn').disabled=true;
    }
    else if(guess<randomNumber){
        displayMessage("Number Thakkuvayindhi Pushpa!  Penchu Penchu ⬆️.");
    }
    else{
        displayMessage("Ekkuva Isthunnav Anna..Koncham Thagginchee 🙁")
    }

});
function displayMessage(Message){
    document.getElementById('msg').textContent=Message;
}
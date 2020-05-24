//CALCULATE AGE IN DAYS

//Click ME button function
function enterBirtYear()
{
    let birthYear = prompt("Enter your birth Year");
    let ageInDays = (2020 - birthYear) * 365;

    //DOM
    let textAnswer = document.createTextNode('You are' + ' '+ageInDays+' days old');
   
    //Creating an h1 tag    
    let h1 = document.createElement('h1');

    //setting an ID to it
    h1.setAttribute('id','ageInDays');

    //Adding the answer to the h1 tag
    h1.appendChild(textAnswer);

    //placing it on the below div
    document.getElementById('flex-box-result').appendChild(h1);
    
}

//Reset button function
function reset()
{
    document.getElementById('ageInDays').remove();
}

/*****************************CAT GENERATOR*************************************************/

//CAT GENERATOR
function generatCat(){
    let image = document.createElement('img');
    let div = document.getElementById("flex-cat-gen");
    image.src = "http://placekitten.com/g/200/300";
    div.appendChild(image);
}

/*****************************ROCK PAPER SICOSSORS*************************************************/

function rpsGame(yourChoice){
    console.log(yourChoice)

   var humanChoice, botChoice;
   humanChoice = yourChoice.id;
   
   botChoice= numberToChoice(randomNum());
   console.log('computerChoice:', botChoice);

   //Deciding the result
   result = decideWinner(humanChoice, botChoice); //[0 1] - human lost, bot won  [0.5 0.5] = draw
   console.log(result); 

   //Message on the OP
   message = finalMessage(result); //{'message':'You Won!', 'color': 'green'}
   console.log(message);

   //what has to be displayed finally
   rpsFrontEnd(yourChoice.id,botChoice,message);

}

//Generate a random number
function randomNum(){
    return Math.floor(Math.random()*3);  //*3 will genetate a number between 0 to 2
}

//Converting the random number to choice
function numberToChoice(number){
    return ['rock','paper','scissors'][number];
}

//Deciding the result
function decideWinner(yourChoice, computerChoice){
    //Outcomes
    var rpsResults ={
        'rock' : {'scissors':1, 'rock':0.5, 'paper':0}, //1,0.5.0 are my points
        'paper' : {'scissors':0, 'rock':1, 'paper':0.5},
        'scissors' : {'scissors':0.5, 'rock':0, 'paper':1},
    };
    //Score
    var yourScore = rpsResults[yourChoice][computerChoice]; //this will return the score
    var computerScore = rpsResults[computerChoice][yourChoice];

    return [yourScore,computerScore];

}

//Perparing the messaege to be displayed
function finalMessage([yourScore]){
    if(yourScore===0){
        return {'message':'You lost!','color':'red'};
    }
    else if(yourScore===0.5){
        return{'message':'You Tied','color':'yellow'};
    }
    else{
        return{'message':'You Won!','color':'green'};
    }
}

function rpsFrontEnd(humanImageChoice,botImageChoice,finalmessage){

    //Getting image src with its Id's
    var ImageDB = {
    'rock': document.getElementById('rock').src,
    'paper': document.getElementById('paper').src,
    'scissors': document.getElementById('scissors').src
    };

    //Removing all the images once the human makes a choice
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    //To render the result we have to create Divs

    var humanDiv = document.createElement("div");
    var botDiv = document.createElement("div");
    var messageDiv = document.createElement("div");

    //writing the message
    
    humanDiv.innerHTML = "<img src='" + ImageDB[humanImageChoice] + "'height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50. 233, 1);'>";
    messageDiv.innerHTML =  "<h1 style='color: " + finalmessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalmessage['message'] + "</h1>"
    botDiv.innerHTML = "<img src='" + ImageDB[botImageChoice] + "'height=150 width=150 style='box-shadow: color=red;'>";
    


    //This will display the seleed image - Human Choice
    document.getElementById('flex-box-rps-div').appendChild(humanDiv); 
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);

}

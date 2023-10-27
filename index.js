const colors =require('ansi-colors');
const readline = require('readline');
const options = ["Rock", "Paper", "Scissors"]; //options for computer
let counter=0
//For prompt 
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let recursiveQuestion=function(){
    rl.question(`Whoud you like to play Rock,Paper,Scissors. Your current score is ${counter}?(type exit for exit):` ,(ans0)=>{
        if(ans0==="exit") {
            rl.close();
        }  
        else {
            rl.question('Please enter Rock,Paper or Scissors: ',(ans1)=>{

                const randomIndex = Math.floor(Math.random() * options.length);
                const randomChoice = options[randomIndex];

                //Rock
                if(ans1.toLowerCase()==="rock" && randomChoice==="Paper") {
                    console.log(colors.red(`You lost! Try again! Computer choice was: ${randomChoice}`)) 
                }

                else if (ans1.toLowerCase()==="rock" && randomChoice==="Scissors") {
                    console.log(colors.green(`You are the winner!Computer choice was:${randomChoice }`)) 
                    counter+=1;
                }

                //Paper
                else if (ans1.toLowerCase()==="paper" && randomChoice==="Scissors") {
                    console.log(colors.red(`You lost! Try again! Computer choice was: ${randomChoice}`))  
                }
                else if (ans1.toLowerCase()==="paper" && randomChoice==="Rock") {
                    console.log(colors.green(`You are the winner!Computer choice was:${randomChoice }`)) 
                    counter+=1;
                }


                //Scissors
                else if (ans1.toLowerCase()==="scissors" && randomChoice==="Paper") {
                    console.log(colors.green(`You are the winner!Computer choice was:${randomChoice }`)) 
                    counter+=1;
                }
                else if (ans1.toLowerCase()==="scissors" && randomChoice==="Rock") {
                    console.log(colors.red(`You lost! Try again! Computer choice was: ${randomChoice}`))  
                }

                //Draw
                else if (ans1.toLowerCase()===randomChoice.toLowerCase()) {
                    console.log(colors.yellow("It is a draw!")) 
                }

                else {console.log(colors.blue(`Something goes wrong, please,check you typed rock, paper, scissors`))} 

                recursiveQuestion();
            
            });//end of first number Q
            
        }//end of else exit
    }) //end of  Q0
}//end of recursive

recursiveQuestion();
    




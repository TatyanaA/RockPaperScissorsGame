const colors =require('ansi-colors');
const readline = require('readline');
const options = ["Rock", "Paper", "Scissors"]; //options for computer

//For prompt 
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let recursiveQuestion=function(){
    rl.question('Whoud you like to play Rock,Paper,Scissors?(type exit for exit): ',(ans0)=>{
        if(ans0==="exit") {
            rl.close();
        }  
        else {
            rl.question('Please enter Rock,Paper or Scissors: ',(ans1)=>{

                const randomIndex = Math.floor(Math.random() * options.length);
                const randomChoice = options[randomIndex];

                if(ans1==="Rock" && randomChoice==="Paper") {
                    console.log(colors.red(`You lost! Try again! Computer choice was: ${randomChoice}`)) 
                }
                else if (ans1==="Rock" && randomChoice==="Rock") {
                    console.log(colors.yellow("It is a draw!")) 
                }
                else if (ans1==="Rock" && randomChoice==="Scissors") {
                    console.log(colors.green(`You are the winner!Computer choice was:${randomChoice }`)) 
                }

                else if (ans1==="Paper" && randomChoice==="Paper") {
                    console.log(colors.yellow("It is a draw!")) 
                }
                else if (ans1==="Paper" && randomChoice==="Scissors") {
                    console.log(colors.red(`You lost! Try again! Computer choice was: ${randomChoice}`))  
                }

                else if (ans1==="Scissors" && randomChoice==="Scissors") {
                    console.log(colors.yellow("It is a draw!")) 
                }

                recursiveQuestion();
            
            });//end of first number Q
            
        }//end of else exit
    }) //end of  Q0
}//end of recursive

recursiveQuestion();
    




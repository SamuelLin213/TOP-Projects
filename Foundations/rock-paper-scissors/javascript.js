let playerScore = 0, computerScore = 0;

function computerPlay()
{
  let rand = Math.floor(Math.random()*3);

  if(rand === 0)
  {
    return "Rock";
  }
  else if(rand === 1)
  {
    return "Paper";
  }
  else if(rand === 2)
  {
    return "Scissors";
  }
}

function playerPlay()
{
  let input = prompt("Enter your choice: ");

  if(input.toUpperCase() === "ROCK")
  {
    return "Rock";
  }
  else if(input.toUpperCase() === "PAPER")
  {
    return "Paper";
  }
  else if(input.toUpperCase() === "SCISSORS")
  {
    return "Scissors";
  }
}

function changeToInt(choice)
{
  if(choice === "Rock")
  {
    return 0;
  }
  else if(choice === "Paper")
  {
    return 1;
  }
  else if(choice === "Scissors")
  {
    return 2;
  }
}

function play(playerSelection, computerSelection)
{
  let player = playerSelection();
  let computer = computerSelection();

  let playerChoice = parseInt(changeToInt(player));
  let computerChoice = parseInt(changeToInt(computer));

  //0 - rock, 1 - paper, 2 - scissors
  let result = [
    ["tied", "lost", "won"],
    ["won", "tied", "lost"],
    ["lost", "won", "tied"]
  ];

  if(result[playerChoice][computerChoice] === "won")
  {
    playerScore++;
  }
  else if(result[playerChoice][computerChoice] === "lost")
  {
    computerScore++;
  }

  return("You " + result[playerChoice][computerChoice] + "! " + player + " " +
  result[playerChoice][computerChoice] + " to " + computer);
}
function game()
{
  for(let i = 0; i < 5; i++)
  {
      console.log(play(playerPlay, computerPlay));
  }

  if(playerScore > computerScore)
  {
    console.log("You won!");
  }
  else if(playerScore < computerScore){
    console.log("You lost!");
  }
  else{
    console.log("You tied!");
  }
}

game();

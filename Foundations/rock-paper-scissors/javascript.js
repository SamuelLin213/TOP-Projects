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
  let player = playerSelection;
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
function checkScore(result, score1, score2)
{
  if(playerScore == 5 || computerScore == 5)
  {
    if(playerScore == 5)
    {
      result.textContent = "Result: You won!";
    }
    else if(computerScore == 5)
    {
      result.textContent = "Result: You lost!";
    }
    setTimeout(function(){
      result.textContent = "Result:";
      playerScore = 0;
      computerScore = 0;
      score1.textContent = "Your score: " + playerScore;
      score2.textContent = "Computer score: " + computerScore;
  }, 2000);
  }
}
function game()
{
  //plays 5 rounds
  // for(let i = 0; i < 5; i++)
  // {
  //     console.log(play(playerPlay, computerPlay));
  // }
  const container  = document.querySelector('body');

  const result = document.createElement('div');
  const yourScore = document.createElement('div');
  const computScore = document.createElement('div');

  yourScore.textContent = playerScore;
  computScore.textContent = computScore;
  result.textContent = "Result: ";
  yourScore.textContent = "Your score: " + playerScore;
  computScore.textContent = "Computer score: " + computerScore;

  const rock = document.createElement('button');
  rock.classList.add('rock');
  rock.textContent = 'Rock';
  const paper = document.createElement('button');
  paper.classList.add('paper');
  paper.textContent = 'Paper';
  const scissors = document.createElement('button');
  scissors.classList.add('scissors');
  scissors.textContent = 'Scissors';

  container.appendChild(rock);
  container.appendChild(paper);
  container.appendChild(scissors);
  container.appendChild(computScore);
  container.appendChild(yourScore);
  container.appendChild(result);

  rock.addEventListener('click', function() {
    console.log(play("Rock", computerPlay));
    yourScore.textContent = "Your score: " + playerScore;
    computScore.textContent = "Computer score: " + computerScore;

    checkScore(result, yourScore, computScore);
  });
  paper.addEventListener('click', function() {
    console.log(play("Paper", computerPlay));
    yourScore.textContent = "Your score: " + playerScore;
    computScore.textContent = "Computer score: " + computerScore;

    checkScore(result, yourScore, computScore);
  });
  scissors.addEventListener('click', function() {
    console.log(play("Scissors", computerPlay));
    yourScore.textContent = "Your score: " + playerScore;
    computScore.textContent = "Computer score: " + computerScore;

    checkScore(result, yourScore, computScore);
  });
}

game();

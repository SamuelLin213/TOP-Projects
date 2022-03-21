let playerScore = 0, computerScore = 0;
let reset = false;

function computerPlay()
{
  let rand = Math.floor(Math.random() * (2 - 0 + 1) + 0);


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

function play(playerSelection, computerSelection, tied)
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
    tied.textContent = "You won!";
  }
  else if(result[playerChoice][computerChoice] === "lost")
  {
    computerScore++;
    tied.textContent = "You lost!";
  }

  if(result[playerChoice][computerChoice] === "tied")
  {
    tied.textContent = "You tied!";
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
    return true;
  }
  return false;
}
function game()
{
  //plays 5 rounds
  // for(let i = 0; i < 5; i++)
  // {
  //     console.log(play(playerPlay, computerPlay));
  // }
  const container  = document.querySelector('body');

  const tied = document.createElement('div');
  tied.textContent = " ";
  tied.style.cssText = 'padding: 10% 0 10% 0; font-size: 30px; height: 30px; text-align: center;'

  const buttons = document.createElement('div');
  buttons.style.cssText = 'display: flex; flex-direction: row; justify-content: center;\
  align-items: center; height: 20%; padding-bottom: 75px;'
  const result = document.createElement('div');
  result.classList.add('info');
  const yourScore = document.createElement('div');
  yourScore.classList.add('info');
  const computScore = document.createElement('div');
  computScore.classList.add('info');

  yourScore.textContent = playerScore;
  computScore.textContent = computScore;
  result.textContent = "Result: ";
  yourScore.textContent = "Your score: " + playerScore;
  computScore.textContent = "Computer score: " + computerScore;

  const rock = document.createElement('button');
  rock.classList.add('choices');
  rock.textContent = 'Rock';
  const paper = document.createElement('button');
  paper.classList.add('choices');
  paper.textContent = 'Paper';
  const scissors = document.createElement('button');
  scissors.classList.add('choices');
  scissors.textContent = 'Scissors';

  container.appendChild(tied);
  buttons.appendChild(rock);
  buttons.appendChild(paper);
  buttons.appendChild(scissors);
  container.appendChild(buttons);
  container.appendChild(computScore);
  container.appendChild(yourScore);
  container.appendChild(result);

  rock.addEventListener('click', function() {
    if(reset)
    {
      result.textContent = "Result:";
      playerScore = 0;
      computerScore = 0;
      yourScore.textContent = "Your score: " + playerScore;
      computScore.textContent = "Computer score: " + computerScore;
    }
    reset = false;
    tied.textContent = " ";

    console.log(play("Rock", computerPlay, tied));
    yourScore.textContent = "Your score: " + playerScore;
    computScore.textContent = "Computer score: " + computerScore;

    if(checkScore(result, yourScore, computScore))
      reset = true;
  });
  paper.addEventListener('click', function() {
    if(reset)
    {
      result.textContent = "Result:";
      playerScore = 0;
      computerScore = 0;
      yourScore.textContent = "Your score: " + playerScore;
      computScore.textContent = "Computer score: " + computerScore;
    }
    reset = false;
    tied.textContent = " ";

    console.log(play("Paper", computerPlay, tied));
    yourScore.textContent = "Your score: " + playerScore;
    computScore.textContent = "Computer score: " + computerScore;

    if(checkScore(result, yourScore, computScore))
      reset = true;
  });
  scissors.addEventListener('click', function() {
    if(reset)
    {
      result.textContent = "Result:";
      playerScore = 0;
      computerScore = 0;
      yourScore.textContent = "Your score: " + playerScore;
      computScore.textContent = "Computer score: " + computerScore;
    }
    reset = false;
    tied.textContent = " ";

    console.log(play("Scissors", computerPlay, tied));
    yourScore.textContent = "Your score: " + playerScore;
    computScore.textContent = "Computer score: " + computerScore;

    if(checkScore(result, yourScore, computScore))
      reset = true;
  });
}

game();

let num = 16;
const grid = document.querySelector('.board');
const content = document.querySelector('.content');
// grid.style.cssText = "display: grid; grid-template-rows: repeat("+num+", 1fr);\
// grid-template-columns: repeat("+num+", 1fr);"
createGrid(16);
grid.style.cssText = "display: grid; grid-template-rows: repeat("+16+", 1fr);\
grid-template-columns: repeat("+16+", 1fr);";

function clearGrid(){
  const elements = document.getElementsByClassName('boxes');

  for(let x = 0; x < elements.length; x++)
  {
    elements[x].classList.remove('colored');
  }
}
function createGrid(num)
{
  for(let i = 0; i < num; i++)
  {
    for(let n = 0; n < num; n++)
    {
      const box = document.createElement('div');
      box.classList.add('boxes');

      box.addEventListener('mouseover', function() {
        // box.style.backgroundColor = 'blue';
        box.classList.add('highlighted');
      });

      box.addEventListener('mouseleave', function() {
        // box.style.backgroundColor = 'white';
        box.classList.remove('highlighted');
      });

      box.addEventListener('click', function() {
        box.classList.add('colored');
      })
      //box.addEventListener('mouseover', e => e.target.classList.add('highlighted'));

      grid.appendChild(box);
    }
   }
  content.appendChild(grid);
}

var btn = document.createElement('button');
btn.innerHTML = "Clear Sketch";
btn.classList.add('buttons');
btn.style.cssText = "margin: 15px auto; display:flex; flex-direction: row;\
justify-content: center; align-items: center; height: 75px; width: 150px; font-size: 20px;";
btn.addEventListener('click', clearGrid);

var newGrid = document.createElement('button');
newGrid.innerHTML = "New Grid Size";
newGrid.classList.add("buttons");
newGrid.style.cssText = "margin: 15px auto; display:flex; flex-direction: row;\
justify-content: center; align-items: center; height: 75px; width: 150px; font-size: 20px;";
newGrid.addEventListener('click', function() {
  let input = prompt("Enter the new grid dimensions(max 100): ");
  content.removeChild(grid);
  grid.replaceChildren();
  if(input <= 100 && input > 0)
  {
    createGrid(input);
    grid.style.cssText = "display: grid; grid-template-rows: repeat("+input+", 1fr);\
    grid-template-columns: repeat("+input+", 1fr);";
  }
  else {
    createGrid(16);
    grid.style.cssText = "display: grid; grid-template-rows: repeat("+16+", 1fr);\
    grid-template-columns: repeat("+16+", 1fr);";
  }
});

const buttons = document.getElementsByClassName('buttons');

buttons[0].appendChild(btn);
buttons[0].appendChild(newGrid);

content.appendChild(buttons);

const grid = document.querySelector('.board');

for(let i = 0; i < 16; i++)
{
  for(let n = 0; n < 16; n++)
  {
    const box = document.createElement('div');
    box.classList.add('boxes');
    grid.appendChild(box);

    grid.addEventListener('mouseenter', function(){
      // grid.classList.add('onHover');
      grid.style.background-color: red;
    });

    grid.addEventListener('mouseleave', function(){
      // grid.classList.remove('onHover');
      grid.style.background-color: red;
    });
  }
}

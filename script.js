const btn = document.getElementById('btn');
const result = document.getElementById('result');


btn.addEventListener('click', function(e) {
  const input = document.getElementById('input').value;
  e.preventDefault();
  if(input == "") {
    alert('enter valid number');
  }
  else if(input % 400 == 0 && input % 100 == 0) {
    result.innerText = `enter number ${input} is  leap year`;

  }else if ((input % 4 == 0) && (input % 100 != 0) ) {
    result.innerText = `enter number ${input} is leap year`;
  } else {
    result.innerText = `enter number ${input} is not leap year`;
  }
})
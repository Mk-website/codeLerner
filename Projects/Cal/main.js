console.log('Hello World!');
function myFunc(){
  let screen = document.getElementById('screen');
      buttons = document.querySelectorAll('button');
      let screenValue = '';
      let off = document.getElementById('off')
   
      for (item of buttons) {
        item.addEventListener('click', (e) => {
          buttonText = e.target.innerText;
         
          console.log('button', buttonText);
          if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
          }
          else if (buttonText == 'C') {
            screenValue = '';
            screen.value = screenValue;
          }
          else if (buttonText == '=') {
            screen.value = eval(screenValue);
          }
else if (buttonText == 'off') {
  screenValue += 'Calculator off';
  screen.value = screenValue;
}
else if (buttonText == 'On') {
  screenValue += 'Calculator On';
  screen.value = screenValue;
}
          else {
            screenValue += buttonText;
            screen.value = screenValue;
          }
        })
      }}
      
    



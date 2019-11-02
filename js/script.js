function getMoveName(randomNumber){
    if(randomNumber == 1){
      return 'kamień';
    } else if(randomNumber == 2){
        return 'papier';
    } else if(randomNumber == 3){
        return 'nożyce';
    }
}

let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);
/*
if(randomNumber == 1){
  computerMove = 'kamień';
} else if(randomNumber == 2){
    computerMove = 'papier';
} else if(randomNumber == 3){
    computerMove = 'nożyce';
}
*/
printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);

/*
if(playerInput == '1'){
  playerMove = 'kamień';
} else if (playerInput == '2'){
    playerMove = 'papier';
} else if (playerInput == '3'){
    playerMove = 'nożyce'
}
*/
printMessage('Twój ruch to: ' + playerMove);

let argComputerMove = computerMove
let argPlayerMove = playerMove

function displayResult(argComputerMove, argPlayerMove){

if(argComputerMove == 'kamień' && argPlayerMove == 'papier'){
    printMessage('Ty wygrywasz!');
  } else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
      printMessage('Ja wygrywam');
  } else if (argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
      printMessage('Nikt nie wygrał');
  } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
      printMessage('Ty wygrywasz');
  } else if (argComputerMove == 'papier' && argPlayerMove == 'kamień'){
      printMessage('Ja wygrywam');
  } else if (argComputerMove == 'papier' && argPlayerMove == 'papier'){
      printMessage('Nikt nie wygrał');
  } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
      printMessage('Ty wygrywasz');
  } else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
      printMessage('Ja wygrywam');
  } else if (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
      printMessage('Nikt nie wygrał')
  } else if (argPlayerMove == 'nieznany ruch'){
      printMessage('Błąd')
  }
}
displayResult(argComputerMove, argPlayerMove)
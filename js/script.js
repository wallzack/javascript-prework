{
function playGame(playerInput){
    clearMessages();

    function getMoveName(randomNumber){
        if(randomNumber == 1){
        return 'kamień';
        } else if(randomNumber == 2){
            return 'papier';
        } else if(randomNumber == 3){
            return 'nożyce';
        }
    }

    const randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('Wylosowana liczba to: ' + randomNumber);

    const computerMove = getMoveName(randomNumber);   
    printMessage('Mój ruch to: ' + computerMove);

    const playerMove = getMoveName(playerInput);
    printMessage('Twój ruch to: ' + playerMove);

    function displayResult(argComputerMove, argPlayerMove){

    if(argComputerMove == 'kamień' && argPlayerMove == 'papier'){
        printMessage('Ty wygrywasz');
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
    displayResult(computerMove, playerMove)
}

document.getElementById('play-rock').addEventListener('click', function(){
    playGame(1);
  });

document.getElementById('play-paper').addEventListener('click', function(){
    playGame(2);
  });

document.getElementById('play-scissors').addEventListener('click', function(){
    playGame(3);
  });
}
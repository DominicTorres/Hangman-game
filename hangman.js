window.onload = function() {

    var alphabet = ['a','b','c','d','e','f','g','h','i',
    'j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

    var categories;
    var guess;
    var storedGuesses = [ ];
    var word;
    var lives;
    var space;
    var counter;
    var chosenCategories;
    var getHint;

    var showLives = document.getElementById("mylives");
    var showClue = document.getElementById("clue");
    var getHint = document.getElementById("hint");
    var showCategory = document.getElementById("scategory");

    var buttons = function() {
        myButton = document.getElementById('buttons');
        letters = document.createElement('ul');

        for (var i = 0; i < alphabet.length; i++) {
            letter.id = 'alphabet';
            list = document.createElement('li');
            list.id = 'letter';
            list.innerHTML = alphabet[i];
            check();
            myButtons =document.getElementById()
        }
    }



}
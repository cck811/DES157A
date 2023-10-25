( function(){
    'use strict';
    console.log('Reading JS');
    const myForm = document.querySelector('#myform');
    const madlib = document.querySelector('#madlib');
    const formData = document.querySelectorAll("input[type=text]");

    myForm.addEventListener('submit', function (event) {
        event.preventDefault();
        processFormData(formData);
    });

    function processFormData(formData){
        const words = [];
        const emptyfields = [];
        let counter = 0;
        
        for (const eachWord of formData) {
            if( eachWord.value ){
                words.push(eachWord.value);
            } else {
                emptyfields.push(counter);
            }
            counter++;
        }
        if(emptyfields.length > 0){
            showErrors(formData, emptyfields);
        } else {
            makeMadlib(words);
        }
    }

    function showErrors(formData, emptyfields){
        const errorId = formData[emptyfields[0]].id;
        const errorText = `Please fill out this field ${errorId}`;
        madlib.innerHTML = errorText;
        document.querySelector(`#${errorId}`).focus();
    }

    function makeMadlib(words){
        const myText = `Here are the words: ${words[0]}, ${words[1]}, ${words[2]}, and ${words[3]}`;
        madlib.innerHTML = myText;
        for( const eachField of formData){
            eachField.value = '';
        }
    }
} )();

( function(){
    'use strict';
    console.log('Reading JS');
    const myForm = document.querySelector('#myform');
    const madlib = document.querySelector('#madlib');
    const formData = document.querySelectorAll("input[type=text]");
    const storyOverlay = document.getElementById('story-overlay')
    const closeBtn = document.getElementById('close');

    const p1 = document.getElementById('p1');
    const p2 = document.getElementById('p2');
    const p3 = document.getElementById('p3');
    const p4 = document.getElementById('p4');
    
    closeBtn.addEventListener('click', function() { 
        storyOverlay.style.display = 'none';
    });

    myForm.addEventListener('submit', function (event) {
        event.preventDefault();
        processFormData(formData);
        storyOverlay.style.display = 'block';
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
        p1.innerHTML = `One sunny day, a ${words[0]} named ${words[3]} decided to go to the park. As it strolled along the path a ${words[1]} suddenly zoomed by.`;
        p2.innerHTML = `"${words[2]}!" shouted ${words[3]}, as it jumped out of the way. The ${words[0]} then stumbled upon a picnic blanket, where it found a basket full of chips and chocolates. Feeling peckish, ${words[3]} decided to snack on them.`; 
        p3.innerHTML = `Afterward, the ${ words[0] } felt ${ words[4] }. It decided to join a game of ${ words[5] } that some children were playing nearby. The game was intense, and ${ words[3] } proved to be quite skilled at it.`;
        p4.innerHTML = `As the sun began to set, ${words[3]} headed home, thinking about all the wild and wacky adventures it had at the park that day. It couldn't wait to return and see what new adventures awaited.`;

        for( const eachField of formData){
            eachField.value = '';
        }
    }

    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    
    document.addEventListener('DOMContentLoaded', (event) => { // Event listener upon entering site
        const instructionsOverlay = document.getElementById('instructions-overlay'); // Element of the instruction overlay
        const showInstructionsBtn = document.getElementById('show-instructions');// Element of ? button
        const closeInstructionsBtn = document.getElementById('close-instructions');// Element of Close button

        // Show the overlay when the page loads
        instructionsOverlay.style.display = 'block';

        // Hide overlay when "Close" is clicked
        closeInstructionsBtn.addEventListener('click', function() { 
            instructionsOverlay.style.display = 'none';
        });
    
        // Toggle overlay visibility when ? button is clicked
        showInstructionsBtn.addEventListener('click', function() {
            if (instructionsOverlay.style.display === 'none') {
                instructionsOverlay.style.display = 'block';
            } else {
                instructionsOverlay.style.display = 'none';
            }
        });
    });

    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
} )();

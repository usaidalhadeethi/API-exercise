// Create a new XMLHttpRequest object
var request = new XMLHttpRequest();

// Configure the request: specify the method and URL
request.open('GET', 'https://jsonplaceholder.typicode.com/posts/1/comments', true);

// Send the request
request.send();

// Set up event listeners to handle the response
request.onload = function() {
    if (request.status >= 200 && request.status < 300) {
        // Request was successful, parse and handle the response data
        var responseData = JSON.parse(request.responseText);
        var names = document.getElementsByClassName('name');
        var emails = document.getElementsByClassName('email');
        var card = document.getElementsByClassName('card');
        for (var i = 0; i < card.length; i++) {
            var data = responseData[i];
            names[i].innerHTML = data.name;
            emails[i].innerHTML = data.email;
            // card[i].addEventListener('click', function (event) {
            //     let currentCard = document.querySelectorAll('.active');
            //     currentCard[0].className = currentCard[0].className.replace('active', '');
            //     let cardBody2 = event.target.querySelector('.card-body2');
            //     cardBody2.className += ' active';
            // });
        }
        
        let cardBody1 = document.querySelectorAll('.card-body1');
        let cardBody2 = document.querySelectorAll('.card-body2');
        let bodyContent = document.querySelectorAll('.body-content');
        for (let i = 0; i < card.length; i++) {
            // Add event listener to each card
            card[i].addEventListener('click', function () {
                // Toggle classes for card bodies
                cardBody1[i].classList.toggle('non-active');
                cardBody2[i].classList.toggle('active');
                bodyContent[i].innerHTML = data.body;
            });
        }
        

        // for (let i = 0; i < cardBody.length; i++) {
        //     cardBody[i].addEventListener('click', function () {
        //         let currentCard = document.querySelectorAll('.active');
        //         currentCard[0].className = currentCard[0].className.replace('active', '');
        //         cardBody2[i].className += ' active';
        //     });
        // }


    } else {
        // Request failed, handle the error
        console.error('Request failed with status:', request.status);
    }
};



// Handle connection errors
request.onerror = function() {
    console.error('Connection error');
};

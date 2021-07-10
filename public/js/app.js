const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');

// Weather form submit event listener
weatherForm.addEventListener('submit', (event) => {
    event.preventDefault()

    // Render loading while waiting for data
    messageOne.textContent = 'Loading...';
    messageTwo.textContent = '';

    // Get location from input
    const location = search.value;
    
    // Fetch the forecast
    fetch(`/weather?address=${location}`)

        .then(response => {
            response.json()

                .then(data => {

                    // Handle error
                    if (data.error) {
                        messageOne.textContent = data.error;

                        // Display forecast
                    } else {
                        messageTwo.textContent = data.forecast;
                        messageOne.textContent = `${data.latitude}, ${data.longitude}`;
                    }
                });
        });

});
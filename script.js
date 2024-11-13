const form = document.getElementById('contact-form');

form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value;   

    const email = document.getElementById('email').value;

    if (name === '' || email === '') {
        alert('Please fill in all fields!');   

    } else {
        // Create a FormData object to store the form data
        const formData = new FormData(form);

        // Send the data to the server using Fetch API
        fetch('/submit', { // Replace '/submit' with the actual route on your server
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            console.log(data); // Log the server's response
            alert('Form submitted successfully!'); // You can keep this alert or replace it with something else
            form.reset();
        })
        .catch(error => {
            console.error('Error:', error);
            // Handle errors, e.g., display an error message to the user
        });
    }
});

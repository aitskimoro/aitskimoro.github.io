JavaScript
// Form validation (contact.html)
const form = document.getElementById('contact-form');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent   
 default form submission

    // Basic validation (check if fields are filled)
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name === '' || email === '') {
        alert('Please fill in all fields!');   

    } else {
        // Here you would typically submit the form data to a server
        alert('Form submitted successfully!');
        form.reset(); // Clear the form
    }
});

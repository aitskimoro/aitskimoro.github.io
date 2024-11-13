onst express = require('express');
const app = express();
const port = 3000; 

app.use(express.urlencoded({ extended: true })); 

app.post('/submit',   
 (req, res) => {
    const formData = req.body;
    console.log('Received form data:', formData);

    // Process the data (e.g., store it, send an email, etc.)

    res.send('Form submitted successfully!'); // Send a response back to the client
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});


const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send(`
        <html>
        <head>
            <title>Dynamic Website</title>
        </head>
        <body>
            <h1>Welcome to My Dynamic Website</h1>

            <form action="/submit" method="POST">
                <label>Enter Your Name:</label>
                <input type="text" name="username" required>
                <button type="submit">Submit</button>
            </form>
        </body>
        </html>
    `);
});

app.post('/submit', (req, res) => {
    res.send(`
        <h1>Hello, ${req.body.username}!</h1>
        <p>Welcome to our dynamic website.</p>
        <a href="/">Go Back</a>
    `);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});

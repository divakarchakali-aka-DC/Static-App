// Import the necessary built-in modules for creating a server and handling file systems.
const http = require('http');
const fs = require('fs');
const path = require('path');

// Define the port the server will listen on.
const port = 3000;

// Create the server instance.
const server = http.createServer((req, res) => {
    // Check if the request is for the root path ('/').
    if (req.url === '/') {
        // Construct the full path to the HTML file.
        const filePath = path.join(__dirname, 'index.html');

        // Read the HTML file from the file system.
        fs.readFile(filePath, (err, data) => {
            // Handle any errors that occur during file reading.
            if (err) {
                // If the file is not found, send a 404 response.
                if (err.code === 'ENOENT') {
                    res.writeHead(404, { 'Content-Type': 'text/plain' });
                    res.end('404 Not Found');
                } else {
                    // For other server errors, send a 500 response.
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('500 Internal Server Error');
                }
                return;
            }

            // If the file is read successfully, send a 200 OK response with the HTML content.
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    } else {
        // For any other URL, send a 404 response as this is a minimal server for a single page.
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
});

// Start the server and log a message to the console.
server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
    console.log('To view the app, open your web browser and navigate to this URL.');
});

// server.js
import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from './App'; // Your main React component

const app = express();

// Serve static files from the "public" directory
app.use(express.static('public'));

// Server-side rendering route
app.get('/', (req, res) => {
  const appHtml = ReactDOMServer.renderToString(<App />);
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>React SSR App</title>
      </head>
      <body>
        <div id="root">${appHtml}</div>
        <script src="/bundle.js"></script> <!-- The client-side JavaScript bundle -->
      </body>
    </html>
  `);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

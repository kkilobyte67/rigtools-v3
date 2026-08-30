import { WebSocketServer } from 'ws';
import http from 'http';
import fs from 'fs';
import path from 'path';

// 1. Serve the HTML Dashboard
const server = http.createServer((req, res) => {
  if (req.url === '/' || req.url === '/index.html') {
    fs.readFile(path.join(process.cwd(), 'index.html'), (err, data) => {
      if (err) {
        res.writeHead(500);
        return res.end('Error loading index.html');
      }
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    });
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
});

// 2. Attach WebSocket Broker
const wss = new WebSocketServer({ server });

wss.on('connection', (ws) => {
  console.log('Client connected to inspection channel.');

  ws.on('message', (message) => {
    console.log(`Received payload: ${message}`);
    // Broadcast incoming messages/commands to all listening clients
    wss.clients.forEach((client) => {
      if (client !== ws && client.readyState === 1) {
        client.send(message.toString());
      }
    });
  });
});

server.listen(8080, () => {
  console.log('Inspector UI running at http://localhost:8080');
});

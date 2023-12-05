const http = require('http');
const axios = require('axios');

http.createServer(async (req, res) => {
    // extract athlete id from the url
    const athleteId = req.url.split('/')[2];
    if (req.url.startsWith('/activities')) {
        try {
            const { data } = await axios.get(`http://localhost:3000/activities/${athleteId}`); // replace with your Express server address
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(data, null, 2));
        } catch (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end(err.message);
        }
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
}).listen(8080, () => console.log('Server running at http://localhost:8080/'));

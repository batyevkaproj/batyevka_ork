const http = require('http');
http.get('http://localhost:3001', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    const errorMatch = data.match(/<title>(.*?)<\/title>/);
    console.log("Title:", errorMatch ? errorMatch[1] : "No title");
    if (data.includes('Unhandled Runtime Error')) {
      console.log("Found Runtime Error overlay!");
    }
  });
}).on("error", (err) => {
  console.log("Error: " + err.message);
});

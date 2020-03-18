require('dotenv').config()

const server = require("./server.js");

const PORT = process.env.PORT || 4000;
const environment = process.env.DB_ENV;

server.listen(PORT, () => {
    console.log(`\n** API running on port: ${PORT} **\n** Current environment: ${environment} **`);
});

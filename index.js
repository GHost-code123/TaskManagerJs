const express = require('express');

// ------ Set up Server ------ //

const port = 3000;
const app = express();

app.listen(port, () => {
	console.log(`Server is listening on http://localhost:${port}`);
});

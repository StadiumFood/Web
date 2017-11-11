var express = require('express');
var app = express();
var path = require('path');
app.use(express.static(path.join(process.cwd(),'')));
app.listen(process.env.PORT || 5000);
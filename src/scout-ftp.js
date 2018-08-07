var Client = require('ftp');

var c = new Client();
c.on('ready', function() {
    c.list(function(err, list) {
        if (err) throw err;
        console.log("about to list directories");
        console.dir(list);
        c.end();
    });
});
// connect to localhost:21 as anonymous
c.connect({host:"<host>",port:21,secure:true,user:"<usr>",password:"<pwd>"});

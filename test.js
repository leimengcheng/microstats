var microstats = require('.');
           
microstats.on('memory', function(value) {
    console.log('MEMORY:', value);
});

microstats.on('cpu', function(value) {
   console.log('CPU:', value) 
});

microstats.on('disk', function(value) {
   console.log('DISK:', value) 
});

var options = {
    frequency : '2s',
    memoryalert: {
        used: '>20%'
    },
    cpualert: {
        load: '>20%'
    },
    diskalert: {
        //filesystem: 'C:',
        //filesystems: ['/dev/disk1', '/dev/disk0s4'],
        //mount: '/',
        //mounts: ['/'],
        used: '>30%'
    }
};

microstats.start(options, function(err) {
    if(err) console.log('ERROR:', err);
});
//microstats.stop();
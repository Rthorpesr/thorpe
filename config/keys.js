console.log("3.) - Reggie");

if (process.env.NODE_ENV === 'production')
    {
       module.exports = require('./prod');
    }
else    
    {
        console.log("4.) - Reggie");
        module.exports = require('./dev');
    }
   
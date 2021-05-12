const util = require('util');

// Permite hacer un wrap a las funciones ya obsoletas para hacerle saber al usuario que ya no deberia usarlas
const helloPluto = util.deprecate(() => {
    console.log('hello pluto')
}, 'pluto is deprecated. It is not a planet anymore');

helloPluto();
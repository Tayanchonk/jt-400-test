const config = {
    host: '170.100.190.11',
    user: 'metroapi',
    password: 'metroapi',
}
const pool = require('node-jt400').pool(config);

console.log('pool --->',pool)
const axios = require('axios')

console.log('xaxaxa')


axios('http://localhost:8888/api/v1/protocols/kp2_ai1')
    .then(res => console.log(res.data))
    .catch(err => console.log(err.message))

console.log('end')

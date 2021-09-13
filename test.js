const axios = require('axios')

console.log('xaxaxa')


axios('http://localhost:8888/api/v1/protocols/kp2_ai1')
    .then(res => console.log(res.data))
    .catch(err => console.log(err.message))

axios('https://nayd.erdenetmc.mn/service/rmq/bind.php?id=rIYPDjeVEC0L94iJQz7e&tags%5B%5D=ELEC_KP7_AI3&tags%5B%5D=ELEC_KP2_DI64')
    .then(res => console.log(res))
    .catch(err => console.log(err.message))

console.log('end')

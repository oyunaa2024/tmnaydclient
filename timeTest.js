const axios = require('axios')
const dayjs = require('dayjs')
const {ids, headers, tags } = require('./utils/base')



let resetTags = {
    KP2_AI1: { total: 0, count: 0 },
    KP2_AI2: { total: 0, count: 0 },
    KP2_AI3: { total: 0, count: 0 }
}

let analogTags = {
    KP2_AI1: { total: 25, count: 5 },
    KP2_AI2: { total: 16, count: 4 },
    KP2_AI3: { total: 0.0, count: 0 },
}


console.time();

    const analogTagsCopy = {...analogTags};
    const average = {};

    for (const [key, value] of Object.entries(analogTagsCopy)) {

        if(value.count === 0){
            average[key] = value.total;
        }
        else {
            average[key] = value.total / value.count;
            resetTags[key].total = value.total / value.count;
            resetTags[key].count = 1;
        }
        
    }

    let now = dayjs();
    // console.log(`"${now.format('YYYY-MM-DD HH:mm:ss')}" 1 минутын дундаж SQL серверлүү бичигдлээ`);

    analogTags = {...resetTags};

console.timeEnd();

console.log(analogTags)
console.log(average)
console.log(resetTags)



















const init = async () => {
    const analogTags =  {}, resetTags = {};

    for (let i = 0; i < tags.length; i++) {
                
        let res = await axios(`https://nayd.erdenetmc.mn/service/redis/get.php?tags[]=ELEC_${tags[i]}`)

        if (res.data[0]) {
            console.log(`Таг : ${tags[i]}`);
            console.log(`Анхны утга : ${JSON.parse(res.data[0]).d}`);
            console.log("------------");

            analogTags[tags[i]] = {
                total: JSON.parse(res.data[0]).d,
                count: 1
            }
            resetTags[tags[i]] = {
                total: 0,
                count: 1
            }
        }
        else
            console.log("+++++++++++++++++++++++++++++WARNING++++++++++++++++++++++++++++++++++++++", tags[i])
    }

    console.log(analogTags)
    // console.log(resetTags)
}

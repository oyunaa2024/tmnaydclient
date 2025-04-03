const dotenv = require("dotenv");
const dayjs = require("dayjs");
const utc = require("dayjs/plugin/utc");
const { QueryTypes } = require('sequelize');

dotenv.config({ path: "./config/config.env" });
const db_test = require("./config/db-mssql/test");



const data = [
    {
        "DepCode": 0.1,
        "hesegName": "Техник хяналтын товчоо"
    },
    {
        "DepCode": 0.2,
        "hesegName": "Химийн төв лаборатори"
    },
    {
        "DepCode": 0.3,
        "hesegName": "Түлшний лаборатори"
    },
    {
        "DepCode": 0.4,
        "hesegName": "Шатах тослох материалын лаборатори"
    },
    {
        "DepCode": 0.5,
        "hesegName": "Металлын лаборатори"
    },
    {
        "DepCode": 10,
        "hesegName": "Төмөр замын хэсэг"
    },
    {
        "DepCode": 11,
        "hesegName": "Бараа материалын төв агуулахын хэсэг"
    },
    {
        "DepCode": 111,
        "hesegName": "Нунтаглан баяжуулах хэсэг"
    },
    {
        "DepCode": "121а",
        "hesegName": "Нунтаглан баяжуулах хэсэг"
    },
    {
        "DepCode": "121б",
        "hesegName": "Нунтаглан баяжуулах хэсэг"
    },
    {
        "DepCode": "121в",
        "hesegName": "Нунтаглан баяжуулах хэсэг"
    },
    {
        "DepCode": "121г",
        "hesegName": "Нунтаглан баяжуулах хэсэг"
    },
    {
        "DepCode": "112а",
        "hesegName": "Бутлан тээвэрлэх хэсэг"
    },
    {
        "DepCode": "112б",
        "hesegName": "Бутлан тээвэрлэх хэсэг"
    },
    {
        "DepCode": "122а",
        "hesegName": "Бутлан тээвэрлэх хэсэг"
    },
    {
        "DepCode": "122б",
        "hesegName": "Бутлан тээвэрлэх хэсэг"
    },
    {
        "DepCode": 113,
        "hesegName": "Урвалжийн хэсэг"
    },
    {
        "DepCode": 114,
        "hesegName": "Шүүн хатаах хэсэг"
    },
    {
        "DepCode": 124,
        "hesegName": "Шүүн хатаах хэсэг"
    },
    {
        "DepCode": 115,
        "hesegName": "Өөрөө нунтаглах хэсэг"
    },
    {
        "DepCode": 125,
        "hesegName": "Өөрөө нунтаглах хэсэг"
    },
    {
        "DepCode": 116,
        "hesegName": "Хаягдлын аж ахуйн хэсэг"
    },
    {
        "DepCode": 126,
        "hesegName": "Хаягдлын аж ахуйн хэсэг"
    },
    {
        "DepCode": "117а",
        "hesegName": "Дулаан агааржуулалтын хэсэг"
    },
    {
        "DepCode": "117б",
        "hesegName": "Дулаан агааржуулалтын хэсэг"
    },
    {
        "DepCode": "117в",
        "hesegName": "Дулаан агааржуулалтын хэсэг"
    },
    {
        "DepCode": 118,
        "hesegName": "Цахилгаан хөтлүүр, автоматикийн хэсэг"
    },
    {
        "DepCode": 119,
        "hesegName": "Өргөн тээвэрлэх машин механизмын хэсэг"
    },
    {
        "DepCode": 12.1,
        "hesegName": "Угсралт тохируулгын хэсэг"
    },
    {
        "DepCode": 12.2,
        "hesegName": "Засвар угсралтын хэсэг"
    },
    {
        "DepCode": "14-1",
        "hesegName": "Судалгаа шинжилгээний хүрээлэн"
    },
    {
        "DepCode": "14-2",
        "hesegName": "Судалгаа шинжилгээний хүрээлэн"
    },
    {
        "DepCode": 15,
        "hesegName": "ХАБЭА-н лаборатори"
    },
    {
        "DepCode": 38,
        "hesegName": "Цацрагийн хэмжих хэрэгсэл"
    },
    {
        "DepCode": 29,
        "hesegName": "Нийтийн хоолны хэсэг"
    },
    {
        "DepCode": "29а",
        "hesegName": "Сэлэнгэ катеринг"
    },
    {
        "DepCode": 30,
        "hesegName": "Сэлэнгэ амралтын бааз"
    },
    {
        "DepCode": 7.1,
        "hesegName": "Зочид буудлын хэсэг"
    },
    {
        "DepCode": 3.1,
        "hesegName": "Технологийн гараж"
    },
    {
        "DepCode": 3.2,
        "hesegName": "Төрөл бүрийн маркийн автомашины гараж"
    },
    {
        "DepCode": 3.3,
        "hesegName": "Тусгай зориулалтын машин механизмын гараж"
    },
    {
        "DepCode": 4.1,
        "hesegName": "Цахилгаан тоног төхөөрөмжийн засварын хэсэг"
    },
    {
        "DepCode": "4.2а",
        "hesegName": "Уулын тоног төхөөрөмжийн засварын хэсэг"
    },
    {
        "DepCode": "4.2б",
        "hesegName": "Уулын тоног төхөөрөмжийн засварын хэсэг"
    },
    {
        "DepCode": 4.3,
        "hesegName": "Тэсрэх бодисын завод"
    },
    {
        "DepCode": 4.4,
        "hesegName": "Зам овоолгын хэсэг"
    },
    {
        "DepCode": 5.1,
        "hesegName": "Механик цех"
    },
    {
        "DepCode": 5.3,
        "hesegName": "Механик цех"
    },
    {
        "DepCode": 5.4,
        "hesegName": "Механик цех"
    },
    {
        "DepCode": 5.2,
        "hesegName": "Цутгуурын цех"
    },
    {
        "DepCode": 6.1,
        "hesegName": "Реле хамгаалалт автоматикийн хэсэг"
    },
    {
        "DepCode": 6.2,
        "hesegName": "Теле механикийн хэсэг"
    },
    {
        "DepCode": 6.3,
        "hesegName": "Шуурхай үйлчилгээ диспетчерийн хэсэг"
    },
    {
        "DepCode": 6.4,
        "hesegName": "Шугам сүлжээ дэд станцын хэсэг"
    },
    {
        "DepCode": 6.5,
        "hesegName": "Цахилгаан техникийн тусгай лаборатори"
    },
    {
        "DepCode": 8.1,
        "hesegName": "Систем ашиглалтын хэсэг"
    },
    {
        "DepCode": 8.3,
        "hesegName": "Холбоо, дохиолол хяналтын хэсэг"
    },
    {
        "DepCode": 8.4,
        "hesegName": "Угсралт тохируулгын хэсэг"
    },
    {
        "DepCode": 811,
        "hesegName": "БҮ-ийн технологийн автоматжуулалтын хэсэг"
    },
    {
        "DepCode": 812,
        "hesegName": "БҮ-ийн технологийн автоматжуулалтын хэсэг"
    },
    {
        "DepCode": 813,
        "hesegName": "БҮ-ийн технологийн автоматжуулалтын хэсэг"
    },
    {
        "DepCode": 814,
        "hesegName": "БҮ-ийн технологийн автоматжуулалтын хэсэг"
    },
    {
        "DepCode": 815,
        "hesegName": "БҮ-ийн технологийн автоматжуулалтын хэсэг"
    },
    {
        "DepCode": 817,
        "hesegName": "БҮ-ийн технологийн автоматжуулалтын хэсэг"
    },
    {
        "DepCode": 819,
        "hesegName": "БҮ-ийн технологийн автоматжуулалтын хэсэг"
    },
    {
        "DepCode": 816,
        "hesegName": "Рентген шуурхай шинжилгээний лаборатори"
    },
    {
        "DepCode": 818,
        "hesegName": "Уул, тээврийн ажлын технологийн автоматикийн хэсэг"
    },
    {
        "DepCode": "9.0а",
        "hesegName": "Цэвэрлэх байгууламжийн хэсэг"
    },
    {
        "DepCode": "9.0б",
        "hesegName": "Цэвэрлэх байгууламжийн хэсэг"
    },
    {
        "DepCode": 9.1,
        "hesegName": "Цэвэр ус хангамжийн хэсэг"
    },
    {
        "DepCode": 9.2,
        "hesegName": "Хий хангамжийн хэсэг-Ацетилины станц"
    },
    {
        "DepCode": 9.2,
        "hesegName": "Хий хангамжийн хэсэг-Хүчилтөрөгчийн станц"
    },
    {
        "DepCode": 9.3,
        "hesegName": "Эргэлтийн ус хангамжийн хэсэг"
    },
    {
        "DepCode": 2.1,
        "hesegName": "Дулааны цахилгаан станц"
    },
    {
        "DepCode": 2.2,
        "hesegName": "Дулааны цахилгаан станц"
    },
    {
        "DepCode": 18,
        "hesegName": "Аж ахуй, үйлчилгээний цех"
    },
    {
        "DepCode": 19,
        "hesegName": "Эрдэнэт цогцолбор дээд сургууль"
    },
    {
        "DepCode": 24,
        "hesegName": "Орос эмнэлэг"
    },
    {
        "DepCode": 16,
        "hesegName": "Байгаль орчин, ногоон хөгжлийн хэлтэс"
    },
    {
        "DepCode": 25,
        "hesegName": "Спорт цогцолбор"
    },
    {
        "DepCode": 26,
        "hesegName": "Соёл урлагийн цогцолбор"
    },
    {
        "DepCode": 27,
        "hesegName": "Эрдэнэт сувилалын цогцолбор"
    },
    {
        "DepCode": 13,
        "hesegName": "Геологи хайгуулын экспедици"
    },
    {
        "DepCode": 28,
        "hesegName": "Ган бөөрөнцгийн цех"
    },
    {
        "DepCode": 34,
        "hesegName": "Оёдлын цех"
    },
    {
        "DepCode": 35,
        "hesegName": "Барилга засварын цех"
    },
    {
        "DepCode": 7.2,
        "hesegName": "19-р сургууль"
    },
    {
        "DepCode": 7.3,
        "hesegName": "12-р цэцэрлэг"
    },
    {
        "DepCode": 7.4,
        "hesegName": "Цагдаа"
    },
    {
        "DepCode": 169,
        "hesegName": "Төрөлжсөн архив"
    },
    {
        "DepCode": 37,
        "hesegName": "Техник оношлогооны товчоо"
    },
    {
        "DepCode": 36,
        "hesegName": "Гидротехникийн алба"
    }
]


const init = async () => {

    for (let i = 0; i < data.length; i++) {

        try {
            await db_test.sequelize.query(`
                UPDATE [MetDepCode]
                SET [NameTseh]=N'${data[i].hesegName}'
                WHERE [DepCode] = N'${data[i].DepCode}'
                `
            );
            console.log(data[i].DepCode, "success");
        }
        catch (err) {

            console.log(err.message);
        }
    }
}


init();

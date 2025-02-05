module.exports = {
    apps: [
        {
            name: "TREND_Aranjin",
            script: "./aranjin_trend.js",
            cron_restart: '0 * * * *',
            watch: true
        },
        {
            name: "TREND_Ovoot2",
            script: "./ovoot2_trend.js",
            cron_restart: '5 * * * *',
            watch: true
        },
        {
            name: "TREND_Podyom",
            script: "./podyom_trend.js",
            cron_restart: '10 * * * *',
            watch: true
        },
        {
            name: "CALC_TREND_Aranjin",
            script: "./calcAI.js",
            cron_restart: '15 * * * *',
            watch: true
        },
        {
            name: "TREND_Husnegtiin_bodolt",
            script: "./table_data.js",
            cron_restart: '20 * * * *',
            watch: true
        },
        {
            name: "tmnaydclient",
            script: "./index.js",
            cron_restart: '25 * * * *',
            watch: true
        }
    ]
}
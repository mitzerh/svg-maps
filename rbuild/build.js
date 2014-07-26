/** lint:ignore **/
({

    baseUrl: "../",

    //dir: "../js/app/modules/r",
    out: "../lib/embed.js",

    findNestedDependencies: false,

    optimize: "none",

    wrap: {
        start: "/** lint:ignore **/"
    },

    paths: {
        "app": "./main",
        "lib": "./lib",
        "maps": "./maps",
        "v.all/lodash": "empty:"
    },

    include: [

        "app/config",
        "app/helper",
        "app/events",
        "app/controls",
        "app/mapper"

    ]
   
})
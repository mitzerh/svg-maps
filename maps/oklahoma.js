define(["require"], function(require){

    var data = {
        "viewBox": [221.4769744873047, 185.4759979248047, 88.39201354980469, 46.14900207519531],
        "viewBoxFixed": [220, 178, 88, 73, false],
        "county": [{
            "id": "ok-40139",
            "district": "d-1",
            "path": "p-1",
            "name": "Texas",
            "fipsCode": "40139",
            "coords": "m236.71 186.51l4.99 0.25 1.24 0.06-0.1 1.94h-0.09l-0.23 4.53-1.35-0.07-5.54-0.32-4.19-0.26 0.45-6.39 4.82 0.26"
        }, {
            "id": "ok-40025",
            "district": "d-2",
            "path": "p-2",
            "name": "Cimarron",
            "fipsCode": "40025",
            "coords": "m221.95 185.48l1.3 0.1 5.3 0.43 3.19 0.23 0.15 0.01-0.45 6.39-1.34-0.09-8.62-0.6 0.47-6.47"
        }, {
            "id": "ok-40115",
            "district": "d-3",
            "path": "p-3",
            "name": "Ottawa",
            "fipsCode": "40115",
            "coords": "m307.62 188.04l0.05 3 0.02 1.29-3.92 0.01-0.13-4.27 3.98-0.03"
        }, {
            "id": "ok-40035",
            "district": "d-4",
            "path": "p-4",
            "name": "Craig",
            "fipsCode": "40035",
            "coords": "m302.97 188.07h0.67l0.13 4.27-0.04 2.09-3.32 0.02-1.07-1.12 0.21-5.23 3.42-0.03"
        }, {
            "id": "ok-40097",
            "district": "d-5",
            "path": "p-5",
            "name": "Mayes",
            "fipsCode": "40097",
            "coords": "m303.73 194.43l-0.01 4.52-1.11 0.02 0.01 1.13h-0.93l-2.4 0.01-0.01-2.26 0.03-3.39 1.1-0.01 3.32-0.02"
        }, {
            "id": "ok-40041",
            "district": "d-6",
            "path": "p-6",
            "name": "Delaware",
            "fipsCode": "40041",
            "coords": "m307.69 192.33l0.03 2.19 0.63 4.37-2.42 0.04-2.21 0.02 0.01-4.52 0.04-2.09 3.92-0.01"
        }, {
            "id": "ok-40001",
            "district": "d-7",
            "path": "p-7",
            "name": "Adair",
            "fipsCode": "40001",
            "coords": "m305.93 198.93l2.42-0.04 0.13 0.77 0.92 6.01-3.49 0.05-0.04-3.41 0.08-1.39-0.02-1.99"
        }, {
            "id": "ok-40021",
            "district": "d-8",
            "path": "p-8",
            "name": "Cherokee",
            "fipsCode": "40021",
            "coords": "m303.72 198.95l2.21-0.02 0.02 1.99-0.08 1.39 0.04 3.41-3.33 0.03-1.46-2.25-0.02-0.03-0.17-1.19 0.04-0.74 0.07-0.12 0.2-0.18 0.15-0.01 0.04-0.04 0.27-0.64-0.01-0.45h0.93l-0.01-1.13 1.11-0.02"
        }, {
            "id": "ok-40135",
            "district": "d-9",
            "path": "p-9",
            "name": "Sequoyah",
            "fipsCode": "40135",
            "coords": "m309.4 205.67l0.47 3.12-0.01 0.22-0.64 0.67-1.98 0.07-0.48-0.32-0.21-0.06-0.2 0.03-0.06 0.02-0.4 0.39-0.99-0.96-0.34 0.01-0.52-0.14-0.15-0.05-0.16-0.15-0.32-0.44-0.83-2.33 3.33-0.03 3.49-0.05"
        }, {
            "id": "ok-40061",
            "district": "d-10",
            "path": "p-10",
            "name": "Haskell",
            "fipsCode": "40061",
            "coords": "m303.41 208.08l0.32 0.44 0.16 0.15 0.15 0.05 0.52 0.14 0.34-0.01 0.99 0.96 0.01 1.3-0.78 0.28-0.4 0.01 0.02 1.87-4.42 0.04-0.01-1.32h-1.1l-0.01-0.55 0.03-1.21 1.12 0.03 0.75 0.14 1-0.6 0.33-0.66 0.81-0.94 0.17-0.12"
        }, {
            "id": "ok-40079",
            "district": "d-11",
            "path": "p-11",
            "name": "LeFlore",
            "fipsCode": "40079",
            "coords": "m309.86 209.01l-0.06 5.8-0.03 2.67-0.02 2.87-5.03 0.07-1.31-2.24-0.03-2.26 0.64-0.94 0.74-0.2-0.04-3.38 0.4-0.01 0.78-0.28-0.01-1.3 0.4-0.39 0.06-0.02 0.2-0.03 0.21 0.06 0.48 0.32 1.98-0.07 0.64-0.67"
        }, {
            "id": "ok-40077",
            "district": "d-12",
            "path": "p-12",
            "name": "Latimer",
            "fipsCode": "40077",
            "coords": "m304.74 213.27l0.02 1.51-0.74 0.2-0.64 0.94 0.03 2.26-4.8 0.04v-1.17l0.05-3.35 1.39-0.01 0.27-0.38 4.42-0.04"
        }, {
            "id": "ok-40121",
            "district": "d-13",
            "path": "p-13",
            "name": "Pittsburg",
            "fipsCode": "40121",
            "coords": "m299.23 210.23l-0.03 1.21 0.01 0.55h1.1l0.01 1.32-0.27 0.38-1.39 0.01-0.05 3.35v1.17l-1.65 1.14h-2.23v-1.13h-2.21v-1.12l0.04-3.67 0.29-0.54 0.51-0.69 0.09-0.06 0.21-0.03 0.38 0.02 2.08-0.44 0.39-0.17 2.02-1.13 0.7-0.17"
        }, {
            "id": "ok-40029",
            "district": "d-14",
            "path": "p-14",
            "name": "Coal",
            "fipsCode": "40029",
            "coords": "m292.52 217.11v3.39l-0.56 1.13-2.78-0.01-1.12-1.13 0.04-2.26h1.11v-1.13l3.31 0.01"
        }, {
            "id": "ok-40005",
            "district": "d-15",
            "path": "p-15",
            "name": "Atoka",
            "fipsCode": "40005",
            "coords": "m292.52 218.23h2.21v1.13h2.23v1.12l-1.13 0.09v4.46h-2.25l-4.41-0.02 0.01-3.39 2.78 0.01 0.56-1.13v-2.27"
        }, {
            "id": "ok-40127",
            "district": "d-16",
            "path": "p-16",
            "name": "Pushmataha",
            "fipsCode": "40127",
            "coords": "m298.61 218.22l4.8-0.04 1.31 2.24-1.16 0.01 0.04 3.42h-0.66l-0.45 0.25-0.04 0.88-6.62 0.05v-4.46l1.13-0.09v-1.12l1.65-1.14"
        }, {
            "id": "ok-40089",
            "district": "d-17",
            "path": "p-17",
            "name": "McCurtain",
            "fipsCode": "40089",
            "coords": "m304.72 220.42l5.03-0.07-0.03 4.12-0.05 7.15-2.79-0.8-1.32-0.54-1.83-1.46-1.25-1.07-0.03-2.77 0.04-0.88 0.45-0.25h0.66l-0.04-3.42 1.16-0.01"
        }, {
            "id": "ok-40023",
            "district": "d-18",
            "path": "p-18",
            "name": "Choctaw",
            "fipsCode": "40023",
            "coords": "m302.45 224.98l0.03 2.77-0.68-0.23h-0.07l-0.04 0.02h-0.01-0.01l-0.22 0.35-0.01 0.02v0.02 0.01 0.01l0.04 0.09v0.02l0.02 0.11-0.02 0.13-0.06 0.13-0.06 0.06-0.28 0.18-0.08 0.01-0.16 0.02-0.31 0.04h-0.01l-0.72 0.04-0.4-0.04-1.06-0.14-0.04-0.03-0.04-0.07v-0.01-0.07l0.03-0.09v-0.09l-0.11-0.28-0.08-0.04-0.35-0.01-0.78 0.4-0.89 0.47-0.89-0.09-0.83-0.65-0.18-0.24-0.03-0.07v-2.3l-0.57-0.4h2.25l6.62-0.05"
        }, {
            "id": "ok-40013",
            "district": "d-19",
            "path": "p-19",
            "name": "Bryan",
            "fipsCode": "40013",
            "coords": "m293.58 225.03l0.57 0.4v2.3l0.03 0.07 0.18 0.24 0.83 0.65 0.89 0.09-0.92 0.34-0.52-0.09-0.61-0.12-0.15 0.01-0.23 0.02-1.2 0.1-0.54 0.12-0.09 0.32-0.06 0.31-0.01 0.03-0.01 0.04-0.03 0.1-0.03 0.08v0.01l-0.01 0.02-0.1 0.1-0.02 0.02-0.19 0.08-0.22 0.06-1.59 0.39-0.11-0.14-0.46-0.63-0.14-0.05-0.13-0.01-0.54 0.1h-0.02l-0.1-0.07-1.09-0.73-0.01-0.03-0.01-0.06-0.01-0.16 0.04-0.21 0.31-3.17 1.89-0.55 4.41 0.02"
        }, {
            "id": "ok-40095",
            "district": "d-20",
            "path": "p-20",
            "name": "Marshall",
            "fipsCode": "40095",
            "coords": "m283.58 224.77l2.77 0.03 0.56 0.14 0.4 0.48v0.08l-0.03 0.06-0.31 3.17-1.07 0.48-0.01 0.01-0.52 0.08-1-0.3-0.11-0.08-0.18-0.2-0.54-1.11-0.35-1.52 0.39-1.32"
        }, {
            "id": "ok-40069",
            "district": "d-21",
            "path": "p-21",
            "name": "Johnston",
            "fipsCode": "40069",
            "coords": "m284.75 220.46l3.31 0.03 1.12 1.13-0.01 3.39-1.89 0.55 0.03-0.06v-0.08l-0.4-0.48-0.56-0.14-2.77-0.03 0.03-2.07h0.55l0.03-2.24h0.56"
        }, {
            "id": "ok-40123",
            "district": "d-22",
            "path": "p-22",
            "name": "Pontotoc",
            "fipsCode": "40123",
            "coords": "m288.33 215.24l0.88 1.86v1.13h-1.11l-0.04 2.26-3.31-0.03 0.01-1.13-1.11-0.01 0.01-0.56 0.02-2.83 0.04-1.42 1.62 0.84 2.99-0.11"
        }, {
            "id": "ok-40049",
            "district": "d-23",
            "path": "p-23",
            "name": "Garvin",
            "fipsCode": "40049",
            "coords": "m283.68 215.93l-0.02 2.83-2.22-0.03-0.55 0.17-0.02 0.04-0.02 0.13 0.08 0.18 0.17 0.13 0.14 0.41 0.12 0.56-0.4 0.07-1.75-0.03-2.22-0.04-1.09-2.28 0.05-2.25 7.73 0.11"
        }, {
            "id": "ok-40099",
            "district": "d-24",
            "path": "p-24",
            "name": "Murray",
            "fipsCode": "40099",
            "coords": "m279.21 220.39l1.75 0.03 0.4-0.07-0.12-0.56-0.14-0.41-0.17-0.13-0.08-0.18 0.02-0.13 0.02-0.04 0.55-0.17 2.22 0.03-0.01 0.56 1.11 0.01-0.01 1.13h-0.56l-0.03 2.24h-0.55l-1.01-0.01-0.12-0.07-0.03-0.06v-0.03l0.12-0.08-0.02-0.29-0.03-0.03-3.34-0.05 0.03-1.69"
        }, {
            "id": "ok-40085",
            "district": "d-25",
            "path": "p-25",
            "name": "Love",
            "fipsCode": "40085",
            "coords": "m276.91 226l6.28 0.09 0.35 1.52-0.1 0.06-1.6 2.78-0.05 0.07-0.11 0.09-0.16 0.05-0.17-0.03-0.15-0.05-3.1-1.35-0.1-0.07-0.06-0.07v-0.01l-0.01-0.02-0.03-0.07-0.21-0.96-0.82 0.22 0.04-2.25"
        }, {
            "id": "ok-40019",
            "district": "d-26",
            "path": "p-26",
            "name": "Carter",
            "fipsCode": "40019",
            "coords": "m276.99 220.35l2.22 0.04-0.03 1.69 3.34 0.05 0.03 0.03 0.02 0.29-0.12 0.08v0.03l0.03 0.06 0.12 0.07 1.01 0.01-0.03 2.07-0.39 1.32-6.28-0.09 0.03-2.82 0.05-2.83"
        }, {
            "id": "ok-40067",
            "district": "d-27",
            "path": "p-27",
            "name": "Jefferson",
            "fipsCode": "40067",
            "coords": "m270.83 223.05l6.11 0.13-0.03 2.82-0.04 2.25-0.38-0.27-1.09-0.72-0.36 0.46-0.56 0.58-0.53 0.42-0.34 0.1-0.12-0.02-0.94-0.42-0.12-0.11 0.27-0.6 0.1-0.69h-0.01l-0.39-0.16-0.37 0.09h-0.02-0.23l-0.45-0.13h-0.01l-0.03-0.03-0.19-0.37-0.27-3.33"
        }, {
            "id": "ok-40137",
            "district": "d-28",
            "path": "p-28",
            "name": "Stephens",
            "fipsCode": "40137",
            "coords": "m275.9 218.07l1.09 2.28-0.05 2.83-6.11-0.13 0.03-2.82 0.61-2.24 4.43 0.08"
        }, {
            "id": "ok-40033",
            "district": "d-29",
            "path": "p-29",
            "name": "Cotton",
            "fipsCode": "40033",
            "coords": "m265.33 221.4l0.56 0.02 1.11-0.16 2.22-0.32 0.56-0.47 0.37-0.25 0.71 0.01-0.03 2.82 0.27 3.33-0.64-1.06-1.65-0.52-0.41-0.09-0.2 0.12-0.43 0.54-0.57 0.51-0.01 0.01v-0.01l-0.31-0.11-0.5-0.81-0.24-0.2-0.24-0.16-0.11-0.01 0.07-2.24-0.55-0.01 0.02-0.94"
        }, {
            "id": "ok-40031",
            "district": "d-30",
            "path": "p-30",
            "name": "Comanche",
            "fipsCode": "40031",
            "coords": "m265.94 215.59l5.54 0.14-0.01 2.26-0.61 2.24-0.71-0.01-0.37 0.25-0.56 0.47-2.22 0.32-1.11 0.16-0.56-0.02 0.03-0.98-0.61-0.35-1.11-0.03 0.03-1.13 0.1-3.39 2.17 0.07"
        }, {
            "id": "ok-40141",
            "district": "d-31",
            "path": "p-31",
            "name": "Tillman",
            "fipsCode": "40141",
            "coords": "m263.67 218.91l-0.03 1.13 1.11 0.03 0.61 0.35-0.03 0.98-0.02 0.94 0.55 0.01-0.07 2.24-0.96 0.3-0.69-0.03-0.98-0.24-0.98-0.58-0.15-0.08h-0.02l-0.98-0.07h-0.42l-0.2 0.01-0.4-0.09-0.21-0.06-0.14-0.04v-0.01l-0.19-1 0.01-0.28 0.01-0.3 0.17-0.05 0.04-0.07v-0.11l-0.16-0.44-0.07-0.06-0.14 0.02-0.06-0.19-0.02-0.25 0.2-0.87 0.42-0.89 0.24-0.33 0.24-0.05 0.44 0.03 0.05 0.05 0.08-0.01 0.04-0.02 0.02-0.31-0.08-0.15-0.14-0.17 0.72 0.03 0.35 0.43-0.01 0.15 1.85 0.05"
        }, {
            "id": "ok-40065",
            "district": "d-32",
            "path": "p-32",
            "name": "Jackson",
            "fipsCode": "40065",
            "coords": "m259.34 215.81l0.59-0.44 0.1-0.02 0.04 0.02 0.22 0.15 0.05 0.08 0.91 1.84-0.49 0.81 0.14 0.17 0.08 0.15-0.02 0.31-0.04 0.02-0.08 0.01-0.05-0.05-0.44-0.03-0.24 0.05-0.24 0.33-0.42 0.89-0.2 0.87 0.02 0.25 0.06 0.19 0.14-0.02 0.07 0.06 0.16 0.44v0.11l-0.04 0.07-0.17 0.05v-0.02l-0.5-0.86-0.52-0.29-0.47-0.25-0.45 0.81-0.01 0.01-0.01 0.03h-0.01l-0.08 0.03-0.36-0.03-0.34-0.33-0.27-0.15-0.16-0.07-0.5-0.06-0.12-0.02-0.06 0.03-0.41 0.52h-0.41-0.09l-0.32-0.08-0.74-0.7-0.27-0.31-0.55-0.72 1.92 0.08 0.1-2.82 1.47 0.05 1-0.04-0.05-0.12-0.01-0.28 0.03-0.1 0.35-0.56 1.64 0.07 0.05-0.13"
        }, {
            "id": "ok-40075",
            "district": "d-33",
            "path": "p-33",
            "name": "Kiowa",
            "fipsCode": "40075",
            "coords": "m257.76 211.96h0.52l5.35 0.17 1.84 0.03 0.54 0.29-0.07 3.14-2.17-0.07-0.1 3.39-1.85-0.05 0.01-0.15-0.35-0.43-0.72-0.03 0.49-0.81-0.91-1.84-0.05-0.08-0.22-0.15-0.04-0.02-0.1 0.02-0.59 0.44-0.65-0.55-0.08-0.11-0.13-1.52 0.1-0.35 0.04-0.3-0.44-0.66-0.42-0.36"
        }, {
            "id": "ok-40055",
            "district": "d-34",
            "path": "p-34",
            "name": "Greer",
            "fipsCode": "40055",
            "coords": "m252.69 212.86l1.11 0.05 0.05-1.13 3.46 0.14 0.45 0.04 0.42 0.36 0.44 0.66-0.04 0.3-0.1 0.35 0.13 1.52 0.08 0.11 0.65 0.55-0.05 0.13-1.64-0.07-0.35 0.56-0.03 0.1 0.01 0.28 0.05 0.12-1 0.04-1.47-0.05-0.56-2.87-1.65-0.07 0.04-1.12"
        }, {
            "id": "ok-40057",
            "district": "d-35",
            "path": "p-35",
            "name": "Harmon",
            "fipsCode": "40057",
            "coords": "m251.52 212.81l1.17 0.05-0.04 1.12 1.65 0.07 0.56 2.87-0.1 2.82-1.92-0.08-1.54-0.77 0.07-2.4 0.15-3.68"
        }, {
            "id": "ok-40101",
            "district": "d-36",
            "path": "p-36",
            "name": "Muskogee",
            "fipsCode": "40101",
            "coords": "m295.92 202.97l1.2-0.01 1.8 0.68 1.61-0.14h0.59l1.46 2.25 0.83 2.33-0.17 0.12-0.81 0.94-0.33 0.66-1 0.6-0.75-0.14-0.03-3.36-3.84 0.02v-2.26l-0.56 0.01v-1.7"
        }, {
            "id": "ok-40091",
            "district": "d-37",
            "path": "p-37",
            "name": "McIntosh",
            "fipsCode": "40091",
            "coords": "m296.48 206.92l3.84-0.02 0.03 3.36-1.12-0.03-0.7 0.17-2.02 1.13-0.39 0.17-2.08 0.44-0.38-0.02 0.03-1.79v-1.13h1.1v-0.36l0.16-0.77 0.39-1.14 1.14-0.01"
        }, {
            "id": "ok-40063",
            "district": "d-38",
            "path": "p-38",
            "name": "Hughes",
            "fipsCode": "40063",
            "coords": "m288.88 210.31l4.81 0.02-0.03 1.79-0.21 0.03-0.09 0.06-0.51 0.69-0.29 0.54-0.04 3.67-3.31-0.01-0.88-1.86 0.02-2.67 0.52 0.01 0.01-2.27"
        }, {
            "id": "ok-40133",
            "district": "d-39",
            "path": "p-39",
            "name": "Seminole",
            "fipsCode": "40133",
            "coords": "m286.98 208.86l0.07 0.07 0.06 0.02 0.78 0.05 0.02-0.02 0.01-0.06-0.04-0.16 0.09-0.45 0.61-0.22 0.31-0.08-0.01 2.3-0.01 2.27-0.52-0.01-0.02 2.67-2.99 0.11 0.04-6.63 0.55-0.18 1.05 0.32"
        }, {
            "id": "ok-40125",
            "district": "d-40",
            "path": "p-40",
            "name": "Pottawatomie",
            "fipsCode": "40125",
            "coords": "m281.58 207.99l5.39 0.07 0.01 0.8-1.05-0.32-0.55 0.18-0.04 6.63-1.62-0.84-2.23 0.39 0.07-5.77 0.02-1.14"
        }, {
            "id": "ok-40027",
            "district": "d-41",
            "path": "p-41",
            "name": "Cleveland",
            "fipsCode": "40027",
            "coords": "m276.03 209.04l5.53 0.09-0.07 5.77-0.57 0.04-1.33-0.36-0.13-0.08-0.06-0.05-0.07-0.21-0.08-0.72-0.16-0.64-0.5-0.83-2.11-2.11-0.46-0.38 0.01-0.52"
        }, {
            "id": "ok-40087",
            "district": "d-42",
            "path": "p-42",
            "name": "McClain",
            "fipsCode": "40087",
            "coords": "m276.02 209.56l0.46 0.38 2.11 2.11 0.5 0.83 0.16 0.64 0.08 0.72 0.07 0.21 0.06 0.05 0.13 0.08 1.33 0.36 0.57-0.04 2.23-0.39-0.04 1.42-7.73-0.11 0.07-6.24v-0.02"
        }, {
            "id": "ok-40051",
            "district": "d-43",
            "path": "p-43",
            "name": "Grady",
            "fipsCode": "40051",
            "coords": "m271.59 208.94l1.42 0.43 1.22 0.2 1.12 0.15 0.31-0.01 0.36-0.13-0.07 6.24-0.05 2.25-4.43-0.08 0.01-2.26 0.11-6.79"
        }, {
            "id": "ok-40015",
            "district": "d-44",
            "path": "p-44",
            "name": "Caddo",
            "fipsCode": "40015",
            "coords": "m269.38 206.64h0.06l0.01 0.14-0.05 2.12 2.19 0.04-0.11 6.79-5.54-0.14 0.07-3.14 0.04-0.06 0.03-1.33-0.01-1.33 0.05-2.05 0.03-1.13 3.23 0.09"
        }, {
            "id": "ok-40017",
            "district": "d-45",
            "path": "p-45",
            "name": "Canadian",
            "fipsCode": "40017",
            "coords": "m270.54 204.41l5.54 0.11-0.05 4.52-0.01 0.52v0.02l-0.36 0.13-0.31 0.01-1.12-0.15-1.22-0.2-1.42-0.43-2.19-0.04 0.05-2.12-0.01-0.14h-0.06l1.16-2.23"
        }, {
            "id": "ok-40109",
            "district": "d-46",
            "path": "p-46",
            "name": "Oklahoma",
            "fipsCode": "40109",
            "coords": "m276.08 204.52l5.55 0.09-0.05 3.38-0.02 1.14-5.53-0.09 0.05-4.52"
        }, {
            "id": "ok-40081",
            "district": "d-47",
            "path": "p-47",
            "name": "Lincoln",
            "fipsCode": "40081",
            "coords": "m287.05 201.85l-0.02 3.92-0.06 2.29-5.39-0.07 0.05-3.38 0.03-2.82 5.39 0.06"
        }, {
            "id": "ok-40107",
            "district": "d-48",
            "path": "p-48",
            "name": "Okfuskee",
            "fipsCode": "40107",
            "coords": "m291.49 205.79l-0.01 1.14 1.1-0.01v2.28h1.11v1.13l-4.81-0.02 0.01-2.3-0.31 0.08-0.61 0.22-0.09 0.45 0.04 0.16-0.01 0.06-0.02 0.02-0.78-0.05-0.06-0.02-0.07-0.07-0.01-0.8 0.06-2.29 4.46 0.02"
        }, {
            "id": "ok-40111",
            "district": "d-49",
            "path": "p-49",
            "name": "Okmulgee",
            "fipsCode": "40111",
            "coords": "m295.92 202.97v1.7l0.56-0.01v2.26l-1.14 0.01-0.39 1.14-0.16 0.77v0.36h-1.1-1.11v-2.28l-1.1 0.01 0.01-1.14v-2.83l1.66 0.01 2.21 0.01 0.56-0.01"
        }, {
            "id": "ok-40145",
            "district": "d-50",
            "path": "p-50",
            "name": "Wagoner",
            "fipsCode": "40145",
            "coords": "m299.29 200.11l2.4-0.01 0.01 0.45-0.27 0.64-0.04 0.04-0.15 0.01-0.2 0.18-0.07 0.12-0.04 0.74 0.17 1.19 0.02 0.03h-0.59l-1.61 0.14-1.8-0.68-1.2 0.01-0.56 0.01 0.6-3.99 1.48-0.01 0.49 0.64 0.12 0.2-0.05 0.18-0.16 0.02 0.03 0.06 0.06 0.04 1.36-0.01"
        }, {
            "id": "ok-40131",
            "district": "d-51",
            "path": "p-51",
            "name": "Rogers",
            "fipsCode": "40131",
            "coords": "m295.45 193.34l3.89-0.01 1.07 1.12-1.1 0.01-0.03 3.39 0.01 2.26-1.36 0.01-0.06-0.04-0.03-0.06 0.16-0.02 0.05-0.18-0.12-0.2-0.49-0.64-1.48 0.01-0.53-3.39 0.02-2.26"
        }, {
            "id": "ok-40105",
            "district": "d-52",
            "path": "p-52",
            "name": "Nowata",
            "fipsCode": "40105",
            "coords": "m298.38 188.11l1.17-0.01-0.21 5.23-3.89 0.01 0.22-5.22 2.71-0.01"
        }, {
            "id": "ok-40147",
            "district": "d-53",
            "path": "p-53",
            "name": "Washington",
            "fipsCode": "40147",
            "coords": "m293.86 188.13l1.81-0.01-0.22 5.22-0.02 2.26h-1.95l0.01-7.47h0.37"
        }, {
            "id": "ok-40143",
            "district": "d-54",
            "path": "p-54",
            "name": "Tulsa",
            "fipsCode": "40143",
            "coords": "m293.48 195.6h1.95l0.53 3.39-0.6 3.99-2.21-0.01 0.04-0.58-0.01-2.26-2.77-0.01v-1.13l0.31 0.01 2.76 0.02v-3.42"
        }, {
            "id": "ok-40037",
            "district": "d-55",
            "path": "p-55",
            "name": "Creek",
            "fipsCode": "40037",
            "coords": "m287.07 199.01l3.34-0.02v1.13l2.77 0.01 0.01 2.26-0.04 0.58-1.66-0.01v2.83l-4.46-0.02 0.02-3.92 0.02-2.84"
        }, {
            "id": "ok-40119",
            "district": "d-56",
            "path": "p-56",
            "name": "Payne",
            "fipsCode": "40119",
            "coords": "m283.94 197.86l1.1 0.01-0.02 1.14h2.05l-0.02 2.84-5.39-0.06-2.2-0.59 0.03-2.26 2.21 0.03 0.01-1.13 2.23 0.02"
        }, {
            "id": "ok-40083",
            "district": "d-57",
            "path": "p-57",
            "name": "Logan",
            "fipsCode": "40083",
            "coords": "m276.17 198.81l2.22 0.04 1.1 0.09-0.03 2.26 2.2 0.59-0.03 2.82-5.55-0.09 0.09-5.71"
        }, {
            "id": "ok-40073",
            "district": "d-58",
            "path": "p-58",
            "name": "Kingfisher",
            "fipsCode": "40073",
            "coords": "m270.64 198.7l1.1 0.02 4.43 0.09-0.09 5.71-5.54-0.11 0.05-2.25 0.02-1.88 0.03-1.58"
        }, {
            "id": "ok-40011",
            "district": "d-59",
            "path": "p-59",
            "name": "Blaine",
            "fipsCode": "40011",
            "coords": "m266.23 198.59l4.41 0.11-0.03 1.58-0.02 1.88-0.05 2.25-1.16 2.23-3.23-0.09v-3.38l0.08-4.58"
        }, {
            "id": "ok-40149",
            "district": "d-60",
            "path": "p-60",
            "name": "Washita",
            "fipsCode": "40149",
            "coords": "m266.12 207.68l-0.05 2.05 0.01 1.33-0.03 1.33-0.04 0.06-0.54-0.29-1.84-0.03-5.35-0.17 0.11-4.53 7.73 0.25"
        }, {
            "id": "ok-40009",
            "district": "d-61",
            "path": "p-61",
            "name": "Beckham",
            "fipsCode": "40009",
            "coords": "m258.41 206.86l-0.02 0.57-0.11 4.53h-0.52l-0.45-0.04-3.46-0.14-0.05 1.13-1.11-0.05-1.17-0.05 0.09-1.97 0.13-3.11 4.43 0.18 0.04-1.13 2.2 0.08"
        }, {
            "id": "ok-40039",
            "district": "d-62",
            "path": "p-62",
            "name": "Custer",
            "fipsCode": "40039",
            "coords": "m258.43 202.92l7.72 0.25v3.38l-0.03 1.13-7.73-0.25 0.02-0.57 0.02-3.94"
        }, {
            "id": "ok-40043",
            "district": "d-63",
            "path": "p-63",
            "name": "Dewey",
            "fipsCode": "40043",
            "coords": "m262.93 198.53l3.3 0.06-0.08 4.58-7.72-0.25 0.04-2.61 0.06-1.96 4.4 0.18"
        }, {
            "id": "ok-40129",
            "district": "d-64",
            "path": "p-64",
            "name": "Roger Mills",
            "fipsCode": "40129",
            "coords": "m258.47 200.31l-0.04 2.61-0.02 3.94-2.2-0.08-0.04 1.13-4.43-0.18 0.11-2.55 0.13-3.4 0.99-0.57 1.1 0.27 0.24 0.3 0.09 0.08 0.51 0.32 0.33 0.11 0.52 0.13 0.15 0.02 0.61-0.25 0.04-0.03 0.5-0.79 0.17-0.59 0.03-0.05 0.1-0.09 0.25-0.19 0.18-0.08 0.25-0.06h0.43"
        }, {
            "id": "ok-40045",
            "district": "d-65",
            "path": "p-65",
            "name": "Ellis",
            "fipsCode": "40045",
            "coords": "m256.43 192.7l-0.16 4.5 0.05 1.07 2.21 0.08-0.06 1.96h-0.43l-0.25 0.06-0.18 0.08-0.25 0.19-0.1 0.09-0.03 0.05-0.17 0.59-0.5 0.79-0.04 0.03-0.61 0.25-0.15-0.02-0.52-0.13-0.33-0.11-0.51-0.32-0.09-0.08-0.24-0.3-1.1-0.27-0.99 0.57 0.1-2.27 0.21-5.76 0.06-1.22 4.08 0.17"
        }, {
            "id": "ok-40153",
            "district": "d-66",
            "path": "p-66",
            "name": "Woodward",
            "fipsCode": "40153",
            "coords": "m256.43 192.7l3.19 0.09 0.1-2.91 0.01 0.18 0.24 0.21 0.17 0.06 0.9-0.04 0.13 0.05 0.15 0.09 1.73 2.42-0.02 1.2-0.1 4.48-4.4-0.18-2.21-0.08-0.05-1.07 0.16-4.5"
        }, {
            "id": "ok-40093",
            "district": "d-67",
            "path": "p-67",
            "name": "Major",
            "fipsCode": "40093",
            "coords": "m271.82 194.85l-0.08 3.87-1.1-0.02-4.41-0.11-3.3-0.06 0.1-4.48 1.2 0.04 0.23 0.47 0.12 0.13 0.15 0.11 0.95 0.51 0.56 0.26 0.19 0.06 0.23 0.03 0.72-0.06 0.02-0.86 4.42 0.11"
        }, {
            "id": "ok-40047",
            "district": "d-68",
            "path": "p-68",
            "name": "Garfield",
            "fipsCode": "40047",
            "coords": "m278.46 193.28l-0.07 5.57-2.22-0.04-4.43-0.09 0.08-3.87 0.04-1.69 6.6 0.12"
        }, {
            "id": "ok-40103",
            "district": "d-69",
            "path": "p-69",
            "name": "Noble",
            "fipsCode": "40103",
            "coords": "m282.62 193.33l0.48 1.14-0.23-0.01-0.03 2.26 1.11 0.01-0.01 1.13-2.23-0.02-0.01 1.13-2.21-0.03-1.1-0.09 0.07-5.57 4.16 0.05"
        }, {
            "id": "ok-40117",
            "district": "d-70",
            "path": "p-70",
            "name": "Pawnee",
            "fipsCode": "40117",
            "coords": "m283.94 197.86l0.01-1.13-1.11-0.01 0.03-2.26 0.23 0.01 0.04 0.27 0.24 0.26 0.14 0.08 0.3 0.06 2.57 0.43 3.63 2.56 0.7 0.87-0.31-0.01-3.34 0.02h-2.05l0.02-1.14-1.1-0.01"
        }, {
            "id": "ok-40113",
            "district": "d-71",
            "path": "p-71",
            "name": "Osage",
            "fipsCode": "40113",
            "coords": "m285.82 188.1l2.3 0.01 5.37 0.02-0.01 7.47v3.42l-2.76-0.02-0.7-0.87-3.63-2.56-2.57-0.43-0.3-0.06-0.14-0.08-0.24-0.26-0.04-0.27-0.48-1.14 0.05-0.65 0.55-0.59 1.51-0.72 0.21 0.04 0.07-0.03 0.76-0.46 0.05-2.82"
        }, {
            "id": "ok-40071",
            "district": "d-72",
            "path": "p-72",
            "name": "Kay",
            "fipsCode": "40071",
            "coords": "m278.54 188.02l3.22 0.04 4.06 0.04-0.05 2.82-0.76 0.46-0.07 0.03-0.21-0.04-1.51 0.72-0.55 0.59-0.05 0.65-4.16-0.05 0.08-5.26"
        }, {
            "id": "ok-40053",
            "district": "d-73",
            "path": "p-73",
            "name": "Grant",
            "fipsCode": "40053",
            "coords": "m275.07 187.96l3.47 0.06-0.08 5.26-6.6-0.12-0.05-0.01 0.1-4.52-0.01-0.73 3.17 0.06"
        }, {
            "id": "ok-40003",
            "district": "d-74",
            "path": "p-74",
            "name": "Alfalfa",
            "fipsCode": "40003",
            "coords": "m269.49 187.84l2.41 0.06 0.01 0.73-0.1 4.52 0.05 0.01-0.04 1.69-4.42-0.11 0.07-6.96 2.02 0.06"
        }, {
            "id": "ok-40151",
            "district": "d-75",
            "path": "p-75",
            "name": "Woods",
            "fipsCode": "40151",
            "coords": "m258.16 187.48l4.65 0.16 4.66 0.14-0.07 6.96-0.02 0.86-0.72 0.06-0.23-0.03-0.19-0.06-0.56-0.26-0.95-0.51-0.15-0.11-0.12-0.13-0.23-0.47-1.2-0.04 0.02-1.2-1.73-2.42-0.15-0.09-0.13-0.05-0.9 0.04-0.17-0.06-0.24-0.21-0.01-0.18-1.56-2.4"
        }, {
            "id": "ok-40059",
            "district": "d-76",
            "path": "p-76",
            "name": "Harper",
            "fipsCode": "40059",
            "coords": "m252.57 187.23l4.72 0.21 0.87 0.04 1.56 2.4-0.1 2.91-3.19-0.09-4.08-0.17 0.22-5.3"
        }, {
            "id": "ok-40007",
            "district": "d-77",
            "path": "p-77",
            "name": "Beaver",
            "fipsCode": "40007",
            "coords": "m242.94 186.82l3.19 0.14 5.56 0.23 0.88 0.04-0.22 5.3-0.06 1.22-5.58-0.25-4.19-0.21 0.23-4.53h0.09l0.1-1.94"
        }]
    };

    return data;

});
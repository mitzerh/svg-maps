define(["require"], function(require){

    var data = {
        "viewBox": [385.9079895019531, 256.60699462890625, 93.27999877929688, 79.25701904296875],
        "viewBoxFixed": [385, 256, 93, 79, false],
        "county": [{
            "id": "fl-12005",
            "district": "d-1",
            "path": "p-1",
            "name": "Bay",
            "fipsCode": "12005",
            "coords": "m411.11 264.87l0.47 4.69 0.41 3.54-1.16-0.35-0.25-0.11-0.09-0.05-0.3-0.22-0.39-0.35-2.44-1.42-0.18-0.1-0.12-0.07-0.13-0.07-0.19-0.09-0.42-0.22-0.18-0.08-0.14-0.07-0.18-0.07-0.2-0.1-0.19-0.07-0.66-0.24-0.13-1.54 0.27-0.31 1.19-0.51 3.38-0.33 0.67-0.07-0.16-1.67 0.56-0.07 0.56-0.05"
        }, {
            "id": "fl-12063",
            "district": "d-2",
            "path": "p-2",
            "name": "Jackson",
            "fipsCode": "12063",
            "coords": "m409.35 259.48l5.33-0.65 1.94 3.53-0.59 1.43-1.81 0.2-0.79 0.59-0.84 0.14-1.48 0.15-0.56 0.05-0.28-2.79-0.85-0.48-1.06 0.11 0.88-2.26 0.11-0.02"
        }, {
            "id": "fl-12015",
            "district": "d-3",
            "path": "p-3",
            "name": "Charlotte",
            "fipsCode": "12015",
            "coords": "m454.37 304.99l5.66-0.87 0.47 3.33-5.69 0.85 0.02-0.42-0.13-0.7-0.2-1.01-0.04-0.14-0.17-0.08-0.36 0.06-0.1 0.06-0.54 0.48-0.06 0.09 0.26 1.78-0.03 0.05-0.49 0.08-0.14-0.12h-0.03l-0.07 0.13-0.07 0.24-0.16 0.01-0.05-0.17-0.06-0.17-0.02-0.05-0.01-0.01-1.48-1.8 1.38-0.19-0.11-0.76-0.05-0.35 2.27-0.32"
        }, {
            "id": "fl-12071",
            "district": "d-4",
            "path": "p-4",
            "name": "Lee",
            "fipsCode": "12071",
            "coords": "m452.7 309.47l1.27 2.41 0.16 0.14 0.21 0.12 0.75 0.18 0.11-0.15 0.16-0.08 0.59 0.12v0.02l-0.52 0.43-0.13 0.06-0.09 0.01-0.18-0.01-0.35-0.09-0.59-0.32-0.05-0.05-0.06-0.04-0.09-0.16-1.19-2.2v-0.39m2.11-1.17l5.69-0.85 0.52 3.23 0.2 1.14-0.9 1.5-1.86 0.29-0.33-0.12-0.37-0.58-0.58-0.54-1.27-0.81-1.26-1.89 0.16-1.37"
        }, {
            "id": "fl-12051",
            "district": "d-5",
            "path": "p-5",
            "name": "Hendry",
            "fipsCode": "12051",
            "coords": "m460.5 307.45l4.53-0.68 2.6-0.42 0.3-2.51 1.31 7.87 0.17 0.93-4.47 0.79-0.37-2.13-0.19-1.18-3.36 0.56-0.52-3.23"
        }, {
            "id": "fl-12021",
            "district": "d-6",
            "path": "p-6",
            "name": "Collier",
            "fipsCode": "12021",
            "coords": "m469.41 312.64l0.64 3.51 0.35 2.19-5.46 0.89-0.08-0.16-0.05-0.06-0.55-0.3-0.29-0.12-0.08-0.03-1.13-0.24h-0.14l-1.34 0.25-0.11 0.08-0.1 0.11-0.01 0.14-0.03 0.24-0.05 0.16-0.08-0.01-0.06-0.07-0.74-1.03-1.01-1.73-0.12-0.48-0.08-0.32-0.3-1.04-0.25-0.71-0.2-0.4-0.01-0.02 0.33 0.12 1.86-0.29 0.9-1.5-0.2-1.14 3.36-0.56 0.19 1.18 0.37 2.13 4.47-0.79"
        }, {
            "id": "fl-12087",
            "district": "d-7",
            "path": "p-7",
            "name": "Monroe",
            "fipsCode": "12087",
            "coords": "m474.38 329.55l-0.13 0.28-0.48 0.42-0.46 0.41-0.57 0.21-0.05 0.01-0.01-0.01 0.05-0.06 0.55-0.56 1.01-0.76 0.09 0.06m4.29-6.64l-0.07 0.05-0.17 0.31-0.7 1.79-0.02 0.09 0.08 0.18-0.07 0.2-0.16 0.34-1.85 2.52-0.06 0.07-0.92 0.87-0.02-0.03v-0.01-0.06l0.37-0.56 0.26-0.23 0.54-0.62 0.35-0.42 0.61-0.93 0.11-0.19 0.66-1.41 0.79-2.02 0.27 0.06m-7.25 8.85l-0.51 0.46-0.68 0.47-0.34 0.1-0.19-0.15-0.03-0.03-0.02-0.03 1-0.57 1.38-0.77v0.02l0.07 0.13-0.06 0.08-0.62 0.29m-7.05 2.27l0.01-0.14 0.16-0.32 1.57-0.82 0.45 0.08 0.82 0.19 0.34 0.52v0.03l-0.05 0.04-0.11 0.07-0.21 0.14-0.7 0.34-4.46 1.64-0.28 0.06-0.03-0.01-0.06-0.21 0.03-0.09 0.17-0.23 0.54-0.14 0.1-0.01 0.07 0.07 0.05 0.02 0.41-0.19 0.17-0.1 0.44-0.38 0.57-0.56m6.03-15.69l0.89 5.54 0.52 2.13 0.13 0.17v0.01l-0.7 0.57-0.94 0.37-0.93 0.22-0.19-0.08-0.51-0.3-0.11-0.08-0.47-0.67-0.04-0.3 0.02-0.57 0.05-0.46 0.03-0.1 0.08-0.13 0.06-0.03 0.16 0.03 0.02-0.09-0.01-0.12-0.81-1.27-1.33-2.04-1.38-1.91 5.46-0.89"
        }, {
            "id": "fl-12086",
            "district": "d-8",
            "path": "p-8",
            "name": "Miami-Dade",
            "fipsCode": "12086",
            "coords": "m478.67 322.91l-0.27-0.06 0.12-0.6 0.44-1.48 0.09-0.16h0.05l0.09 0.44-0.21 0.95-0.31 0.91m-8.62-6.76l1.12-0.17 1.16 0.09 2.78-0.45 1.66-0.36 0.36-0.16 0.37-0.08 0.45-0.08 0.84-0.17 0.02 0.03 0.11 0.72 0.14 0.94 0.02 0.29 0.03 0.59-0.07 0.29-0.05 0.13-0.24 0.19-0.09-0.1-0.15-0.07-0.15 0.04-0.34 0.21-0.11 0.13-0.03 0.1-0.6 2.47-0.05 0.44 0.04 0.26 0.33 0.99 0.07 0.07h0.12l0.06 0.06-0.02 0.14-0.22 0.49-0.49 0.73-0.02 0.03-0.31 0.34-0.65 0.71-1.5 0.76-0.34 0.16-0.45 0.12-0.74 0.13-1.17 0.03v-0.01l-0.13-0.17-0.52-2.13-0.89-5.54-0.35-2.19"
        }, {
            "id": "fl-12011",
            "district": "d-9",
            "path": "p-9",
            "name": "Broward",
            "fipsCode": "12011",
            "coords": "m469.24 311.71l6.72-1.11 0.55-0.09 2.05-0.17 0.23 4.43-0.84 0.17-0.45 0.08-0.37 0.08-0.36 0.16-1.66 0.36-2.78 0.45-1.16-0.09-1.12 0.17-0.64-3.51-0.17-0.93"
        }, {
            "id": "fl-12099",
            "district": "d-10",
            "path": "p-10",
            "name": "Palm Beach",
            "fipsCode": "12099",
            "coords": "m467.93 303.84l5.73-0.93 0.12-0.02 2.66-0.41 0.68-0.3 0.21 0.44 0.22 0.48 0.19 0.42 0.3 0.76 0.19 1.2 0.16 1.12 0.05 0.55 0.13 2.99-0.01 0.2-2.05 0.17-0.55 0.09-6.72 1.11-1.31-7.87"
        }, {
            "id": "fl-12115",
            "district": "d-11",
            "path": "p-11",
            "name": "Sarasota",
            "fipsCode": "12115",
            "coords": "m454.05 302.76l0.32 2.23-2.27 0.32 0.05 0.35 0.11 0.76-1.38 0.19-2.04-3.08-0.12-0.17-0.17-0.23-0.11-0.15-0.51-0.64-0.3-0.3-0.61-0.61 4.47-0.59 0.31 2.24 2.25-0.32"
        }, {
            "id": "fl-12027",
            "district": "d-12",
            "path": "p-12",
            "name": "DeSoto",
            "fipsCode": "12027",
            "coords": "m459.43 300.24l0.6 3.88-5.66 0.87-0.55-3.87 2.25-0.32 1.24-0.23 2.12-0.33"
        }, {
            "id": "fl-12043",
            "district": "d-13",
            "path": "p-13",
            "name": "Glades",
            "fipsCode": "12043",
            "coords": "m466.76 300.77l1.17 3.07-0.3 2.51-2.6 0.42-4.53 0.68-0.47-3.33 3.39-0.51-0.18-1.12 0.95-1.3 2.57-0.42"
        }, {
            "id": "fl-12085",
            "district": "d-14",
            "path": "p-14",
            "name": "Martin",
            "fipsCode": "12085",
            "coords": "m475.14 298.72l1.98 3.46-0.68 0.3-2.66 0.41-0.12 0.02-5.73 0.93 1.87-3.5 2.99-0.49 1.48-0.25-0.11-0.72 0.98-0.16"
        }, {
            "id": "fl-12111",
            "district": "d-15",
            "path": "p-15",
            "name": "St. Lucie",
            "fipsCode": "12111",
            "coords": "m469.06 295.9l4.06-0.66 2.02 3.48-0.98 0.16 0.11 0.72-1.48 0.25-2.99 0.49-0.74-4.44"
        }, {
            "id": "fl-12061",
            "district": "d-16",
            "path": "p-16",
            "name": "Indian River",
            "fipsCode": "12061",
            "coords": "m466.37 292.91l4.07-0.66 0.57-0.52 0.06-0.08 2.05 3.59-4.06 0.66-1.11 0.18-0.18-1.07-1.09 0.18-0.31-2.28"
        }, {
            "id": "fl-12093",
            "district": "d-17",
            "path": "p-17",
            "name": "Okeechobee",
            "fipsCode": "12093",
            "coords": "m463.63 295.67l3.05-0.48 1.09-0.18 0.18 1.07 1.11-0.18 0.74 4.44-1.87 3.5-1.17-3.07-0.97-0.97-1.14-0.88-1.25-2.11 0.23-1.14"
        }, {
            "id": "fl-12055",
            "district": "d-18",
            "path": "p-18",
            "name": "Highlands",
            "fipsCode": "12055",
            "coords": "m458.84 296.37l4.79-0.7-0.23 1.14 1.25 2.11 1.14 0.88 0.97 0.97-2.57 0.42-0.95 1.3 0.18 1.12-3.39 0.51-0.6-3.88-0.59-3.87"
        }, {
            "id": "fl-12049",
            "district": "d-19",
            "path": "p-19",
            "name": "Hardee",
            "fipsCode": "12049",
            "coords": "m453.26 297.21l5.58-0.84 0.59 3.87-2.12 0.33-1.24 0.23-2.25 0.32-0.56-3.91"
        }, {
            "id": "fl-12081",
            "district": "d-20",
            "path": "p-20",
            "name": "Manatee",
            "fipsCode": "12081",
            "coords": "m447.57 298.06l5.69-0.85 0.56 3.91 0.23 1.64-2.25 0.32-0.31-2.24-4.47 0.59-0.65-0.61-0.36-0.68 0.29-0.13 0.39-0.26 0.76-1.21 0.04-0.09 0.08-0.39"
        }, {
            "id": "fl-12103",
            "district": "d-21",
            "path": "p-21",
            "name": "Pinellas",
            "fipsCode": "12103",
            "coords": "m445.52 291.52l0.4 2.61-0.76 0.21-0.04 0.04-0.02 0.1 0.06 0.15 0.13 0.08 1.23 0.54 0.46-0.2 0.06 0.33-0.15 0.55-0.95 2.44-0.57-0.8-1.23-3.08 0.01-0.03 0.06-0.66 0.03-0.59-0.11-0.91-0.09-0.21-0.06-0.09-0.2-0.23 1.74-0.25"
        }, {
            "id": "fl-12057",
            "district": "d-22",
            "path": "p-22",
            "name": "Hillsborough",
            "fipsCode": "12057",
            "coords": "m445.52 291.52l6.17-0.88 0.56-0.08 0.6 3.88 0.41 2.77-5.69 0.85 1.14-1.71 0.03-0.05 0.25-0.62 0.06-0.33-0.19-0.55-0.16-0.22-1.71-0.6h-0.41l-0.34 0.06-0.32 0.09-0.4-2.61"
        }, {
            "id": "fl-12053",
            "district": "d-23",
            "path": "p-23",
            "name": "Hernando",
            "fipsCode": "12053",
            "coords": "m444.64 284.89l2.56-0.37 0.06 0.36 1.74-0.27 0.02 0.25 0.15 0.21 0.46 0.51 0.23 0.14 1.45 0.36 0.38 0.59-2.24 0.32 0.08 0.56-4.35 0.64-0.44 0.07-0.1-3.37"
        }, {
            "id": "fl-12101",
            "district": "d-24",
            "path": "p-24",
            "name": "Pasco",
            "fipsCode": "12101",
            "coords": "m451.69 286.67l0.3 2.11-0.3 1.86-6.17 0.88-1.74 0.25 0.96-3.51 0.44-0.07 4.35-0.64-0.08-0.56 2.24-0.32"
        }, {
            "id": "fl-12097",
            "district": "d-25",
            "path": "p-25",
            "name": "Osceola",
            "fipsCode": "12097",
            "coords": "m456.42 287.66l8.95-1.4 0.22 1.27 0.31 2.05-0.07 0.02 0.54 3.31 0.31 2.28-3.05 0.48-0.1-0.45-0.08-0.32-0.59-0.87-0.34-0.48-2.51-2.3-0.8-0.62-2.62-1.86-0.17-1.11"
        }, {
            "id": "fl-12105",
            "district": "d-26",
            "path": "p-26",
            "name": "Polk",
            "fipsCode": "12105",
            "coords": "m456.42 287.66l0.17 1.11 2.62 1.86 0.8 0.62 2.51 2.3 0.34 0.48 0.59 0.87 0.08 0.32 0.1 0.45-4.79 0.7-5.58 0.84-0.41-2.77-0.6-3.88-0.56 0.08 0.3-1.86 1.05-0.58 3.38-0.54"
        }, {
            "id": "fl-12095",
            "district": "d-27",
            "path": "p-27",
            "name": "Orange",
            "fipsCode": "12095",
            "coords": "m458.31 281.68l-0.37 1.04 0.05 0.29 0.58 0.52 1.1 0.22 3.76-0.63 1.94 3.14-8.95 1.4-0.85-5.47 0.11-0.1 0.11-0.03 0.16-0.02 2.36-0.36"
        }, {
            "id": "fl-12117",
            "district": "d-28",
            "path": "p-28",
            "name": "Seminole",
            "fipsCode": "12117",
            "coords": "m458.31 281.68l0.34-1.27 0.61 0.49 1.46 0.32 0.24 0.05 0.06-0.01 0.37-0.18 0.12-0.25 0.82 0.69 0.37 0.47 0.73 1.13-3.76 0.63-1.1-0.22-0.58-0.52-0.05-0.29 0.37-1.04"
        }, {
            "id": "fl-12069",
            "district": "d-29",
            "path": "p-29",
            "name": "Lake",
            "fipsCode": "12069",
            "coords": "m454.8 275.84l2.06 2.07 0.76 0.5 0.47 0.26 0.46 0.35 0.03 0.04 0.13 0.66-0.06 0.69-0.34 1.27-2.36 0.36-0.16 0.02-0.11 0.03-0.11 0.1 0.85 5.47-3.38 0.54-1.13-7.81 3.31-0.5 0.02-1.34-0.44-2.71"
        }, {
            "id": "fl-12119",
            "district": "d-30",
            "path": "p-30",
            "name": "Sumter",
            "fipsCode": "12119",
            "coords": "m447.91 280.97l4-0.58 1.13 7.81-1.05 0.58-0.3-2.11-0.38-0.59-1.45-0.36-0.23-0.14-0.46-0.51-0.15-0.21-0.02-0.25 0.05-0.56 0.04-0.12 0.14-0.24 0.22-0.31 0.21-0.05 0.04-0.04 0.12-0.41-0.01-0.06-1.42-1.28-0.48-0.57"
        }, {
            "id": "fl-12017",
            "district": "d-31",
            "path": "p-31",
            "name": "Citrus",
            "fipsCode": "12017",
            "coords": "m445.25 280.26l2.66 0.71 0.48 0.57 1.42 1.28 0.01 0.06-0.12 0.41-0.04 0.04-0.21 0.05-0.22 0.31-0.14 0.24-0.04 0.12-0.05 0.56-1.74 0.27-0.06-0.36-2.56 0.37-0.18-1.91-0.08-0.41-0.07-0.16-1.49-1.14 0.07-0.13 0.12-0.14 0.29-0.28 0.21-0.06 0.17 0.01 0.7 0.15 0.66-0.39 0.2-0.14 0.01-0.03"
        }, {
            "id": "fl-12075",
            "district": "d-32",
            "path": "p-32",
            "name": "Levy",
            "fipsCode": "12075",
            "coords": "m442.96 273.83l2.93 0.63 0.53 3.42-1.48 0.22 0.31 2.16-0.01 0.03-0.2 0.14-0.66 0.39-0.7-0.15-0.17-0.01-0.21 0.06-0.29 0.28-0.12 0.14-0.07 0.13 0.02-0.43-0.11-0.34-0.68-1.11-0.27-0.12-4.01-1.13 0.9-0.8 0.48-0.87 0.24-0.81 0.4-1.72 3.17-0.11"
        }, {
            "id": "fl-12083",
            "district": "d-33",
            "path": "p-33",
            "name": "Marion",
            "fipsCode": "12083",
            "coords": "m445.89 274.46l2-0.29 0.2 0.23-0.02 0.14 0.82 0.36 0.83-0.35 0.14-0.09 0.01-0.03-0.05-0.37 0.28-0.35 0.24-0.12 0.75-0.3 1.81 0.1 0.31 0.71 0.56 0.67 0.5 0.53 0.53 0.54 0.44 2.71-0.02 1.34-3.31 0.5-4 0.58-2.66-0.71-0.31-2.16 1.48-0.22-0.53-3.42"
        }, {
            "id": "fl-12127",
            "district": "d-34",
            "path": "p-34",
            "name": "Volusia",
            "fipsCode": "12127",
            "coords": "m454.27 275.3l2.61-1.36 0.19 0.27 0.26 1.44 0.94-0.15 0.04-0.01 1.99-0.36-0.25-1.38 0.47-0.75 0.85 1.42 0.69 1.05 0.53 0.83 0.32 0.43 0.94 1.16 2.08 2.51-2.63 0.44 0.39 2.23-0.26 0.05-0.73-1.13-0.37-0.47-0.82-0.69-0.12 0.25-0.37 0.18-0.06 0.01-0.24-0.05-1.46-0.32-0.61-0.49 0.06-0.69-0.13-0.66-0.03-0.04-0.46-0.35-0.47-0.26-0.76-0.5-2.06-2.07-0.53-0.54"
        }, {
            "id": "fl-12009",
            "district": "d-35",
            "path": "p-35",
            "name": "Brevard",
            "fipsCode": "12009",
            "coords": "m463.43 283.12l0.26-0.05-0.39-2.23 2.63-0.44 2.06 2.18 0.02 0.03 0.09 0.09 0.02 0.02 0.82 1.5v0.11l-0.38 0.24-0.1 0.14-0.13 0.24v0.07l-0.01 0.01-0.04 0.19-0.02 0.35 0.02 0.36 0.03 0.32 0.16 0.67 0.32 0.98 0.44 1 0.31 0.56 0.24 0.38 0.34 0.51 0.02 0.03 0.93 1.27-0.06 0.08-0.57 0.52-4.07 0.66-0.54-3.31 0.07-0.02-0.31-2.05-0.22-1.27-1.94-3.14"
        }, {
            "id": "fl-12133",
            "district": "d-36",
            "path": "p-36",
            "name": "Washington",
            "fipsCode": "12133",
            "coords": "m405.84 263.68l0.07-0.86 0.06-0.29 0.77-0.07 0.21 0.16 0.03 0.38 1.29-0.11 0.12-0.89v-0.11l-0.03-0.13 1.06-0.11 0.85 0.48 0.28 2.79-0.56 0.07 0.16 1.67-0.67 0.07-3.38 0.33-1.19 0.51-0.27 0.31 0.4-0.77 0.38-1.87-0.18-0.19-0.05-0.39 0.51-0.89 0.14-0.09"
        }, {
            "id": "fl-12059",
            "district": "d-37",
            "path": "p-37",
            "name": "Holmes",
            "fipsCode": "12059",
            "coords": "m403.35 260.18l5.89-0.68-0.88 2.26 0.03 0.13v0.11l-0.12 0.89-1.29 0.11-0.03-0.38-0.21-0.16-0.77 0.07-0.06 0.29-0.07 0.86-2.12 0.21-0.37-3.71"
        }, {
            "id": "fl-12131",
            "district": "d-38",
            "path": "p-38",
            "name": "Walton",
            "fipsCode": "12131",
            "coords": "m401.68 260.35l1.67-0.17 0.37 3.71 2.12-0.21-0.14 0.09-0.51 0.89 0.05 0.39 0.18 0.19-0.38 1.87-0.4 0.77 0.13 1.54-4.6-0.94-0.7-7.91 2.21-0.22"
        }, {
            "id": "fl-12091",
            "district": "d-39",
            "path": "p-39",
            "name": "Okaloosa",
            "fipsCode": "12091",
            "coords": "m399.47 260.57l0.7 7.91-4.47 0.34-0.6-7.85 1.06-0.08 3.31-0.32"
        }, {
            "id": "fl-12113",
            "district": "d-40",
            "path": "p-40",
            "name": "Santa Rosa",
            "fipsCode": "12113",
            "coords": "m390.95 261.34l4.15-0.37 0.6 7.85-1.3 0.33-1.8 0.29-0.83-0.5-1.39-2.52-0.57-1.37-0.17-0.46-0.04-0.21-0.13-0.97 0.03-0.19 0.21-0.76 0.08-0.13 0.49-0.44 0.67-0.55"
        }, {
            "id": "fl-12033",
            "district": "d-41",
            "path": "p-41",
            "name": "Escambia",
            "fipsCode": "12033",
            "coords": "m386.16 261.8l4.79-0.46-0.67 0.55-0.49 0.44-0.08 0.13-0.21 0.76-0.03 0.19 0.13 0.97 0.04 0.21 0.17 0.46 0.57 1.37 1.39 2.52 0.83 0.5 1.8-0.29-2.56 0.8-0.1 0.02-0.07 0.02-0.39 0.1-0.26 0.05-0.42 0.08-1.72 0.41-1.02 0.29 0.72-0.32 0.15-1.41 0.11-2.82-0.02-0.21-0.04-0.15-0.14-0.22-0.49-0.31-0.38-0.19-0.18-0.03-0.06-0.03-0.36-0.24-1.12-1.22-0.14-0.25 0.25-1.72"
        }, {
            "id": "fl-12013",
            "district": "d-42",
            "path": "p-42",
            "name": "Calhoun",
            "fipsCode": "12013",
            "coords": "m411.11 264.87l1.48-0.15 0.84-0.14 0.79-0.59 1.81-0.2-0.52 1.21-0.37 2.37-0.53 1.86-3.03 0.33-0.47-4.69"
        }, {
            "id": "fl-12045",
            "district": "d-43",
            "path": "p-43",
            "name": "Gulf",
            "fipsCode": "12045",
            "coords": "m411.58 269.56l3.03-0.33 1.34 2.8 0.13 1.76-0.61 0.87-0.16-0.03-0.98 0.97-0.11 0.22-1.05 0.08-0.03-1.28-0.03-0.14-0.17-0.28-0.64-0.81-0.27-0.25-0.04-0.04-0.41-3.54"
        }, {
            "id": "fl-12037",
            "district": "d-44",
            "path": "p-44",
            "name": "Franklin",
            "fipsCode": "12037",
            "coords": "m421.23 270.9l2.34 0.36 0.08 0.23 0.03 0.12 0.03 0.1v0.01l-0.01 0.15-0.06 0.18-0.06 0.04-0.33 0.09-0.51-0.07-0.12-0.03-0.12-0.08-0.11-0.18-0.65 0.24-0.26 0.12-1.61 1.24-0.73 0.61-0.63 0.47-0.61 0.38-1.21 0.39-0.48 0.11-0.4-0.06-0.33 0.04-0.22 0.06-1.04 0.4 0.11-0.22 0.98-0.97 0.16 0.03 0.61-0.87-0.13-1.76 0.14-0.56 5.14-0.57"
        }, {
            "id": "fl-12029",
            "district": "d-45",
            "path": "p-45",
            "name": "Dixie",
            "fipsCode": "12029",
            "coords": "m439.57 270.94l0.22 3-0.4 1.72-0.24 0.81-0.48 0.87-0.9 0.8-0.2-0.7-0.39-0.59-0.22-0.31-0.27-0.13h-0.27l-0.52-0.24-0.88-0.45-0.26-0.14-0.03-0.07-0.35-1.81 0.76-2.13 4.43-0.63"
        }, {
            "id": "fl-12041",
            "district": "d-46",
            "path": "p-46",
            "name": "Gilchrist",
            "fipsCode": "12041",
            "coords": "m439.9 270.08l0.81-0.7 1.75 1.08 0.5 3.37-3.17 0.11-0.22-3 0.33-0.86"
        }, {
            "id": "fl-12001",
            "district": "d-47",
            "path": "p-47",
            "name": "Alachua",
            "fipsCode": "12001",
            "coords": "m443.69 268.84l1.26 0.05 0.31 0.44 0.11 0.04 1.42 0.24 0.61-0.05 0.13-0.07 0.07-0.01 0.52 0.05 0.16 0.04 0.98 0.94 0.13 0.25-0.02 0.15 0.45 3.15 0.05 0.37-0.01 0.03-0.14 0.09-0.83 0.35-0.82-0.36 0.02-0.14-0.2-0.23-2 0.29-2.93-0.63-0.5-3.37 1.23-1.62"
        }, {
            "id": "fl-12107",
            "district": "d-48",
            "path": "p-48",
            "name": "Putnam",
            "fipsCode": "12107",
            "coords": "m454.38 268.58l1.06 2.67 1.44 2.69-2.61 1.36-0.5-0.53-0.56-0.67-0.31-0.71-1.81-0.1-0.75 0.3-0.24 0.12-0.28 0.35-0.45-3.15 0.06-0.01 0.26-0.14 0.99-0.7 0.05-0.23 0.08-0.09 1.01-0.73 0.18-0.03 2.38-0.4"
        }, {
            "id": "fl-12035",
            "district": "d-49",
            "path": "p-49",
            "name": "Flagler",
            "fipsCode": "12035",
            "coords": "m455.44 271.25l3.36-1.15 1.72 2.9-0.47 0.75 0.25 1.38-1.99 0.36-0.04 0.01-0.94 0.15-0.26-1.44-0.19-0.27-1.44-2.69"
        }, {
            "id": "fl-12109",
            "district": "d-50",
            "path": "p-50",
            "name": "St. Johns",
            "fipsCode": "12109",
            "coords": "m452.74 265.17l0.6-0.26h0.26l0.73 0.24 1.16-0.2-0.32-1.87 0.63-0.1 1.34 3.48 0.94 2.26 0.02 0.04 0.14 0.29 0.11 0.23 0.45 0.82-3.36 1.15-1.06-2.67-1.64-3.41"
        }, {
            "id": "fl-12019",
            "district": "d-51",
            "path": "p-51",
            "name": "Clay",
            "fipsCode": "12019",
            "coords": "m452.74 265.17l1.64 3.41-2.38 0.4-0.18 0.03-1.01 0.73-0.08 0.09-0.05 0.23-0.99 0.7-0.26 0.14-0.81-5.4-0.08-0.56 1.11-0.16 2.31-0.38 0.31-0.07 0.34-0.05 0.13 0.89"
        }, {
            "id": "fl-12007",
            "district": "d-52",
            "path": "p-52",
            "name": "Bradford",
            "fipsCode": "12007",
            "coords": "m447.6 265.65l1.02-0.15 0.81 5.4-0.06 0.01 0.02-0.15-0.13-0.25-0.98-0.94-0.16-0.04-0.52-0.05-0.07 0.01-0.13 0.07-0.61 0.05-1.42-0.24-0.11-0.04-0.31-0.44 0.48-0.22 0.7-0.38 1.19-1.68 0.33-0.64 0.02-0.14-0.07-0.18"
        }, {
            "id": "fl-12125",
            "district": "d-53",
            "path": "p-53",
            "name": "Union",
            "fipsCode": "12125",
            "coords": "m447.6 265.65l0.07 0.18-0.02 0.14-0.33 0.64-1.19 1.68-0.7 0.38-0.48 0.22-1.26-0.05 0.43-2.6 3.48-0.59"
        }, {
            "id": "fl-12121",
            "district": "d-54",
            "path": "p-54",
            "name": "Suwannee",
            "fipsCode": "12121",
            "coords": "m440.05 264.21l0.66 5.17-0.81 0.7-0.69-0.82-0.42-0.42-0.19-0.14-1.13-0.73-0.53-0.25-0.56-0.06-0.04 0.13-0.17 0.11-0.35-0.08-0.14-0.1-0.4-0.92-0.15-0.83 0.01-0.07 0.04-0.03 0.63-1.7 0.09-0.39 0.03-0.05 0.34-0.24 0.42-0.14 0.88 0.02 0.56 0.11 1.92 0.73"
        }, {
            "id": "fl-12067",
            "district": "d-55",
            "path": "p-55",
            "name": "Lafayette",
            "fipsCode": "12067",
            "coords": "m435.18 265.87l-0.04 0.03-0.01 0.07 0.15 0.83 0.4 0.92 0.14 0.1 0.35 0.08 0.17-0.11 0.04-0.13 0.56 0.06 0.53 0.25 1.13 0.73 0.19 0.14 0.42 0.42 0.69 0.82-0.33 0.86-4.43 0.63-0.37 0.05-0.33-0.92-0.58-4.65 1.32-0.18"
        }, {
            "id": "fl-12123",
            "district": "d-56",
            "path": "p-56",
            "name": "Taylor",
            "fipsCode": "12123",
            "coords": "m433.86 266.05l0.58 4.65 0.33 0.92 0.37-0.05-0.76 2.13-0.39-0.09-1.11-0.45-0.12-0.11-0.1-0.12-0.39-0.53v-0.06l-0.07-0.24-0.13-0.2-0.58-0.68-0.51-0.35-0.09-0.06-1.22-0.53-0.66-0.19-1.04-0.46-0.72-0.43 1.54-3.04 3.87-0.52 0.07 0.56 1.13-0.15"
        }, {
            "id": "fl-12129",
            "district": "d-57",
            "path": "p-57",
            "name": "Wakulla",
            "fipsCode": "12129",
            "coords": "m418.92 267.42l5.14-0.66 0.12 0.36 1.83-0.22 0.28 2.28-1.87 0.26-1.03 0.51-0.17 0.09-0.03 0.44 0.1 0.46 0.03 0.04 0.25 0.28-2.34-0.36-0.73-0.43-0.35-0.24-0.48-0.63-0.97-1.7 0.08-0.31 0.14-0.17"
        }, {
            "id": "fl-12077",
            "district": "d-58",
            "path": "p-58",
            "name": "Liberty",
            "fipsCode": "12077",
            "coords": "m419.52 266.21l-0.6 1.21-0.14 0.17-0.08 0.31 0.97 1.7 0.48 0.63 0.35 0.24 0.73 0.43-5.14 0.57-0.14 0.56-1.34-2.8 0.53-1.86 0.37-2.37 0.52-1.21 3.49 2.42"
        }, {
            "id": "fl-12039",
            "district": "d-59",
            "path": "p-59",
            "name": "Gadsden",
            "fipsCode": "12039",
            "coords": "m421.98 262l1.11-0.08-0.45 1.22-0.51 1.51-0.05 0.11-0.16 0.14-0.23 0.1-1.48 0.75-0.69 0.46-3.49-2.42 0.59-1.43h0.02l5.34-0.36"
        }, {
            "id": "fl-12073",
            "district": "d-60",
            "path": "p-60",
            "name": "Leon",
            "fipsCode": "12073",
            "coords": "m426.12 261.71l-0.13 1.97-0.23 1.16 0.25 2.06-1.83 0.22-0.12-0.36-5.14 0.66 0.6-1.21 0.69-0.46 1.48-0.75 0.23-0.1 0.16-0.14 0.05-0.11 0.51-1.51 0.45-1.22 2.18-0.15 0.85-0.06"
        }, {
            "id": "fl-12065",
            "district": "d-61",
            "path": "p-61",
            "name": "Jefferson",
            "fipsCode": "12065",
            "coords": "m429.04 261.51l1.47-0.09 0.1 0.15 0.09 0.72-0.31 0.42-0.88 0.95-0.64 1.88-0.08 0.62-1.54 3.04-0.96-0.02-0.53-4.34 0.23-1.16 0.13-1.97 2.92-0.2"
        }, {
            "id": "fl-12079",
            "district": "d-62",
            "path": "p-62",
            "name": "Madison",
            "fipsCode": "12079",
            "coords": "m433.33 261.22l0.53-0.03 0.5 0.22 0.51 1.75 0.31 0.59 0.08 0.06 0.55 0.36-0.63 1.7-1.32 0.18-1.13 0.15-0.07-0.56-3.87 0.52 0.08-0.62 0.64-1.88 0.88-0.95 0.31-0.42-0.09-0.72-0.1-0.15 2.82-0.2"
        }, {
            "id": "fl-12047",
            "district": "d-63",
            "path": "p-63",
            "name": "Hamilton",
            "fipsCode": "12047",
            "coords": "m435.78 261.06l4.96-0.34-0.26 0.48v0.23l0.05 0.36 0.22 0.26 0.63 0.66 0.07 0.11 0.11 0.3 0.01 0.12-0.3 0.77-0.07 0.09-0.59 0.29-0.52-0.05-0.04-0.13-1.92-0.73-0.56-0.11-0.88-0.02-0.42 0.14-0.34 0.24-0.03 0.05-0.09 0.39-0.55-0.36-0.08-0.06-0.31-0.59-0.51-1.75-0.5-0.22 1.92-0.13"
        }, {
            "id": "fl-12023",
            "district": "d-64",
            "path": "p-64",
            "name": "Columbia",
            "fipsCode": "12023",
            "coords": "m441.91 260.63l1.38-0.1 0.83 5.71-0.43 2.6-1.23 1.62-1.75-1.08-0.66-5.17 0.04 0.13 0.52 0.05 0.59-0.29 0.07-0.09 0.3-0.77-0.01-0.12-0.11-0.3-0.07-0.11-0.63-0.66-0.22-0.26-0.05-0.36v-0.23l0.26-0.48 1.17-0.09"
        }, {
            "id": "fl-12003",
            "district": "d-65",
            "path": "p-65",
            "name": "Baker",
            "fipsCode": "12003",
            "coords": "m443.74 260.5l2.26-0.14 0.33 1.81 0.1 0.29 0.21 0.29 0.23 0.18 0.07 0.02 1.27-0.25 0.17 1.14 0.24 1.66-1.02 0.15-3.48 0.59-0.83-5.71 0.45-0.03"
        }, {
            "id": "fl-12031",
            "district": "d-66",
            "path": "p-66",
            "name": "Duval",
            "fipsCode": "12031",
            "coords": "m448.38 263.84l2-2.79 0.94-1.27 0.24-0.23 0.11-0.06 0.78-0.34 1.25 0.05 0.17 0.03 0.73 0.59 0.21 0.14 0.19 0.16 0.31 1.01 0.13 0.77 0.13 0.46 0.12 0.36 0.11 0.26-0.63 0.1 0.32 1.87-1.16 0.2-0.73-0.24h-0.26l-0.6 0.26-0.13-0.89-0.34 0.05-0.31 0.07-2.31 0.38-1.11 0.16-0.16-1.1"
        }, {
            "id": "fl-12089",
            "district": "d-67",
            "path": "p-67",
            "name": "Nassau",
            "fipsCode": "12089",
            "coords": "m454.19 257.27l0.41 2.55-0.73-0.59-0.17-0.03-1.25-0.05-0.78 0.34-0.11 0.06-0.24 0.23-0.94 1.27-2 2.79-0.17-1.14 0.05-0.89 0.06-0.88-0.01-0.86-0.14-0.4-0.34-0.44-0.17-0.26-0.05-0.27 0.1-1.39 1.2-0.7 0.47 0.31 1.72 0.37 1.3 0.15 0.68-0.04 0.94-0.11 0.17-0.02"
        }]
    };

    return data;

});

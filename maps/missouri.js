define(["require"], function(require){

    var data = {
        "viewBox": [295.7759704589844, 140.39500427246094, 68.260009765625, 59.03498840332031],
        "viewBoxFixed": [285, 140, 76, 66, false],
        "county": [{
            "id": "mo-29143",
            "district": "d-1",
            "path": "p-1",
            "name": "New Madrid",
            "fipsCode": "29143",
            "coords": "m358.07 187.8l1.75-0.25 2.18 2.94-0.8 1.79-0.69 0.07 0.1-0.19 0.01-0.04 0.02-0.04 0.03-0.13 0.01-0.04v-0.05l-0.01-0.02v-0.01l-0.03-0.14-0.06-0.15-0.01-0.01-0.06-0.1-0.02-0.01-0.02-0.02-0.03-0.02-0.15-0.04-0.29-0.05-0.19 0.03-0.07 0.04-0.11 0.16-0.02 0.02-0.01 0.05-0.02 0.06-0.01 0.04 0.01 0.04 0.01 0.06 0.01 0.01 0.11 0.23 0.01 0.02 0.23 0.33 0.08 2.09-0.54-0.83-0.2-0.09-0.75 0.14-0.76 0.29-1.58 0.1h-0.49l-0.18-3.12 2.65-0.15-0.24-3 0.13-0.01"
        }, {
            "id": "mo-29155",
            "district": "d-2",
            "path": "p-2",
            "name": "Pemiscot",
            "fipsCode": "29155",
            "coords": "m360.03 194.47l-0.73 2.02-0.91 2.47-2.34 0.17-0.34-5.05h0.49l1.58-0.1 0.76-0.29 0.75-0.14 0.2 0.09 0.54 0.83"
        }, {
            "id": "mo-29005",
            "district": "d-3",
            "path": "p-3",
            "name": "Atchison",
            "fipsCode": "29005",
            "coords": "m295.78 141.51l3.81 0.04 1.67 0.01 0.01 1.29h0.24l0.01 1.23-0.02 1.6-3.63-0.02 0.01-0.23v-0.02-0.02l-0.02-0.07-0.68-0.66-0.64-1.6-0.05-0.22 0.11-0.11 0.21-0.38-0.36-0.32-0.13 0.27-0.54-0.79"
        }, {
            "id": "mo-29087",
            "district": "d-4",
            "path": "p-4",
            "name": "Holt",
            "fipsCode": "29087",
            "coords": "m301.5 145.68h0.93l0.21 0.4-0.03 0.05-0.05 0.4 0.13 0.65 0.06 0.1 0.12 0.09 0.52 2.98-0.34 0.39h-0.01l-0.06 0.06-0.07 0.02-0.37 0.04h-0.05l-0.04-0.01-0.18-0.07-0.25-0.09-0.48-0.31-1.19-1.08-0.06-0.09-0.01-0.12-2.41-3.39v-0.04l3.63 0.02"
        }, {
            "id": "mo-29165",
            "district": "d-5",
            "path": "p-5",
            "name": "Platte",
            "fipsCode": "29165",
            "coords": "m302.36 155.14l4.95-0.05 0.02 0.99 0.05 3.85-1.91-0.51-1.78-2.81-1.33-1.47"
        }, {
            "id": "mo-29021",
            "district": "d-6",
            "path": "p-6",
            "name": "Buchanan",
            "fipsCode": "29021",
            "coords": "m307.24 151.36l0.02 0.94 0.05 2.79-4.95 0.05 0.39-1.18 0.11-0.16 0.34-0.5 0.04-0.04 0.72-0.64 0.2-0.03 0.21-0.46-0.08-0.36-0.08-0.38 3.03-0.03"
        }, {
            "id": "mo-29003",
            "district": "d-7",
            "path": "p-7",
            "name": "Andrew",
            "fipsCode": "29003",
            "coords": "m307.15 147.37l0.02 1.13 0.07 2.86-3.03 0.03-0.82-1.04-0.52-2.98h4.28"
        }, {
            "id": "mo-29147",
            "district": "d-8",
            "path": "p-8",
            "name": "Nodaway",
            "fipsCode": "29147",
            "coords": "m304.06 141.58l2.75 0.02 0.36 2.39-0.02 3.38h-4.28l-0.12-0.09-0.06-0.1-0.13-0.65 0.05-0.4 0.03-0.05-0.21-0.4h-0.93l0.02-1.6-0.01-1.23h-0.24l-0.01-1.29 2.8 0.02"
        }, {
            "id": "mo-29227",
            "district": "d-9",
            "path": "p-9",
            "name": "Worth",
            "fipsCode": "29227",
            "coords": "m308.38 141.58l2.32-0.06 0.22 2.44-3.75 0.03-0.36-2.39 1.57-0.02"
        }, {
            "id": "mo-29075",
            "district": "d-10",
            "path": "p-10",
            "name": "Gentry",
            "fipsCode": "29075",
            "coords": "m307.17 143.99l3.75-0.03 0.04 3.22v1.32h-3.79l-0.02-1.13 0.02-3.38"
        }, {
            "id": "mo-29063",
            "district": "d-11",
            "path": "p-11",
            "name": "DeKalb",
            "fipsCode": "29063",
            "coords": "m310.96 148.5l0.19 3.19 0.01 0.56-3.9 0.05-0.02-0.94-0.07-2.86h3.79"
        }, {
            "id": "mo-29049",
            "district": "d-12",
            "path": "p-12",
            "name": "Clinton",
            "fipsCode": "29049",
            "coords": "m311.16 152.25l0.03 2.84v0.95l-3.86 0.04-0.02-0.99-0.05-2.79 3.9-0.05"
        }, {
            "id": "mo-29047",
            "district": "d-13",
            "path": "p-13",
            "name": "Clay",
            "fipsCode": "29047",
            "coords": "m307.33 156.08l3.86-0.04 0.04 3.21-0.29-0.29-0.05-0.04-0.1-0.04h-0.34l-0.12 0.06-0.06 0.07-0.08 0.15-0.05 0.22-0.13 0.2-0.29 0.3-1 0.5-1.39 0.16 0.05-0.61-0.05-3.85"
        }, {
            "id": "mo-29025",
            "district": "d-14",
            "path": "p-14",
            "name": "Caldwell",
            "fipsCode": "29025",
            "coords": "m311.15 151.69l1.11 0.02 2-0.05 1.29-0.01 0.06 2.25 0.02 1.14-4.44 0.05-0.03-2.84-0.01-0.56"
        }, {
            "id": "mo-29061",
            "district": "d-15",
            "path": "p-15",
            "name": "Daviess",
            "fipsCode": "29061",
            "coords": "m315.4 147.13l0.07 2.25 0.08 2.27-1.29 0.01-2 0.05-1.11-0.02-0.19-3.19v-1.32l4.44-0.05"
        }, {
            "id": "mo-29081",
            "district": "d-16",
            "path": "p-16",
            "name": "Harrison",
            "fipsCode": "29081",
            "coords": "m315.16 141.36l0.2 4.07 0.04 1.7-4.44 0.05-0.04-3.22-0.22-2.44 2.11-0.06 2.35-0.1"
        }, {
            "id": "mo-29129",
            "district": "d-17",
            "path": "p-17",
            "name": "Mercer",
            "fipsCode": "29129",
            "coords": "m317.27 141.27l1.78-0.05 0.15 2.56 0.04 1.52-3.88 0.13-0.2-4.07 2.11-0.09"
        }, {
            "id": "mo-29079",
            "district": "d-18",
            "path": "p-18",
            "name": "Grundy",
            "fipsCode": "29079",
            "coords": "m319.24 145.3l0.13 3.02 0.02 0.86-3.92 0.2-0.07-2.25-0.04-1.7 3.88-0.13"
        }, {
            "id": "mo-29117",
            "district": "d-19",
            "path": "p-19",
            "name": "Livingston",
            "fipsCode": "29117",
            "coords": "m319.39 149.18l0.02 1.14 0.05 2.29 0.97-0.03-0.08 1.15-4.74 0.17-0.06-2.25-0.08-2.27 3.92-0.2"
        }, {
            "id": "mo-29033",
            "district": "d-20",
            "path": "p-20",
            "name": "Carroll",
            "fipsCode": "29033",
            "coords": "m315.61 153.9l4.74-0.17 1.8 2.96-0.41 0.03-0.42 0.17-0.91 0.81-0.56 0.95-0.11 0.06-0.4 0.1-0.13-0.02-0.06-0.06-0.65-0.76-1.06 0.71-0.67-0.08-1.03 0.56-0.11-4.12-0.02-1.14"
        }, {
            "id": "mo-29177",
            "district": "d-21",
            "path": "p-21",
            "name": "Ray",
            "fipsCode": "29177",
            "coords": "m315.63 155.04l0.11 4.12-0.73-0.09-1.39 0.2-0.55 0.44 0.03 0.05 0.01 0.14-0.21 0.18-0.11 0.08-0.13 0.02-0.14-0.02-0.2-0.1-1.09-0.81-0.04-3.21v-0.95l4.44-0.05"
        }, {
            "id": "mo-29107",
            "district": "d-22",
            "path": "p-22",
            "name": "Lafayette",
            "fipsCode": "29107",
            "coords": "m315.74 159.16l1.03-0.56 0.67 0.08 1.06-0.71-0.08 4.56v0.19l-3.36-0.04-0.01 0.37-2.77-0.05 0.04-2.94 0.2 0.1 0.14 0.02 0.13-0.02 0.11-0.08 0.21-0.18-0.01-0.14-0.03-0.05 0.55-0.44 1.39-0.2 0.73 0.09"
        }, {
            "id": "mo-29095",
            "district": "d-23",
            "path": "p-23",
            "name": "Jackson",
            "fipsCode": "29095",
            "coords": "m312.32 160.06l-0.04 2.94-0.03 1.1-4.87-0.1-0.03-2.56-0.02-0.9 1.39-0.16 1-0.5 0.29-0.3 0.13-0.2 0.05-0.22 0.08-0.15 0.06-0.07 0.12-0.06h0.34l0.1 0.04 0.05 0.04 0.29 0.29 1.09 0.81"
        }, {
            "id": "mo-29101",
            "district": "d-24",
            "path": "p-24",
            "name": "Johnson",
            "fipsCode": "29101",
            "coords": "m318.42 162.72l-0.01 4.84-5.54-0.02-0.62-3.44 0.03-1.1 2.77 0.05 0.01-0.37 3.36 0.04"
        }, {
            "id": "mo-29083",
            "district": "d-25",
            "path": "p-25",
            "name": "Henry",
            "fipsCode": "29083",
            "coords": "m318.41 167.56v0.56 3.98l-5.3 0.03-0.22-3.02-0.02-1.57 5.54 0.02"
        }, {
            "id": "mo-29037",
            "district": "d-26",
            "path": "p-26",
            "name": "Cass",
            "fipsCode": "29037",
            "coords": "m307.38 164l4.87 0.1 0.62 3.44 0.02 1.57-1.44 0.01-0.57-0.06-0.58-0.22-2.9-0.04-0.02-3.38v-1.42"
        }, {
            "id": "mo-29185",
            "district": "d-27",
            "path": "p-27",
            "name": "St. Clair",
            "fipsCode": "29185",
            "coords": "m313.11 172.13l5.3-0.03 0.24 1.74-0.03 2.07h-0.26l-0.32 0.56-0.01 0.57-0.56-0.01-1.85-0.02 0.01-0.75-2.6-0.06 0.04-1.76 0.04-2.31"
        }, {
            "id": "mo-29013",
            "district": "d-28",
            "path": "p-28",
            "name": "Bates",
            "fipsCode": "29013",
            "coords": "m307.4 168.8l2.9 0.04 0.58 0.22 0.57 0.06 1.44-0.01 0.22 3.02-0.04 2.31-0.76-0.27-0.67 0.06-0.4 0.06-3.78-0.06-0.05-4.27-0.01-1.16"
        }, {
            "id": "mo-29039",
            "district": "d-29",
            "path": "p-29",
            "name": "Cedar",
            "fipsCode": "29039",
            "coords": "m313.03 176.2l2.6 0.06-0.01 0.75 1.85 0.02 0.21 3.33h-4.66v-0.76l0.01-3.4"
        }, {
            "id": "mo-29217",
            "district": "d-30",
            "path": "p-30",
            "name": "Vernon",
            "fipsCode": "29217",
            "coords": "m313.07 174.44l-0.04 1.76-0.01 3.4-5.52-0.09v-0.25l-0.03-4.73-0.01-0.3 3.78 0.06 0.4-0.06 0.67-0.06 0.76 0.27"
        }, {
            "id": "mo-29057",
            "district": "d-31",
            "path": "p-31",
            "name": "Dade",
            "fipsCode": "29057",
            "coords": "m313.02 180.36h4.66v1.89 1.9l-4.35-0.01-0.32-0.76 0.01-3.02"
        }, {
            "id": "mo-29011",
            "district": "d-32",
            "path": "p-32",
            "name": "Barton",
            "fipsCode": "29011",
            "coords": "m313.02 179.6v0.76l-0.01 3.02-5.45-0.1-0.06-3.77 5.52 0.09"
        }, {
            "id": "mo-29097",
            "district": "d-33",
            "path": "p-33",
            "name": "Jasper",
            "fipsCode": "29097",
            "coords": "m313.01 183.38l0.32 0.76v3.15l-5.72-0.02-0.04-3.66-0.01-0.33 5.45 0.1"
        }, {
            "id": "mo-29145",
            "district": "d-34",
            "path": "p-34",
            "name": "Newton",
            "fipsCode": "29145",
            "coords": "m307.61 187.27l5.72 0.02-0.03 3.9-5.63-0.15-0.06-3.77"
        }, {
            "id": "mo-29119",
            "district": "d-35",
            "path": "p-35",
            "name": "McDonald",
            "fipsCode": "29119",
            "coords": "m313.3 191.19l-0.01 3.24-5.57 0.09-0.03-2.19-0.02-1.29 5.63 0.15"
        }, {
            "id": "mo-29109",
            "district": "d-36",
            "path": "p-36",
            "name": "Lawrence",
            "fipsCode": "29109",
            "coords": "m317.68 184.15l0.23 2.38 0.02 1.33 0.02 0.95-4.63-0.01 0.01-1.51v-3.15l4.35 0.01"
        }, {
            "id": "mo-29009",
            "district": "d-37",
            "path": "p-37",
            "name": "Barry",
            "fipsCode": "29009",
            "coords": "m313.32 188.8l4.63 0.01 0.01 1.33h0.4v4.17l-2.91 0.07-2.16 0.05 0.03-5.63"
        }, {
            "id": "mo-29167",
            "district": "d-38",
            "path": "p-38",
            "name": "Polk",
            "fipsCode": "29167",
            "coords": "m318.03 177.04l3.91 0.22 0.2 5.01-4.46-0.02v-1.89l-0.21-3.33 0.56 0.01"
        }, {
            "id": "mo-29209",
            "district": "d-39",
            "path": "p-39",
            "name": "Stone",
            "fipsCode": "29209",
            "coords": "m317.93 187.86l2.79-0.03 0.02 2.27h0.38l0.01 4.14-2.77 0.07v-4.17h-0.4l-0.01-1.33-0.02-0.95"
        }, {
            "id": "mo-29077",
            "district": "d-40",
            "path": "p-40",
            "name": "Greene",
            "fipsCode": "29077",
            "coords": "m322.14 182.27l1.11-0.01 0.02 1.89h0.16l0.03 2.35-5.55 0.03-0.23-2.38v-1.9l4.46 0.02"
        }, {
            "id": "mo-29213",
            "district": "d-41",
            "path": "p-41",
            "name": "Taney",
            "fipsCode": "29213",
            "coords": "m325.17 190.08l1.48-0.01 0.06 4.01-0.84 0.02-4.54 0.14h-0.2l-0.01-4.14 4.05-0.02"
        }, {
            "id": "mo-29043",
            "district": "d-42",
            "path": "p-42",
            "name": "Christian",
            "fipsCode": "29043",
            "coords": "m323.46 186.5l1.67 0.18 0.04 3.4-4.05 0.02h-0.38l-0.02-2.27-2.79 0.03-0.02-1.33 5.55-0.03"
        }, {
            "id": "mo-29225",
            "district": "d-43",
            "path": "p-43",
            "name": "Webster",
            "fipsCode": "29225",
            "coords": "m325.45 181.29l1.7-0.02 0.04 2.83h0.13l0.02 2.55-2.21 0.03-1.67-0.18-0.03-2.35h-0.16l-0.02-1.89 2.2-0.97"
        }, {
            "id": "mo-29059",
            "district": "d-44",
            "path": "p-44",
            "name": "Dallas",
            "fipsCode": "29059",
            "coords": "m323.06 175.92l2.2 0.02 0.03 2.28 0.13-0.01 0.03 3.08-2.2 0.97-1.11 0.01-0.2-5.01 1.12-1.34"
        }, {
            "id": "mo-29085",
            "district": "d-45",
            "path": "p-45",
            "name": "Hickory",
            "fipsCode": "29085",
            "coords": "m318.65 173.84h4.42l-0.01 2.08-1.12 1.34-3.91-0.22 0.01-0.57 0.32-0.56h0.26l0.03-2.07"
        }, {
            "id": "mo-29015",
            "district": "d-46",
            "path": "p-46",
            "name": "Benton",
            "fipsCode": "29015",
            "coords": "m318.41 168.12l2.21 0.03 0.01-0.38 1.05-0.01 1.18 0.01 0.01 3.5 0.2 2.57h-4.42l-0.24-1.74v-3.98"
        }, {
            "id": "mo-29159",
            "district": "d-47",
            "path": "p-47",
            "name": "Pettis",
            "fipsCode": "29159",
            "coords": "m318.42 162.53l1.95 0.04h2.05l0.45 0.02v3.06l-0.01 2.12-1.18-0.01-1.05 0.01-0.01 0.38-2.21-0.03v-0.56l0.01-4.84v-0.19"
        }, {
            "id": "mo-29195",
            "district": "d-48",
            "path": "p-48",
            "name": "Saline",
            "fipsCode": "29195",
            "coords": "m322.15 156.69l2.6 1.97-0.78 2.12-1.1 1.81-0.45-0.02h-2.05l-1.95-0.04 0.08-4.56 0.65 0.76 0.06 0.06 0.13 0.02 0.4-0.1 0.11-0.06 0.56-0.95 0.91-0.81 0.42-0.17 0.41-0.03"
        }, {
            "id": "mo-29041",
            "district": "d-49",
            "path": "p-49",
            "name": "Chariton",
            "fipsCode": "29041",
            "coords": "m324.46 152.5l1.67 1.12-0.02 3.75-1.36 1.29-2.6-1.97-1.8-2.96 0.08-1.15 4.03-0.08"
        }, {
            "id": "mo-29115",
            "district": "d-50",
            "path": "p-50",
            "name": "Linn",
            "fipsCode": "29115",
            "coords": "m324.33 148.12h0.08l0.05 4.38-4.03 0.08-0.97 0.03-0.05-2.29-0.02-1.14-0.02-0.86 4.96-0.2"
        }, {
            "id": "mo-29211",
            "district": "d-51",
            "path": "p-51",
            "name": "Sullivan",
            "fipsCode": "29211",
            "coords": "m319.2 143.78l2.74-0.12 2.25-0.07 0.01 0.57 0.13 3.96-4.96 0.2-0.13-3.02-0.04-1.52"
        }, {
            "id": "mo-29171",
            "district": "d-52",
            "path": "p-52",
            "name": "Putnam",
            "fipsCode": "29171",
            "coords": "m325.47 140.9l0.18 0.64-0.06 1.23 0.29 1.32-1.68 0.07-0.01-0.57-2.25 0.07-2.74 0.12-0.15-2.56 2.7-0.12 3.72-0.2"
        }, {
            "id": "mo-29197",
            "district": "d-53",
            "path": "p-53",
            "name": "Schuyler",
            "fipsCode": "29197",
            "coords": "m329.01 140.67l0.13 3.25-3.26 0.17-0.29-1.32 0.06-1.23-0.18-0.64 0.75-0.04 2.79-0.19"
        }, {
            "id": "mo-29001",
            "district": "d-54",
            "path": "p-54",
            "name": "Adair",
            "fipsCode": "29001",
            "coords": "m329.14 143.92l0.04 0.57 0.16 3.45-4.93 0.18h-0.08l-0.13-3.96 1.68-0.07 3.26-0.17"
        }, {
            "id": "mo-29121",
            "district": "d-55",
            "path": "p-55",
            "name": "Macon",
            "fipsCode": "29121",
            "coords": "m329.34 147.94l0.6 1.08 0.07 4.52h-0.02l-3.86 0.08-1.67-1.12-0.05-4.38 4.93-0.18"
        }, {
            "id": "mo-29175",
            "district": "d-56",
            "path": "p-56",
            "name": "Randolph",
            "fipsCode": "29175",
            "coords": "m329.99 153.54l0.04 3.34 0.01 1.32-1.15 0.01-2.78-0.84 0.02-3.75 3.86-0.08"
        }, {
            "id": "mo-29089",
            "district": "d-57",
            "path": "p-57",
            "name": "Howard",
            "fipsCode": "29089",
            "coords": "m326.11 157.37l2.78 0.84-1.13 3.66-2.26 0.07-0.62-0.1-0.11-0.04-0.5-0.35-0.08-0.11-0.22-0.47v-0.09l0.78-2.12 1.36-1.29"
        }, {
            "id": "mo-29053",
            "district": "d-58",
            "path": "p-58",
            "name": "Cooper",
            "fipsCode": "29053",
            "coords": "m323.97 160.78v0.09l0.22 0.47 0.08 0.11 0.5 0.35 0.11 0.04 0.62 0.1 2.26-0.07 0.61 0.62-0.8 2.2-0.2 0.58-0.07 0.29-1.28 0.11-0.94 0.03-2.21-0.05v-3.06l1.1-1.81"
        }, {
            "id": "mo-29019",
            "district": "d-59",
            "path": "p-59",
            "name": "Boone",
            "fipsCode": "29019",
            "coords": "m330.04 158.2h2.08l0.04 2.29h-0.15l-0.05 0.13-0.19 1.88-0.06 1.89-0.51 0.89 0.08 0.72-1.79-1.18-1.12-2.33-0.61-0.62 1.13-3.66 1.15-0.01"
        }, {
            "id": "mo-29051",
            "district": "d-60",
            "path": "p-60",
            "name": "Cole",
            "fipsCode": "29051",
            "coords": "m329.49 164.82l1.79 1.18 2.16 0.85-1.74 3.14-0.56 0.19-1.59-0.18 0.01-1.1h-0.92l0.85-4.08"
        }, {
            "id": "mo-29135",
            "district": "d-61",
            "path": "p-61",
            "name": "Moniteau",
            "fipsCode": "29135",
            "coords": "m328.37 162.49l1.12 2.33-0.85 4.08-1.31 0.01-2.24-2.08-0.01-1.13 0.94-0.03 1.28-0.11 0.07-0.29 0.2-0.58 0.8-2.2"
        }, {
            "id": "mo-29141",
            "district": "d-62",
            "path": "p-62",
            "name": "Morgan",
            "fipsCode": "29141",
            "coords": "m322.87 165.65l2.21 0.05 0.01 1.13 2.24 2.08-0.61 2.74-0.68 0.35-2 0.06-1.17-0.79-0.01-3.5 0.01-2.12"
        }, {
            "id": "mo-29131",
            "district": "d-63",
            "path": "p-63",
            "name": "Miller",
            "fipsCode": "29131",
            "coords": "m328.64 168.9h0.92l-0.01 1.1 1.59 0.18 0.56-0.19 0.01 0.56 0.05 1.7h0.16l0.04 1.88-2.23 0.03-0.9 0.01-0.59-0.36-0.18-0.19-0.29-0.56-0.01-0.38-0.1-0.4-0.38-0.53-0.56-0.1 0.61-2.74 1.31-0.01"
        }, {
            "id": "mo-29029",
            "district": "d-64",
            "path": "p-64",
            "name": "Camden",
            "fipsCode": "29029",
            "coords": "m326.72 171.65l0.56 0.1 0.38 0.53 0.1 0.4 0.01 0.38 0.29 0.56 0.18 0.19 0.59 0.36 0.9-0.01 0.05 2.1-0.59 0.44-0.7 0.35-0.09 0.03-0.16-0.07-0.38-0.43-0.16-0.31-0.07-0.29 0.02-0.03-0.01-0.04-2.38 0.03-2.2-0.02 0.01-2.08-0.2-2.57 1.17 0.79 2-0.06 0.68-0.35"
        }, {
            "id": "mo-29169",
            "district": "d-65",
            "path": "p-65",
            "name": "Pulaski",
            "fipsCode": "29169",
            "coords": "m331.96 174.13l1.66 0.01 0.14 5.3-2.23 0.06-0.02-0.56-1.7-0.79-0.03-1.89-0.05-2.1 2.23-0.03"
        }, {
            "id": "mo-29105",
            "district": "d-66",
            "path": "p-66",
            "name": "Laclede",
            "fipsCode": "29105",
            "coords": "m325.26 175.94l2.38-0.03 0.01 0.04-0.02 0.03 0.07 0.29 0.16 0.31 0.38 0.43 0.16 0.07 0.09-0.03 0.7-0.35 0.59-0.44 0.03 1.89 1.7 0.79 0.02 0.56 0.04 1.72-4.42 0.05-1.7 0.02-0.03-3.08-0.13 0.01-0.03-2.28"
        }, {
            "id": "mo-29229",
            "district": "d-67",
            "path": "p-67",
            "name": "Wright",
            "fipsCode": "29229",
            "coords": "m327.15 181.27l4.42-0.05 0.1 2.83 0.07 0.47 0.05 2.06-4.45 0.07-0.02-2.55h-0.13l-0.04-2.83"
        }, {
            "id": "mo-29067",
            "district": "d-68",
            "path": "p-68",
            "name": "Douglas",
            "fipsCode": "29067",
            "coords": "m333.45 186.56l-0.1 3.41-6.7 0.1-1.48 0.01-0.04-3.4 2.21-0.03 4.45-0.07 1.66-0.02"
        }, {
            "id": "mo-29153",
            "district": "d-69",
            "path": "p-69",
            "name": "Ozark",
            "fipsCode": "29153",
            "coords": "m326.65 190.07l6.7-0.1 0.07 3.84-0.31 0.02-3.9 0.16-2.5 0.09-0.06-4.01"
        }, {
            "id": "mo-29091",
            "district": "d-70",
            "path": "p-70",
            "name": "Howell",
            "fipsCode": "29091",
            "coords": "m337.87 186.46l0.07 2.08 0.04 1.32-0.01 2.37 0.06 1.37-4.61 0.21-0.07-3.84 0.1-3.41 1.1-0.04 1.27 0.02 2.05-0.08"
        }, {
            "id": "mo-29215",
            "district": "d-71",
            "path": "p-71",
            "name": "Texas",
            "fipsCode": "29215",
            "coords": "m333.76 179.44l2.23-0.05 0.55-0.02 0.1 2.27 1.1-0.04 0.13 4.86-2.05 0.08-1.27-0.02-1.1 0.04-1.66 0.02-0.05-2.06-0.07-0.47-0.1-2.83-0.04-1.72 2.23-0.06"
        }, {
            "id": "mo-29161",
            "district": "d-72",
            "path": "p-72",
            "name": "Phelps",
            "fipsCode": "29161",
            "coords": "m337.47 172.11l0.97-0.03 0.27 4.72-2.8 0.09 0.08 2.5-2.23 0.05-0.14-5.3 0.81-0.39 0.43-0.19 1.21-0.08 1.44-0.04-0.04-1.33"
        }, {
            "id": "mo-29125",
            "district": "d-73",
            "path": "p-73",
            "name": "Maries",
            "fipsCode": "29125",
            "coords": "m337.25 170.36l0.22 1.75 0.04 1.33-1.44 0.04-1.21 0.08-0.43 0.19-0.81 0.39-1.66-0.01-0.04-1.88h-0.16l-0.05-1.7 1.72-0.02 1.41-0.08 2.41-0.09"
        }, {
            "id": "mo-29151",
            "district": "d-74",
            "path": "p-74",
            "name": "Osage",
            "fipsCode": "29151",
            "coords": "m336.97 164.97l0.07-0.01 0.21 5.4-2.41 0.09-1.41 0.08-1.72 0.02-0.01-0.56 1.74-3.14 0.39-0.29 0.8-0.76 0.07-0.13 0.08-0.08 0.09-0.06 1.29-0.56 0.33-0.03 0.48 0.03"
        }, {
            "id": "mo-29027",
            "district": "d-75",
            "path": "p-75",
            "name": "Callaway",
            "fipsCode": "29027",
            "coords": "m332.16 160.49l4.73-0.14 0.08 4.62-0.48-0.03-0.33 0.03-1.29 0.56-0.09 0.06-0.08 0.08-0.07 0.13-0.8 0.76-0.39 0.29-2.16-0.85-0.08-0.72 0.51-0.89 0.06-1.89 0.19-1.88 0.05-0.13h0.15"
        }, {
            "id": "mo-29137",
            "district": "d-76",
            "path": "p-76",
            "name": "Monroe",
            "fipsCode": "29137",
            "coords": "m335.74 152.61l0.16 4.14-5.87 0.13-0.04-3.34h0.02l1.11-0.03-0.02-0.77 3.34-0.08 1.3-0.05"
        }, {
            "id": "mo-29205",
            "district": "d-77",
            "path": "p-77",
            "name": "Shelby",
            "fipsCode": "29205",
            "coords": "m333.23 148.92l1.11-0.03 0.1 3.77-3.34 0.08 0.02 0.77-1.11 0.03-0.07-4.52 3.29-0.1"
        }, {
            "id": "mo-29103",
            "district": "d-78",
            "path": "p-78",
            "name": "Knox",
            "fipsCode": "29103",
            "coords": "m329.18 144.49l3.89-0.13 0.02 0.57 0.14 3.99-3.29 0.1-0.6-1.08-0.16-3.45"
        }, {
            "id": "mo-29199",
            "district": "d-79",
            "path": "p-79",
            "name": "Scotland",
            "fipsCode": "29199",
            "coords": "m332.96 140.4l0.11 3.96-3.89 0.13-0.04-0.57-0.13-3.25 1.65-0.11 2.3-0.16"
        }, {
            "id": "mo-29045",
            "district": "d-80",
            "path": "p-80",
            "name": "Clark",
            "fipsCode": "29045",
            "coords": "m335.17 140.4l0.2 0.12 0.78 0.58 0.02 0.09-0.03 0.26 0.03 0.09 0.98 1.21 0.41 0.33 0.64 0.04-0.72 1.72-4.39 0.09-0.02-0.57-0.11-3.96h2.21"
        }, {
            "id": "mo-29111",
            "district": "d-81",
            "path": "p-81",
            "name": "Lewis",
            "fipsCode": "29111",
            "coords": "m337.48 144.84l-0.06 0.63 0.69 3.29-3.77 0.13-1.11 0.03-0.14-3.99 4.39-0.09"
        }, {
            "id": "mo-29127",
            "district": "d-82",
            "path": "p-82",
            "name": "Marion",
            "fipsCode": "29127",
            "coords": "m338.11 148.76l0.98 2.38 0.59 0.93-3.94 0.54-1.3 0.05-0.1-3.77 3.77-0.13"
        }, {
            "id": "mo-29173",
            "district": "d-83",
            "path": "p-83",
            "name": "Ralls",
            "fipsCode": "29173",
            "coords": "m335.74 152.61l3.94-0.54 1.39 1.06-0.25 0.01-2.44 2.04 0.29 1.71h-1.3l-1.47 0.05v-0.19l-0.16-4.14"
        }, {
            "id": "mo-29007",
            "district": "d-84",
            "path": "p-84",
            "name": "Audrain",
            "fipsCode": "29007",
            "coords": "m330.03 156.88l5.87-0.13v0.19l1.47-0.05h1.3l0.41 2.27-2.19 1.19-4.73 0.14-0.04-2.29h-2.08l-0.01-1.32"
        }, {
            "id": "mo-29139",
            "district": "d-85",
            "path": "p-85",
            "name": "Montgomery",
            "fipsCode": "29139",
            "coords": "m340.55 159.12l0.06 1.91 0.09 1.94-1.5 0.05 0.05 1.76-2.21 0.18-0.07 0.01-0.08-4.62 2.19-1.19 1.47-0.04"
        }, {
            "id": "mo-29163",
            "district": "d-86",
            "path": "p-86",
            "name": "Pike",
            "fipsCode": "29163",
            "coords": "m341.07 153.13l2.37 2.46 2.42 2.15-2.82 0.15-1.78 0.06 0.04 1.15-0.75 0.02-1.47 0.04-0.41-2.27-0.29-1.71 2.44-2.04 0.25-0.01"
        }, {
            "id": "mo-29113",
            "district": "d-87",
            "path": "p-87",
            "name": "Lincoln",
            "fipsCode": "29113",
            "coords": "m345.86 157.74l0.47 1.59-0.01 0.16-0.27 0.42-0.01 0.04 0.02 0.09 0.54 1.44-2.87 0.98-1.05 0.03-0.75-0.73-0.57-0.74-0.75 0.01-0.06-1.91 0.75-0.02-0.04-1.15 1.78-0.06 2.82-0.15"
        }, {
            "id": "mo-29219",
            "district": "d-88",
            "path": "p-88",
            "name": "Warren",
            "fipsCode": "29219",
            "coords": "m340.61 161.03l0.75-0.01 0.57 0.74 0.75 0.73 1.05-0.03 0.17 4.2-2.69-1.09-0.07-0.12-0.83-0.68-0.12-0.01-0.44 0.14-0.5-0.12-0.05-1.76 1.5-0.05-0.09-1.94"
        }, {
            "id": "mo-29073",
            "district": "d-89",
            "path": "p-89",
            "name": "Gasconade",
            "fipsCode": "29073",
            "coords": "m339.75 164.9l0.13 2.46 0.14 2.31 0.06 1.58-1.64 0.83-0.97 0.03-0.22-1.75-0.21-5.4 2.21-0.18 0.5 0.12"
        }, {
            "id": "mo-29055",
            "district": "d-90",
            "path": "p-90",
            "name": "Crawford",
            "fipsCode": "29055",
            "coords": "m340.08 171.25l2.73-0.06 0.27 6.03-0.51 0.58-1.59 0.04-0.03-1.13-2.24 0.09-0.27-4.72 1.64-0.83"
        }, {
            "id": "mo-29065",
            "district": "d-91",
            "path": "p-91",
            "name": "Dent",
            "fipsCode": "29065",
            "coords": "m342.57 177.8l0.06 1.42-1.6 0.01 0.04 1.14 1.04-0.01 0.05 1.13-4.42 0.11-1.1 0.04-0.1-2.27-0.55 0.02-0.08-2.5 2.8-0.09 2.24-0.09 0.03 1.13 1.59-0.04"
        }, {
            "id": "mo-29203",
            "district": "d-92",
            "path": "p-92",
            "name": "Shannon",
            "fipsCode": "29203",
            "coords": "m337.74 181.6l4.42-0.11 0.37-0.01 1.08 3.06 0.74 1-0.93 0.16-1.1 0.06 0.08 2.63-4.46 0.15-0.07-2.08-0.13-4.86"
        }, {
            "id": "mo-29149",
            "district": "d-93",
            "path": "p-93",
            "name": "Oregon",
            "fipsCode": "29149",
            "coords": "m337.94 188.54l4.46-0.15 1.13 0.73 0.11 4.24-2.88 0.15-0.44 0.01-2.29 0.08-0.06-1.37 0.01-2.37-0.04-1.32"
        }, {
            "id": "mo-29181",
            "district": "d-94",
            "path": "p-94",
            "name": "Ripley",
            "fipsCode": "29181",
            "coords": "m343.53 189.12l0.74-0.02 1.6 0.04 2.31-0.11 1.12 4.01-2.14 0.12-3.52 0.2-0.11-4.24"
        }, {
            "id": "mo-29035",
            "district": "d-95",
            "path": "p-95",
            "name": "Carter",
            "fipsCode": "29035",
            "coords": "m344.35 185.54l2.46 0.46 1.12 1.54 0.25 1.49-2.31 0.11-1.6-0.04-0.74 0.02-1.13-0.73-0.08-2.63 1.1-0.06 0.93-0.16"
        }, {
            "id": "mo-29179",
            "district": "d-96",
            "path": "p-96",
            "name": "Reynolds",
            "fipsCode": "29179",
            "coords": "m342.63 179.22l1.97-0.31 1.93-0.09 0.1 2.43 0.29 1.88 0.18-0.03 0.05 0.57 0.01 0.79-0.39 0.65 0.04 0.89-2.46-0.46-0.74-1-1.08-3.06-0.37 0.01-0.05-1.13-1.04 0.01-0.04-1.14 1.6-0.01"
        }, {
            "id": "mo-29093",
            "district": "d-97",
            "path": "p-97",
            "name": "Iron",
            "fipsCode": "29093",
            "coords": "m347.68 177.03l1.18 1.13 0.1 4.23-1.86 0.71-0.18 0.03-0.29-1.88-0.1-2.43-1.93 0.09-1.97 0.31-0.06-1.42 0.51-0.58 4.6-0.19"
        }, {
            "id": "mo-29221",
            "district": "d-98",
            "path": "p-98",
            "name": "Washington",
            "fipsCode": "29221",
            "coords": "m345.98 171.02l1.51 1.58 0.19 4.43-4.6 0.19-0.27-6.03 3.17-0.17"
        }, {
            "id": "mo-29071",
            "district": "d-99",
            "path": "p-99",
            "name": "Franklin",
            "fipsCode": "29071",
            "coords": "m343.9 166.66l2.25-1.32 0.09 2.25-0.26 3.43-3.17 0.17-2.73 0.06-0.06-1.58-0.14-2.31-0.13-2.46 0.44-0.14 0.12 0.01 0.83 0.68 0.07 0.12 2.69 1.09"
        }, {
            "id": "mo-29510",
            "district": "d-100",
            "path": "p-100",
            "name": "St. Louis City",
            "fipsCode": "29510",
            "coords": "m351.43 163.71l0.21 1.04-0.67 1.71-0.41-0.22-0.13-0.68-0.15-1.02 0.24-0.51 0.41-0.31 0.5-0.01"
        }, {
            "id": "mo-29183",
            "district": "d-101",
            "path": "p-101",
            "name": "St. Charles",
            "fipsCode": "29183",
            "coords": "m348.71 160.92l1.78 0.43 0.25 0.08 0.26 0.12 0.19 0.11 0.97 0.6 0.04 0.07 0.01 0.07-0.03 0.3-0.02 0.12-0.1-0.18-0.16-0.11-0.17 0.01-0.25 0.17-0.17-0.07-0.62-0.37-0.09-0.1-0.73 0.06-0.01 0.16-0.08 0.17-0.06 0.1-0.12 0.1-0.14 0.01-0.36-0.07h-0.11l-0.07 0.03-0.07 0.08-0.23 0.43-0.51 1.09 0.01 0.15-0.07 0.12-0.16 0.09-0.15 0.02-0.86-0.05-0.07 0.02-0.13 0.1-0.29 0.46-0.24 0.1-2.25 1.32-0.17-4.2 2.87-0.98 2.11-0.56"
        }, {
            "id": "mo-29189",
            "district": "d-102",
            "path": "p-102",
            "name": "St. Louis County",
            "fipsCode": "29189",
            "coords": "m352.16 162.82l-0.73 0.89-0.5 0.01-0.41 0.31-0.24 0.51 0.15 1.02 0.13 0.68 0.41 0.22-0.04 0.16-0.7 1.81-0.07-0.3-0.64-1.18-1.85 0.1-1.32 0.33-0.11 0.21-0.09-2.25 0.24-0.1 0.29-0.46 0.13-0.1 0.07-0.02 0.86 0.05 0.15-0.02 0.16-0.09 0.07-0.12-0.01-0.15 0.51-1.09 0.23-0.43 0.07-0.08 0.07-0.03h0.11l0.36 0.07 0.14-0.01 0.12-0.1 0.06-0.1 0.08-0.17 0.01-0.16 0.73-0.06 0.09 0.1 0.62 0.37 0.17 0.07 0.25-0.17 0.17-0.01 0.16 0.11 0.1 0.18"
        }, {
            "id": "mo-29099",
            "district": "d-103",
            "path": "p-103",
            "name": "Jefferson",
            "fipsCode": "29099",
            "coords": "m346.24 167.59l0.11-0.21 1.32-0.33 1.85-0.1 0.64 1.18 0.07 0.3-0.02 0.03-0.05 0.09-0.15 0.5-0.01 0.06-0.01 0.13 0.02 0.54 0.13 0.58 0.12 0.29 0.18 0.25 0.03 0.04 0.03 0.03 0.85 0.83-1.58 1.11-2.28-0.31-1.51-1.58 0.26-3.43"
        }, {
            "id": "mo-29187",
            "district": "d-104",
            "path": "p-104",
            "name": "St. Francois",
            "fipsCode": "29187",
            "coords": "m347.49 172.6l2.28 0.31 0.98 0.73-1.29 1.42 0.82 0.79 1.95 1.77 0.44-0.42 0.47 0.34-0.34 0.4-3.94 0.22-1.18-1.13-0.19-4.43"
        }, {
            "id": "mo-29186",
            "district": "d-105",
            "path": "p-105",
            "name": "Ste. Genevieve",
            "fipsCode": "29186",
            "coords": "m351.86 172.18l2.85 2.61-1.57 2.75-0.47-0.34-0.44 0.42-1.95-1.77-0.82-0.79 1.29-1.42-0.98-0.73 1.58-1.11 0.51 0.38"
        }, {
            "id": "mo-29123",
            "district": "d-106",
            "path": "p-106",
            "name": "Madison",
            "fipsCode": "29123",
            "coords": "m352.8 177.94l0.03 0.58 0.13 0.72 0.11 2.98-0.73 0.01-3.38 0.16-0.1-4.23 3.94-0.22"
        }, {
            "id": "mo-29223",
            "district": "d-107",
            "path": "p-107",
            "name": "Wayne",
            "fipsCode": "29223",
            "coords": "m348.96 182.39l3.38-0.16 0.12 2.97 1.15-0.07 0.03 0.59-1.41 1.63-4.3 0.19-1.12-1.54-0.04-0.89 0.39-0.65-0.01-0.79-0.05-0.57 1.86-0.71"
        }, {
            "id": "mo-29023",
            "district": "d-108",
            "path": "p-108",
            "name": "Butler",
            "fipsCode": "29023",
            "coords": "m352.23 187.35l0.5 1.32 0.35 0.79 0.07 0.02 0.1 0.07 0.33 0.64 0.13 0.46-0.03 0.25-0.09 0.16-0.64 1.77-3.65 0.21-1.12-4.01-0.25-1.49 4.3-0.19"
        }, {
            "id": "mo-29069",
            "district": "d-109",
            "path": "p-109",
            "name": "Dunklin",
            "fipsCode": "29069",
            "coords": "m355.53 190.96l0.18 3.12 0.34 5.05-3.41 0.25-0.82 0.05 1.59-2.77 1.13-0.99 0.07-0.12 0.11-0.29-0.07-1.03-0.1-0.13-0.92-1.3-0.4 0.01-0.28 0.02 0.64-1.77 1.94-0.1"
        }, {
            "id": "mo-29207",
            "district": "d-110",
            "path": "p-110",
            "name": "Stoddard",
            "fipsCode": "29207",
            "coords": "m356.06 184.45l1.03-0.06 0.2 1.19 0.2 0.28 0.17 0.26 0.22 0.54 0.16 0.44 0.03 0.7-0.13 0.01 0.24 3-2.65 0.15-1.94 0.1 0.09-0.16 0.03-0.25-0.13-0.46-0.33-0.64-0.1-0.07-0.07-0.02-0.35-0.79-0.5-1.32 1.41-1.63 0.94-0.05 0.6-0.23-0.06-0.94 0.94-0.05"
        }, {
            "id": "mo-29017",
            "district": "d-111",
            "path": "p-111",
            "name": "Bollinger",
            "fipsCode": "29017",
            "coords": "m355.72 178.31l0.34 6.14-0.94 0.05 0.06 0.94-0.6 0.23-0.94 0.05-0.03-0.59-1.15 0.07-0.12-2.97 0.73-0.01-0.11-2.98-0.13-0.72 2.89-0.21"
        }, {
            "id": "mo-29157",
            "district": "d-112",
            "path": "p-112",
            "name": "Perry",
            "fipsCode": "29157",
            "coords": "m354.71 174.79l2.73 0.75 1.75 2.9v0.07l-3.47-0.2-2.89 0.21-0.03-0.58 0.34-0.4 1.57-2.75"
        }, {
            "id": "mo-29031",
            "district": "d-113",
            "path": "p-113",
            "name": "Cape Girardeau",
            "fipsCode": "29031",
            "coords": "m355.72 178.31l3.47 0.2v0.12l0.07 0.26 0.29 0.54 0.19 0.28 0.27 0.26 0.12 0.16 0.16 0.37 0.01 0.01v0.02l0.06 0.21 0.01 0.02-0.01 0.02-0.04 0.39-0.04 0.12-0.01 0.02-0.01 0.01-0.01 0.01-0.11 0.06-0.37 0.1 0.01 1.13-2.69 1.77-1.03 0.06-0.34-6.14"
        }, {
            "id": "mo-29201",
            "district": "d-114",
            "path": "p-114",
            "name": "Scott",
            "fipsCode": "29201",
            "coords": "m359.78 182.62l0.26 0.37 0.63 1.17 0.36 0.88 0.68 0.56-1.89 1.95-1.75 0.25-0.03-0.7-0.16-0.44-0.22-0.54-0.17-0.26-0.2-0.28-0.2-1.19 2.69-1.77"
        }, {
            "id": "mo-29133",
            "district": "d-115",
            "path": "p-115",
            "name": "Mississippi",
            "fipsCode": "29133",
            "coords": "m361.71 185.6l1.96 0.21 0.37 0.47-0.39 1.29h-0.01l-0.28 0.16-0.01 0.01v0.3h0.01l0.59 0.31-0.4 1.79-1.55 0.35-2.18-2.94 1.89-1.95"
        }]
    };

    return data;

});

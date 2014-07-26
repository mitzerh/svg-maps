define(["require"], function(require){

    var data = {
        "viewBox": [375.2979736328125, 208.32699584960938, 39.3800048828125, 63.677001953125],
        "viewBoxFixed": [345, 208, 42, 66, false],
        "county": [{
            "id": "al-01069",
            "district": "d-1",
            "path": "p-1",
            "name": "Houston",
            "fipsCode": "01069",
            "coords": "m409.67 255.32l3.62-0.33-0.12 0.35-0.07 0.33 0.15 0.91 0.11 0.27 0.1 0.05h0.09l0.08 0.02 0.52 0.58 0.09 0.14 0.11 0.26 0.33 0.93-5.33 0.65-0.09-1.02-0.17-1.58-1.09 0.19-1.37 0.14 0.39-0.98 0.06-0.05 0.26-0.09 0.18-0.01 0.18 0.01 0.37 0.09 0.29 0.08 0.49 0.05 0.17-0.02 0.7-0.6-0.05-0.37"
        }, {
            "id": "al-01067",
            "district": "d-2",
            "path": "p-2",
            "name": "Henry",
            "fipsCode": "01067",
            "coords": "m409.25 251.42l-0.13-1.13 2.19-0.19 0.05-0.1 0.17-0.5 0.29-0.36 0.05-0.03h0.07l0.18 0.05 0.11 0.1 1.19 2.98-0.13 2.75-3.62 0.33-0.42-3.9"
        }, {
            "id": "al-01061",
            "district": "d-3",
            "path": "p-3",
            "name": "Geneva",
            "fipsCode": "01061",
            "coords": "m405.75 257.29l0.88-0.08 1.37-0.14 1.09-0.19 0.17 1.58 0.09 1.02-0.11 0.02-5.89 0.68-1.67 0.17-0.33-2.54 4.4-0.52"
        }, {
            "id": "al-01045",
            "district": "d-4",
            "path": "p-4",
            "name": "Dale",
            "fipsCode": "01045",
            "coords": "m405.64 251.83l3.61-0.41 0.42 3.9 0.05 0.37-0.7 0.6-0.17 0.02-0.49-0.05-0.29-0.08-0.37-0.09-0.18-0.01-0.18 0.01-0.26 0.09-0.06 0.05-0.39 0.98-0.88 0.08-0.56-5.41 0.45-0.05"
        }, {
            "id": "al-01031",
            "district": "d-5",
            "path": "p-5",
            "name": "Coffee",
            "fipsCode": "01031",
            "coords": "m405.19 251.88l0.56 5.41-4.4 0.52-0.34-3.18-0.12-1.16 0.41-0.04 0.13-0.11-0.13-1.03 3.89-0.41"
        }, {
            "id": "al-01039",
            "district": "d-6",
            "path": "p-6",
            "name": "Covington",
            "fipsCode": "01039",
            "coords": "m397.57 253.88l1.08-0.14 1.1-0.13 0.2-0.02 0.05 0.19 0.08 0.74 0.19 0.17 0.74-0.06 0.34 3.18 0.33 2.54-2.21 0.22-3.31 0.32-0.37-2.52-0.43-4.25 2.21-0.24"
        }, {
            "id": "al-01097",
            "district": "d-7",
            "path": "p-7",
            "name": "Mobile",
            "fipsCode": "01097",
            "coords": "m381.86 260.03l0.09 0.18 0.24 1.02 0.33 1.75-0.47 0.87-0.31 1.21-0.02 0.28 0.19 0.45 0.24 0.46-0.16-0.05-0.04 0.02-0.51 0.54-0.31 1.89-0.97 1.87-0.64-0.2-0.9-0.02-0.25 0.04-0.12 0.04-0.21 0.22v0.01l-0.57-4.69-0.41-3.37-0.19-1.49 1.12-0.09 1.1-0.34 2.24-0.32 0.53-0.28"
        }, {
            "id": "al-01003",
            "district": "d-8",
            "path": "p-8",
            "name": "Baldwin",
            "fipsCode": "01003",
            "coords": "m383.99 258.1l1.7 0.54 0.47 3.16-0.25 1.72 0.14 0.25 1.12 1.22 0.36 0.24 0.06 0.03 0.18 0.03 0.38 0.19 0.49 0.31 0.14 0.22 0.04 0.15 0.02 0.21-0.11 2.82-0.15 1.41-0.72 0.32-1.5 0.53-1.57 0.4-0.42 0.07-1.38 0.08-0.05-0.07 0.57-0.21 1.5-0.95-1.99-4.03-0.14-0.2-0.07-0.05-0.51-0.19-0.15-0.05-0.24-0.46-0.19-0.45 0.02-0.28 0.31-1.21 0.47-0.87-0.33-1.75-0.24-1.02-0.09-0.18 0.26-0.42 1.87-1.51"
        }, {
            "id": "al-01053",
            "district": "d-9",
            "path": "p-9",
            "name": "Escambia",
            "fipsCode": "01053",
            "coords": "m395.79 258.37l0.37 2.52-1.06 0.08-4.15 0.37-4.79 0.46-0.47-3.16 0.64 0.16 0.11-0.04 0.61-0.44 0.69-0.07 7.27-0.7-0.02 0.09-0.01 0.56 0.01 0.12 0.04 0.05 0.09 0.08 0.5 0.01 0.17-0.09"
        }, {
            "id": "al-01035",
            "district": "d-10",
            "path": "p-10",
            "name": "Conecuh",
            "fipsCode": "01035",
            "coords": "m395.36 254.12l0.43 4.25-0.17 0.09-0.5-0.01-0.09-0.08-0.04-0.05-0.01-0.12 0.01-0.56 0.02-0.09-7.27 0.7v-0.08l0.08-0.17 1.18-1.69 0.67-0.75 0.78-2.28 0.03-0.24 1.13-1.01 0.92-0.51 0.25-0.12 0.06-0.01 0.15 1.54 0.58 1.09 0.28 0.22 1.51-0.12"
        }, {
            "id": "al-01129",
            "district": "d-11",
            "path": "p-11",
            "name": "Washington",
            "fipsCode": "01129",
            "coords": "m375.92 253.58l4.1-0.35 0.01 0.55 0.2 0.7 0.56 0.49 0.15 0.09 0.45 0.16 0.41 0.1 0.43 0.39 0.31 1.25 0.01 0.08-0.03 0.42-0.11 0.4-0.22 0.23-0.19 0.26-0.15 0.52 0.27 0.74-0.26 0.42-0.53 0.28-2.24 0.32-1.1 0.34-1.12 0.09-0.95-7.48"
        }, {
            "id": "al-01023",
            "district": "d-12",
            "path": "p-12",
            "name": "Choctaw",
            "fipsCode": "01023",
            "coords": "m375.75 245.68l5.32-0.47-0.51 0.07-0.28 0.18-0.15 0.16-0.82 3.08 0.05 0.47 0.05 0.13 0.08 0.09 0.09 0.05 0.28 0.03 0.16 3.76-4.1 0.35-0.27-2.52 0.08-4.33 0.02-1.05"
        }, {
            "id": "al-01025",
            "district": "d-13",
            "path": "p-13",
            "name": "Clarke",
            "fipsCode": "01025",
            "coords": "m384.27 249.08l2 1.92-0.17 0.21-0.39 1.56 0.16 1.72 0.14 1.27-0.08 0.39-0.23 0.3-0.13 0.08-0.14-0.02-0.23-0.18-0.14 0.01-0.12 0.05-1.01 0.85-0.19 0.47v0.06l0.03 0.13 0.04 0.08 0.18 0.12-1.87 1.51-0.27-0.74 0.15-0.52 0.19-0.26 0.22-0.23 0.11-0.4 0.03-0.42-0.01-0.08-0.31-1.25-0.43-0.39-0.41-0.1-0.45-0.16-0.15-0.09-0.56-0.49-0.2-0.7-0.01-0.55-0.16-3.76 4.41-0.39"
        }, {
            "id": "al-01099",
            "district": "d-14",
            "path": "p-14",
            "name": "Monroe",
            "fipsCode": "01099",
            "coords": "m392.74 250.39l0.1 1-0.06 0.01-0.25 0.12-0.92 0.51-1.13 1.01-0.03 0.24-0.78 2.28-0.67 0.75-1.18 1.69-0.08 0.17v0.08l-0.69 0.07-0.61 0.44-0.11 0.04-0.64-0.16-1.7-0.54-0.18-0.12-0.04-0.08-0.03-0.13v-0.06l0.19-0.47 1.01-0.85 0.12-0.05 0.14-0.01 0.23 0.18 0.14 0.02 0.13-0.08 0.23-0.3 0.08-0.39-0.14-1.27-0.16-1.72 0.39-1.56 0.17-0.21 2.92-0.29 1.59-0.12 1.96-0.2"
        }, {
            "id": "al-01131",
            "district": "d-15",
            "path": "p-15",
            "name": "Wilcox",
            "fipsCode": "01131",
            "coords": "m386.08 245.37l0.3-0.08 0.06 0.04 1.35 0.94 1.74 1.6 2.94-0.28 0.64 1.05-0.37 1.75-1.96 0.2-1.59 0.12-2.92 0.29-2-1.92 0.45-0.23-0.13-1.63 0.95-1.67 0.09-0.16 0.1-0.03 0.19-0.02 0.16 0.03"
        }, {
            "id": "al-01013",
            "district": "d-16",
            "path": "p-16",
            "name": "Butler",
            "fipsCode": "01013",
            "coords": "m393.11 248.64l4.45-0.47 0.34 3.18 0.05 0.79-0.55 0.06 0.17 1.68-2.21 0.24-1.51 0.12-0.28-0.22-0.58-1.09-0.15-1.54-0.1-1 0.37-1.75"
        }, {
            "id": "al-01041",
            "district": "d-17",
            "path": "p-17",
            "name": "Crenshaw",
            "fipsCode": "01041",
            "coords": "m400.34 247.86l0.96 4.43 0.13 1.03-0.13 0.11-0.41 0.04 0.12 1.16-0.74 0.06-0.19-0.17-0.08-0.74-0.05-0.19-0.2 0.02-1.1 0.13-1.08 0.14-0.17-1.68 0.55-0.06-0.05-0.79-0.34-3.18 0.34-1.15 1.11-0.13 0.13 1.12 1.2-0.15"
        }, {
            "id": "al-01109",
            "district": "d-18",
            "path": "p-18",
            "name": "Pike",
            "fipsCode": "01109",
            "coords": "m402.34 246.56l0.44-0.19 0.48 0.04 0.2 0.07 0.52 0.99 0.82 1.04 1.45-0.16-0.61 3.48-0.45 0.05-3.89 0.41-0.96-4.43 2-1.3"
        }, {
            "id": "al-01011",
            "district": "d-19",
            "path": "p-19",
            "name": "Bullock",
            "fipsCode": "01011",
            "coords": "m408.18 243.53l0.38 1.11-0.18 0.11 0.1 1.13 0.07 0.47-0.89 0.3-0.86 0.32-0.49 0.97-0.07 0.31 0.01 0.1-1.45 0.16-0.82-1.04-0.52-0.99-0.2-0.07-0.48-0.04-0.44 0.19 0.53-2.96 0.67 0.43 0.09 0.03 4.55-0.53"
        }, {
            "id": "al-01087",
            "district": "d-20",
            "path": "p-20",
            "name": "Macon",
            "fipsCode": "01087",
            "coords": "m404.84 239.2l0.02 0.18 2.34 0.85 0.55-0.07 0.17 1.12 0.26 2.25-4.55 0.53-0.09-0.03-0.67-0.43-1.32-1.76 1.38-1.09 0.96-0.12 0.32-1.17 0.63-0.26"
        }, {
            "id": "al-01085",
            "district": "d-21",
            "path": "p-21",
            "name": "Lowndes",
            "fipsCode": "01085",
            "coords": "m393.1 243.73l0.3-0.67 0.03-0.06 0.48-0.09 1.29-0.15 1.34 0.58 1.36 3.68-0.34 1.15-4.45 0.47-0.64-1.05 0.63-3.86"
        }, {
            "id": "al-01101",
            "district": "d-22",
            "path": "p-22",
            "name": "Montgomery",
            "fipsCode": "01101",
            "coords": "m397.38 242.4l1.49-1.34 0.12 0.01 0.16 0.06 0.08 0.05 0.52 0.56-0.05 0.08 0.85 0.17 0.75 0.06 0.25-0.21 1.32 1.76-0.53 2.96-2 1.3-1.2 0.15-0.13-1.12-1.11 0.13-1.36-3.68 0.84-0.94"
        }, {
            "id": "al-01051",
            "district": "d-23",
            "path": "p-23",
            "name": "Elmore",
            "fipsCode": "01051",
            "coords": "m401.27 237.52l1.33-0.14 0.03 0.01 0.02 0.17-0.1 0.38 0.31 2.67 0.04 0.1 0.03 0.04-1.38 1.09-0.25 0.21-0.75-0.06-0.85-0.17 0.05-0.08-0.52-0.56-0.08-0.05-0.16-0.06-0.12-0.01-1.49 1.34-0.41-3.82 0.32-0.65 3.98-0.41"
        }, {
            "id": "al-01001",
            "district": "d-24",
            "path": "p-24",
            "name": "Autauga",
            "fipsCode": "01001",
            "coords": "m396.97 238.58l0.41 3.82-0.84 0.94-1.34-0.58-1.29 0.15-0.48 0.09-0.03 0.06-0.3 0.67-1.5-4.06 1.09-0.05 1.11-0.13-0.07-0.57 3.24-0.34"
        }, {
            "id": "al-01047",
            "district": "d-25",
            "path": "p-25",
            "name": "Dallas",
            "fipsCode": "01047",
            "coords": "m390.43 238.93l1.17 0.74 1.5 4.06-0.63 3.86-2.94 0.28-1.74-1.6-1.35-0.94-0.06-0.04-0.3 0.08-0.05-0.55 0.55-0.06-0.22-2.25 1.87-0.19 1.47-0.19 0.09-0.18 0.29-1.02 0.17-0.78 0.18-1.22"
        }, {
            "id": "al-01091",
            "district": "d-26",
            "path": "p-26",
            "name": "Marengo",
            "fipsCode": "01091",
            "coords": "m382.11 242.35l0.89-0.08 0.06 0.56 2.21-0.21 0.76 2.2 0.05 0.55-0.16-0.03-0.19 0.02-0.1 0.03-0.09 0.16-0.95 1.67 0.13 1.63-0.45 0.23-4.41 0.39-0.28-0.03-0.09-0.05-0.08-0.09-0.05-0.13-0.05-0.47 0.82-3.08 0.15-0.16 0.28-0.18 0.51-0.07-0.48-0.39-0.82-0.32-0.03-0.08 0.02-0.51 0.06-0.17 1.2-1.22 0.09-0.06 0.55-0.17 0.45 0.06"
        }, {
            "id": "al-01119",
            "district": "d-27",
            "path": "p-27",
            "name": "Sumter",
            "fipsCode": "01119",
            "coords": "m375.92 236.81l1.81-0.21-0.12 1.1 0.22 0.94 1.3 2.72 0.25 0.32 0.04 0.01 0.46-0.14 0.36-0.16 0.08-0.08 0.21-0.15 0.18-0.09 0.1 0.01 0.11 0.06 0.74 1.15-0.55 0.17-0.09 0.06-1.2 1.22-0.06 0.17-0.02 0.51 0.03 0.08 0.82 0.32 0.48 0.39-5.32 0.47 0.08-3.5 0.08-4.57 0.01-0.8"
        }, {
            "id": "al-01105",
            "district": "d-28",
            "path": "p-28",
            "name": "Perry",
            "fipsCode": "01105",
            "coords": "m385.92 237.47l1.1-0.11 0.05 0.56 0.75-0.07 2.47-0.3 0.14 1.38-0.18 1.22-0.17 0.78-0.29 1.02-0.09 0.18-1.47 0.19-1.87 0.19 0.22 2.25-0.55 0.06-0.76-2.2-0.21-2.23 0.43-1.68 0.43-1.24"
        }, {
            "id": "al-01021",
            "district": "d-29",
            "path": "p-29",
            "name": "Chilton",
            "fipsCode": "01021",
            "coords": "m395.44 234.66l1.85 3.27-0.32 0.65-3.24 0.34 0.07 0.57-1.11 0.13-1.09 0.05-1.17-0.74-0.14-1.38 1.54-0.14-0.19-1.9-0.13-0.85-0.04-0.28 1.73-0.13 1.19-0.07 0.18 0.25 0.35 0.22 0.52 0.01"
        }, {
            "id": "al-01037",
            "district": "d-30",
            "path": "p-30",
            "name": "Coosa",
            "fipsCode": "01037",
            "coords": "m399.01 233.2h1.78l0.48 4.32-3.98 0.41-1.85-3.27 0.18-1.09 3.39-0.37"
        }, {
            "id": "al-01123",
            "district": "d-31",
            "path": "p-31",
            "name": "Tallapoosa",
            "fipsCode": "01123",
            "coords": "m404.57 232.58l0.65-0.08 0.53 4.88-0.91 1.82-0.63 0.26-0.32 1.17-0.96 0.12-0.03-0.04-0.04-0.1-0.31-2.67 0.1-0.38-0.02-0.17-0.03-0.01-1.33 0.14-0.48-4.32 3.78-0.62"
        }, {
            "id": "al-01027",
            "district": "d-32",
            "path": "p-32",
            "name": "Clay",
            "fipsCode": "01027",
            "coords": "m401.91 227.76l-0.35 0.33 0.01 0.09 1.12-0.12 0.16-0.2-0.02-0.19 1.3-0.11 0.44 5.02-3.78 0.62h-1.78l-0.11-1.17 0.88-1.39 1.11-1.24 0.46-1.58 0.56-0.06"
        }, {
            "id": "al-01121",
            "district": "d-33",
            "path": "p-33",
            "name": "Talladega",
            "fipsCode": "01121",
            "coords": "m398.54 225.77l1.02-0.05 0.3 0.34 0.1 0.48 0.31 0.25 2.13-0.21 0.03 0.38-0.52 0.8-0.56 0.06-0.46 1.58-1.11 1.24-0.88 1.39 0.11 1.17-3.39 0.37-0.05-0.83 1.22-1.8 0.1-0.78-0.15-0.21-0.29-0.21 1.14-1.41 0.44-0.96-0.05-0.06-0.11-0.24v-0.07l0.5-1.13 0.17-0.1"
        }, {
            "id": "al-01117",
            "district": "d-34",
            "path": "p-34",
            "name": "Shelby",
            "fipsCode": "01117",
            "coords": "m394.77 227.89l1.68 1.85 0.29 0.21 0.15 0.21-0.1 0.78-1.22 1.8 0.05 0.83-0.18 1.09-0.52-0.01-0.35-0.22-0.18-0.25-1.19 0.07-1.73 0.13 0.04 0.28-1.8-2.38 0.5-0.18 0.31-0.17 0.22-0.16 0.41-0.71 2.05-1.98 0.74-0.08 0.86-0.83-0.03-0.28"
        }, {
            "id": "al-01007",
            "district": "d-35",
            "path": "p-35",
            "name": "Bibb",
            "fipsCode": "01007",
            "coords": "m389.29 232.31l0.42-0.03 1.8 2.38 0.13 0.85 0.19 1.9-1.54 0.14-2.47 0.3-0.75 0.07-0.05-0.56-1.1 0.11-0.16-1.67 1.11-0.13-0.03-1.14 0.27-0.53 0.81-0.91 0.46-0.51 0.09-0.05 0.71-0.21 0.11-0.01"
        }, {
            "id": "al-01065",
            "district": "d-36",
            "path": "p-36",
            "name": "Hale",
            "fipsCode": "01065",
            "coords": "m382.61 236.04l3.15-0.24 0.16 1.67-0.43 1.24-0.43 1.68 0.21 2.23-2.21 0.21-0.06-0.56-0.89 0.08 0.57-1.21-0.53-0.64-0.42-1.26-0.2-0.98-0.02-0.27 1.1-1.95"
        }, {
            "id": "al-01063",
            "district": "d-37",
            "path": "p-37",
            "name": "Greene",
            "fipsCode": "01063",
            "coords": "m381.14 234.26l1.47 1.78-1.1 1.95 0.02 0.27 0.2 0.98 0.42 1.26 0.53 0.64-0.57 1.21-0.45-0.06-0.74-1.15-0.11-0.06-0.1-0.01-0.18 0.09-0.21 0.15-0.08 0.08-0.36 0.16-0.46 0.14-0.04-0.01-0.25-0.32-1.3-2.72-0.22-0.94 0.12-1.1-0.02-0.06 0.93-0.63 0.82-0.45 0.36-0.13 1.32-1.07"
        }, {
            "id": "al-01107",
            "district": "d-38",
            "path": "p-38",
            "name": "Pickens",
            "fipsCode": "01107",
            "coords": "m380.69 229.47l0.45 4.79-1.32 1.07-0.36 0.13-0.82 0.45-0.93 0.63 0.02 0.06-1.81 0.21 0.08-3.87 0.06-3.2 3.51-0.16 1.12-0.11"
        }, {
            "id": "al-01125",
            "district": "d-39",
            "path": "p-39",
            "name": "Tuscaloosa",
            "fipsCode": "01125",
            "coords": "m385.05 228.08l0.19-0.01 0.94 0.1 0.09 0.94 0.55-0.03-0.37 0.33 0.19 0.63 0.72 0.79 0.43 0.37 0.99 0.59 0.51 0.52-0.11 0.01-0.71 0.21-0.09 0.05-0.46 0.51-0.81 0.91-0.27 0.53 0.03 1.14-1.11 0.13-3.15 0.24-1.47-1.78-0.45-4.79 1.07-0.03 0.79-0.09-0.05-0.66 0.33-0.51 2.22-0.1"
        }, {
            "id": "al-01073",
            "district": "d-40",
            "path": "p-40",
            "name": "Jefferson",
            "fipsCode": "01073",
            "coords": "m389.79 224.87l0.7-0.43 1.33-0.1 1.21 0.71 0.81 0.08 0.37-0.04 0.25 0.55 0.08 0.84-0.07 0.28-0.09 0.02-0.07 0.19 0.07 0.75 0.1 0.09 0.29 0.08 0.03 0.28-0.86 0.83-0.74 0.08-2.05 1.98-0.41 0.71-0.22 0.16-0.31 0.17-0.5 0.18-0.42 0.03-0.51-0.52-0.99-0.59-0.43-0.37-0.72-0.79-0.19-0.63 0.37-0.33 0.24-0.13 0.31-0.23 1.17-1.29 0.23-0.4 0.19-0.39 0.68-1.38 0.15-0.39"
        }, {
            "id": "al-01127",
            "district": "d-41",
            "path": "p-41",
            "name": "Walker",
            "fipsCode": "01127",
            "coords": "m387.48 222.77l2.15 1.55 0.16 0.55-0.15 0.39-0.68 1.38-0.19 0.39-0.23 0.4-1.17 1.29-0.31 0.23-0.24 0.13-0.55 0.03-0.09-0.94-0.94-0.1-0.19 0.01-0.11-1.12-1.11 0.06-0.24-2.26-1.11 0.04-0.05-0.56-0.1-1.12 5.15-0.35"
        }, {
            "id": "al-01075",
            "district": "d-42",
            "path": "p-42",
            "name": "Lamar",
            "fipsCode": "01075",
            "coords": "m376.22 222.91l2.34-0.11 0.4 0.35 0.18 2.11 0.32 3.13 0.11 1.19-3.51 0.16 0.05-2.74 0.11-4.09"
        }, {
            "id": "al-01057",
            "district": "d-43",
            "path": "p-43",
            "name": "Fayette",
            "fipsCode": "01057",
            "coords": "m379.08 224.47l3.35-0.23 0.05 0.56 1.11-0.04 0.24 2.26 1.11-0.06 0.11 1.12-2.22 0.1-0.33 0.51 0.05 0.66-0.79 0.09-1.07 0.03-1.12 0.11-0.11-1.19-0.32-3.13-0.06-0.79"
        }, {
            "id": "al-01059",
            "district": "d-44",
            "path": "p-44",
            "name": "Franklin",
            "fipsCode": "01059",
            "coords": "m376.37 216.09l6.44-0.37 0.3 3.4-1.11 0.06-0.9 0.04-2.33 0.16-2.48 0.1 0.05-1.84 0.03-1.55"
        }, {
            "id": "al-01093",
            "district": "d-45",
            "path": "p-45",
            "name": "Marion",
            "fipsCode": "01093",
            "coords": "m376.29 219.48l2.48-0.1 2.33-0.16 0.9-0.04 0.33 3.94 0.1 1.12-3.35 0.23-0.12-1.32-0.4-0.35-2.34 0.11 0.01-0.37 0.06-3.06"
        }, {
            "id": "al-01133",
            "district": "d-46",
            "path": "p-46",
            "name": "Winston",
            "fipsCode": "01133",
            "coords": "m383.11 219.12l4.43-0.34-0.06 3.99-5.15 0.35-0.33-3.94 1.11-0.06"
        }, {
            "id": "al-01043",
            "district": "d-47",
            "path": "p-47",
            "name": "Cullman",
            "fipsCode": "01043",
            "coords": "m387.53 218.59l5.58-0.42 1.42 0.45-0.34 0.02-0.31 0.11-0.04 0.03-0.6 1.49-0.06 0.1-1.41 1.81-0.96 0.84-0.78 0.78-0.4 0.52-2.15-1.55 0.06-3.99-0.01-0.19"
        }, {
            "id": "al-01009",
            "district": "d-48",
            "path": "p-48",
            "name": "Blount",
            "fipsCode": "01009",
            "coords": "m394.53 218.62l1.78 1.91-0.17 0.36-0.32 1.76 0.47-0.05-0.38 0.99-0.28 0.36-0.29 0.32h-0.09l-0.09-0.05-1.36 0.43 0.04 0.48-0.81-0.08-1.21-0.71-1.33 0.1-0.7 0.43-0.16-0.55 0.4-0.52 0.78-0.78 0.96-0.84 1.41-1.81 0.06-0.1 0.6-1.49 0.04-0.03 0.31-0.11 0.34-0.02"
        }, {
            "id": "al-01115",
            "district": "d-49",
            "path": "p-49",
            "name": "St. Clair",
            "fipsCode": "01115",
            "coords": "m396.29 222.6l-0.01-0.04 0.07-0.14 0.24-0.4 0.14-0.1 0.83-0.08 0.11 0.05 0.08 0.14 0.23 0.55 0.28 0.26 0.14 0.09 0.22-0.09 0.56 0.74 0.13 0.12 0.03 0.08 0.02 0.83-0.81 0.73-0.04 0.13 0.03 0.3-0.17 0.1-0.5 1.13v0.07l0.11 0.24 0.05 0.06-0.44 0.96-1.14 1.41-1.68-1.85-0.29-0.08-0.1-0.09-0.07-0.75 0.07-0.19 0.09-0.02 0.07-0.28-0.08-0.84-0.25-0.55-0.37 0.04-0.04-0.48 1.36-0.43 0.09 0.05h0.09l0.29-0.32 0.28-0.36 0.38-0.99"
        }, {
            "id": "al-01015",
            "district": "d-50",
            "path": "p-50",
            "name": "Calhoun",
            "fipsCode": "01015",
            "coords": "m402.46 221.58l2.24 0.11-1.03 0.97 0.13 1.32 0.17 1.61-0.15 0.29-0.84 1.02-0.55 0.06-0.03-0.38-2.13 0.21-0.31-0.25-0.1-0.48-0.3-0.34-1.02 0.05-0.03-0.3 0.04-0.13 0.81-0.73-0.02-0.83-0.03-0.08-0.13-0.12 0.17-0.02 0.28-0.15 0.26-0.21 0.59-0.6 0.31-0.51 0.18-0.11 0.64-0.06 0.87 0.09-0.02-0.43"
        }, {
            "id": "al-01055",
            "district": "d-51",
            "path": "p-51",
            "name": "Etowah",
            "fipsCode": "01055",
            "coords": "m398.26 219l2.77-0.28 0.15 1.14 0.47 0.04 0.8 1.41 0.01 0.27 0.02 0.43-0.87-0.09-0.64 0.06-0.18 0.11-0.31 0.51-0.59 0.6-0.26 0.21-0.28 0.15-0.17 0.02-0.56-0.74-0.22 0.09-0.14-0.09-0.28-0.26-0.23-0.55-0.08-0.14-0.11-0.05-0.83 0.08-0.14 0.1-0.24 0.4-0.07 0.14 0.01 0.04-0.47 0.05 0.32-1.76 0.17-0.36 1.95-1.53"
        }, {
            "id": "al-01095",
            "district": "d-52",
            "path": "p-52",
            "name": "Marshall",
            "fipsCode": "01095",
            "coords": "m395.4 214.09l1.88-0.18 0.13 0.74 0.99 0.74-0.14 3.61-1.95 1.53-1.78-1.91-1.42-0.45 0.02-3.15 0.23 0.54 0.36 0.23 0.36 0.06 0.36-0.13 1.05-0.53 0.14-0.38 0.09-0.49-0.06-0.17-0.14-0.07-0.12 0.01"
        }, {
            "id": "al-01103",
            "district": "d-53",
            "path": "p-53",
            "name": "Morgan",
            "fipsCode": "01103",
            "coords": "m390.6 215.21l2.53-0.19-0.02 3.15-5.58 0.42-0.4-4.81 3.47 1.43"
        }, {
            "id": "al-01079",
            "district": "d-54",
            "path": "p-54",
            "name": "Lawrence",
            "fipsCode": "01079",
            "coords": "m383.62 212.62l1.79 0.37 1.72 0.79 0.4 4.81 0.01 0.19-4.43 0.34-0.3-3.4 0.81-3.1"
        }, {
            "id": "al-01033",
            "district": "d-55",
            "path": "p-55",
            "name": "Colbert",
            "fipsCode": "01033",
            "coords": "m376.48 212.04l0.4-0.19 0.18-0.05 0.74 0.25 0.23 0.17 0.16 0.22 0.07 0.13 0.09 0.29 0.12 0.19 0.84 0.65 0.08 0.05 0.32 0.1 0.47-0.09 0.28-0.15 0.05-0.06 0.18-0.31 1.22-0.72 0.42-0.18 0.23-0.05 0.08 0.01 0.98 0.32-0.81 3.1-6.44 0.37 0.11-4.05"
        }, {
            "id": "al-01077",
            "district": "d-56",
            "path": "p-56",
            "name": "Lauderdale",
            "fipsCode": "01077",
            "coords": "m385.51 209.85l0.13-0.01-0.23 3.15-1.79-0.37-0.98-0.32-0.08-0.01-0.23 0.05-0.42 0.18-1.22 0.72-0.18 0.31-0.05 0.06-0.28 0.15-0.47 0.09-0.32-0.1-0.08-0.05-0.84-0.65-0.12-0.19-0.09-0.29-0.07-0.13-0.16-0.22-0.23-0.17-0.74-0.25-0.18 0.05-0.4 0.19-1.18-1.25 2.24-0.33 3.96-0.3 4.01-0.31"
        }, {
            "id": "al-01083",
            "district": "d-57",
            "path": "p-57",
            "name": "Limestone",
            "fipsCode": "01083",
            "coords": "m389.56 209.56l0.55-0.05 0.49 5.7-3.47-1.43-1.72-0.79 0.23-3.15 3.92-0.28"
        }, {
            "id": "al-01089",
            "district": "d-58",
            "path": "p-58",
            "name": "Madison",
            "fipsCode": "01089",
            "coords": "m395.05 209.03l0.22 0.58-0.27 1.45-0.1 1.32 0.12 1.32 0.38 0.39 0.12-0.01 0.14 0.07 0.06 0.17-0.09 0.49-0.14 0.38-1.05 0.53-0.36 0.13-0.36-0.06-0.36-0.23-0.23-0.54-2.53 0.19-0.49-5.7 4.86-0.48h0.08"
        }, {
            "id": "al-01071",
            "district": "d-59",
            "path": "p-59",
            "name": "Jackson",
            "fipsCode": "01071",
            "coords": "m402.44 208.33l0.4 1.57-0.66 1.45-1.13 1.83-1.8 1.91-0.3 0.2-0.24 0.09-0.31 0.01-0.99-0.74-0.13-0.74-1.88 0.18-0.38-0.39-0.12-1.32 0.1-1.32 0.27-1.45-0.22-0.58 4.68-0.46 2.71-0.24"
        }, {
            "id": "al-01049",
            "district": "d-60",
            "path": "p-60",
            "name": "DeKalb",
            "fipsCode": "01049",
            "coords": "m402.84 209.9l0.85 3 0.13 0.44 0.22 0.82-0.06-0.02-0.04 0.02-0.5 0.58-0.06 0.75-0.33 0.71-1.37 1.67-0.37 0.05-0.25 0.24-0.07 0.14 0.04 0.42-2.77 0.28 0.14-3.61 0.31-0.01 0.24-0.09 0.3-0.2 1.8-1.91 1.13-1.83 0.66-1.45"
        }, {
            "id": "al-01019",
            "district": "d-61",
            "path": "p-61",
            "name": "Cherokee",
            "fipsCode": "01019",
            "coords": "m404.04 214.16l0.89 3 0.72 2.61 0.41 1.47-1.36 0.45-2.24-0.11-0.01-0.27-0.8-1.41-0.47-0.04-0.15-1.14-0.04-0.42 0.07-0.14 0.25-0.24 0.37-0.05 1.37-1.67 0.33-0.71 0.06-0.75 0.5-0.58 0.04-0.02 0.06 0.02"
        }, {
            "id": "al-01029",
            "district": "d-62",
            "path": "p-62",
            "name": "Cleburne",
            "fipsCode": "01029",
            "coords": "m406.06 221.24l0.22 0.79 0.87 3.15 0.61 2.14-3.63 0.24-1.3 0.11 0.02 0.19-0.16 0.2-1.12 0.12-0.01-0.09 0.35-0.33 0.52-0.8 0.55-0.06 0.84-1.02 0.15-0.29-0.17-1.61-0.13-1.32 1.03-0.97 1.36-0.45"
        }, {
            "id": "al-01111",
            "district": "d-63",
            "path": "p-63",
            "name": "Randolph",
            "fipsCode": "01111",
            "coords": "m404.13 227.56l3.63-0.24 0.19 0.7 1.05 3.77 0.07 0.27-3.85 0.44-0.65 0.08-0.44-5.02"
        }, {
            "id": "al-01017",
            "district": "d-64",
            "path": "p-64",
            "name": "Chambers",
            "fipsCode": "01017",
            "coords": "m409.07 232.06l0.87 3 0.69 1.53-1.19 0.16-0.38 0.23-3.31 0.4-0.53-4.88 3.85-0.44"
        }, {
            "id": "al-01081",
            "district": "d-65",
            "path": "p-65",
            "name": "Lee",
            "fipsCode": "01081",
            "coords": "m405.75 237.38l3.31-0.4 0.38-0.23 1.19-0.16 0.78 1.72 1.03 1.15-0.57 0.55-1.93 0.52-0.9 0.61-1.12 0.14-0.17-1.12-0.55 0.07-2.34-0.85-0.02-0.18 0.91-1.82"
        }, {
            "id": "al-01113",
            "district": "d-66",
            "path": "p-66",
            "name": "Russell",
            "fipsCode": "01113",
            "coords": "m412.74 241.24l-0.12 0.46 0.02 0.11 0.07 0.07 0.72 0.2 0.26 0.22 0.11 0.21-0.09 0.41-0.02 0.04-1.18 2.31-1.39 0.18-0.08-0.03-0.45-0.47-0.04-0.12-0.34-0.4-1.65 0.21-0.38-1.11-0.26-2.25 1.12-0.14 0.9-0.61 1.93-0.52 0.57-0.55 0.3 1.78"
        }, {
            "id": "al-01005",
            "district": "d-67",
            "path": "p-67",
            "name": "Barbour",
            "fipsCode": "01005",
            "coords": "m412.51 245.27l0.03 0.97-0.5 2.76 0.19 0.26-0.11-0.1-0.18-0.05h-0.07l-0.05 0.03-0.29 0.36-0.17 0.5-0.05 0.1-2.19 0.19 0.13 1.13-3.61 0.41 0.61-3.48-0.01-0.1 0.07-0.31 0.49-0.97 0.86-0.32 0.89-0.3-0.07-0.47-0.1-1.13 0.18-0.11 1.65-0.21 0.34 0.4 0.04 0.12 0.45 0.47 0.08 0.03 1.39-0.18"
        }]
    };

    return data;

});
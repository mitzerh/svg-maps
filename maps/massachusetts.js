define(["require"], function(require){

    var data = {
        "viewBox": [505.85198974609375, 80.5739974975586, 35.60198974609375, 19.132003784179688],
        "viewBoxFixed": [503.5, 76, 40, 23, false],
        "county": [{
            "id": "ma-25027",
            "district": "d-1",
            "path": "p-1",
            "name": "Worcester",
            "fipsCode": "25027",
            "coords": "m518.7 85.203l0.04 0.09 0.69 0.707 0.47-0.108 0.15-0.135 0.75 0.094 0.37 0.045 1.37 0.559 0.15 0.267 0.06 0.703 0.04 0.72-0.11 0.366-0.29 0.568 0.64 1.613 0.25 0.235 0.3 0.098 0.8 0.127 0.27 1.798-2.75 0.843-0.06-0.189-2.4 0.572-0.4 0.082-0.32 0.062-0.41-1.654-0.61 0.162-0.65-0.139-0.05-0.163 0.01-0.098 0.23-0.609-1.17-1.014-0.17-0.663-0.05-1.104 0.11-0.671-0.2-1.073-0.61-1.321 3.27-0.708 0.28-0.062"
        }, {
            "id": "ma-25017",
            "district": "d-2",
            "path": "p-2",
            "name": "Middlesex",
            "fipsCode": "25017",
            "coords": "m524.5 83.382l0.36 0.861 0.92 0.617 1.04 0.622 0.75 0.951-0.05 0.347-0.22 0.486-0.37 0.344-0.39 0.247 0.05 1.014-0.45-0.356-0.03-0.018-0.23-0.022-0.16 0.022-0.5 0.338 0.12 0.185 0.22 0.288 0.13 0.271-0.22 0.699-0.47 0.414-0.62 0.46-0.8-0.127-0.3-0.098-0.25-0.235-0.64-1.613 0.29-0.568 0.11-0.366-0.04-0.72-0.06-0.703-0.15-0.267-1.37-0.559-0.37-0.045-0.75-0.094-0.15 0.135-0.47 0.108-0.69-0.707-0.04-0.09 2.28-0.51 0.14-0.031 0.04-0.009 3.11-0.717 0.23-0.554"
        }, {
            "id": "ma-25019",
            "district": "d-3",
            "path": "p-3",
            "name": "Nantucket",
            "fipsCode": "25019",
            "coords": "m540.11 98.431l0.09-0.045 0.15-0.172 0.11-0.202 0.07-0.262-0.05-0.261-0.05-0.09-0.1-0.091-0.09-0.072-0.05-0.045-0.01-0.049 0.17 0.036 0.2 0.175 0.85 0.97 0.05 0.18v0.135l-0.01 0.027-0.06 0.09-0.23 0.167-0.12 0.054-0.76 0.176-0.21 0.04-0.53-0.036-0.91-0.18-0.12-0.054-0.09-0.072-0.05-0.104 0.14-0.036 0.13 0.027 0.05 0.018 0.47-0.018 0.67-0.175 0.29-0.131"
        }, {
            "id": "ma-25001",
            "district": "d-4",
            "path": "p-4",
            "name": "Barnstable",
            "fipsCode": "25001",
            "coords": "m534.21 93.149l0.07 0.067 0.19 0.135 0.27 0.153 0.25 0.1 0.6 0.063 0.37-0.023 0.96-0.099 1.31-0.802 0.48-0.325 0.31-0.283 0.1-0.212 0.02-0.109-0.11-0.374-0.18-0.46-0.08-0.18-0.3-0.423-0.96-1.127-0.15-0.104-0.17-0.063-0.26-0.063-0.07 0.014-0.13 0.071-0.06 0.064-0.06 0.095-0.03 0.157 0.01 0.068-0.53-0.207-0.03-0.037 0.03-0.13 0.1-0.104 0.16-0.09 0.16-0.05 0.27-0.027 0.45 0.023 0.35 0.077 0.27 0.117 0.32 0.216 0.29 0.297 0.38 0.433 0.29 0.428 0.45 0.771 0.21 0.424 0.31 0.833 0.18 0.618 0.03 0.284-0.15 1.231-0.09 0.089-0.03-0.856-0.02-0.072-0.05-0.081-0.24-0.113-0.11-0.027-0.07 0.014-2.86 1.279-0.12 0.055-2.09 1.807-0.34 0.433-0.35-0.036-0.2-2.51 0.65-1.429"
        }, {
            "id": "ma-25025",
            "district": "d-5",
            "path": "p-5",
            "name": "Suffolk",
            "fipsCode": "25025",
            "coords": "m527.57 86.433l0.46 0.181 0.21 1.514-1.65 0.743-0.05-1.014 0.39-0.247 0.37-0.344 0.22-0.486 0.05-0.347"
        }, {
            "id": "ma-25005",
            "district": "d-6",
            "path": "p-6",
            "name": "Bristol",
            "fipsCode": "25005",
            "coords": "m525.84 93.072l2.4-2.127 0.73 1.581 0.81 1.47 0.95 0.374 0.43 0.297 1.01 1.547-0.17-0.01-0.43 0.063-0.18 0.23-0.1 0.136-0.02 0.031 0.03 0.419 0.05 0.153 0.14 0.298-0.83 0.775-0.78 0.235-1.29-2.042-0.39-0.365-1.08-0.6-1.28-2.465"
        }, {
            "id": "ma-25023",
            "district": "d-7",
            "path": "p-7",
            "name": "Plymouth",
            "fipsCode": "25023",
            "coords": "m529.14 88.448l0.87-0.271 0.46 0.067 0.09 0.01 0.08 0.05 0.51 0.342 1.16 1.289 1.68 2.217 0.16 0.37 0.06 0.627-0.65 1.429-1.39 1.636-1.01-1.547-0.43-0.297-0.95-0.374-0.81-1.47-0.73-1.581 0.9-2.497"
        }, {
            "id": "ma-25021",
            "district": "d-8",
            "path": "p-8",
            "name": "Norfolk",
            "fipsCode": "25021",
            "coords": "m528.24 88.128l0.9 0.32-0.9 2.497-2.4 2.127-1.19-0.122-0.27-1.798 0.62-0.46 0.47-0.414 0.22-0.699-0.13-0.271-0.22-0.288-0.12-0.185 0.5-0.338 0.16-0.022 0.23 0.022 0.03 0.018 0.45 0.356 1.65-0.743"
        }, {
            "id": "ma-25009",
            "district": "d-9",
            "path": "p-9",
            "name": "Essex",
            "fipsCode": "25009",
            "coords": "m528.03 80.574l0.06 0.27 0.35 0.829 0.54 1.037 0.56 0.248-0.9 1.87-0.61 1.786-0.46-0.181-0.75-0.951-1.04-0.622-0.92-0.617-0.36-0.861 0.06-0.136 0.51-1.022 0.12-0.127 0.22-0.189 0.67-0.568 0.87-0.645 0.08-0.031 0.06-0.032 0.27-0.018 0.67-0.04"
        }, {
            "id": "ma-25013",
            "district": "d-10",
            "path": "p-10",
            "name": "Hampden",
            "fipsCode": "25013",
            "coords": "m517.24 91.819l-0.23 0.609-0.01 0.098 0.05 0.163 0.65 0.139 0.61-0.162 0.41 1.654-3.46 0.821-4.64 1.095-0.41 0.094-0.35-0.635-0.05-0.117-0.11-0.573 0.36-0.022-0.03-1.429-0.18-0.775 0.33-0.505 0.55-0.09 0.12 0.077 0.25 0.838-0.14 0.27 0.39 0.199 0.87 0.131 0.93-0.014 0.77-0.572 1.68-0.695 1.64-0.599"
        }, {
            "id": "ma-25015",
            "district": "d-11",
            "path": "p-11",
            "name": "Hampshire",
            "fipsCode": "25015",
            "coords": "m516.07 90.805l1.17 1.014-1.64 0.599-1.68 0.695-0.77 0.572-0.93 0.014-0.87-0.131-0.39-0.199 0.14-0.27-0.25-0.838-0.12-0.077-0.55 0.09-0.33 0.505-0.03 0.108-0.21 0.009-0.39-0.18-0.21-0.64v-0.113l0.53-0.009-0.04-1.149-0.07-0.965-0.11-0.184 1.19 0.667 1.57 0.04 1.61-0.077 0.48-0.207 1.1-0.099 0.8 0.825"
        }, {
            "id": "ma-25003",
            "district": "d-12",
            "path": "p-12",
            "name": "Berkshire",
            "fipsCode": "25003",
            "coords": "m506.08 87.916l2.23-0.483 1.01 2.223 0.11 0.184 0.07 0.965 0.04 1.149-0.53 0.009v0.113l0.21 0.64 0.39 0.18 0.21-0.009 0.03-0.108 0.18 0.775 0.03 1.429-0.36 0.022 0.11 0.573 0.05 0.117 0.35 0.635-4.05 0.857-0.09 0.022-0.22-0.437 0.14-5.688 0.09-3.168"
        }, {
            "id": "ma-25011",
            "district": "d-13",
            "path": "p-13",
            "name": "Franklin",
            "fipsCode": "25011",
            "coords": "m513.53 86.32l1.62-0.347 0.61 1.321 0.2 1.073-0.11 0.671 0.05 1.104 0.17 0.663-0.8-0.825-1.1 0.099-0.48 0.207-1.61 0.077-1.57-0.04-1.19-0.667-1.01-2.223 0.86-0.18 4.36-0.933"
        }, {
            "id": "ma-25007",
            "district": "d-14",
            "path": "p-14",
            "name": "Dukes",
            "fipsCode": "25007",
            "coords": "m534.83 97.543l1.53 0.27 0.12 0.293 0.13 0.541-0.01 0.077-2.69 0.982-0.28-0.238 0.37-1.145 0.1-0.167 0.28-0.343 0.35-0.382 0.05 0.004 0.05 0.108m-0.72-0.419l-0.77 0.974-0.22 0.256-0.63 0.496-0.33 0.104-0.09-0.018 0.44-0.446 0.84-0.933 0.41-0.469 0.35 0.036"
        }]
    };

    return data;

});

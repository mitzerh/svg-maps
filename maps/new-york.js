define(["require"], function(require){

    var data = {
        "viewBox": [447.09197998046875, 59.619998931884766, 75.364013671875, 58.84000015258789],
        "viewBoxFixed": [447, 59, 75, 60, false],
        "county": [{
            "id": "ny-36085",
            "district": "d-1",
            "path": "p-1",
            "name": "Staten Island",
            "fipsCode": "36085",
            "coords": "m504.54 117.78l-0.04 0.02-0.09 0.13-0.14 0.13-0.04-0.01-0.15 0.15-0.09 0.06-0.06 0.11-0.23 0.09-0.06-0.04-0.02-0.06 0.02-0.07 0.06-0.11-0.02-0.15 0.03-0.11 0.19-0.23 0.04-0.2-0.03-0.25 0.03-0.12-0.01-0.12 0.06-0.2 0.08-0.19 0.14-0.1 0.24-0.13 0.3-0.16 0.11-0.02 0.08 0.08 0.07 0.21 0.2 0.23-0.03 0.14-0.36 0.7-0.23 0.23-0.05-0.01"
        }, {
            "id": "ny-36019",
            "district": "d-2",
            "path": "p-2",
            "name": "Clinton",
            "fipsCode": "36019",
            "coords": "m498.44 59.62l-0.01 0.221 0.33 2.114 0.46 2.691 0.27 0.505 0.15 0.126 0.26 0.153-1.09 0.387 0.04 0.24-0.17 0.473-0.63 0.442-0.8 0.5-0.7 0.148-1.41 0.51-0.32-0.92-0.33-0.874-0.69-1.6-1.17-2.871-0.22-0.604 1.34-0.388 2.21-0.563 2.48-0.69"
        }, {
            "id": "ny-36031",
            "district": "d-3",
            "path": "p-3",
            "name": "Essex",
            "fipsCode": "36031",
            "coords": "m495.14 68.13l1.41-0.51 0.7-0.148 0.8-0.5 0.63-0.442 0.17-0.473-0.04-0.24 1.09-0.387 0.43 0.518 0.13 0.28 0.16 0.451 0.01 0.008 0.01 0.14-0.05 0.541 0.3 1.568-0.37 1.078-0.01 1.067v0.42l0.02 0.429v0.004l0.02 0.044 1.08 2.538 0.15 0.284-0.51 0.19-5.42 2.077-0.01-0.487-0.06-0.189-1.02-0.198-0.33 0.149-0.11 0.071-0.09 0.149-1.45-1.181 0.6-0.729-0.67-1.848 1.65-0.609-1.23-3.295 2.01-0.77"
        }, {
            "id": "ny-36073",
            "district": "d-4",
            "path": "p-4",
            "name": "Orleans",
            "fipsCode": "36073",
            "coords": "m461.48 92.49l-0.61 0.14-3.2 0.614-0.5 0.121-0.55-3.097 4.32-0.734 0.54 2.956"
        }, {
            "id": "ny-36037",
            "district": "d-5",
            "path": "p-5",
            "name": "Genesee",
            "fipsCode": "36037",
            "coords": "m461.48 92.49l1.17 1.695-0.11 1.672-4.73 0.829-0.53-2.812-0.11-0.509 0.5-0.121 3.2-0.614 0.61-0.14"
        }, {
            "id": "ny-36121",
            "district": "d-6",
            "path": "p-6",
            "name": "Wyoming",
            "fipsCode": "36121",
            "coords": "m457.81 96.686l4.73-0.829 0.46 2.479-0.17 0.667-0.35 0.302-0.07 0.438-0.06 0.467 0.01 0.04 0.23 0.11-2.51 0.47-1.48 0.08-0.57-3.115-0.24 0.041-0.19-1.113 0.21-0.037"
        }, {
            "id": "ny-36051",
            "district": "d-7",
            "path": "p-7",
            "name": "Livingston",
            "fipsCode": "36051",
            "coords": "m462.65 94.185l1.65-0.329 0.11 0.09 0.04 0.081-0.05 0.356-0.01 0.028-0.24 0.054-0.01 0.018 0.02 0.031 1.12-0.211 0.52-0.154 0.14 0.117 0.09 0.135 0.14 0.334 0.11 0.487v0.018l-0.33 0.067 0.01 1.199 0.35 1.136 0.92-0.162 0.21 0.559 0.11 0.608-1.9 1.773-1.1 0.17-0.11-0.55-1.85 0.32-0.23-0.11-0.01-0.04 0.06-0.467 0.07-0.438 0.35-0.302 0.17-0.667-0.46-2.479 0.11-1.672"
        }, {
            "id": "ny-36093",
            "district": "d-8",
            "path": "p-8",
            "name": "Schenectady",
            "fipsCode": "36093",
            "coords": "m497.85 87.091l0.36-0.054 1.24 0.342 0.41 0.298 0.11 0.306 0.83 0.699 0.06 0.031 0.12-0.009-3.26 1.42-0.96-0.662-0.02-0.036 0.03-0.172 1.34-1.451-0.26-0.712"
        }, {
            "id": "ny-36057",
            "district": "d-9",
            "path": "p-9",
            "name": "Montgomery",
            "fipsCode": "36057",
            "coords": "m497.74 86.753l0.11 0.338 0.26 0.712-1.34 1.451-0.03 0.172 0.02 0.036-0.65 0.342-1.04 0.365-1.1-0.275-0.84-0.031-1.16-0.185-0.5-2.335 2.18 0.325 0.49-0.108 3.6-0.807"
        }, {
            "id": "ny-36035",
            "district": "d-10",
            "path": "p-10",
            "name": "Fulton",
            "fipsCode": "36035",
            "coords": "m491.22 84.229l1.8 0.361 2.77-0.911 0.75-0.252 1.2 3.326-3.6 0.807-0.49 0.108-2.18-0.325-0.25-3.114"
        }, {
            "id": "ny-36099",
            "district": "d-11",
            "path": "p-11",
            "name": "Seneca",
            "fipsCode": "36099",
            "coords": "m473.58 91.526l-0.05 0.843 0.43 2.186 0.05 0.243 0.21 0.613 0.04 0.095 0.07 0.099 0.74 0.915-0.08 1.032-1.83 0.446-1.29-2.686-0.34-1.249 0.02-0.063 0.02-0.027 0.11-0.054-0.37-1.784 2.27-0.609"
        }, {
            "id": "ny-36069",
            "district": "d-12",
            "path": "p-12",
            "name": "Ontario",
            "fipsCode": "36069",
            "coords": "m471.31 92.135l0.37 1.784-0.11 0.054-0.02 0.027-0.02 0.063 0.34 1.249-3.14 0.671-0.16 0.41-0.04 0.267-0.07 0.612 0.24 1.159-1.15 0.216-0.11-0.608-0.21-0.559-0.92 0.162-0.35-1.136-0.01-1.199 0.33-0.067v-0.018l-0.11-0.487-0.14-0.334-0.09-0.135-0.14-0.117 0.9-0.167-0.25-1.158 1.05-0.207 1.14-0.293 1.03-0.212 0.08 0.347 1.56-0.324"
        }, {
            "id": "ny-36123",
            "district": "d-13",
            "path": "p-13",
            "name": "Yates",
            "fipsCode": "36123",
            "coords": "m471.87 95.312l1.29 2.686-1.82 1.131-0.36-0.072-0.07-0.058-0.12-0.582-0.03-0.297 0.01-0.108-2.07 0.419-0.24-1.159 0.07-0.612 0.04-0.267 0.16-0.41 3.14-0.671"
        }, {
            "id": "ny-36097",
            "district": "d-14",
            "path": "p-14",
            "name": "Schuyler",
            "fipsCode": "36097",
            "coords": "m473.16 97.998l1.83-0.446 0.22 0.865 0.29 1.1v0.226l0.23 1.127 0.67-0.11 0.09 0.43-0.17 0.23-0.41 0.04-0.49-0.12-0.11-0.5-0.99 0.2-1.15 0.32 0.03 0.11-1.14 0.31-0.1 0.02-0.35-1.48-0.27-1.191 1.82-1.131"
        }, {
            "id": "ny-36109",
            "district": "d-15",
            "path": "p-15",
            "name": "Tompkins",
            "fipsCode": "36109",
            "coords": "m475.07 96.52l1.9-0.442 0.04 0.104 1.77-0.437 0.7 2.717-2.32 2.148-0.76 0.15-0.67 0.11-0.23-1.127v-0.226l-0.29-1.1-0.22-0.865 0.08-1.032"
        }, {
            "id": "ny-36011",
            "district": "d-16",
            "path": "p-16",
            "name": "Cayuga",
            "fipsCode": "36011",
            "coords": "m473.43 86.343l0.41 1.478 0.48 0.5 0.79-0.189 0.1 0.365 0.26 0.997 0.13 0.545-0.01 0.013-0.17 0.005-0.05 0.058-0.01 0.068 0.32 1.163 0.8 1.938 0.85-0.226 0.65 0.419 0.29 0.298 0.03 0.113 0.48 1.857-1.77 0.437-0.04-0.104-1.9 0.442-0.74-0.915-0.07-0.099-0.04-0.095-0.21-0.613-0.05-0.243-0.43-2.186 0.05-0.843-0.91-4.038 0.76-1.145"
        }, {
            "id": "ny-36067",
            "district": "d-17",
            "path": "p-17",
            "name": "Onondaga",
            "fipsCode": "36067",
            "coords": "m479.79 88.114l0.18 0.176 0.66 0.897 0.44 1.226 0.68 2.483-3.45 0.992-0.03-0.113-0.29-0.298-0.65-0.419-0.85 0.226-0.8-1.938-0.32-1.163 0.01-0.068 0.05-0.058 0.17-0.005 0.01-0.013-0.13-0.545-0.26-0.997 1.41-0.356 1.2-0.604 1.16 0.333 0.81 0.244"
        }, {
            "id": "ny-36023",
            "district": "d-18",
            "path": "p-18",
            "name": "Cortland",
            "fipsCode": "36023",
            "coords": "m481.75 92.896l0.24 0.839 1.07 3.853-2.45 0.595-1.13 0.279-0.7-2.717-0.48-1.857 3.45-0.992"
        }, {
            "id": "ny-36017",
            "district": "d-19",
            "path": "p-19",
            "name": "Chenango",
            "fipsCode": "36017",
            "coords": "m481.99 93.735l3.59-1.024 0.63-0.085 1.2-0.343 0.1 5.688 0.3 1.515-1.06 0.229-0.97 0.208-0.68-0.325-1.18 0.022-0.13 0.091-0.11-0.185-0.62-1.938-1.07-3.853"
        }, {
            "id": "ny-36053",
            "district": "d-20",
            "path": "p-20",
            "name": "Madison",
            "fipsCode": "36053",
            "coords": "m479.79 88.114l1.07 0.14 0.96-0.424 0.46 0.05 0.22 0.117 0.58 0.329 1.15 0.762 0.33 1.144 0.04 0.181 1.18 0.648 1.71-0.486-0.08 1.708-1.2 0.343-0.63 0.085-3.59 1.024-0.24-0.839-0.68-2.483-0.44-1.226-0.66-0.897-0.18-0.176"
        }, {
            "id": "ny-36065",
            "district": "d-21",
            "path": "p-21",
            "name": "Oneida",
            "fipsCode": "36065",
            "coords": "m486.66 80.89l1.11 3.528 0.36 1.289-0.51 1.573-0.37 0.946 0.55 2.169-0.31 0.18-1.71 0.486-1.18-0.648-0.04-0.181-0.33-1.144-1.15-0.762-0.58-0.329-0.22-0.117-0.46-0.05-0.96 0.424-0.25-2.114-0.23-0.027 0.23-2.15 0.56 0.054 2.18 0.199 3.31-3.326"
        }, {
            "id": "ny-36049",
            "district": "d-22",
            "path": "p-22",
            "name": "Lewis",
            "fipsCode": "36049",
            "coords": "m481.93 73.957l2.83 0.969 1.9 5.964-3.31 3.326-2.18-0.199-0.76-2.731-0.38-1.23 0.01-1.204 1.71-1.55 0.25-0.609-0.04-0.793-0.61-0.298 0.58-1.645"
        }, {
            "id": "ny-36043",
            "district": "d-23",
            "path": "p-23",
            "name": "Herkimer",
            "fipsCode": "36043",
            "coords": "m484.76 74.926l2.93-0.302 2.38 7.203-0.42 2.046 1.57 0.356 0.25 3.114 0.5 2.335-1.16-0.203 0.06 0.852-0.11 0.131-2.02-0.654-0.22 0.694-0.64 0.189-0.08-0.292-0.55-2.169 0.37-0.946 0.51-1.573-0.36-1.289-1.11-3.528-1.9-5.964"
        }, {
            "id": "ny-36077",
            "district": "d-24",
            "path": "p-24",
            "name": "Otsego",
            "fipsCode": "36077",
            "coords": "m493.13 89.863l-0.05 0.509 0.05 0.356 0.05 0.172 0.57 1.18 0.13 0.307-0.21 0.861-0.23 0.684-1.2 0.348-1.63 1.46-0.82 0.775-0.39 0.451-0.91 0.694-0.24 0.095-0.74 0.216-0.1-5.688 0.08-1.708 0.31-0.18 0.08 0.292 0.64-0.189 0.22-0.694 2.02 0.654 0.11-0.131-0.06-0.852 1.16 0.203 1.16 0.185"
        }, {
            "id": "ny-36095",
            "district": "d-25",
            "path": "p-25",
            "name": "Schoharie",
            "fipsCode": "36095",
            "coords": "m496.76 89.462l0.96 0.662 0.18 0.126 0.1 0.64-0.07 0.663-0.07 1.212v1.457l0.04 0.157 0.09-0.031-1.6 1.077-2.95-1.493 0.23-0.684 0.21-0.861-0.13-0.307-0.57-1.18-0.05-0.172-0.05-0.356 0.05-0.509 0.84 0.031 1.1 0.275 1.04-0.365 0.65-0.342"
        }, {
            "id": "ny-36001",
            "district": "d-26",
            "path": "p-26",
            "name": "Albany",
            "fipsCode": "36001",
            "coords": "m500.98 88.704l1.21-0.347-0.03 4.26-4.17 1.731-0.09 0.031-0.04-0.157v-1.457l0.07-1.212 0.07-0.663-0.1-0.64-0.18-0.126 3.26-1.42"
        }, {
            "id": "ny-36091",
            "district": "d-27",
            "path": "p-27",
            "name": "Saratoga",
            "fipsCode": "36091",
            "coords": "m496.01 81.989l2.44-0.924 0.12 0.149 0.58 0.897 0.18 0.698 0.1 0.05 0.61 0.166 0.76-0.739 0.55-0.694 0.08 0.113 0.74 2.416 0.04 0.243 0.04 0.884-0.05 0.455-0.11 0.572 0.1 2.082-1.21 0.347-0.12 0.009-0.06-0.031-0.83-0.699-0.11-0.306-0.41-0.298-1.24-0.342-0.36 0.054-0.11-0.338-1.2-3.326-0.53-1.438"
        }, {
            "id": "ny-36113",
            "district": "d-28",
            "path": "p-28",
            "name": "Warren",
            "fipsCode": "36113",
            "coords": "m495.85 77.067l5.42-2.077-0.03 1.049-0.05 0.78-0.52 1.262-0.17 0.447-0.1 0.468-0.01 0.086 0.03 0.18 0.93 2.33-0.55 0.694-0.76 0.739-0.61-0.166-0.1-0.05-0.18-0.698-0.58-0.897-0.12-0.149-2.44 0.924-1.54-4.39 1.38-0.532"
        }, {
            "id": "ny-36041",
            "district": "d-29",
            "path": "p-29",
            "name": "Hamilton",
            "fipsCode": "36041",
            "coords": "m492.71 72.804l0.67 1.848-0.6 0.729 1.45 1.181 0.09-0.149 0.11-0.071 0.33-0.149 1.02 0.198 0.06 0.189 0.01 0.487-1.38 0.532 1.54 4.39 0.53 1.438-0.75 0.252-2.77 0.911-1.8-0.361-1.57-0.356 0.42-2.046-2.38-7.203 2.8-1.023 2.22-0.797"
        }, {
            "id": "ny-36033",
            "district": "d-30",
            "path": "p-30",
            "name": "Franklin",
            "fipsCode": "36033",
            "coords": "m495.14 68.13l-2.01 0.77 1.23 3.295-1.65 0.609-2.22 0.797-0.13-0.919-0.32-0.978-1.83-5.224-1.15-3.407-0.69 0.157-0.22-0.658 0.23-0.013 3.69-0.703 1.29-0.289 0.94-0.275 0.11-0.031 0.22 0.604 1.17 2.871 0.69 1.6 0.33 0.874 0.32 0.92"
        }, {
            "id": "ny-36089",
            "district": "d-31",
            "path": "p-31",
            "name": "Saint Lawrence",
            "fipsCode": "36089",
            "coords": "m486.15 62.572l0.22 0.658 0.69-0.157 1.15 3.407 1.83 5.224 0.32 0.978 0.13 0.919-2.8 1.023-2.93 0.302-2.83-0.969-0.67-0.256-1.98-0.677-1.59-0.603 0.28-0.965 0.26-0.645 0.48-0.784 1.44-2.236 0.42-0.581 3.29-3.741 0.17-0.117 1.21-0.698 0.23-0.036 0.68-0.046"
        }, {
            "id": "ny-36045",
            "district": "d-32",
            "path": "p-32",
            "name": "Jefferson",
            "fipsCode": "36045",
            "coords": "m477.69 72.421l1.59 0.603 1.98 0.677 0.67 0.256-0.58 1.645 0.61 0.298 0.04 0.793-0.25 0.609-1.71 1.55-0.01 1.204 0.38 1.23-1.88 0.216-0.41 0.189 0.08 0.343-1.64 0.203-0.6-1.524 0.64-1.311 0.04-0.072-0.02-0.194-0.2-0.514-0.06-0.081-0.08-0.023-0.78-0.067-0.56-0.235-0.88-0.63-0.14-0.361v-0.148l0.02-0.29 0.21-0.914 2.06-2.191 1.48-1.261"
        }, {
            "id": "ny-36075",
            "district": "d-33",
            "path": "p-33",
            "name": "Oswego",
            "fipsCode": "36075",
            "coords": "m476.56 82.237l1.64-0.203-0.08-0.343 0.41-0.189 1.88-0.216 0.76 2.731-0.56-0.054-0.23 2.15 0.23 0.027 0.25 2.114-1.07-0.14-0.81-0.244-1.16-0.333-1.2 0.604-1.41 0.356-0.1-0.365-0.79 0.189-0.48-0.5-0.41-1.478 0.43-0.487 1.14-1.199 0.05-0.036 0.38-0.117 0.25 0.113 0.13-0.009 0.31-0.077 0.52-0.325 0.05-0.063 0.07-0.171 0.03-0.207 0.02-0.199-0.03-0.333-0.11-0.627-0.11-0.369"
        }, {
            "id": "ny-36117",
            "district": "d-34",
            "path": "p-34",
            "name": "Wayne",
            "fipsCode": "36117",
            "coords": "m472.67 87.488l0.91 4.038-2.27 0.609-1.56 0.324-0.08-0.347-1.03 0.212-1.14 0.293-0.64-3.083 0.54-0.153 1.56-0.397 0.28-0.063 0.43 0.005 0.33 0.063 0.7-0.127 0.05-0.018 1.35-0.788 0.21-0.163 0.36-0.405"
        }, {
            "id": "ny-36055",
            "district": "d-35",
            "path": "p-35",
            "name": "Monroe",
            "fipsCode": "36055",
            "coords": "m461.48 92.49l-0.54-2.956 0.39-0.054 1.49 0.027 0.96 0.23 0.44 0.248 0.07 0.031 0.79 0.325 0.26 0.045 0.16-0.014 1.36-0.838 0.64 3.083-1.05 0.207 0.25 1.158-0.9 0.167-0.52 0.154-1.12 0.211-0.02-0.031 0.01-0.018 0.24-0.054 0.01-0.028 0.05-0.356-0.04-0.081-0.11-0.09-1.65 0.329-1.17-1.695"
        }, {
            "id": "ny-36063",
            "district": "d-36",
            "path": "p-36",
            "name": "Niagara",
            "fipsCode": "36063",
            "coords": "m457.17 93.365l0.11 0.509-0.21 0.113-0.98 0.32-3.2 0.658-0.77 0.144-0.3-0.058-0.1-0.19-0.44-2.177 2.05-1.1 1.75-0.847 0.77-0.302 0.53-0.167 0.06-0.004 0.18 0.004 0.55 3.097"
        }, {
            "id": "ny-36029",
            "district": "d-37",
            "path": "p-37",
            "name": "Erie",
            "fipsCode": "36029",
            "coords": "m457.28 93.874l0.53 2.812-0.21 0.037 0.19 1.113 0.24-0.041 0.57 3.115-1.2 0.55-1.04 0.56-1.08 0.71-0.23 0.09-0.23 0.06-0.55-0.28-1.23-0.69-0.78-0.28 0.02-0.27 0.11-0.33 0.41-1.071 0.25-0.212 0.62-0.514 0.23-0.108 0.39-0.505 0.11-0.203v-0.103l-0.34-0.748-0.53-0.956-0.12-0.158-0.14-0.09-0.4-0.072-0.41-0.171-0.09-0.108-0.08-0.28-0.17-0.622 0.77-0.144 3.2-0.658 0.98-0.32 0.21-0.113"
        }, {
            "id": "ny-36013",
            "district": "d-38",
            "path": "p-38",
            "name": "Chautauqua",
            "fipsCode": "36013",
            "coords": "m453.04 101.91l1.23 6.87-5.15 0.92-0.15 0.02-1.28 0.23-0.3-1.69-0.24-1.43-0.06-0.35 0.38-0.26 0.61-0.51 0.82-0.77 0.76-0.76 0.19-0.26 0.16-0.36 0.42-0.54 0.93-0.73 0.9-0.66 0.78 0.28"
        }, {
            "id": "ny-36009",
            "district": "d-39",
            "path": "p-39",
            "name": "Cattaraugus",
            "fipsCode": "36009",
            "coords": "m458.6 100.91l1.48-0.08 1.26 6.65-2.71 0.5-2.6 0.51-0.42 0.07-1.34 0.22-1.23-6.87 1.23 0.69 0.55 0.28 0.23-0.06 0.23-0.09 1.08-0.71 1.04-0.56 1.2-0.55"
        }, {
            "id": "ny-36003",
            "district": "d-40",
            "path": "p-40",
            "name": "Allegany",
            "fipsCode": "36003",
            "coords": "m462.59 100.36l1.85-0.32 0.11 0.55 1.1-0.17 0.92 6.06-4.28 0.81-0.95 0.19-1.26-6.65 2.51-0.47"
        }, {
            "id": "ny-36101",
            "district": "d-41",
            "path": "p-41",
            "name": "Steuben",
            "fipsCode": "36101",
            "coords": "m467.55 98.647l1.15-0.216 2.07-0.419-0.01 0.108 0.03 0.297 0.12 0.582 0.07 0.058 0.36 0.072 0.27 1.191 0.35 1.48 0.1-0.02 1.14-0.31 0.7 3.53-6.02 1.22-1.31 0.26-0.92-6.06 1.9-1.773"
        }, {
            "id": "ny-36015",
            "district": "d-42",
            "path": "p-42",
            "name": "Chemung",
            "fipsCode": "36015",
            "coords": "m477.16 100.61l0.56 3.62-3.45 0.69-0.37 0.08-0.7-3.53-0.03-0.11 1.15-0.32 0.99-0.2 0.11 0.5 0.49 0.12 0.41-0.04 0.17-0.23-0.09-0.43 0.76-0.15"
        }, {
            "id": "ny-36107",
            "district": "d-43",
            "path": "p-43",
            "name": "Tioga",
            "fipsCode": "36107",
            "coords": "m480.61 98.183l0.07 0.095 0.78 1.658 0.02 0.084 0.11 0.5 0.02 0.42-0.26 0.07 0.59 2.35-0.38 0.08-3.84 0.79-0.56-3.62 2.32-2.148 1.13-0.279"
        }, {
            "id": "ny-36007",
            "district": "d-44",
            "path": "p-44",
            "name": "Broome",
            "fipsCode": "36007",
            "coords": "m483.06 97.588l0.62 1.938 0.11 0.185 0.13-0.091 1.18-0.022 0.68 0.325 0.97-0.208 1.06-0.229 1.09 2.354-1.15 0.26-5.81 1.26-0.59-2.35 0.26-0.07-0.02-0.42-0.11-0.5-0.02-0.084-0.78-1.658-0.07-0.095 2.45-0.595"
        }, {
            "id": "ny-36025",
            "district": "d-45",
            "path": "p-45",
            "name": "Delaware",
            "fipsCode": "36025",
            "coords": "m493.44 93.932l2.95 1.493 0.16 0.04-0.58 2.101 0.89 0.225-2.61 2.629-2.94 2.86-1.18-0.19-0.31-0.64-0.17-0.17-0.57-0.4-0.18-0.04-1.09-2.354-0.3-1.515 0.74-0.216 0.24-0.095 0.91-0.694 0.39-0.451 0.82-0.775 1.63-1.46 1.2-0.348"
        }, {
            "id": "ny-36105",
            "district": "d-46",
            "path": "p-46",
            "name": "Sullivan",
            "fipsCode": "36105",
            "coords": "m491.31 103.28l2.94-2.86 1.32 0.4 2.13 0.68-0.2 0.59-0.37 0.84-0.18 0.49 0.92 0.42 1.04 0.46 0.42 0.62-0.33 0.29-0.18 0.39-0.24 0.65-2.57 0.73-0.07 0.05v0.03l0.11 0.49 0.13 0.28-0.42 0.05-0.76 0.04-0.17-0.08-1.03-0.53-0.29-0.28-0.41-0.41-0.26-0.59-1.53-2.75"
        }, {
            "id": "ny-36039",
            "district": "d-47",
            "path": "p-47",
            "name": "Greene",
            "fipsCode": "36039",
            "coords": "m502.16 92.617h0.05l0.04 0.022 0.07 0.212 0.35 1.794 0.04 0.324-0.02 0.176-0.37 0.915-0.28 0.897-0.04 0.189-0.93-0.392-0.42 0.136-0.08 1.004-1.48 0.19-0.73 0.09-1.5-0.383-0.89-0.225 0.58-2.101-0.16-0.04 1.6-1.077 4.17-1.731"
        }, {
            "id": "ny-36061",
            "district": "d-48",
            "path": "p-48",
            "name": "Manhattan",
            "fipsCode": "36061",
            "coords": "m506.23 113.9l0.02 0.08-0.18 0.87-0.14 0.13-0.7 0.62-0.07-0.29 0.09-1.21 0.26-1.17 0.6 0.3 0.12 0.67"
        }, {
            "id": "ny-36111",
            "district": "d-49",
            "path": "p-49",
            "name": "Ulster",
            "fipsCode": "36111",
            "coords": "m501.97 97.8l0.18 2.21 0.53 1.73 0.21 0.41 0.31 1.88-0.91 0.34-0.68 0.13-0.59-0.02-0.69-0.25-1 0.69-0.42-0.62-1.04-0.46-0.92-0.42 0.18-0.49 0.37-0.84 0.2-0.59-2.13-0.68-1.32-0.4 2.61-2.629 1.5 0.383 0.73-0.09 1.48-0.19 0.08-1.004 0.42-0.136 0.93 0.392-0.03 0.654"
        }, {
            "id": "ny-36005",
            "district": "d-50",
            "path": "p-50",
            "name": "Bronx",
            "fipsCode": "36005",
            "coords": "m505.55 112.44l1.37 0.17 0.19 0.98-0.88 0.31-0.12-0.67-0.6-0.3 0.04-0.49"
        }, {
            "id": "ny-36047",
            "district": "d-51",
            "path": "p-51",
            "name": "Brooklyn",
            "fipsCode": "36047",
            "coords": "m505.23 115.6l0.7-0.62 0.24 0.06 0.33 0.74-0.1 1.15-0.62-0.03-0.42-0.64-0.13-0.66"
        }, {
            "id": "ny-36087",
            "district": "d-52",
            "path": "p-52",
            "name": "Rockland",
            "fipsCode": "36087",
            "coords": "m503.73 107.48l0.31 0.66 0.58 0.78 0.51 0.58 0.06 0.15 0.34 1.74-3.41-1.02-0.22-0.07 1.83-2.86v0.04"
        }, {
            "id": "ny-36059",
            "district": "d-53",
            "path": "p-53",
            "name": "Nassau",
            "fipsCode": "36059",
            "coords": "m511.14 115.22l-3.05 1.04-0.77-2.7 2.18-2.14 1.64 3.8"
        }, {
            "id": "ny-36071",
            "district": "d-54",
            "path": "p-54",
            "name": "Orange",
            "fipsCode": "36071",
            "coords": "m503.2 104.03l0.19 1.97 0.34 1.44-1.83 2.86-1.41-0.48-3.54-1.24-0.77-0.75-0.13-0.28-0.11-0.49v-0.03l0.07-0.05 2.57-0.73 0.24-0.65 0.18-0.39 0.33-0.29 1-0.69 0.69 0.25 0.59 0.02 0.68-0.13 0.91-0.34"
        }, {
            "id": "ny-36081",
            "district": "d-55",
            "path": "p-55",
            "name": "Queens",
            "fipsCode": "36081",
            "coords": "m506.23 113.9l0.88-0.31 0.21-0.03 0.77 2.7-1.69 0.67 0.1-1.15-0.33-0.74-0.24-0.06 0.14-0.13 0.18-0.87-0.02-0.08"
        }, {
            "id": "ny-36103",
            "district": "d-56",
            "path": "p-56",
            "name": "Suffolk",
            "fipsCode": "36103",
            "coords": "m511.14 115.22l-1.64-3.8-0.01-0.24 0.05-0.08 0.77-0.28 1.76 0.22 5.77-2.67 1.45-1.68 0.55-0.29 2.62 0.89-0.12 0.29-2.31 2-0.62 0.48-4.95 3.59-0.79 0.47-0.55 0.33-0.28 0.15-0.2 0.1-1.5 0.52"
        }, {
            "id": "ny-36119",
            "district": "d-57",
            "path": "p-57",
            "name": "Westchester",
            "fipsCode": "36119",
            "coords": "m503.73 107.48l3.97-1.54 0.16 0.91-0.31 2.08-0.06 0.06-0.7 0.72 1.01 1.29-0.88 1.61-1.37-0.17-0.02-1.05-0.34-1.74-0.06-0.15-0.51-0.58-0.58-0.78-0.31-0.66"
        }, {
            "id": "ny-36079",
            "district": "d-58",
            "path": "p-58",
            "name": "Putnam",
            "fipsCode": "36079",
            "coords": "m507.35 103.88l0.35 2.06-3.97 1.54v-0.04l-0.34-1.44 0.3-0.73 3.2-1.27 0.46-0.12"
        }, {
            "id": "ny-36027",
            "district": "d-59",
            "path": "p-59",
            "name": "Dutchess",
            "fipsCode": "36027",
            "coords": "m506.16 97.187l0.88 4.903 0.31 1.79-0.46 0.12-3.2 1.27-0.3 0.73-0.19-1.97-0.31-1.88-0.21-0.41-0.53-1.73-0.18-2.21 0.12-0.055 0.12 0.005 1.53 0.365 0.47 0.131 1.79-0.063 0.07-0.974 0.09-0.022"
        }, {
            "id": "ny-36021",
            "district": "d-60",
            "path": "p-60",
            "name": "Columbia",
            "fipsCode": "36021",
            "coords": "m502.16 92.617l3.83-1.533-0.14 5.688 0.22 0.437-0.07 0.974-1.79 0.063-0.47-0.131-1.53-0.365-0.12-0.005-0.12 0.055 0.03-0.654 0.04-0.189 0.28-0.897 0.37-0.915 0.02-0.176-0.04-0.324-0.35-1.794-0.07-0.212-0.04-0.022h-0.05"
        }, {
            "id": "ny-36083",
            "district": "d-61",
            "path": "p-61",
            "name": "Rensselaer",
            "fipsCode": "36083",
            "coords": "m502.09 86.275l3.3-0.829 0.69 2.47-0.09 3.168-3.83 1.533 0.03-4.26-0.1-2.082"
        }, {
            "id": "ny-36115",
            "district": "d-62",
            "path": "p-62",
            "name": "Washington",
            "fipsCode": "36115",
            "coords": "m501.78 74.8l0.34 0.649-0.18 0.956-0.05 0.523 0.09 0.753 0.04 0.048 0.31 0.127 1.55 0.342 0.54 2.538 0.97 4.71-3.3 0.829 0.11-0.572 0.05-0.455-0.04-0.884-0.04-0.243-0.74-2.416-0.08-0.113-0.93-2.33-0.03-0.18 0.01-0.086 0.1-0.468 0.17-0.447 0.52-1.262 0.05-0.78 0.03-1.049 0.51-0.19"
        }]
    };

    return data;

});
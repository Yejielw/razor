var razorApp=angular.module('razorApp',['ngAnimate']);

razorApp.controller('razorController', function($scope) {

let usersData =  {
    "Customers": [{
        "Id": "ALFKI",
        "CompanyName": "Alfreds Futterkiste",
        "ContactName": "Maria Anders",
        "ContactTitle": "Sales Representative",
        "Address": "Obere Str. 57",
        "City": "Berlin",
        "PostalCode": "12209",
        "Country": "Germany",
        "Phone": "030-0074321",
        "Fax": "030-0076545"
    }, {
        "Id": "ANATR",
        "CompanyName": "Ana Trujillo Emparedados y helados",
        "ContactName": "Ana Trujillo",
        "ContactTitle": "Owner",
        "Address": "Avda. de la Constitución 2222",
        "City": "México D.F.",
        "PostalCode": "05021",
        "Country": "Mexico",
        "Phone": "(5) 555-4729",
        "Fax": "(5) 555-3745"
    }, {
        "Id": "ANTON",
        "CompanyName": "Antonio Moreno Taquería",
        "ContactName": "Antonio Moreno",
        "ContactTitle": "Owner",
        "Address": "Mataderos  2312",
        "City": "México D.F.",
        "PostalCode": "05023",
        "Country": "Mexico",
        "Phone": "(5) 555-3932"
    }, {
        "Id": "AROUT",
        "CompanyName": "Around the Horn",
        "ContactName": "Thomas Hardy",
        "ContactTitle": "Sales Representative",
        "Address": "120 Hanover Sq.",
        "City": "London",
        "PostalCode": "WA1 1DP",
        "Country": "UK",
        "Phone": "(171) 555-7788",
        "Fax": "(171) 555-6750"
    }, {
        "Id": "BERGS",
        "CompanyName": "Berglunds snabbköp",
        "ContactName": "Christina Berglund",
        "ContactTitle": "Order Administrator",
        "Address": "Berguvsvägen  8",
        "City": "Luleå",
        "PostalCode": "S-958 22",
        "Country": "Sweden",
        "Phone": "0921-12 34 65",
        "Fax": "0921-12 34 67"
    }, {
        "Id": "BLAUS",
        "CompanyName": "Blauer See Delikatessen",
        "ContactName": "Hanna Moos",
        "ContactTitle": "Sales Representative",
        "Address": "Forsterstr. 57",
        "City": "Mannheim",
        "PostalCode": "68306",
        "Country": "Germany",
        "Phone": "0621-08460",
        "Fax": "0621-08924"
    }, {
        "Id": "BLONP",
        "CompanyName": "Blondesddsl père et fils",
        "ContactName": "Frédérique Citeaux",
        "ContactTitle": "Marketing Manager",
        "Address": "24, place Kléber",
        "City": "Strasbourg",
        "PostalCode": "67000",
        "Country": "France",
        "Phone": "88.60.15.31",
        "Fax": "88.60.15.32"
    }, {
        "Id": "BOLID",
        "CompanyName": "Bólido Comidas preparadas",
        "ContactName": "Martín Sommer",
        "ContactTitle": "Owner",
        "Address": "C/ Araquil, 67",
        "City": "Madrid",
        "PostalCode": "28023",
        "Country": "Spain",
        "Phone": "(91) 555 22 82",
        "Fax": "(91) 555 91 99"
    }, {
        "Id": "BONAP",
        "CompanyName": "Bon app",
        "ContactName": "Laurence Lebihan",
        "ContactTitle": "Owner",
        "Address": "12, rue des Bouchers",
        "City": "Marseille",
        "PostalCode": "13008",
        "Country": "France",
        "Phone": "91.24.45.40",
        "Fax": "91.24.45.41"
    }, {
        "Id": "BOTTM",
        "CompanyName": "Bottom-Dollar Markets",
        "ContactName": "Elizabeth Lincoln",
        "ContactTitle": "Accounting Manager",
        "Address": "23 Tsawassen Blvd.",
        "City": "Tsawassen",
        "Region": "BC",
        "PostalCode": "T2F 8M4",
        "Country": "Canada",
        "Phone": "(604) 555-4729",
        "Fax": "(604) 555-3745"
    }, {
        "Id": "BSBEV",
        "CompanyName": "B's Beverages",
        "ContactName": "Victoria Ashworth",
        "ContactTitle": "Sales Representative",
        "Address": "Fauntleroy Circus",
        "City": "London",
        "PostalCode": "EC2 5NT",
        "Country": "UK",
        "Phone": "(171) 555-1212"
    }, {
        "Id": "CACTU",
        "CompanyName": "Cactus Comidas para llevar",
        "ContactName": "Patricio Simpson",
        "ContactTitle": "Sales Agent",
        "Address": "Cerrito 333",
        "City": "Buenos Aires",
        "PostalCode": "1010",
        "Country": "Argentina",
        "Phone": "(1) 135-5555",
        "Fax": "(1) 135-4892"
    }, {
        "Id": "CENTC",
        "CompanyName": "Centro comercial Moctezuma",
        "ContactName": "Francisco Chang",
        "ContactTitle": "Marketing Manager",
        "Address": "Sierras de Granada 9993",
        "City": "México D.F.",
        "PostalCode": "05022",
        "Country": "Mexico",
        "Phone": "(5) 555-3392",
        "Fax": "(5) 555-7293"
    }, {
        "Id": "CHOPS",
        "CompanyName": "Chop-suey Chinese",
        "ContactName": "Yang Wang",
        "ContactTitle": "Owner",
        "Address": "Hauptstr. 29",
        "City": "Bern",
        "PostalCode": "3012",
        "Country": "Switzerland",
        "Phone": "0452-076545"
    }, {
        "Id": "COMMI",
        "CompanyName": "Comércio Mineiro",
        "ContactName": "Pedro Afonso",
        "ContactTitle": "Sales Associate",
        "Address": "Av. dos Lusíadas, 23",
        "City": "Sao Paulo",
        "Region": "SP",
        "PostalCode": "05432-043",
        "Country": "Brazil",
        "Phone": "(11) 555-7647"
    }, {
        "Id": "CONSH",
        "CompanyName": "Consolidated Holdings",
        "ContactName": "Elizabeth Brown",
        "ContactTitle": "Sales Representative",
        "Address": "Berkeley Gardens 12  Brewery",
        "City": "London",
        "PostalCode": "WX1 6LT",
        "Country": "UK",
        "Phone": "(171) 555-2282",
        "Fax": "(171) 555-9199"
    }, {
        "Id": "DRACD",
        "CompanyName": "Drachenblut Delikatessen",
        "ContactName": "Sven Ottlieb",
        "ContactTitle": "Order Administrator",
        "Address": "Walserweg 21",
        "City": "Aachen",
        "PostalCode": "52066",
        "Country": "Germany",
        "Phone": "0241-039123",
        "Fax": "0241-059428"
    }, {
        "Id": "DUMON",
        "CompanyName": "Du monde entier",
        "ContactName": "Janine Labrune",
        "ContactTitle": "Owner",
        "Address": "67, rue des Cinquante Otages",
        "City": "Nantes",
        "PostalCode": "44000",
        "Country": "France",
        "Phone": "40.67.88.88",
        "Fax": "40.67.89.89"
    }, {
        "Id": "EASTC",
        "CompanyName": "Eastern Connection",
        "ContactName": "Ann Devon",
        "ContactTitle": "Sales Agent",
        "Address": "35 King George",
        "City": "London",
        "PostalCode": "WX3 6FW",
        "Country": "UK",
        "Phone": "(171) 555-0297",
        "Fax": "(171) 555-3373"
    }, {
        "Id": "ERNSH",
        "CompanyName": "Ernst Handel",
        "ContactName": "Roland Mendel",
        "ContactTitle": "Sales Manager",
        "Address": "Kirchgasse 6",
        "City": "Graz",
        "PostalCode": "8010",
        "Country": "Austria",
        "Phone": "7675-3425",
        "Fax": "7675-3426"
    }, {
        "Id": "FAMIA",
        "CompanyName": "Familia Arquibaldo",
        "ContactName": "Aria Cruz",
        "ContactTitle": "Marketing Assistant",
        "Address": "Rua Orós, 92",
        "City": "Sao Paulo",
        "Region": "SP",
        "PostalCode": "05442-030",
        "Country": "Brazil",
        "Phone": "(11) 555-9857"
    }, {
        "Id": "FISSA",
        "CompanyName": "FISSA Fabrica Inter. Salchichas S.A.",
        "ContactName": "Diego Roel",
        "ContactTitle": "Accounting Manager",
        "Address": "C/ Moralzarzal, 86",
        "City": "Madrid",
        "PostalCode": "28034",
        "Country": "Spain",
        "Phone": "(91) 555 94 44",
        "Fax": "(91) 555 55 93"
    }, {
        "Id": "FOLIG",
        "CompanyName": "Folies gourmandes",
        "ContactName": "Martine Rancé",
        "ContactTitle": "Assistant Sales Agent",
        "Address": "184, chaussée de Tournai",
        "City": "Lille",
        "PostalCode": "59000",
        "Country": "France",
        "Phone": "20.16.10.16",
        "Fax": "20.16.10.17"
    }, {
        "Id": "FOLKO",
        "CompanyName": "Folk och fä HB",
        "ContactName": "Maria Larsson",
        "ContactTitle": "Owner",
        "Address": "Åkergatan 24",
        "City": "Bräcke",
        "PostalCode": "S-844 67",
        "Country": "Sweden",
        "Phone": "0695-34 67 21"
    }, {
        "Id": "FRANK",
        "CompanyName": "Frankenversand",
        "ContactName": "Peter Franken",
        "ContactTitle": "Marketing Manager",
        "Address": "Berliner Platz 43",
        "City": "München",
        "PostalCode": "80805",
        "Country": "Germany",
        "Phone": "089-0877310",
        "Fax": "089-0877451"
    }, {
        "Id": "FRANR",
        "CompanyName": "France restauration",
        "ContactName": "Carine Schmitt",
        "ContactTitle": "Marketing Manager",
        "Address": "54, rue Royale",
        "City": "Nantes",
        "PostalCode": "44000",
        "Country": "France",
        "Phone": "40.32.21.21",
        "Fax": "40.32.21.20"
    }, {
        "Id": "FRANS",
        "CompanyName": "Franchi S.p.A.",
        "ContactName": "Paolo Accorti",
        "ContactTitle": "Sales Representative",
        "Address": "Via Monte Bianco 34",
        "City": "Torino",
        "PostalCode": "10100",
        "Country": "Italy",
        "Phone": "011-4988260",
        "Fax": "011-4988261"
    }, {
        "Id": "FURIB",
        "CompanyName": "Furia Bacalhau e Frutos do Mar",
        "ContactName": "Lino Rodriguez",
        "ContactTitle": "Sales Manager",
        "Address": "Jardim das rosas n. 32",
        "City": "Lisboa",
        "PostalCode": "1675",
        "Country": "Portugal",
        "Phone": "(1) 354-2534",
        "Fax": "(1) 354-2535"
    }, {
        "Id": "GALED",
        "CompanyName": "Galería del gastrónomo",
        "ContactName": "Eduardo Saavedra",
        "ContactTitle": "Marketing Manager",
        "Address": "Rambla de Cataluña, 23",
        "City": "Barcelona",
        "PostalCode": "08022",
        "Country": "Spain",
        "Phone": "(93) 203 4560",
        "Fax": "(93) 203 4561"
    }, {
        "Id": "GODOS",
        "CompanyName": "Godos Cocina Típica",
        "ContactName": "José Pedro Freyre",
        "ContactTitle": "Sales Manager",
        "Address": "C/ Romero, 33",
        "City": "Sevilla",
        "PostalCode": "41101",
        "Country": "Spain",
        "Phone": "(95) 555 82 82"
    }, {
        "Id": "GOURL",
        "CompanyName": "Gourmet Lanchonetes",
        "ContactName": "André Fonseca",
        "ContactTitle": "Sales Associate",
        "Address": "Av. Brasil, 442",
        "City": "Campinas",
        "Region": "SP",
        "PostalCode": "04876-786",
        "Country": "Brazil",
        "Phone": "(11) 555-9482"
    }, {
        "Id": "GREAL",
        "CompanyName": "Great Lakes Food Market",
        "ContactName": "Howard Snyder",
        "ContactTitle": "Marketing Manager",
        "Address": "2732 Baker Blvd.",
        "City": "Eugene",
        "Region": "OR",
        "PostalCode": "97403",
        "Country": "USA",
        "Phone": "(503) 555-7555"
    }, {
        "Id": "GROSR",
        "CompanyName": "GROSELLA-Restaurante",
        "ContactName": "Manuel Pereira",
        "ContactTitle": "Owner",
        "Address": "5ª Ave. Los Palos Grandes",
        "City": "Caracas",
        "Region": "DF",
        "PostalCode": "1081",
        "Country": "Venezuela",
        "Phone": "(2) 283-2951",
        "Fax": "(2) 283-3397"
    }, {
        "Id": "HANAR",
        "CompanyName": "Hanari Carnes",
        "ContactName": "Mario Pontes",
        "ContactTitle": "Accounting Manager",
        "Address": "Rua do Paço, 67",
        "City": "Rio de Janeiro",
        "Region": "RJ",
        "PostalCode": "05454-876",
        "Country": "Brazil",
        "Phone": "(21) 555-0091",
        "Fax": "(21) 555-8765"
    }, {
        "Id": "HILAA",
        "CompanyName": "HILARION-Abastos",
        "ContactName": "Carlos Hernández",
        "ContactTitle": "Sales Representative",
        "Address": "Carrera 22 con Ave. Carlos Soublette #8-35",
        "City": "San Cristóbal",
        "Region": "Táchira",
        "PostalCode": "5022",
        "Country": "Venezuela",
        "Phone": "(5) 555-1340",
        "Fax": "(5) 555-1948"
    }, {
        "Id": "HUNGC",
        "CompanyName": "Hungry Coyote Import Store",
        "ContactName": "Yoshi Latimer",
        "ContactTitle": "Sales Representative",
        "Address": "City Center Plaza 516 Main St.",
        "City": "Elgin",
        "Region": "OR",
        "PostalCode": "97827",
        "Country": "USA",
        "Phone": "(503) 555-6874",
        "Fax": "(503) 555-2376"
    }, {
        "Id": "HUNGO",
        "CompanyName": "Hungry Owl All-Night Grocers",
        "ContactName": "Patricia McKenna",
        "ContactTitle": "Sales Associate",
        "Address": "8 Johnstown Road",
        "City": "Cork",
        "Region": "Co. Cork",
        "Country": "Ireland",
        "Phone": "2967 542",
        "Fax": "2967 3333"
    }, {
        "Id": "ISLAT",
        "CompanyName": "Island Trading",
        "ContactName": "Helen Bennett",
        "ContactTitle": "Marketing Manager",
        "Address": "Garden House Crowther Way",
        "City": "Cowes",
        "Region": "Isle of Wight",
        "PostalCode": "PO31 7PJ",
        "Country": "UK",
        "Phone": "(198) 555-8888"
    }, {
        "Id": "KOENE",
        "CompanyName": "Königlich Essen",
        "ContactName": "Philip Cramer",
        "ContactTitle": "Sales Associate",
        "Address": "Maubelstr. 90",
        "City": "Brandenburg",
        "PostalCode": "14776",
        "Country": "Germany",
        "Phone": "0555-09876"
    }, {
        "Id": "LACOR",
        "CompanyName": "La corne d'abondance",
        "ContactName": "Daniel Tonini",
        "ContactTitle": "Sales Representative",
        "Address": "67, avenue de l'Europe",
        "City": "Versailles",
        "PostalCode": "78000",
        "Country": "France",
        "Phone": "30.59.84.10",
        "Fax": "30.59.85.11"
    }, {
        "Id": "LAMAI",
        "CompanyName": "La maison d'Asie",
        "ContactName": "Annette Roulet",
        "ContactTitle": "Sales Manager",
        "Address": "1 rue Alsace-Lorraine",
        "City": "Toulouse",
        "PostalCode": "31000",
        "Country": "France",
        "Phone": "61.77.61.10",
        "Fax": "61.77.61.11"
    }, {
        "Id": "LAUGB",
        "CompanyName": "Laughing Bacchus Wine Cellars",
        "ContactName": "Yoshi Tannamuri",
        "ContactTitle": "Marketing Assistant",
        "Address": "1900 Oak St.",
        "City": "Vancouver",
        "Region": "BC",
        "PostalCode": "V3F 2K1",
        "Country": "Canada",
        "Phone": "(604) 555-3392",
        "Fax": "(604) 555-7293"
    }, {
        "Id": "LAZYK",
        "CompanyName": "Lazy K Kountry Store",
        "ContactName": "John Steel",
        "ContactTitle": "Marketing Manager",
        "Address": "12 Orchestra Terrace",
        "City": "Walla Walla",
        "Region": "WA",
        "PostalCode": "99362",
        "Country": "USA",
        "Phone": "(509) 555-7969",
        "Fax": "(509) 555-6221"
    }, {
        "Id": "LEHMS",
        "CompanyName": "Lehmanns Marktstand",
        "ContactName": "Renate Messner",
        "ContactTitle": "Sales Representative",
        "Address": "Magazinweg 7",
        "City": "Frankfurt a.M.",
        "PostalCode": "60528",
        "Country": "Germany",
        "Phone": "069-0245984",
        "Fax": "069-0245874"
    }, {
        "Id": "LETSS",
        "CompanyName": "Let's Stop N Shop",
        "ContactName": "Jaime Yorres",
        "ContactTitle": "Owner",
        "Address": "87 Polk St. Suite 5",
        "City": "San Francisco",
        "Region": "CA",
        "PostalCode": "94117",
        "Country": "USA",
        "Phone": "(415) 555-5938"
    }, {
        "Id": "LILAS",
        "CompanyName": "LILA-Supermercado",
        "ContactName": "Carlos González",
        "ContactTitle": "Accounting Manager",
        "Address": "Carrera 52 con Ave. Bolívar #65-98 Llano Largo",
        "City": "Barquisimeto",
        "Region": "Lara",
        "PostalCode": "3508",
        "Country": "Venezuela",
        "Phone": "(9) 331-6954",
        "Fax": "(9) 331-7256"
    }, {
        "Id": "LINOD",
        "CompanyName": "LINO-Delicateses",
        "ContactName": "Felipe Izquierdo",
        "ContactTitle": "Owner",
        "Address": "Ave. 5 de Mayo Porlamar",
        "City": "I. de Margarita",
        "Region": "Nueva Esparta",
        "PostalCode": "4980",
        "Country": "Venezuela",
        "Phone": "(8) 34-56-12",
        "Fax": "(8) 34-93-93"
    }, {
        "Id": "LONEP",
        "CompanyName": "Lonesome Pine Restaurant",
        "ContactName": "Fran Wilson",
        "ContactTitle": "Sales Manager",
        "Address": "89 Chiaroscuro Rd.",
        "City": "Portland",
        "Region": "OR",
        "PostalCode": "97219",
        "Country": "USA",
        "Phone": "(503) 555-9573",
        "Fax": "(503) 555-9646"
    }, {
        "Id": "MAGAA",
        "CompanyName": "Magazzini Alimentari Riuniti",
        "ContactName": "Giovanni Rovelli",
        "ContactTitle": "Marketing Manager",
        "Address": "Via Ludovico il Moro 22",
        "City": "Bergamo",
        "PostalCode": "24100",
        "Country": "Italy",
        "Phone": "035-640230",
        "Fax": "035-640231"
    }, {
        "Id": "MAISD",
        "CompanyName": "Maison Dewey",
        "ContactName": "Catherine Dewey",
        "ContactTitle": "Sales Agent",
        "Address": "Rue Joseph-Bens 532",
        "City": "Bruxelles",
        "PostalCode": "B-1180",
        "Country": "Belgium",
        "Phone": "(02) 201 24 67",
        "Fax": "(02) 201 24 68"
    }, {
        "Id": "MEREP",
        "CompanyName": "Mère Paillarde",
        "ContactName": "Jean Fresnière",
        "ContactTitle": "Marketing Assistant",
        "Address": "43 rue St. Laurent",
        "City": "Montréal",
        "Region": "Québec",
        "PostalCode": "H1J 1C3",
        "Country": "Canada",
        "Phone": "(514) 555-8054",
        "Fax": "(514) 555-8055"
    }, {
        "Id": "MORGK",
        "CompanyName": "Morgenstern Gesundkost",
        "ContactName": "Alexander Feuer",
        "ContactTitle": "Marketing Assistant",
        "Address": "Heerstr. 22",
        "City": "Leipzig",
        "PostalCode": "04179",
        "Country": "Germany",
        "Phone": "0342-023176"
    }, {
        "Id": "NORTS",
        "CompanyName": "North/South",
        "ContactName": "Simon Crowther",
        "ContactTitle": "Sales Associate",
        "Address": "South House 300 Queensbridge",
        "City": "London",
        "PostalCode": "SW7 1RZ",
        "Country": "UK",
        "Phone": "(171) 555-7733",
        "Fax": "(171) 555-2530"
    }, {
        "Id": "OCEAN",
        "CompanyName": "Océano Atlántico Ltda.",
        "ContactName": "Yvonne Moncada",
        "ContactTitle": "Sales Agent",
        "Address": "Ing. Gustavo Moncada 8585 Piso 20-A",
        "City": "Buenos Aires",
        "PostalCode": "1010",
        "Country": "Argentina",
        "Phone": "(1) 135-5333",
        "Fax": "(1) 135-5535"
    }, {
        "Id": "OLDWO",
        "CompanyName": "Old World Delicatessen",
        "ContactName": "Rene Phillips",
        "ContactTitle": "Sales Representative",
        "Address": "2743 Bering St.",
        "City": "Anchorage",
        "Region": "AK",
        "PostalCode": "99508",
        "Country": "USA",
        "Phone": "(907) 555-7584",
        "Fax": "(907) 555-2880"
    }, {
        "Id": "OTTIK",
        "CompanyName": "Ottilies Käseladen",
        "ContactName": "Henriette Pfalzheim",
        "ContactTitle": "Owner",
        "Address": "Mehrheimerstr. 369",
        "City": "Köln",
        "PostalCode": "50739",
        "Country": "Germany",
        "Phone": "0221-0644327",
        "Fax": "0221-0765721"
    }, {
        "Id": "PARIS",
        "CompanyName": "Paris spécialités",
        "ContactName": "Marie Bertrand",
        "ContactTitle": "Owner",
        "Address": "265, boulevard Charonne",
        "City": "Paris",
        "PostalCode": "75012",
        "Country": "France",
        "Phone": "(1) 42.34.22.66",
        "Fax": "(1) 42.34.22.77"
    }, {
        "Id": "PERIC",
        "CompanyName": "Pericles Comidas clásicas",
        "ContactName": "Guillermo Fernández",
        "ContactTitle": "Sales Representative",
        "Address": "Calle Dr. Jorge Cash 321",
        "City": "México D.F.",
        "PostalCode": "05033",
        "Country": "Mexico",
        "Phone": "(5) 552-3745",
        "Fax": "(5) 545-3745"
    }, {
        "Id": "PICCO",
        "CompanyName": "Piccolo und mehr",
        "ContactName": "Georg Pipps",
        "ContactTitle": "Sales Manager",
        "Address": "Geislweg 14",
        "City": "Salzburg",
        "PostalCode": "5020",
        "Country": "Austria",
        "Phone": "6562-9722",
        "Fax": "6562-9723"
    }, {
        "Id": "PRINI",
        "CompanyName": "Princesa Isabel Vinhos",
        "ContactName": "Isabel de Castro",
        "ContactTitle": "Sales Representative",
        "Address": "Estrada da saúde n. 58",
        "City": "Lisboa",
        "PostalCode": "1756",
        "Country": "Portugal",
        "Phone": "(1) 356-5634"
    }, {
        "Id": "QUEDE",
        "CompanyName": "Que Delícia",
        "ContactName": "Bernardo Batista",
        "ContactTitle": "Accounting Manager",
        "Address": "Rua da Panificadora, 12",
        "City": "Rio de Janeiro",
        "Region": "RJ",
        "PostalCode": "02389-673",
        "Country": "Brazil",
        "Phone": "(21) 555-4252",
        "Fax": "(21) 555-4545"
    }, {
        "Id": "QUEEN",
        "CompanyName": "Queen Cozinha",
        "ContactName": "Lúcia Carvalho",
        "ContactTitle": "Marketing Assistant",
        "Address": "Alameda dos Canàrios, 891",
        "City": "Sao Paulo",
        "Region": "SP",
        "PostalCode": "05487-020",
        "Country": "Brazil",
        "Phone": "(11) 555-1189"
    }, {
        "Id": "QUICK",
        "CompanyName": "QUICK-Stop",
        "ContactName": "Horst Kloss",
        "ContactTitle": "Accounting Manager",
        "Address": "Taucherstraße 10",
        "City": "Cunewalde",
        "PostalCode": "01307",
        "Country": "Germany",
        "Phone": "0372-035188"
    }, {
        "Id": "RANCH",
        "CompanyName": "Rancho grande",
        "ContactName": "Sergio Gutiérrez",
        "ContactTitle": "Sales Representative",
        "Address": "Av. del Libertador 900",
        "City": "Buenos Aires",
        "PostalCode": "1010",
        "Country": "Argentina",
        "Phone": "(1) 123-5555",
        "Fax": "(1) 123-5556"
    }, {
        "Id": "RATTC",
        "CompanyName": "Rattlesnake Canyon Grocery",
        "ContactName": "Paula Wilson",
        "ContactTitle": "Assistant Sales Representative",
        "Address": "2817 Milton Dr.",
        "City": "Albuquerque",
        "Region": "NM",
        "PostalCode": "87110",
        "Country": "USA",
        "Phone": "(505) 555-5939",
        "Fax": "(505) 555-3620"
    }, {
        "Id": "REGGC",
        "CompanyName": "Reggiani Caseifici",
        "ContactName": "Maurizio Moroni",
        "ContactTitle": "Sales Associate",
        "Address": "Strada Provinciale 124",
        "City": "Reggio Emilia",
        "PostalCode": "42100",
        "Country": "Italy",
        "Phone": "0522-556721",
        "Fax": "0522-556722"
    }, {
        "Id": "RICAR",
        "CompanyName": "Ricardo Adocicados",
        "ContactName": "Janete Limeira",
        "ContactTitle": "Assistant Sales Agent",
        "Address": "Av. Copacabana, 267",
        "City": "Rio de Janeiro",
        "Region": "RJ",
        "PostalCode": "02389-890",
        "Country": "Brazil",
        "Phone": "(21) 555-3412"
    }, {
        "Id": "RICSU",
        "CompanyName": "Richter Supermarkt",
        "ContactName": "Michael Holz",
        "ContactTitle": "Sales Manager",
        "Address": "Grenzacherweg 237",
        "City": "Genève",
        "PostalCode": "1203",
        "Country": "Switzerland",
        "Phone": "0897-034214"
    }, {
        "Id": "ROMEY",
        "CompanyName": "Romero y tomillo",
        "ContactName": "Alejandra Camino",
        "ContactTitle": "Accounting Manager",
        "Address": "Gran Vía, 1",
        "City": "Madrid",
        "PostalCode": "28001",
        "Country": "Spain",
        "Phone": "(91) 745 6200",
        "Fax": "(91) 745 6210"
    }, {
        "Id": "SANTG",
        "CompanyName": "Santé Gourmet",
        "ContactName": "Jonas Bergulfsen",
        "ContactTitle": "Owner",
        "Address": "Erling Skakkes gate 78",
        "City": "Stavern",
        "PostalCode": "4110",
        "Country": "Norway",
        "Phone": "07-98 92 35",
        "Fax": "07-98 92 47"
    }, {
        "Id": "SAVEA",
        "CompanyName": "Save-a-lot Markets",
        "ContactName": "Jose Pavarotti",
        "ContactTitle": "Sales Representative",
        "Address": "187 Suffolk Ln.",
        "City": "Boise",
        "Region": "ID",
        "PostalCode": "83720",
        "Country": "USA",
        "Phone": "(208) 555-8097"
    }, {
        "Id": "SEVES",
        "CompanyName": "Seven Seas Imports",
        "ContactName": "Hari Kumar",
        "ContactTitle": "Sales Manager",
        "Address": "90 Wadhurst Rd.",
        "City": "London",
        "PostalCode": "OX15 4NB",
        "Country": "UK",
        "Phone": "(171) 555-1717",
        "Fax": "(171) 555-5646"
    }, {
        "Id": "SIMOB",
        "CompanyName": "Simons bistro",
        "ContactName": "Jytte Petersen",
        "ContactTitle": "Owner",
        "Address": "Vinbæltet 34",
        "City": "Kobenhavn",
        "PostalCode": "1734",
        "Country": "Denmark",
        "Phone": "31 12 34 56",
        "Fax": "31 13 35 57"
    }, {
        "Id": "SPECD",
        "CompanyName": "Spécialités du monde",
        "ContactName": "Dominique Perrier",
        "ContactTitle": "Marketing Manager",
        "Address": "25, rue Lauriston",
        "City": "Paris",
        "PostalCode": "75016",
        "Country": "France",
        "Phone": "(1) 47.55.60.10",
        "Fax": "(1) 47.55.60.20"
    }, {
        "Id": "SPLIR",
        "CompanyName": "Split Rail Beer & Ale",
        "ContactName": "Art Braunschweiger",
        "ContactTitle": "Sales Manager",
        "Address": "P.O. Box 555",
        "City": "Lander",
        "Region": "WY",
        "PostalCode": "82520",
        "Country": "USA",
        "Phone": "(307) 555-4680",
        "Fax": "(307) 555-6525"
    }, {
        "Id": "SUPRD",
        "CompanyName": "Suprêmes délices",
        "ContactName": "Pascale Cartrain",
        "ContactTitle": "Accounting Manager",
        "Address": "Boulevard Tirou, 255",
        "City": "Charleroi",
        "PostalCode": "B-6000",
        "Country": "Belgium",
        "Phone": "(071) 23 67 22 20",
        "Fax": "(071) 23 67 22 21"
    }, {
        "Id": "THEBI",
        "CompanyName": "The Big Cheese",
        "ContactName": "Liz Nixon",
        "ContactTitle": "Marketing Manager",
        "Address": "89 Jefferson Way Suite 2",
        "City": "Portland",
        "Region": "OR",
        "PostalCode": "97201",
        "Country": "USA",
        "Phone": "(503) 555-3612"
    }, {
        "Id": "THECR",
        "CompanyName": "The Cracker Box",
        "ContactName": "Liu Wong",
        "ContactTitle": "Marketing Assistant",
        "Address": "55 Grizzly Peak Rd.",
        "City": "Butte",
        "Region": "MT",
        "PostalCode": "59801",
        "Country": "USA",
        "Phone": "(406) 555-5834",
        "Fax": "(406) 555-8083"
    }, {
        "Id": "TOMSP",
        "CompanyName": "Toms Spezialitäten",
        "ContactName": "Karin Josephs",
        "ContactTitle": "Marketing Manager",
        "Address": "Luisenstr. 48",
        "City": "Münster",
        "PostalCode": "44087",
        "Country": "Germany",
        "Phone": "0251-031259",
        "Fax": "0251-035695"
    }, {
        "Id": "TORTU",
        "CompanyName": "Tortuga Restaurante",
        "ContactName": "Miguel Angel Paolino",
        "ContactTitle": "Owner",
        "Address": "Avda. Azteca 123",
        "City": "México D.F.",
        "PostalCode": "05033",
        "Country": "Mexico",
        "Phone": "(5) 555-2933"
    }, {
        "Id": "TRADH",
        "CompanyName": "Tradição Hipermercados",
        "ContactName": "Anabela Domingues",
        "ContactTitle": "Sales Representative",
        "Address": "Av. Inês de Castro, 414",
        "City": "Sao Paulo",
        "Region": "SP",
        "PostalCode": "05634-030",
        "Country": "Brazil",
        "Phone": "(11) 555-2167",
        "Fax": "(11) 555-2168"
    }, {
        "Id": "TRAIH",
        "CompanyName": "Trail's Head Gourmet Provisioners",
        "ContactName": "Helvetius Nagy",
        "ContactTitle": "Sales Associate",
        "Address": "722 DaVinci Blvd.",
        "City": "Kirkland",
        "Region": "WA",
        "PostalCode": "98034",
        "Country": "USA",
        "Phone": "(206) 555-8257",
        "Fax": "(206) 555-2174"
    }, {
        "Id": "VAFFE",
        "CompanyName": "Vaffeljernet",
        "ContactName": "Palle Ibsen",
        "ContactTitle": "Sales Manager",
        "Address": "Smagsloget 45",
        "City": "Århus",
        "PostalCode": "8200",
        "Country": "Denmark",
        "Phone": "86 21 32 43",
        "Fax": "86 22 33 44"
    }, {
        "Id": "VICTE",
        "CompanyName": "Victuailles en stock",
        "ContactName": "Mary Saveley",
        "ContactTitle": "Sales Agent",
        "Address": "2, rue du Commerce",
        "City": "Lyon",
        "PostalCode": "69004",
        "Country": "France",
        "Phone": "78.32.54.86",
        "Fax": "78.32.54.87"
    }, {
        "Id": "VINET",
        "CompanyName": "Vins et alcools Chevalier",
        "ContactName": "Paul Henriot",
        "ContactTitle": "Accounting Manager",
        "Address": "59 rue de l'Abbaye",
        "City": "Reims",
        "PostalCode": "51100",
        "Country": "France",
        "Phone": "26.47.15.10",
        "Fax": "26.47.15.11"
    }, {
        "Id": "WANDK",
        "CompanyName": "Die Wandernde Kuh",
        "ContactName": "Rita Müller",
        "ContactTitle": "Sales Representative",
        "Address": "Adenauerallee 900",
        "City": "Stuttgart",
        "PostalCode": "70563",
        "Country": "Germany",
        "Phone": "0711-020361",
        "Fax": "0711-035428"
    }, {
        "Id": "WARTH",
        "CompanyName": "Wartian Herkku",
        "ContactName": "Pirkko Koskitalo",
        "ContactTitle": "Accounting Manager",
        "Address": "Torikatu 38",
        "City": "Oulu",
        "PostalCode": "90110",
        "Country": "Finland",
        "Phone": "981-443655",
        "Fax": "981-443655"
    }, {
        "Id": "WELLI",
        "CompanyName": "Wellington Importadora",
        "ContactName": "Paula Parente",
        "ContactTitle": "Sales Manager",
        "Address": "Rua do Mercado, 12",
        "City": "Resende",
        "Region": "SP",
        "PostalCode": "08737-363",
        "Country": "Brazil",
        "Phone": "(14) 555-8122"
    }, {
        "Id": "WHITC",
        "CompanyName": "White Clover Markets",
        "ContactName": "Karl Jablonski",
        "ContactTitle": "Owner",
        "Address": "305 - 14th Ave. S. Suite 3B",
        "City": "Seattle",
        "Region": "WA",
        "PostalCode": "98128",
        "Country": "USA",
        "Phone": "(206) 555-4112",
        "Fax": "(206) 555-4115"
    }, {
        "Id": "WILMK",
        "CompanyName": "Wilman Kala",
        "ContactName": "Matti Karttunen",
        "ContactTitle": "Owner/Marketing Assistant",
        "Address": "Keskuskatu 45",
        "City": "Helsinki",
        "PostalCode": "21240",
        "Country": "Finland",
        "Phone": "90-224 8858",
        "Fax": "90-224 8858"
    }, {
        "Id": "WOLZA",
        "CompanyName": "Wolski  Zajazd",
        "ContactName": "Zbyszek Piestrzeniewicz",
        "ContactTitle": "Owner",
        "Address": "ul. Filtrowa 68",
        "City": "Warszawa",
        "PostalCode": "01-012",
        "Country": "Poland",
        "Phone": "(26) 642-7012",
        "Fax": "(26) 642-7012"
    }],
    "ResponseStatus": {}
  }
let dataForSlide= {};
let getData = function () {
   
    for (var i =0; i <  usersData.Customers.length -1; i++) {
        let currentCountry = usersData.Customers[i].Country;
        let currentCity = usersData.Customers[i].City;
        if (dataForSlide.hasOwnProperty(currentCountry)){
            for (var j =0;  j <  dataForSlide[currentCountry].cities.length; j++ ){
                if (currentCity == dataForSlide[currentCountry].cities[j] ){
                    break;
                }
                dataForSlide[currentCountry].cities.push(usersData.Customers[i].City)
                break;
            }
        }else {
            dataForSlide[currentCountry] = [usersData.Customers[i].Country]
            dataForSlide[currentCountry].cities = [usersData.Customers[i].City]
        }
    }
}
getData();
var dataSlide = Object.keys(dataForSlide).map(function(key) {
  return [dataForSlide[key]];
});

	var prepData = {
		title: 'Countries and cities',
		countries: dataSlide
	}
	let whatThis ="data:image/jpeg;base64,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"
    
    $scope.images=[{check:'UI/UX',title:'Provide your insights regarding the interface', result:'Desing has no hierachy. \nSite could be Cleaner.\nThe branding of the site is simply not there. \nInformation gets lost to the eye'}, prepData, {check:'Code',title:'Identify a piece of code', result:'Mixin from LESS css Preformater'}, {src:whatThis, check:'Code',title:'Identify a piece of code', result:'Cute Picture of a cat'}];
	
	
});
	
razorApp.directive('slider', function ($timeout) {
  return {
    restrict: 'AE',
	replace: true,
	scope:{
		images: '='
	},
    link: function (scope, elem, attrs) {
	
		scope.currentIndex=0;

		scope.next=function(){
			scope.currentIndex<scope.images.length-1?scope.currentIndex++:scope.currentIndex=0;
		};
		
		scope.prev=function(){
			scope.currentIndex>0?scope.currentIndex--:scope.currentIndex=scope.images.length-1;
		};
		
		scope.$watch('currentIndex',function(){
			scope.images.forEach(function(image){
				image.visible=false;
			});
			scope.images[scope.currentIndex].visible=true;
		});
		
		/* Start: For Automatic slideshow*/
		
		//var timer;
		
		// var sliderFunc=function(){
		// 	timer=$timeout(function(){
		// 		scope.next();
		// 		timer=$timeout(sliderFunc,5000);
		// 	},5000);
		// };
		
		// sliderFunc();
		
		// scope.$on('$destroy',function(){
		// 	$timeout.cancel(timer);
		// });
		
		/* End : For Automatic slideshow*/
		
    },
	templateUrl:'templates/templateurl.html'
  }
});
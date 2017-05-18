let categoriesData = [
  {
    "id"          : 1,
    "categoryName": "Salary",
    "categoryType": "income"
  },
  {
    "id"          : 2,
    "categoryName": "Other income",
    "categoryType": "income"
  },
  {
    "id"          : 3,
    "categoryName": "Interest",
    "categoryType": "income"
  },
  {
    "id"          : 101,
    "categoryName": "Clothing",
    "categoryType": "expense"
  },
  {
    "id"          : 102,
    "categoryName": "Housing",
    "categoryType": "expense"
  },
  {
    "id"          : 103,
    "categoryName": "Food",
    "categoryType": "expense"
  },
  {
    "id"          : 104,
    "categoryName": "Entertainment",
    "categoryType": "expense"
  },
  {
    "id"          : 105,
    "categoryName": "Medical",
    "categoryType": "expense"
  },
  {
    "id"          : 106,
    "categoryName": "Utilities",
    "categoryType": "expense"
  },
  {
    "id"          : 107,
    "categoryName": "Transportation",
    "categoryType": "expense"
  },
  {
    "id"          : 108,
    "categoryName": "Cash",
    "categoryType": "expense"
  }
];
let staticData = {
  "txTypes"     : [
    {
      "id"      : 1,
      "typeName": "Credit"
    },
    {
      "id"      : 2,
      "typeName": "Debit"
    },
    {
      "id"      : 3,
      "typeName": "Deposit"
    },
    {
      "id"      : 4,
      "typeName": "Withdrawal"
    }
  ],
  "accountTypes": [
    {
      "id"             : 1,
      "accountTypeName": "Checking",
      "interestRate"   : 0
    },
    {
      "id"             : 2,
      "accountTypeName": "Savings",
      "interestRate"   : 0.02
    },
    {
      "id"             : 3,
      "accountTypeName": "Certificate of Deposit",
      "interestRate"   : 0.05
    },
    {
      "id"             : 4,
      "accountTypeName": "Investment",
      "interestRate"   : 0
    }
  ]
};
let accountsData = [
  {
    "id"             : 1,
    "personId"       : 201,
    "accountTypeId"  : 1,
    "startingBalance": 1000
  },
  {
    "id"             : 2,
    "personId"       : 201,
    "accountTypeId"  : 2,
    "startingBalance": 10000
  },
  {
    "id"             : 3,
    "personId"       : 202,
    "accountTypeId"  : 1,
    "startingBalance": 500
  },
  {
    "id"             : 4,
    "personId"       : 202,
    "accountTypeId"  : 2,
    "startingBalance": 100
  },
  {
    "id"             : 5,
    "personId"       : 203,
    "accountTypeId"  : 1,
    "startingBalance": 865
  },
  {
    "id"             : 6,
    "personId"       : 204,
    "accountTypeId"  : 1,
    "startingBalance": 10
  },
  {
    "id"             : 7,
    "personId"       : 204,
    "accountTypeId"  : 2,
    "startingBalance": 5
  },
  {
    "id"             : 8,
    "personId"       : 205,
    "accountTypeId"  : 1,
    "startingBalance": 6843
  },
  {
    "id"             : 9,
    "personId"       : 205,
    "accountTypeId"  : 2,
    "startingBalance": 3168
  },
  {
    "id"             : 10,
    "personId"       : 206,
    "accountTypeId"  : 1,
    "startingBalance": 895
  },
  {
    "id"             : 11,
    "personId"       : 206,
    "accountTypeId"  : 2,
    "startingBalance": 594
  },
  {
    "id"             : 12,
    "personId"       : 207,
    "accountTypeId"  : 1,
    "startingBalance": 1686
  },
  {
    "id"             : 13,
    "personId"       : 208,
    "accountTypeId"  : 1,
    "startingBalance": 6551
  },
  {
    "id"             : 14,
    "personId"       : 209,
    "accountTypeId"  : 2,
    "startingBalance": 12584868
  },
  {
    "id"             : 15,
    "personId"       : 210,
    "accountTypeId"  : 1,
    "startingBalance": 500
  },
  {
    "id"             : 16,
    "personId"       : 210,
    "accountTypeId"  : 2,
    "startingBalance": 125
  }
];
let peopleData = [
  {
    "firstName"  : "Jenny",
    "lastName"   : "Sparks",
    "gender"     : "female",
    "dateOfBirth": "1995-01-01",
    "id"         : 201,
    "address"    : {
      "street": "47 Kuhlman Place",
      "city"  : "New Queensborough",
      "state" : "NV",
      "zip"   : "90498-1073"
    }
  },
  {
    "firstName"  : "Lucas",
    "lastName"   : "Trent",
    "gender"     : "male",
    "dateOfBirth": "1983-02-12",
    "id"         : 202,
    "address"    : {
      "street": "8966 Telly Tunnel",
      "city"  : "Rickashire",
      "state" : "OR",
      "zip"   : "90822-8587"
    }
  },
  {
    "firstName"  : "Jack",
    "lastName"   : "Hawksmoor",
    "gender"     : "male",
    "dateOfBirth": "1974-03-26",
    "id"         : 203,
    "address"    : {
      "street": "86853 Donnelly Circle",
      "city"  : "Annester",
      "state" : "IA",
      "zip"   : "42783"
    }
  },
  {
    "firstName"  : "Jeroen",
    "lastName"   : "Thornedike",
    "gender"     : "male",
    "dateOfBirth": "1984-04-07",
    "id"         : 204,
    "address"    : {
      "street": "851 Matt Station",
      "city"  : "Ovorp",
      "state" : "UT",
      "zip"   : "69781-5546"
    }
  },
  {
    "firstName"  : "Angela",
    "lastName"   : "Cortez",
    "gender"     : "female",
    "dateOfBirth": "1979-05-15",
    "id"         : 205,
    "address"    : {
      "street": "0546 Baumbach Street",
      "city"  : "Garrison",
      "state" : "AK",
      "zip"   : "27323-2569"
    }
  },
  {
    "firstName"  : "Shen",
    "lastName"   : "Li-Min",
    "gender"     : "female",
    "dateOfBirth": "1990-06-30",
    "id"         : 206,
    "address"    : {
      "street": "293 Muller Street",
      "city"  : "Leffler",
      "state" : "VT",
      "zip"   : "33861-2679"
    }
  },
  {
    "firstName"  : "Spider",
    "lastName"   : "Jerusalem",
    "gender"     : "male",
    "dateOfBirth": "1977-07-05",
    "id"         : 207,
    "address"    : {
      "street": "282 Queenie Drives",
      "city"  : "Hesselview",
      "state" : "AL",
      "zip"   : "04221"
    }
  },
  {
    "firstName"  : "Jakita",
    "lastName"   : "Wagner",
    "gender"     : "female",
    "dateOfBirth": "1988-08-12",
    "id"         : 208,
    "address"    : {
      "street": "46892 Virgil Hill",
      "city"  : "Quantico",
      "state" : "VA",
      "zip"   : "68699"
    }
  },
  {
    "firstName"  : "Elijah",
    "lastName"   : "Snow",
    "gender"     : "male",
    "dateOfBirth": "1968-09-19",
    "id"         : 209,
    "address"    : {
      "street": "558 Jalyn Meadow",
      "city"  : "Roscoe",
      "state" : "AR",
      "zip"   : "50499-5983"
    }
  },
  {
    "firstName"  : "Ambrose",
    "lastName"   : "Chase",
    "gender"     : "male",
    "dateOfBirth": "1993-10-22",
    "id"         : 210,
    "address"    : {
      "street": "4767 Ibrahim Overpass",
      "city"  : "Port Abemouth",
      "state" : "RI",
      "zip"   : "24622"
    }
  }
];
let payeesData = [
  {
    "id"        : 1,
    "payeeName" : "DCH Mortgages",
    "address"   : "1285 Rezlog Plaza",
    "city"      : "Powhatan",
    "state"     : "RI",
    "zip"       : "02212",
    "categoryId": 102,
    "image"     : null,
    "motto"     : null
  },
  {
    "id"        : 2,
    "payeeName" : "Ill Communication Telephones",
    "address"   : "1597 Figole Grove",
    "city"      : "Akron",
    "state"     : "OH",
    "zip"       : "66345",
    "categoryId": 106,
    "image"     : null,
    "motto"     : null
  },
  {
    "id"        : 3,
    "payeeName" : "Erol's Internet",
    "address"   : "453 Loma Linda Junction",
    "city"      : "Kansas City",
    "state"     : "KS",
    "zip"       : "60019",
    "categoryId": 106,
    "image"     : null,
    "motto"     : null
  },
  {
    "id"        : 4,
    "payeeName" : "Acme Products, Inc",
    "address"   : "1669 Divided Court",
    "city"      : "Cheyenne",
    "state"     : "WY",
    "zip"       : "48324",
    "categoryId": 103,
    "image"     : null,
    "motto"     : null
  },
  {
    "id"        : 5,
    "payeeName" : "Shop-Rite Grocery Store",
    "address"   : "311 St. Paul Ave.",
    "city"      : "Baltimore",
    "state"     : "MD",
    "zip"       : "08697",
    "categoryId": 103,
    "image"     : null,
    "motto"     : null
  },
  {
    "id"        : 6,
    "payeeName" : "Sushi Land",
    "address"   : "808 Calvert St.",
    "city"      : "Baltimore",
    "state"     : "MD",
    "zip"       : "01848",
    "categoryId": 103,
    "image"     : null,
    "motto"     : null
  },
  {
    "id"        : 7,
    "payeeName" : "Worthless Peon Productions",
    "address"   : "125 Scrub Street",
    "city"      : "Santa Monica",
    "state"     : "CA",
    "zip"       : "90111",
    "categoryId": 104,
    "image"     : null,
    "motto"     : null
  },
  {
    "id"        : 8,
    "payeeName" : "The CX Institute",
    "address"   : "1715 Greymalkin Lane",
    "city"      : "Westchester",
    "state"     : "NY",
    "zip"       : "10047",
    "categoryId": 3,
    "image"     : null,
    "motto"     : null
  },
  {
    "id"        : 9,
    "payeeName" : "Gleichner, Lind and Olson, Ltd.",
    "categoryId": 107,
    "address"   : "142 Wune Street",
    "city"      : "Deetelu",
    "state"     : "WV",
    "zip"       : "80587",
    "image"     : "/images/animals/9.jpg",
    "motto"     : "Optimized executive frame"
  },
  {
    "id"        : 10,
    "payeeName" : "Klein Cars",
    "address"   : "1939 Rolfs Pass",
    "city"      : "Baltimore",
    "state"     : "MD",
    "zip"       : "97394",
    "categoryId": 107,
    "image"     : "/images/technics/4.jpg",
    "motto"     : "Seamless heuristic process improvement"
  },
  {
    "id"        : 11,
    "payeeName" : "Spinka Salon",
    "categoryId": 2,
    "address"   : "857 Descartes Turnpike",
    "city"      : "Palomar",
    "state"     : "CA",
    "zip"       : "99533",
    "image"     : "/images/cats/10.jpg",
    "motto"     : "Monitored encompassing workforce"
  },
  {
    "id"        : 12,
    "payeeName" : "Bauch-Stehr Medical Partners",
    "address"   : "671 York Ave",
    "city"      : "Baltimore",
    "state"     : "MD",
    "zip"       : "54952",
    "categoryId": 105,
    "image"     : "/images/business/3.jpg",
    "motto"     : "Versatile optimizing support"
  },
  {
    "id"        : 13,
    "payeeName" : "The Senator Theater",
    "address"   : "1689 North York Rd",
    "city"      : "Baltimore",
    "state"     : "MD",
    "zip"       : "48693",
    "categoryId": 104,
    "image"     : "/images/business/5.jpg",
    "motto"     : "Yesterday's movies tomorrow"
  },
  {
    "id"        : 14,
    "payeeName" : "Ziener & Ratke, Pediatrics",
    "address"   : "1873 Razif Loop",
    "city"      : "Fonzopo",
    "state"     : "FL",
    "zip"       : "55902",
    "categoryId": 105,
    "image"     : "/images/business/2.jpg",
    "motto"     : "Multi-lateral grid-enabled toolset"
  },
  {
    "id"        : 15,
    "payeeName" : "Heathcote Inc",
    "address"   : "798 Defarge Point",
    "city"      : "Tajuwbi",
    "state"     : "WI",
    "zip"       : "88464",
    "categoryId": 103,
    "image"     : "/images/business/3.jpg",
    "motto"     : "Secured web-enabled Graphical Clothing Interface"
  },
  {
    "id"        : 16,
    "payeeName" : "Davis, Muller and Marvin",
    "address"   : "319 Nazmo Road",
    "city"      : "Sohcutzeh",
    "state"     : "VT",
    "zip"       : "09725",
    "categoryId": 104,
    "image"     : "/images/technics/1.jpg",
    "motto"     : "Persevering regional moratorium"
  },
  {
    "id"        : 17,
    "payeeName" : "Deckow-Hand",
    "address"   : "1622 Avena Circle",
    "city"      : "Nuebaheh",
    "state"     : "MA",
    "zip"       : "52038",
    "categoryId": 106,
    "image"     : "/images/animals/9.jpg",
    "motto"     : "Cloned directional attitude"
  },
  {
    "id"        : 18,
    "payeeName" : "Watsica Design",
    "address"   : "289 Vaewi Avenue",
    "city"      : "Dorgaec",
    "state"     : "WY",
    "zip"       : "19966",
    "categoryId": 102,
    "image"     : "/images/business/5.jpg",
    "motto"     : "Streamlined full-range budgetary management"
  },
  {
    "id"        : 19,
    "payeeName" : "Wayne Enterprises",
    "categoryId": 107,
    "address"   : "319 Thomas Wayne Road",
    "city"      : "Gotham",
    "state"     : "NY",
    "zip"       : "10939",
    "image"     : "/images/technics/1.jpg",
    "motto"     : "Persevering regional moratorium"
  },
  {
    "id"        : 20,
    "payeeName" : "Stark Electronics",
    "categoryId": 3,
    "address"   : "1146 Kubo Parkway",
    "city"      : "Cupertino",
    "state"     : "CA",
    "zip"       : "96412",
    "image"     : "/images/nature/3.jpg",
    "motto"     : "Function-based logistical paradigm"
  },
  {
    "id"        : 21,
    "payeeName" : "Tyrell Corporation",
    "categoryId": 2,
    "address"   : "841 Pewuj Court",
    "city"      : "Netseyev",
    "state"     : "NY",
    "zip"       : "86629",
    "image"     : "/images/technics/7.jpg",
    "motto"     : "Diverse optimizing paradigm"
  },
  {
    "id"        : 22,
    "payeeName" : "Yoyodyne Propulsion Systems",
    "categoryId": 1,
    "address"   : "16 Blue Blazer Way",
    "city"      : "Grover's Mill",
    "state"     : "NJ",
    "zip"       : "07561",
    "image"     : "/images/cats/3.jpg",
    "motto"     : "Synchronised systemic internet solution"
  },
  {
    "id"        : 23,
    "payeeName" : "Goodman, Lieber, Kurtzberg, Holliway",
    "categoryId": 1,
    "address"   : "16 W 12 St.",
    "city"      : "New York",
    "state"     : "NY",
    "zip"       : "10015",
    "image"     : "/images/animals/9.jpg",
    "motto"     : null
  },
  {
    "id"        : 24,
    "payeeName" : "Rodriguez Outfitting",
    "categoryId": 101,
    "address"   : "587 Ipobak Terrace",
    "city"      : "Alexandria",
    "state"     : "VA",
    "zip"       : "16097",
    "image"     : "/images/nature/6.jpg",
    "motto"     : "Operative maximized matrices"
  },
  {
    "id"        : 25,
    "payeeName" : "Tower Shields",
    "categoryId": 101,
    "address"   : "289 Vaewi Avenue",
    "city"      : "Dorkachek",
    "state"     : "WY",
    "zip"       : "19966",
    "image"     : "/images/business/5.jpg",
    "motto"     : "Streamlined full-range budgetary management"
  },
  {
    "id"        : 26,
    "payeeName" : "Cash Withdrawal",
    "categoryId": 108
  }
];
let txData = [
  {
    "id"        : 1,
    "payeeId"   : 1,
    "personId"  : 201,
    "categoryId": 102,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-06-01T04:00:00.000Z",
    "amount"    : -1600
  },
  {
    "id"        : 2,
    "payeeId"   : 2,
    "personId"  : 201,
    "categoryId": 106,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-06-10T04:00:00.000Z",
    "amount"    : -22.5
  },
  {
    "id"        : 3,
    "payeeId"   : 3,
    "personId"  : 201,
    "categoryId": 106,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-06-20T04:00:00.000Z",
    "amount"    : -11.25
  },
  {
    "id"        : 4,
    "payeeId"   : 12,
    "personId"  : 201,
    "categoryId": 105,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-07-05T17:03:00.000Z",
    "amount"    : -15
  },
  {
    "id"        : 5,
    "payeeId"   : 14,
    "personId"  : 201,
    "categoryId": 105,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-07-31T16:51:00.000Z",
    "amount"    : -86.25
  },
  {
    "id"        : 6,
    "payeeId"   : 17,
    "personId"  : 201,
    "categoryId": 106,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-06-25T04:00:00.000Z",
    "amount"    : -74.75
  },
  {
    "id"        : 7,
    "payeeId"   : 5,
    "personId"  : 201,
    "categoryId": 103,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-07-14T22:14:00.000Z",
    "amount"    : -18.75
  },
  {
    "id"        : 8,
    "payeeId"   : 6,
    "personId"  : 201,
    "categoryId": 103,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-07-09T19:25:00.000Z",
    "amount"    : -46
  },
  {
    "id"        : 9,
    "payeeId"   : 9,
    "personId"  : 201,
    "categoryId": 107,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-07-26T22:21:00.000Z",
    "amount"    : -12
  },
  {
    "id"        : 10,
    "payeeId"   : 15,
    "personId"  : 201,
    "categoryId": 103,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-07-19T00:02:00.000Z",
    "amount"    : -5.25
  },
  {
    "id"        : 11,
    "payeeId"   : 24,
    "personId"  : 201,
    "categoryId": 101,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-07-04T23:18:00.000Z",
    "amount"    : -63.25
  },
  {
    "id"        : 12,
    "payeeId"   : 4,
    "personId"  : 201,
    "categoryId": 103,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-07-25T17:23:00.000Z",
    "amount"    : -57.5
  },
  {
    "id"        : 13,
    "payeeId"   : 18,
    "personId"  : 201,
    "categoryId": 102,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-07-30T19:59:00.000Z",
    "amount"    : -45
  },
  {
    "id"        : 14,
    "payeeId"   : 10,
    "personId"  : 201,
    "categoryId": 107,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-07-21T19:31:00.000Z",
    "amount"    : -126.5
  },
  {
    "id"        : 15,
    "payeeId"   : 19,
    "personId"  : 201,
    "categoryId": 107,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-07-15T19:34:00.000Z",
    "amount"    : -3.75
  },
  {
    "id"        : 16,
    "payeeId"   : 26,
    "personId"  : 201,
    "categoryId": 108,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-07-17T23:36:00.000Z",
    "amount"    : -60
  },
  {
    "id"        : 17,
    "payeeId"   : 7,
    "personId"  : 201,
    "categoryId": 104,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-07-12T00:13:00.000Z",
    "amount"    : -34.5
  },
  {
    "id"        : 18,
    "payeeId"   : 16,
    "personId"  : 201,
    "categoryId": 104,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-07-20T20:37:00.000Z",
    "amount"    : -6.75
  },
  {
    "id"        : 19,
    "payeeId"   : 25,
    "personId"  : 201,
    "categoryId": 101,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-07-16T23:31:00.000Z",
    "amount"    : -46
  },
  {
    "id"        : 20,
    "payeeId"   : 13,
    "personId"  : 201,
    "categoryId": 104,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-07-29T22:13:00.000Z",
    "amount"    : -3.75
  },
  {
    "id"        : 21,
    "payeeId"   : 5,
    "personId"  : 201,
    "categoryId": 103,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-07-05T20:55:00.000Z",
    "amount"    : -18.75
  },
  {
    "id"        : 22,
    "payeeId"   : 6,
    "personId"  : 201,
    "categoryId": 103,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-07-08T22:56:00.000Z",
    "amount"    : -6
  },
  {
    "id"        : 23,
    "payeeId"   : 9,
    "personId"  : 201,
    "categoryId": 107,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-07-27T16:37:00.000Z",
    "amount"    : -12
  },
  {
    "id"        : 24,
    "payeeId"   : 15,
    "personId"  : 201,
    "categoryId": 103,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-07-17T22:53:00.000Z",
    "amount"    : -40.25
  },
  {
    "id"        : 25,
    "payeeId"   : 24,
    "personId"  : 201,
    "categoryId": 101,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-07-15T16:02:00.000Z",
    "amount"    : -8.25
  },
  {
    "id"        : 26,
    "payeeId"   : 4,
    "personId"  : 201,
    "categoryId": 103,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-07-06T17:47:00.000Z",
    "amount"    : -57.5
  },
  {
    "id"        : 27,
    "payeeId"   : 18,
    "personId"  : 201,
    "categoryId": 102,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-07-25T17:46:00.000Z",
    "amount"    : -45
  },
  {
    "id"        : 28,
    "payeeId"   : 10,
    "personId"  : 201,
    "categoryId": 107,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-07-11T17:23:00.000Z",
    "amount"    : -16.5
  },
  {
    "id"        : 29,
    "payeeId"   : 19,
    "personId"  : 201,
    "categoryId": 107,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-07-26T21:41:00.000Z",
    "amount"    : -3.75
  },
  {
    "id"        : 30,
    "payeeId"   : 26,
    "personId"  : 201,
    "categoryId": 108,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-07-08T18:41:00.000Z",
    "amount"    : -60
  },
  {
    "id"        : 31,
    "payeeId"   : 7,
    "personId"  : 201,
    "categoryId": 104,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-07-10T16:52:00.000Z",
    "amount"    : -34.5
  },
  {
    "id"        : 32,
    "payeeId"   : 16,
    "personId"  : 201,
    "categoryId": 104,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-07-18T21:58:00.000Z",
    "amount"    : -6.75
  },
  {
    "id"        : 33,
    "payeeId"   : 25,
    "personId"  : 201,
    "categoryId": 101,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-07-19T18:30:00.000Z",
    "amount"    : -46
  },
  {
    "id"        : 34,
    "payeeId"   : 13,
    "personId"  : 201,
    "categoryId": 104,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-07-08T21:35:00.000Z",
    "amount"    : -3.75
  },
  {
    "id"        : 35,
    "payeeId"   : 5,
    "personId"  : 201,
    "categoryId": 103,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-07-22T21:08:00.000Z",
    "amount"    : -18.75
  },
  {
    "id"        : 36,
    "payeeId"   : 6,
    "personId"  : 201,
    "categoryId": 103,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-07-20T21:30:00.000Z",
    "amount"    : -46
  },
  {
    "id"        : 37,
    "payeeId"   : 9,
    "personId"  : 201,
    "categoryId": 107,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-07-02T17:01:00.000Z",
    "amount"    : -12
  },
  {
    "id"        : 38,
    "payeeId"   : 15,
    "personId"  : 201,
    "categoryId": 103,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-07-28T23:00:00.000Z",
    "amount"    : -5.25
  },
  {
    "id"        : 39,
    "payeeId"   : 24,
    "personId"  : 201,
    "categoryId": 101,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-07-20T21:55:00.000Z",
    "amount"    : -63.25
  },
  {
    "id"        : 40,
    "payeeId"   : 4,
    "personId"  : 201,
    "categoryId": 103,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-07-10T22:57:00.000Z",
    "amount"    : -7.5
  },
  {
    "id"        : 41,
    "payeeId"   : 18,
    "personId"  : 201,
    "categoryId": 102,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-07-21T00:20:00.000Z",
    "amount"    : -45
  },
  {
    "id"        : 42,
    "payeeId"   : 10,
    "personId"  : 201,
    "categoryId": 107,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-07-27T21:01:00.000Z",
    "amount"    : -16.5
  },
  {
    "id"        : 43,
    "payeeId"   : 19,
    "personId"  : 201,
    "categoryId": 107,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-07-18T22:02:00.000Z",
    "amount"    : -28.75
  },
  {
    "id"        : 44,
    "payeeId"   : 26,
    "personId"  : 201,
    "categoryId": 108,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-07-07T00:07:00.000Z",
    "amount"    : -60
  },
  {
    "id"        : 45,
    "payeeId"   : 7,
    "personId"  : 201,
    "categoryId": 104,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-07-10T19:23:00.000Z",
    "amount"    : -34.5
  },
  {
    "id"        : 46,
    "payeeId"   : 16,
    "personId"  : 201,
    "categoryId": 104,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-07-25T22:49:00.000Z",
    "amount"    : -51.75
  },
  {
    "id"        : 47,
    "payeeId"   : 25,
    "personId"  : 201,
    "categoryId": 101,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-07-06T00:05:00.000Z",
    "amount"    : -46
  },
  {
    "id"        : 48,
    "payeeId"   : 13,
    "personId"  : 201,
    "categoryId": 104,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-07-17T21:18:00.000Z",
    "amount"    : -3.75
  },
  {
    "id"        : 49,
    "payeeId"   : 5,
    "personId"  : 201,
    "categoryId": 103,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-07-08T21:15:00.000Z",
    "amount"    : -18.75
  },
  {
    "id"        : 50,
    "payeeId"   : 6,
    "personId"  : 201,
    "categoryId": 103,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-07-06T19:21:00.000Z",
    "amount"    : -46
  },
  {
    "id"        : 51,
    "payeeId"   : 1,
    "personId"  : 201,
    "categoryId": 102,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-07-01T04:00:00.000Z",
    "amount"    : -1600
  },
  {
    "id"        : 52,
    "payeeId"   : 2,
    "personId"  : 201,
    "categoryId": 106,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-07-10T04:00:00.000Z",
    "amount"    : -172.5
  },
  {
    "id"        : 53,
    "payeeId"   : 3,
    "personId"  : 201,
    "categoryId": 106,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-07-20T04:00:00.000Z",
    "amount"    : -11.25
  },
  {
    "id"        : 54,
    "payeeId"   : 12,
    "personId"  : 201,
    "categoryId": 105,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-08-27T00:03:00.000Z",
    "amount"    : -115
  },
  {
    "id"        : 55,
    "payeeId"   : 14,
    "personId"  : 201,
    "categoryId": 105,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-08-21T20:59:00.000Z",
    "amount"    : -86.25
  },
  {
    "id"        : 56,
    "payeeId"   : 17,
    "personId"  : 201,
    "categoryId": 106,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-07-25T04:00:00.000Z",
    "amount"    : -74.75
  },
  {
    "id"        : 57,
    "payeeId"   : 9,
    "personId"  : 201,
    "categoryId": 107,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-08-16T21:40:00.000Z",
    "amount"    : -92
  },
  {
    "id"        : 58,
    "payeeId"   : 10,
    "personId"  : 201,
    "categoryId": 107,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-08-13T21:26:00.000Z",
    "amount"    : -126.5
  },
  {
    "id"        : 59,
    "payeeId"   : 7,
    "personId"  : 201,
    "categoryId": 104,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-08-05T20:22:00.000Z",
    "amount"    : -34.5
  },
  {
    "id"        : 60,
    "payeeId"   : 26,
    "personId"  : 201,
    "categoryId": 108,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-08-30T18:21:00.000Z",
    "amount"    : -60
  },
  {
    "id"        : 61,
    "payeeId"   : 13,
    "personId"  : 201,
    "categoryId": 104,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-08-23T17:32:00.000Z",
    "amount"    : -3.75
  },
  {
    "id"        : 62,
    "payeeId"   : 24,
    "personId"  : 201,
    "categoryId": 101,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-08-04T20:26:00.000Z",
    "amount"    : -63.25
  },
  {
    "id"        : 63,
    "payeeId"   : 5,
    "personId"  : 201,
    "categoryId": 103,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-08-29T18:27:00.000Z",
    "amount"    : -143.75
  },
  {
    "id"        : 64,
    "payeeId"   : 19,
    "personId"  : 201,
    "categoryId": 107,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-09-01T21:07:00.000Z",
    "amount"    : -3.75
  },
  {
    "id"        : 65,
    "payeeId"   : 16,
    "personId"  : 201,
    "categoryId": 104,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-08-05T21:39:00.000Z",
    "amount"    : -51.75
  },
  {
    "id"        : 66,
    "payeeId"   : 4,
    "personId"  : 201,
    "categoryId": 103,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-08-12T17:39:00.000Z",
    "amount"    : -57.5
  },
  {
    "id"        : 67,
    "payeeId"   : 18,
    "personId"  : 201,
    "categoryId": 102,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-08-21T20:54:00.000Z",
    "amount"    : -45
  },
  {
    "id"        : 68,
    "payeeId"   : 6,
    "personId"  : 201,
    "categoryId": 103,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-08-18T16:20:00.000Z",
    "amount"    : -6
  },
  {
    "id"        : 69,
    "payeeId"   : 15,
    "personId"  : 201,
    "categoryId": 103,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-08-09T23:15:00.000Z",
    "amount"    : -5.25
  },
  {
    "id"        : 70,
    "payeeId"   : 25,
    "personId"  : 201,
    "categoryId": 101,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-08-21T20:25:00.000Z",
    "amount"    : -46
  },
  {
    "id"        : 71,
    "payeeId"   : 9,
    "personId"  : 201,
    "categoryId": 107,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-08-10T18:28:00.000Z",
    "amount"    : -12
  },
  {
    "id"        : 72,
    "payeeId"   : 10,
    "personId"  : 201,
    "categoryId": 107,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-08-07T23:26:00.000Z",
    "amount"    : -16.5
  },
  {
    "id"        : 73,
    "payeeId"   : 7,
    "personId"  : 201,
    "categoryId": 104,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-08-31T00:20:00.000Z",
    "amount"    : -34.5
  },
  {
    "id"        : 74,
    "payeeId"   : 26,
    "personId"  : 201,
    "categoryId": 108,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-08-09T17:08:00.000Z",
    "amount"    : -60
  },
  {
    "id"        : 75,
    "payeeId"   : 13,
    "personId"  : 201,
    "categoryId": 104,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-09-01T23:13:00.000Z",
    "amount"    : -3.75
  },
  {
    "id"        : 76,
    "payeeId"   : 24,
    "personId"  : 201,
    "categoryId": 101,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-08-05T17:23:00.000Z",
    "amount"    : -8.25
  },
  {
    "id"        : 77,
    "payeeId"   : 5,
    "personId"  : 201,
    "categoryId": 103,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-08-22T17:38:00.000Z",
    "amount"    : -143.75
  },
  {
    "id"        : 78,
    "payeeId"   : 19,
    "personId"  : 201,
    "categoryId": 107,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-09-01T20:53:00.000Z",
    "amount"    : -28.75
  },
  {
    "id"        : 79,
    "payeeId"   : 16,
    "personId"  : 201,
    "categoryId": 104,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-08-03T17:12:00.000Z",
    "amount"    : -51.75
  },
  {
    "id"        : 80,
    "payeeId"   : 4,
    "personId"  : 201,
    "categoryId": 103,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-08-21T23:46:00.000Z",
    "amount"    : -7.5
  },
  {
    "id"        : 81,
    "payeeId"   : 18,
    "personId"  : 201,
    "categoryId": 102,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-08-05T16:24:00.000Z",
    "amount"    : -45
  },
  {
    "id"        : 82,
    "payeeId"   : 6,
    "personId"  : 201,
    "categoryId": 103,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-08-15T21:15:00.000Z",
    "amount"    : -46
  },
  {
    "id"        : 83,
    "payeeId"   : 15,
    "personId"  : 201,
    "categoryId": 103,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-08-29T16:51:00.000Z",
    "amount"    : -40.25
  },
  {
    "id"        : 84,
    "payeeId"   : 25,
    "personId"  : 201,
    "categoryId": 101,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-08-02T20:11:00.000Z",
    "amount"    : -46
  },
  {
    "id"        : 85,
    "payeeId"   : 9,
    "personId"  : 201,
    "categoryId": 107,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-08-15T00:56:00.000Z",
    "amount"    : -92
  },
  {
    "id"        : 86,
    "payeeId"   : 10,
    "personId"  : 201,
    "categoryId": 107,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-08-08T19:06:00.000Z",
    "amount"    : -126.5
  },
  {
    "id"        : 87,
    "payeeId"   : 7,
    "personId"  : 201,
    "categoryId": 104,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-08-02T19:05:00.000Z",
    "amount"    : -4.5
  },
  {
    "id"        : 88,
    "payeeId"   : 26,
    "personId"  : 201,
    "categoryId": 108,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-08-23T21:53:00.000Z",
    "amount"    : -60
  },
  {
    "id"        : 89,
    "payeeId"   : 13,
    "personId"  : 201,
    "categoryId": 104,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-08-18T16:10:00.000Z",
    "amount"    : -28.75
  },
  {
    "id"        : 90,
    "payeeId"   : 24,
    "personId"  : 201,
    "categoryId": 101,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-08-20T20:52:00.000Z",
    "amount"    : -8.25
  },
  {
    "id"        : 91,
    "payeeId"   : 5,
    "personId"  : 201,
    "categoryId": 103,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-08-02T23:45:00.000Z",
    "amount"    : -143.75
  },
  {
    "id"        : 92,
    "payeeId"   : 19,
    "personId"  : 201,
    "categoryId": 107,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-08-25T18:09:00.000Z",
    "amount"    : -3.75
  },
  {
    "id"        : 93,
    "payeeId"   : 16,
    "personId"  : 201,
    "categoryId": 104,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-08-12T16:48:00.000Z",
    "amount"    : -6.75
  },
  {
    "id"        : 94,
    "payeeId"   : 4,
    "personId"  : 201,
    "categoryId": 103,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-08-28T21:27:00.000Z",
    "amount"    : -57.5
  },
  {
    "id"        : 95,
    "payeeId"   : 18,
    "personId"  : 201,
    "categoryId": 102,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-08-23T17:39:00.000Z",
    "amount"    : -45
  },
  {
    "id"        : 96,
    "payeeId"   : 6,
    "personId"  : 201,
    "categoryId": 103,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-08-13T00:32:00.000Z",
    "amount"    : -6
  },
  {
    "id"        : 97,
    "payeeId"   : 15,
    "personId"  : 201,
    "categoryId": 103,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-08-21T16:33:00.000Z",
    "amount"    : -40.25
  },
  {
    "id"        : 98,
    "payeeId"   : 25,
    "personId"  : 201,
    "categoryId": 101,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-08-20T18:46:00.000Z",
    "amount"    : -6
  },
  {
    "id"        : 99,
    "payeeId"   : 9,
    "personId"  : 201,
    "categoryId": 107,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-08-02T17:19:00.000Z",
    "amount"    : -12
  },
  {
    "id"        : 100,
    "payeeId"   : 10,
    "personId"  : 201,
    "categoryId": 107,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-08-16T16:53:00.000Z",
    "amount"    : -16.5
  },
  {
    "id"        : 101,
    "payeeId"   : 1,
    "personId"  : 201,
    "categoryId": 102,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-08-01T04:00:00.000Z",
    "amount"    : -1600
  },
  {
    "id"        : 102,
    "payeeId"   : 2,
    "personId"  : 201,
    "categoryId": 106,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-08-10T04:00:00.000Z",
    "amount"    : -172.5
  },
  {
    "id"        : 103,
    "payeeId"   : 3,
    "personId"  : 201,
    "categoryId": 106,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-08-20T04:00:00.000Z",
    "amount"    : -86.25
  },
  {
    "id"        : 104,
    "payeeId"   : 12,
    "personId"  : 201,
    "categoryId": 105,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-09-29T20:10:00.000Z",
    "amount"    : -15
  },
  {
    "id"        : 105,
    "payeeId"   : 14,
    "personId"  : 201,
    "categoryId": 105,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-09-10T00:42:00.000Z",
    "amount"    : -86.25
  },
  {
    "id"        : 106,
    "payeeId"   : 17,
    "personId"  : 201,
    "categoryId": 106,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-08-25T04:00:00.000Z",
    "amount"    : -74.75
  },
  {
    "id"        : 107,
    "payeeId"   : 13,
    "personId"  : 201,
    "categoryId": 104,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-09-22T19:43:00.000Z",
    "amount"    : -3.75
  },
  {
    "id"        : 108,
    "payeeId"   : 19,
    "personId"  : 201,
    "categoryId": 107,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-09-30T16:39:00.000Z",
    "amount"    : -28.75
  },
  {
    "id"        : 109,
    "payeeId"   : 18,
    "personId"  : 201,
    "categoryId": 102,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-09-15T23:41:00.000Z",
    "amount"    : -45
  },
  {
    "id"        : 110,
    "payeeId"   : 26,
    "personId"  : 201,
    "categoryId": 108,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-09-11T19:32:00.000Z",
    "amount"    : -60
  },
  {
    "id"        : 111,
    "payeeId"   : 15,
    "personId"  : 201,
    "categoryId": 103,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-09-19T16:49:00.000Z",
    "amount"    : -5.25
  },
  {
    "id"        : 112,
    "payeeId"   : 4,
    "personId"  : 201,
    "categoryId": 103,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-09-07T22:41:00.000Z",
    "amount"    : -57.5
  },
  {
    "id"        : 113,
    "payeeId"   : 25,
    "personId"  : 201,
    "categoryId": 101,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-09-29T20:16:00.000Z",
    "amount"    : -6
  },
  {
    "id"        : 114,
    "payeeId"   : 7,
    "personId"  : 201,
    "categoryId": 104,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-09-17T21:26:00.000Z",
    "amount"    : -34.5
  },
  {
    "id"        : 115,
    "payeeId"   : 9,
    "personId"  : 201,
    "categoryId": 107,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-09-12T22:08:00.000Z",
    "amount"    : -92
  },
  {
    "id"        : 116,
    "payeeId"   : 24,
    "personId"  : 201,
    "categoryId": 101,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-09-07T22:49:00.000Z",
    "amount"    : -8.25
  },
  {
    "id"        : 117,
    "payeeId"   : 10,
    "personId"  : 201,
    "categoryId": 107,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-09-24T00:07:00.000Z",
    "amount"    : -16.5
  },
  {
    "id"        : 118,
    "payeeId"   : 16,
    "personId"  : 201,
    "categoryId": 104,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-09-21T18:04:00.000Z",
    "amount"    : -6.75
  },
  {
    "id"        : 119,
    "payeeId"   : 6,
    "personId"  : 201,
    "categoryId": 103,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-09-10T16:02:00.000Z",
    "amount"    : -46
  },
  {
    "id"        : 120,
    "payeeId"   : 5,
    "personId"  : 201,
    "categoryId": 103,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-10-02T23:05:00.000Z",
    "amount"    : -143.75
  },
  {
    "id"        : 121,
    "payeeId"   : 13,
    "personId"  : 201,
    "categoryId": 104,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-09-21T17:28:00.000Z",
    "amount"    : -3.75
  },
  {
    "id"        : 122,
    "payeeId"   : 19,
    "personId"  : 201,
    "categoryId": 107,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-09-30T16:28:00.000Z",
    "amount"    : -3.75
  },
  {
    "id"        : 123,
    "payeeId"   : 18,
    "personId"  : 201,
    "categoryId": 102,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-09-06T18:39:00.000Z",
    "amount"    : -45
  },
  {
    "id"        : 124,
    "payeeId"   : 26,
    "personId"  : 201,
    "categoryId": 108,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-09-15T21:45:00.000Z",
    "amount"    : -60
  },
  {
    "id"        : 125,
    "payeeId"   : 15,
    "personId"  : 201,
    "categoryId": 103,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-09-07T17:13:00.000Z",
    "amount"    : -5.25
  },
  {
    "id"        : 126,
    "payeeId"   : 4,
    "personId"  : 201,
    "categoryId": 103,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-09-08T20:52:00.000Z",
    "amount"    : -7.5
  },
  {
    "id"        : 127,
    "payeeId"   : 25,
    "personId"  : 201,
    "categoryId": 101,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-09-05T22:14:00.000Z",
    "amount"    : -46
  },
  {
    "id"        : 128,
    "payeeId"   : 7,
    "personId"  : 201,
    "categoryId": 104,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-09-02T20:31:00.000Z",
    "amount"    : -4.5
  },
  {
    "id"        : 129,
    "payeeId"   : 9,
    "personId"  : 201,
    "categoryId": 107,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-09-07T18:17:00.000Z",
    "amount"    : -12
  },
  {
    "id"        : 130,
    "payeeId"   : 24,
    "personId"  : 201,
    "categoryId": 101,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-09-17T16:01:00.000Z",
    "amount"    : -8.25
  },
  {
    "id"        : 131,
    "payeeId"   : 10,
    "personId"  : 201,
    "categoryId": 107,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-10-02T22:16:00.000Z",
    "amount"    : -126.5
  },
  {
    "id"        : 132,
    "payeeId"   : 16,
    "personId"  : 201,
    "categoryId": 104,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-09-21T20:13:00.000Z",
    "amount"    : -6.75
  },
  {
    "id"        : 133,
    "payeeId"   : 6,
    "personId"  : 201,
    "categoryId": 103,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-09-07T23:41:00.000Z",
    "amount"    : -6
  },
  {
    "id"        : 134,
    "payeeId"   : 5,
    "personId"  : 201,
    "categoryId": 103,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-09-27T20:03:00.000Z",
    "amount"    : -18.75
  },
  {
    "id"        : 135,
    "payeeId"   : 13,
    "personId"  : 201,
    "categoryId": 104,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-09-26T00:39:00.000Z",
    "amount"    : -28.75
  },
  {
    "id"        : 136,
    "payeeId"   : 19,
    "personId"  : 201,
    "categoryId": 107,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-10-02T15:59:00.000Z",
    "amount"    : -3.75
  },
  {
    "id"        : 137,
    "payeeId"   : 18,
    "personId"  : 201,
    "categoryId": 102,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-09-12T22:28:00.000Z",
    "amount"    : -45
  },
  {
    "id"        : 138,
    "payeeId"   : 26,
    "personId"  : 201,
    "categoryId": 108,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-09-05T19:41:00.000Z",
    "amount"    : -60
  },
  {
    "id"        : 139,
    "payeeId"   : 15,
    "personId"  : 201,
    "categoryId": 103,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-09-13T21:25:00.000Z",
    "amount"    : -5.25
  },
  {
    "id"        : 140,
    "payeeId"   : 4,
    "personId"  : 201,
    "categoryId": 103,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-09-28T00:45:00.000Z",
    "amount"    : -57.5
  },
  {
    "id"        : 141,
    "payeeId"   : 25,
    "personId"  : 201,
    "categoryId": 101,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-09-19T19:09:00.000Z",
    "amount"    : -6
  },
  {
    "id"        : 142,
    "payeeId"   : 7,
    "personId"  : 201,
    "categoryId": 104,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-09-23T18:35:00.000Z",
    "amount"    : -34.5
  },
  {
    "id"        : 143,
    "payeeId"   : 9,
    "personId"  : 201,
    "categoryId": 107,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-09-20T20:49:00.000Z",
    "amount"    : -92
  },
  {
    "id"        : 144,
    "payeeId"   : 24,
    "personId"  : 201,
    "categoryId": 101,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-09-08T16:08:00.000Z",
    "amount"    : -8.25
  },
  {
    "id"        : 145,
    "payeeId"   : 10,
    "personId"  : 201,
    "categoryId": 107,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-09-12T22:24:00.000Z",
    "amount"    : -126.5
  },
  {
    "id"        : 146,
    "payeeId"   : 16,
    "personId"  : 201,
    "categoryId": 104,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-09-16T16:29:00.000Z",
    "amount"    : -6.75
  },
  {
    "id"        : 147,
    "payeeId"   : 6,
    "personId"  : 201,
    "categoryId": 103,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-09-25T20:41:00.000Z",
    "amount"    : -6
  },
  {
    "id"        : 148,
    "payeeId"   : 5,
    "personId"  : 201,
    "categoryId": 103,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-09-26T20:17:00.000Z",
    "amount"    : -18.75
  },
  {
    "id"        : 149,
    "payeeId"   : 13,
    "personId"  : 201,
    "categoryId": 104,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-09-12T00:43:00.000Z",
    "amount"    : -28.75
  },
  {
    "id"        : 150,
    "payeeId"   : 19,
    "personId"  : 201,
    "categoryId": 107,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-09-04T00:47:00.000Z",
    "amount"    : -3.75
  },
  {
    "id"        : 151,
    "payeeId"   : 23,
    "personId"  : 201,
    "categoryId": 1,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-06-01T04:00:00.000Z",
    "amount"    : 3000
  },
  {
    "id"        : 152,
    "payeeId"   : 23,
    "personId"  : 201,
    "categoryId": 1,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-06-15T04:00:00.000Z",
    "amount"    : 3000
  },
  {
    "id"        : 153,
    "payeeId"   : 8,
    "personId"  : 201,
    "categoryId": 3,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-07-26T19:55:00.000Z",
    "amount"    : 15
  },
  {
    "id"        : 154,
    "payeeId"   : 20,
    "personId"  : 201,
    "categoryId": 3,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-07-04T23:13:00.000Z",
    "amount"    : 172.5
  },
  {
    "id"        : 155,
    "payeeId"   : 23,
    "personId"  : 201,
    "categoryId": 1,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-07-01T04:00:00.000Z",
    "amount"    : 3000
  },
  {
    "id"        : 156,
    "payeeId"   : 23,
    "personId"  : 201,
    "categoryId": 1,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-07-15T04:00:00.000Z",
    "amount"    : 3000
  },
  {
    "id"        : 157,
    "payeeId"   : 20,
    "personId"  : 201,
    "categoryId": 3,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-08-13T21:58:00.000Z",
    "amount"    : 22.5
  },
  {
    "id"        : 158,
    "payeeId"   : 11,
    "personId"  : 201,
    "categoryId": 2,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-08-03T17:30:00.000Z",
    "amount"    : 57.5
  },
  {
    "id"        : 159,
    "payeeId"   : 23,
    "personId"  : 201,
    "categoryId": 1,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-08-01T04:00:00.000Z",
    "amount"    : 3000
  },
  {
    "id"        : 160,
    "payeeId"   : 23,
    "personId"  : 201,
    "categoryId": 1,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-08-15T04:00:00.000Z",
    "amount"    : 3000
  },
  {
    "id"        : 161,
    "payeeId"   : 8,
    "personId"  : 201,
    "categoryId": 3,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-09-06T18:44:00.000Z",
    "amount"    : 15
  },
  {
    "id"        : 162,
    "payeeId"   : 21,
    "personId"  : 201,
    "categoryId": 2,
    "accountId" : 1,
    "txType"    : "2",
    "txDate"    : "2016-09-03T19:43:00.000Z",
    "amount"    : 86.25
  },
  {
    "id"        : 163,
    "payeeId"   : 11,
    "personId"  : 201,
    "categoryId": 2,
    "accountId" : 2,
    "txType"    : "2",
    "txDate"    : "2016-07-14T23:53:00.000Z",
    "amount"    : 7.5
  },
  {
    "id"        : 164,
    "payeeId"   : 20,
    "personId"  : 201,
    "categoryId": 3,
    "accountId" : 2,
    "txType"    : "2",
    "txDate"    : "2016-07-23T00:49:00.000Z",
    "amount"    : 22.5
  },
  {
    "id"        : 165,
    "payeeId"   : 8,
    "personId"  : 201,
    "categoryId": 3,
    "accountId" : 2,
    "txType"    : "2",
    "txDate"    : "2016-07-17T22:03:00.000Z",
    "amount"    : 115
  },
  {
    "id"        : 166,
    "payeeId"   : 21,
    "personId"  : 201,
    "categoryId": 2,
    "accountId" : 2,
    "txType"    : "2",
    "txDate"    : "2016-07-14T00:46:00.000Z",
    "amount"    : 86.25
  },
  {
    "id"        : 167,
    "payeeId"   : 21,
    "personId"  : 201,
    "categoryId": 2,
    "accountId" : 2,
    "txType"    : "2",
    "txDate"    : "2016-08-08T17:35:00.000Z",
    "amount"    : 11.25
  },
  {
    "id"        : 168,
    "payeeId"   : 8,
    "personId"  : 201,
    "categoryId": 3,
    "accountId" : 2,
    "txType"    : "2",
    "txDate"    : "2016-08-26T17:32:00.000Z",
    "amount"    : 15
  },
  {
    "id"        : 169,
    "payeeId"   : 20,
    "personId"  : 201,
    "categoryId": 3,
    "accountId" : 2,
    "txType"    : "2",
    "txDate"    : "2016-08-07T17:07:00.000Z",
    "amount"    : 22.5
  },
  {
    "id"        : 170,
    "payeeId"   : 11,
    "personId"  : 201,
    "categoryId": 2,
    "accountId" : 2,
    "txType"    : "2",
    "txDate"    : "2016-08-09T20:23:00.000Z",
    "amount"    : 57.5
  },
  {
    "id"        : 171,
    "payeeId"   : 11,
    "personId"  : 201,
    "categoryId": 2,
    "accountId" : 2,
    "txType"    : "2",
    "txDate"    : "2016-09-19T16:29:00.000Z",
    "amount"    : 57.5
  },
  {
    "id"        : 172,
    "payeeId"   : 20,
    "personId"  : 201,
    "categoryId": 3,
    "accountId" : 2,
    "txType"    : "2",
    "txDate"    : "2016-09-03T20:22:00.000Z",
    "amount"    : 22.5
  },
  {
    "id"        : 173,
    "payeeId"   : 21,
    "personId"  : 201,
    "categoryId": 2,
    "accountId" : 2,
    "txType"    : "2",
    "txDate"    : "2016-09-27T00:31:00.000Z",
    "amount"    : 86.25
  },
  {
    "id"        : 174,
    "payeeId"   : 8,
    "personId"  : 201,
    "categoryId": 3,
    "accountId" : 2,
    "txType"    : "2",
    "txDate"    : "2016-09-04T00:50:00.000Z",
    "amount"    : 15
  },
  {
    "id"        : 175,
    "payeeId"   : 1,
    "personId"  : 202,
    "categoryId": 102,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-06-01T04:00:00.000Z",
    "amount"    : -1600
  },
  {
    "id"        : 176,
    "payeeId"   : 2,
    "personId"  : 202,
    "categoryId": 106,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-06-10T04:00:00.000Z",
    "amount"    : -22.5
  },
  {
    "id"        : 177,
    "payeeId"   : 3,
    "personId"  : 202,
    "categoryId": 106,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-06-20T04:00:00.000Z",
    "amount"    : -11.25
  },
  {
    "id"        : 178,
    "payeeId"   : 12,
    "personId"  : 202,
    "categoryId": 105,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-07-31T22:57:00.000Z",
    "amount"    : -15
  },
  {
    "id"        : 179,
    "payeeId"   : 14,
    "personId"  : 202,
    "categoryId": 105,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-07-10T23:18:00.000Z",
    "amount"    : -11.25
  },
  {
    "id"        : 180,
    "payeeId"   : 17,
    "personId"  : 202,
    "categoryId": 106,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-06-25T04:00:00.000Z",
    "amount"    : -74.75
  },
  {
    "id"        : 181,
    "payeeId"   : 9,
    "personId"  : 202,
    "categoryId": 107,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-07-27T23:57:00.000Z",
    "amount"    : -12
  },
  {
    "id"        : 182,
    "payeeId"   : 4,
    "personId"  : 202,
    "categoryId": 103,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-07-15T18:06:00.000Z",
    "amount"    : -57.5
  },
  {
    "id"        : 183,
    "payeeId"   : 25,
    "personId"  : 202,
    "categoryId": 101,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-07-15T20:38:00.000Z",
    "amount"    : -46
  },
  {
    "id"        : 184,
    "payeeId"   : 16,
    "personId"  : 202,
    "categoryId": 104,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-07-04T18:06:00.000Z",
    "amount"    : -51.75
  },
  {
    "id"        : 185,
    "payeeId"   : 26,
    "personId"  : 202,
    "categoryId": 108,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-07-26T17:08:00.000Z",
    "amount"    : -60
  },
  {
    "id"        : 186,
    "payeeId"   : 24,
    "personId"  : 202,
    "categoryId": 101,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-07-14T17:34:00.000Z",
    "amount"    : -8.25
  },
  {
    "id"        : 187,
    "payeeId"   : 5,
    "personId"  : 202,
    "categoryId": 103,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-07-13T17:28:00.000Z",
    "amount"    : -143.75
  },
  {
    "id"        : 188,
    "payeeId"   : 18,
    "personId"  : 202,
    "categoryId": 102,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-07-22T20:16:00.000Z",
    "amount"    : -45
  },
  {
    "id"        : 189,
    "payeeId"   : 13,
    "personId"  : 202,
    "categoryId": 104,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-07-12T20:29:00.000Z",
    "amount"    : -3.75
  },
  {
    "id"        : 190,
    "payeeId"   : 10,
    "personId"  : 202,
    "categoryId": 107,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-07-27T22:24:00.000Z",
    "amount"    : -16.5
  },
  {
    "id"        : 191,
    "payeeId"   : 6,
    "personId"  : 202,
    "categoryId": 103,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-07-22T17:57:00.000Z",
    "amount"    : -46
  },
  {
    "id"        : 192,
    "payeeId"   : 7,
    "personId"  : 202,
    "categoryId": 104,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-07-13T19:08:00.000Z",
    "amount"    : -34.5
  },
  {
    "id"        : 193,
    "payeeId"   : 15,
    "personId"  : 202,
    "categoryId": 103,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-07-25T18:03:00.000Z",
    "amount"    : -40.25
  },
  {
    "id"        : 194,
    "payeeId"   : 19,
    "personId"  : 202,
    "categoryId": 107,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-07-22T00:49:00.000Z",
    "amount"    : -28.75
  },
  {
    "id"        : 195,
    "payeeId"   : 9,
    "personId"  : 202,
    "categoryId": 107,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-07-03T19:06:00.000Z",
    "amount"    : -92
  },
  {
    "id"        : 196,
    "payeeId"   : 4,
    "personId"  : 202,
    "categoryId": 103,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-07-10T21:50:00.000Z",
    "amount"    : -57.5
  },
  {
    "id"        : 197,
    "payeeId"   : 25,
    "personId"  : 202,
    "categoryId": 101,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-07-22T18:56:00.000Z",
    "amount"    : -46
  },
  {
    "id"        : 198,
    "payeeId"   : 16,
    "personId"  : 202,
    "categoryId": 104,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-07-04T23:47:00.000Z",
    "amount"    : -51.75
  },
  {
    "id"        : 199,
    "payeeId"   : 26,
    "personId"  : 202,
    "categoryId": 108,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-07-31T00:26:00.000Z",
    "amount"    : -60
  },
  {
    "id"        : 200,
    "payeeId"   : 24,
    "personId"  : 202,
    "categoryId": 101,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-07-17T23:03:00.000Z",
    "amount"    : -8.25
  },
  {
    "id"        : 201,
    "payeeId"   : 5,
    "personId"  : 202,
    "categoryId": 103,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-07-05T16:49:00.000Z",
    "amount"    : -18.75
  },
  {
    "id"        : 202,
    "payeeId"   : 18,
    "personId"  : 202,
    "categoryId": 102,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-07-07T23:58:00.000Z",
    "amount"    : -45
  },
  {
    "id"        : 203,
    "payeeId"   : 13,
    "personId"  : 202,
    "categoryId": 104,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-07-12T20:41:00.000Z",
    "amount"    : -28.75
  },
  {
    "id"        : 204,
    "payeeId"   : 10,
    "personId"  : 202,
    "categoryId": 107,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-07-22T16:56:00.000Z",
    "amount"    : -16.5
  },
  {
    "id"        : 205,
    "payeeId"   : 6,
    "personId"  : 202,
    "categoryId": 103,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-07-13T16:15:00.000Z",
    "amount"    : -6
  },
  {
    "id"        : 206,
    "payeeId"   : 7,
    "personId"  : 202,
    "categoryId": 104,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-07-30T21:50:00.000Z",
    "amount"    : -4.5
  },
  {
    "id"        : 207,
    "payeeId"   : 15,
    "personId"  : 202,
    "categoryId": 103,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-07-28T22:31:00.000Z",
    "amount"    : -40.25
  },
  {
    "id"        : 208,
    "payeeId"   : 19,
    "personId"  : 202,
    "categoryId": 107,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-07-06T00:02:00.000Z",
    "amount"    : -3.75
  },
  {
    "id"        : 209,
    "payeeId"   : 9,
    "personId"  : 202,
    "categoryId": 107,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-07-03T22:27:00.000Z",
    "amount"    : -92
  },
  {
    "id"        : 210,
    "payeeId"   : 4,
    "personId"  : 202,
    "categoryId": 103,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-07-30T22:11:00.000Z",
    "amount"    : -57.5
  },
  {
    "id"        : 211,
    "payeeId"   : 25,
    "personId"  : 202,
    "categoryId": 101,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-07-13T17:32:00.000Z",
    "amount"    : -46
  },
  {
    "id"        : 212,
    "payeeId"   : 16,
    "personId"  : 202,
    "categoryId": 104,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-07-12T17:02:00.000Z",
    "amount"    : -51.75
  },
  {
    "id"        : 213,
    "payeeId"   : 26,
    "personId"  : 202,
    "categoryId": 108,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-07-19T23:51:00.000Z",
    "amount"    : -60
  },
  {
    "id"        : 214,
    "payeeId"   : 24,
    "personId"  : 202,
    "categoryId": 101,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-07-16T21:17:00.000Z",
    "amount"    : -8.25
  },
  {
    "id"        : 215,
    "payeeId"   : 5,
    "personId"  : 202,
    "categoryId": 103,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-07-29T21:26:00.000Z",
    "amount"    : -143.75
  },
  {
    "id"        : 216,
    "payeeId"   : 18,
    "personId"  : 202,
    "categoryId": 102,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-07-19T16:18:00.000Z",
    "amount"    : -45
  },
  {
    "id"        : 217,
    "payeeId"   : 13,
    "personId"  : 202,
    "categoryId": 104,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-07-11T17:30:00.000Z",
    "amount"    : -28.75
  },
  {
    "id"        : 218,
    "payeeId"   : 10,
    "personId"  : 202,
    "categoryId": 107,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-07-16T19:49:00.000Z",
    "amount"    : -126.5
  },
  {
    "id"        : 219,
    "payeeId"   : 6,
    "personId"  : 202,
    "categoryId": 103,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-07-14T18:39:00.000Z",
    "amount"    : -6
  },
  {
    "id"        : 220,
    "payeeId"   : 7,
    "personId"  : 202,
    "categoryId": 104,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-07-18T16:39:00.000Z",
    "amount"    : -4.5
  },
  {
    "id"        : 221,
    "payeeId"   : 15,
    "personId"  : 202,
    "categoryId": 103,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-07-17T00:50:00.000Z",
    "amount"    : -5.25
  },
  {
    "id"        : 222,
    "payeeId"   : 19,
    "personId"  : 202,
    "categoryId": 107,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-07-04T19:46:00.000Z",
    "amount"    : -3.75
  },
  {
    "id"        : 223,
    "payeeId"   : 9,
    "personId"  : 202,
    "categoryId": 107,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-07-22T19:22:00.000Z",
    "amount"    : -92
  },
  {
    "id"        : 224,
    "payeeId"   : 4,
    "personId"  : 202,
    "categoryId": 103,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-07-10T18:09:00.000Z",
    "amount"    : -7.5
  },
  {
    "id"        : 225,
    "payeeId"   : 1,
    "personId"  : 202,
    "categoryId": 102,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-07-01T04:00:00.000Z",
    "amount"    : -1600
  },
  {
    "id"        : 226,
    "payeeId"   : 2,
    "personId"  : 202,
    "categoryId": 106,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-07-10T04:00:00.000Z",
    "amount"    : -172.5
  },
  {
    "id"        : 227,
    "payeeId"   : 3,
    "personId"  : 202,
    "categoryId": 106,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-07-20T04:00:00.000Z",
    "amount"    : -86.25
  },
  {
    "id"        : 228,
    "payeeId"   : 12,
    "personId"  : 202,
    "categoryId": 105,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-08-30T19:17:00.000Z",
    "amount"    : -15
  },
  {
    "id"        : 229,
    "payeeId"   : 14,
    "personId"  : 202,
    "categoryId": 105,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-08-06T00:53:00.000Z",
    "amount"    : -86.25
  },
  {
    "id"        : 230,
    "payeeId"   : 17,
    "personId"  : 202,
    "categoryId": 106,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-07-25T04:00:00.000Z",
    "amount"    : -74.75
  },
  {
    "id"        : 231,
    "payeeId"   : 25,
    "personId"  : 202,
    "categoryId": 101,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-08-30T22:23:00.000Z",
    "amount"    : -46
  },
  {
    "id"        : 232,
    "payeeId"   : 10,
    "personId"  : 202,
    "categoryId": 107,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-08-29T19:59:00.000Z",
    "amount"    : -16.5
  },
  {
    "id"        : 233,
    "payeeId"   : 26,
    "personId"  : 202,
    "categoryId": 108,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-08-05T18:59:00.000Z",
    "amount"    : -60
  },
  {
    "id"        : 234,
    "payeeId"   : 7,
    "personId"  : 202,
    "categoryId": 104,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-08-10T19:44:00.000Z",
    "amount"    : -34.5
  },
  {
    "id"        : 235,
    "payeeId"   : 4,
    "personId"  : 202,
    "categoryId": 103,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-08-30T18:06:00.000Z",
    "amount"    : -7.5
  },
  {
    "id"        : 236,
    "payeeId"   : 13,
    "personId"  : 202,
    "categoryId": 104,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-08-08T21:03:00.000Z",
    "amount"    : -3.75
  },
  {
    "id"        : 237,
    "payeeId"   : 16,
    "personId"  : 202,
    "categoryId": 104,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-08-24T23:27:00.000Z",
    "amount"    : -51.75
  },
  {
    "id"        : 238,
    "payeeId"   : 6,
    "personId"  : 202,
    "categoryId": 103,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-08-20T18:49:00.000Z",
    "amount"    : -6
  },
  {
    "id"        : 239,
    "payeeId"   : 18,
    "personId"  : 202,
    "categoryId": 102,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-09-01T23:35:00.000Z",
    "amount"    : -45
  },
  {
    "id"        : 240,
    "payeeId"   : 15,
    "personId"  : 202,
    "categoryId": 103,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-09-01T19:23:00.000Z",
    "amount"    : -5.25
  },
  {
    "id"        : 241,
    "payeeId"   : 9,
    "personId"  : 202,
    "categoryId": 107,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-09-01T22:56:00.000Z",
    "amount"    : -92
  },
  {
    "id"        : 242,
    "payeeId"   : 24,
    "personId"  : 202,
    "categoryId": 101,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-08-29T16:51:00.000Z",
    "amount"    : -63.25
  },
  {
    "id"        : 243,
    "payeeId"   : 5,
    "personId"  : 202,
    "categoryId": 103,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-08-24T18:54:00.000Z",
    "amount"    : -143.75
  },
  {
    "id"        : 244,
    "payeeId"   : 19,
    "personId"  : 202,
    "categoryId": 107,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-08-27T22:14:00.000Z",
    "amount"    : -3.75
  },
  {
    "id"        : 245,
    "payeeId"   : 25,
    "personId"  : 202,
    "categoryId": 101,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-08-30T18:56:00.000Z",
    "amount"    : -6
  },
  {
    "id"        : 246,
    "payeeId"   : 10,
    "personId"  : 202,
    "categoryId": 107,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-08-23T16:28:00.000Z",
    "amount"    : -16.5
  },
  {
    "id"        : 247,
    "payeeId"   : 26,
    "personId"  : 202,
    "categoryId": 108,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-08-24T22:33:00.000Z",
    "amount"    : -60
  },
  {
    "id"        : 248,
    "payeeId"   : 7,
    "personId"  : 202,
    "categoryId": 104,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-08-13T16:06:00.000Z",
    "amount"    : -4.5
  },
  {
    "id"        : 249,
    "payeeId"   : 4,
    "personId"  : 202,
    "categoryId": 103,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-08-10T20:03:00.000Z",
    "amount"    : -57.5
  },
  {
    "id"        : 250,
    "payeeId"   : 13,
    "personId"  : 202,
    "categoryId": 104,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-08-07T20:38:00.000Z",
    "amount"    : -28.75
  },
  {
    "id"        : 251,
    "payeeId"   : 16,
    "personId"  : 202,
    "categoryId": 104,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-08-07T16:46:00.000Z",
    "amount"    : -51.75
  },
  {
    "id"        : 252,
    "payeeId"   : 6,
    "personId"  : 202,
    "categoryId": 103,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-08-13T23:45:00.000Z",
    "amount"    : -46
  },
  {
    "id"        : 253,
    "payeeId"   : 18,
    "personId"  : 202,
    "categoryId": 102,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-08-22T00:52:00.000Z",
    "amount"    : -45
  },
  {
    "id"        : 254,
    "payeeId"   : 15,
    "personId"  : 202,
    "categoryId": 103,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-08-18T17:40:00.000Z",
    "amount"    : -40.25
  },
  {
    "id"        : 255,
    "payeeId"   : 9,
    "personId"  : 202,
    "categoryId": 107,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-08-06T17:06:00.000Z",
    "amount"    : -12
  },
  {
    "id"        : 256,
    "payeeId"   : 24,
    "personId"  : 202,
    "categoryId": 101,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-08-17T17:42:00.000Z",
    "amount"    : -63.25
  },
  {
    "id"        : 257,
    "payeeId"   : 5,
    "personId"  : 202,
    "categoryId": 103,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-08-20T23:12:00.000Z",
    "amount"    : -18.75
  },
  {
    "id"        : 258,
    "payeeId"   : 19,
    "personId"  : 202,
    "categoryId": 107,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-08-07T18:54:00.000Z",
    "amount"    : -28.75
  },
  {
    "id"        : 259,
    "payeeId"   : 25,
    "personId"  : 202,
    "categoryId": 101,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-08-21T21:36:00.000Z",
    "amount"    : -6
  },
  {
    "id"        : 260,
    "payeeId"   : 10,
    "personId"  : 202,
    "categoryId": 107,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-08-25T20:15:00.000Z",
    "amount"    : -126.5
  },
  {
    "id"        : 261,
    "payeeId"   : 26,
    "personId"  : 202,
    "categoryId": 108,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-08-16T16:12:00.000Z",
    "amount"    : -60
  },
  {
    "id"        : 262,
    "payeeId"   : 7,
    "personId"  : 202,
    "categoryId": 104,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-08-18T20:07:00.000Z",
    "amount"    : -4.5
  },
  {
    "id"        : 263,
    "payeeId"   : 4,
    "personId"  : 202,
    "categoryId": 103,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-08-23T00:31:00.000Z",
    "amount"    : -57.5
  },
  {
    "id"        : 264,
    "payeeId"   : 13,
    "personId"  : 202,
    "categoryId": 104,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-08-14T20:32:00.000Z",
    "amount"    : -3.75
  },
  {
    "id"        : 265,
    "payeeId"   : 16,
    "personId"  : 202,
    "categoryId": 104,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-08-29T00:53:00.000Z",
    "amount"    : -6.75
  },
  {
    "id"        : 266,
    "payeeId"   : 6,
    "personId"  : 202,
    "categoryId": 103,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-08-24T16:58:00.000Z",
    "amount"    : -6
  },
  {
    "id"        : 267,
    "payeeId"   : 18,
    "personId"  : 202,
    "categoryId": 102,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-08-14T20:38:00.000Z",
    "amount"    : -45
  },
  {
    "id"        : 268,
    "payeeId"   : 15,
    "personId"  : 202,
    "categoryId": 103,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-08-26T23:45:00.000Z",
    "amount"    : -40.25
  },
  {
    "id"        : 269,
    "payeeId"   : 9,
    "personId"  : 202,
    "categoryId": 107,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-08-18T16:17:00.000Z",
    "amount"    : -12
  },
  {
    "id"        : 270,
    "payeeId"   : 24,
    "personId"  : 202,
    "categoryId": 101,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-09-01T17:52:00.000Z",
    "amount"    : -63.25
  },
  {
    "id"        : 271,
    "payeeId"   : 5,
    "personId"  : 202,
    "categoryId": 103,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-08-13T22:54:00.000Z",
    "amount"    : -143.75
  },
  {
    "id"        : 272,
    "payeeId"   : 19,
    "personId"  : 202,
    "categoryId": 107,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-08-19T21:55:00.000Z",
    "amount"    : -28.75
  },
  {
    "id"        : 273,
    "payeeId"   : 25,
    "personId"  : 202,
    "categoryId": 101,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-08-27T21:35:00.000Z",
    "amount"    : -46
  },
  {
    "id"        : 274,
    "payeeId"   : 10,
    "personId"  : 202,
    "categoryId": 107,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-08-16T21:17:00.000Z",
    "amount"    : -16.5
  },
  {
    "id"        : 275,
    "payeeId"   : 1,
    "personId"  : 202,
    "categoryId": 102,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-08-01T04:00:00.000Z",
    "amount"    : -1600
  },
  {
    "id"        : 276,
    "payeeId"   : 2,
    "personId"  : 202,
    "categoryId": 106,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-08-10T04:00:00.000Z",
    "amount"    : -22.5
  },
  {
    "id"        : 277,
    "payeeId"   : 3,
    "personId"  : 202,
    "categoryId": 106,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-08-20T04:00:00.000Z",
    "amount"    : -11.25
  },
  {
    "id"        : 278,
    "payeeId"   : 12,
    "personId"  : 202,
    "categoryId": 105,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-09-02T16:42:00.000Z",
    "amount"    : -115
  },
  {
    "id"        : 279,
    "payeeId"   : 14,
    "personId"  : 202,
    "categoryId": 105,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-09-24T16:05:00.000Z",
    "amount"    : -11.25
  },
  {
    "id"        : 280,
    "payeeId"   : 17,
    "personId"  : 202,
    "categoryId": 106,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-08-25T04:00:00.000Z",
    "amount"    : -74.75
  },
  {
    "id"        : 281,
    "payeeId"   : 24,
    "personId"  : 202,
    "categoryId": 101,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-10-02T23:19:00.000Z",
    "amount"    : -63.25
  },
  {
    "id"        : 282,
    "payeeId"   : 10,
    "personId"  : 202,
    "categoryId": 107,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-09-10T20:17:00.000Z",
    "amount"    : -16.5
  },
  {
    "id"        : 283,
    "payeeId"   : 15,
    "personId"  : 202,
    "categoryId": 103,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-09-30T23:40:00.000Z",
    "amount"    : -40.25
  },
  {
    "id"        : 284,
    "payeeId"   : 18,
    "personId"  : 202,
    "categoryId": 102,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-09-29T21:50:00.000Z",
    "amount"    : -45
  },
  {
    "id"        : 285,
    "payeeId"   : 16,
    "personId"  : 202,
    "categoryId": 104,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-09-19T00:39:00.000Z",
    "amount"    : -51.75
  },
  {
    "id"        : 286,
    "payeeId"   : 19,
    "personId"  : 202,
    "categoryId": 107,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-09-24T21:04:00.000Z",
    "amount"    : -3.75
  },
  {
    "id"        : 287,
    "payeeId"   : 4,
    "personId"  : 202,
    "categoryId": 103,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-09-07T19:56:00.000Z",
    "amount"    : -7.5
  },
  {
    "id"        : 288,
    "payeeId"   : 7,
    "personId"  : 202,
    "categoryId": 104,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-09-10T18:57:00.000Z",
    "amount"    : -34.5
  },
  {
    "id"        : 289,
    "payeeId"   : 26,
    "personId"  : 202,
    "categoryId": 108,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-09-12T21:23:00.000Z",
    "amount"    : -60
  },
  {
    "id"        : 290,
    "payeeId"   : 13,
    "personId"  : 202,
    "categoryId": 104,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-09-10T16:25:00.000Z",
    "amount"    : -28.75
  },
  {
    "id"        : 291,
    "payeeId"   : 6,
    "personId"  : 202,
    "categoryId": 103,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-09-24T17:39:00.000Z",
    "amount"    : -46
  },
  {
    "id"        : 292,
    "payeeId"   : 5,
    "personId"  : 202,
    "categoryId": 103,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-09-09T00:18:00.000Z",
    "amount"    : -143.75
  },
  {
    "id"        : 293,
    "payeeId"   : 9,
    "personId"  : 202,
    "categoryId": 107,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-09-17T20:11:00.000Z",
    "amount"    : -12
  },
  {
    "id"        : 294,
    "payeeId"   : 25,
    "personId"  : 202,
    "categoryId": 101,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-09-27T16:13:00.000Z",
    "amount"    : -6
  },
  {
    "id"        : 295,
    "payeeId"   : 24,
    "personId"  : 202,
    "categoryId": 101,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-09-16T23:08:00.000Z",
    "amount"    : -8.25
  },
  {
    "id"        : 296,
    "payeeId"   : 10,
    "personId"  : 202,
    "categoryId": 107,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-09-23T22:08:00.000Z",
    "amount"    : -126.5
  },
  {
    "id"        : 297,
    "payeeId"   : 15,
    "personId"  : 202,
    "categoryId": 103,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-09-21T23:15:00.000Z",
    "amount"    : -40.25
  },
  {
    "id"        : 298,
    "payeeId"   : 18,
    "personId"  : 202,
    "categoryId": 102,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-10-02T22:01:00.000Z",
    "amount"    : -45
  },
  {
    "id"        : 299,
    "payeeId"   : 16,
    "personId"  : 202,
    "categoryId": 104,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-09-27T23:47:00.000Z",
    "amount"    : -6.75
  },
  {
    "id"        : 300,
    "payeeId"   : 19,
    "personId"  : 202,
    "categoryId": 107,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-09-28T18:02:00.000Z",
    "amount"    : -3.75
  },
  {
    "id"        : 301,
    "payeeId"   : 4,
    "personId"  : 202,
    "categoryId": 103,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-09-28T17:35:00.000Z",
    "amount"    : -7.5
  },
  {
    "id"        : 302,
    "payeeId"   : 7,
    "personId"  : 202,
    "categoryId": 104,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-09-27T17:35:00.000Z",
    "amount"    : -4.5
  },
  {
    "id"        : 303,
    "payeeId"   : 26,
    "personId"  : 202,
    "categoryId": 108,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-09-24T18:35:00.000Z",
    "amount"    : -60
  },
  {
    "id"        : 304,
    "payeeId"   : 13,
    "personId"  : 202,
    "categoryId": 104,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-09-17T18:02:00.000Z",
    "amount"    : -3.75
  },
  {
    "id"        : 305,
    "payeeId"   : 6,
    "personId"  : 202,
    "categoryId": 103,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-09-26T21:41:00.000Z",
    "amount"    : -6
  },
  {
    "id"        : 306,
    "payeeId"   : 5,
    "personId"  : 202,
    "categoryId": 103,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-09-28T00:21:00.000Z",
    "amount"    : -18.75
  },
  {
    "id"        : 307,
    "payeeId"   : 9,
    "personId"  : 202,
    "categoryId": 107,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-09-25T22:38:00.000Z",
    "amount"    : -92
  },
  {
    "id"        : 308,
    "payeeId"   : 25,
    "personId"  : 202,
    "categoryId": 101,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-10-02T23:05:00.000Z",
    "amount"    : -6
  },
  {
    "id"        : 309,
    "payeeId"   : 24,
    "personId"  : 202,
    "categoryId": 101,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-09-27T16:46:00.000Z",
    "amount"    : -8.25
  },
  {
    "id"        : 310,
    "payeeId"   : 10,
    "personId"  : 202,
    "categoryId": 107,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-09-27T20:58:00.000Z",
    "amount"    : -126.5
  },
  {
    "id"        : 311,
    "payeeId"   : 15,
    "personId"  : 202,
    "categoryId": 103,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-09-15T00:53:00.000Z",
    "amount"    : -5.25
  },
  {
    "id"        : 312,
    "payeeId"   : 18,
    "personId"  : 202,
    "categoryId": 102,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-10-02T20:19:00.000Z",
    "amount"    : -45
  },
  {
    "id"        : 313,
    "payeeId"   : 16,
    "personId"  : 202,
    "categoryId": 104,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-09-26T22:16:00.000Z",
    "amount"    : -51.75
  },
  {
    "id"        : 314,
    "payeeId"   : 19,
    "personId"  : 202,
    "categoryId": 107,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-09-17T20:47:00.000Z",
    "amount"    : -28.75
  },
  {
    "id"        : 315,
    "payeeId"   : 4,
    "personId"  : 202,
    "categoryId": 103,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-09-12T20:25:00.000Z",
    "amount"    : -57.5
  },
  {
    "id"        : 316,
    "payeeId"   : 7,
    "personId"  : 202,
    "categoryId": 104,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-09-27T19:02:00.000Z",
    "amount"    : -34.5
  },
  {
    "id"        : 317,
    "payeeId"   : 26,
    "personId"  : 202,
    "categoryId": 108,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-09-26T23:33:00.000Z",
    "amount"    : -60
  },
  {
    "id"        : 318,
    "payeeId"   : 13,
    "personId"  : 202,
    "categoryId": 104,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-09-16T00:52:00.000Z",
    "amount"    : -28.75
  },
  {
    "id"        : 319,
    "payeeId"   : 6,
    "personId"  : 202,
    "categoryId": 103,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-09-25T16:37:00.000Z",
    "amount"    : -46
  },
  {
    "id"        : 320,
    "payeeId"   : 5,
    "personId"  : 202,
    "categoryId": 103,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-09-09T22:59:00.000Z",
    "amount"    : -143.75
  },
  {
    "id"        : 321,
    "payeeId"   : 9,
    "personId"  : 202,
    "categoryId": 107,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-09-28T16:41:00.000Z",
    "amount"    : -12
  },
  {
    "id"        : 322,
    "payeeId"   : 25,
    "personId"  : 202,
    "categoryId": 101,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-09-29T23:25:00.000Z",
    "amount"    : -6
  },
  {
    "id"        : 323,
    "payeeId"   : 24,
    "personId"  : 202,
    "categoryId": 101,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-10-01T22:31:00.000Z",
    "amount"    : -63.25
  },
  {
    "id"        : 324,
    "payeeId"   : 10,
    "personId"  : 202,
    "categoryId": 107,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-09-27T18:27:00.000Z",
    "amount"    : -16.5
  },
  {
    "id"        : 325,
    "payeeId"   : 23,
    "personId"  : 202,
    "categoryId": 1,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-06-01T04:00:00.000Z",
    "amount"    : 3000
  },
  {
    "id"        : 326,
    "payeeId"   : 23,
    "personId"  : 202,
    "categoryId": 1,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-06-15T04:00:00.000Z",
    "amount"    : 3000
  },
  {
    "id"        : 327,
    "payeeId"   : 21,
    "personId"  : 202,
    "categoryId": 2,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-07-02T18:47:00.000Z",
    "amount"    : 11.25
  },
  {
    "id"        : 328,
    "payeeId"   : 11,
    "personId"  : 202,
    "categoryId": 2,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-07-30T00:57:00.000Z",
    "amount"    : 57.5
  },
  {
    "id"        : 329,
    "payeeId"   : 23,
    "personId"  : 202,
    "categoryId": 1,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-07-01T04:00:00.000Z",
    "amount"    : 3000
  },
  {
    "id"        : 330,
    "payeeId"   : 23,
    "personId"  : 202,
    "categoryId": 1,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-07-15T04:00:00.000Z",
    "amount"    : 3000
  },
  {
    "id"        : 331,
    "payeeId"   : 20,
    "personId"  : 202,
    "categoryId": 3,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-08-22T21:36:00.000Z",
    "amount"    : 172.5
  },
  {
    "id"        : 332,
    "payeeId"   : 8,
    "personId"  : 202,
    "categoryId": 3,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-08-16T22:09:00.000Z",
    "amount"    : 115
  },
  {
    "id"        : 333,
    "payeeId"   : 23,
    "personId"  : 202,
    "categoryId": 1,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-08-01T04:00:00.000Z",
    "amount"    : 3000
  },
  {
    "id"        : 334,
    "payeeId"   : 23,
    "personId"  : 202,
    "categoryId": 1,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-08-15T04:00:00.000Z",
    "amount"    : 3000
  },
  {
    "id"        : 335,
    "payeeId"   : 20,
    "personId"  : 202,
    "categoryId": 3,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-09-23T17:43:00.000Z",
    "amount"    : 172.5
  },
  {
    "id"        : 336,
    "payeeId"   : 11,
    "personId"  : 202,
    "categoryId": 2,
    "accountId" : 3,
    "txType"    : "2",
    "txDate"    : "2016-09-02T20:15:00.000Z",
    "amount"    : 7.5
  },
  {
    "id"        : 337,
    "payeeId"   : 20,
    "personId"  : 202,
    "categoryId": 3,
    "accountId" : 4,
    "txType"    : "2",
    "txDate"    : "2016-07-29T17:09:00.000Z",
    "amount"    : 172.5
  },
  {
    "id"        : 338,
    "payeeId"   : 21,
    "personId"  : 202,
    "categoryId": 2,
    "accountId" : 4,
    "txType"    : "2",
    "txDate"    : "2016-07-30T22:07:00.000Z",
    "amount"    : 86.25
  },
  {
    "id"        : 339,
    "payeeId"   : 11,
    "personId"  : 202,
    "categoryId": 2,
    "accountId" : 4,
    "txType"    : "2",
    "txDate"    : "2016-07-22T19:43:00.000Z",
    "amount"    : 57.5
  },
  {
    "id"        : 340,
    "payeeId"   : 8,
    "personId"  : 202,
    "categoryId": 3,
    "accountId" : 4,
    "txType"    : "2",
    "txDate"    : "2016-07-03T19:57:00.000Z",
    "amount"    : 115
  },
  {
    "id"        : 341,
    "payeeId"   : 11,
    "personId"  : 202,
    "categoryId": 2,
    "accountId" : 4,
    "txType"    : "2",
    "txDate"    : "2016-08-09T23:14:00.000Z",
    "amount"    : 7.5
  },
  {
    "id"        : 342,
    "payeeId"   : 20,
    "personId"  : 202,
    "categoryId": 3,
    "accountId" : 4,
    "txType"    : "2",
    "txDate"    : "2016-09-01T20:38:00.000Z",
    "amount"    : 22.5
  },
  {
    "id"        : 343,
    "payeeId"   : 8,
    "personId"  : 202,
    "categoryId": 3,
    "accountId" : 4,
    "txType"    : "2",
    "txDate"    : "2016-08-19T21:10:00.000Z",
    "amount"    : 15
  },
  {
    "id"        : 344,
    "payeeId"   : 21,
    "personId"  : 202,
    "categoryId": 2,
    "accountId" : 4,
    "txType"    : "2",
    "txDate"    : "2016-08-29T22:21:00.000Z",
    "amount"    : 86.25
  },
  {
    "id"        : 345,
    "payeeId"   : 21,
    "personId"  : 202,
    "categoryId": 2,
    "accountId" : 4,
    "txType"    : "2",
    "txDate"    : "2016-09-28T18:25:00.000Z",
    "amount"    : 11.25
  },
  {
    "id"        : 346,
    "payeeId"   : 8,
    "personId"  : 202,
    "categoryId": 3,
    "accountId" : 4,
    "txType"    : "2",
    "txDate"    : "2016-09-14T21:52:00.000Z",
    "amount"    : 115
  },
  {
    "id"        : 347,
    "payeeId"   : 11,
    "personId"  : 202,
    "categoryId": 2,
    "accountId" : 4,
    "txType"    : "2",
    "txDate"    : "2016-09-23T17:43:00.000Z",
    "amount"    : 7.5
  },
  {
    "id"        : 348,
    "payeeId"   : 20,
    "personId"  : 202,
    "categoryId": 3,
    "accountId" : 4,
    "txType"    : "2",
    "txDate"    : "2016-09-09T23:54:00.000Z",
    "amount"    : 172.5
  },
  {
    "id"        : 349,
    "payeeId"   : 1,
    "personId"  : 203,
    "categoryId": 102,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-06-01T04:00:00.000Z",
    "amount"    : -1600
  },
  {
    "id"        : 350,
    "payeeId"   : 2,
    "personId"  : 203,
    "categoryId": 106,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-06-10T04:00:00.000Z",
    "amount"    : -172.5
  },
  {
    "id"        : 351,
    "payeeId"   : 3,
    "personId"  : 203,
    "categoryId": 106,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-06-20T04:00:00.000Z",
    "amount"    : -86.25
  },
  {
    "id"        : 352,
    "payeeId"   : 12,
    "personId"  : 203,
    "categoryId": 105,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-07-17T00:31:00.000Z",
    "amount"    : -15
  },
  {
    "id"        : 353,
    "payeeId"   : 14,
    "personId"  : 203,
    "categoryId": 105,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-07-22T16:10:00.000Z",
    "amount"    : -11.25
  },
  {
    "id"        : 354,
    "payeeId"   : 17,
    "personId"  : 203,
    "categoryId": 106,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-06-25T04:00:00.000Z",
    "amount"    : -9.75
  },
  {
    "id"        : 355,
    "payeeId"   : 5,
    "personId"  : 203,
    "categoryId": 103,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-07-19T19:18:00.000Z",
    "amount"    : -18.75
  },
  {
    "id"        : 356,
    "payeeId"   : 9,
    "personId"  : 203,
    "categoryId": 107,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-07-14T18:55:00.000Z",
    "amount"    : -12
  },
  {
    "id"        : 357,
    "payeeId"   : 26,
    "personId"  : 203,
    "categoryId": 108,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-07-09T00:44:00.000Z",
    "amount"    : -60
  },
  {
    "id"        : 358,
    "payeeId"   : 10,
    "personId"  : 203,
    "categoryId": 107,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-07-04T20:36:00.000Z",
    "amount"    : -126.5
  },
  {
    "id"        : 359,
    "payeeId"   : 16,
    "personId"  : 203,
    "categoryId": 104,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-07-23T00:36:00.000Z",
    "amount"    : -51.75
  },
  {
    "id"        : 360,
    "payeeId"   : 4,
    "personId"  : 203,
    "categoryId": 103,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-07-29T18:42:00.000Z",
    "amount"    : -57.5
  },
  {
    "id"        : 361,
    "payeeId"   : 7,
    "personId"  : 203,
    "categoryId": 104,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-07-03T00:32:00.000Z",
    "amount"    : -4.5
  },
  {
    "id"        : 362,
    "payeeId"   : 18,
    "personId"  : 203,
    "categoryId": 102,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-07-27T00:52:00.000Z",
    "amount"    : -45
  },
  {
    "id"        : 363,
    "payeeId"   : 15,
    "personId"  : 203,
    "categoryId": 103,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-07-26T16:04:00.000Z",
    "amount"    : -40.25
  },
  {
    "id"        : 364,
    "payeeId"   : 25,
    "personId"  : 203,
    "categoryId": 101,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-07-21T22:12:00.000Z",
    "amount"    : -6
  },
  {
    "id"        : 365,
    "payeeId"   : 24,
    "personId"  : 203,
    "categoryId": 101,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-07-26T20:52:00.000Z",
    "amount"    : -63.25
  },
  {
    "id"        : 366,
    "payeeId"   : 6,
    "personId"  : 203,
    "categoryId": 103,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-07-25T21:17:00.000Z",
    "amount"    : -6
  },
  {
    "id"        : 367,
    "payeeId"   : 13,
    "personId"  : 203,
    "categoryId": 104,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-07-19T19:49:00.000Z",
    "amount"    : -28.75
  },
  {
    "id"        : 368,
    "payeeId"   : 19,
    "personId"  : 203,
    "categoryId": 107,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-07-16T20:15:00.000Z",
    "amount"    : -28.75
  },
  {
    "id"        : 369,
    "payeeId"   : 5,
    "personId"  : 203,
    "categoryId": 103,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-07-16T18:09:00.000Z",
    "amount"    : -18.75
  },
  {
    "id"        : 370,
    "payeeId"   : 9,
    "personId"  : 203,
    "categoryId": 107,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-07-27T16:16:00.000Z",
    "amount"    : -12
  },
  {
    "id"        : 371,
    "payeeId"   : 26,
    "personId"  : 203,
    "categoryId": 108,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-07-11T20:11:00.000Z",
    "amount"    : -60
  },
  {
    "id"        : 372,
    "payeeId"   : 10,
    "personId"  : 203,
    "categoryId": 107,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-07-09T17:51:00.000Z",
    "amount"    : -126.5
  },
  {
    "id"        : 373,
    "payeeId"   : 16,
    "personId"  : 203,
    "categoryId": 104,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-07-31T20:33:00.000Z",
    "amount"    : -6.75
  },
  {
    "id"        : 374,
    "payeeId"   : 4,
    "personId"  : 203,
    "categoryId": 103,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-07-26T20:36:00.000Z",
    "amount"    : -7.5
  },
  {
    "id"        : 375,
    "payeeId"   : 7,
    "personId"  : 203,
    "categoryId": 104,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-07-10T22:19:00.000Z",
    "amount"    : -4.5
  },
  {
    "id"        : 376,
    "payeeId"   : 18,
    "personId"  : 203,
    "categoryId": 102,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-07-25T22:50:00.000Z",
    "amount"    : -45
  },
  {
    "id"        : 377,
    "payeeId"   : 15,
    "personId"  : 203,
    "categoryId": 103,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-07-28T22:48:00.000Z",
    "amount"    : -5.25
  },
  {
    "id"        : 378,
    "payeeId"   : 25,
    "personId"  : 203,
    "categoryId": 101,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-07-23T21:30:00.000Z",
    "amount"    : -6
  },
  {
    "id"        : 379,
    "payeeId"   : 24,
    "personId"  : 203,
    "categoryId": 101,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-07-14T00:20:00.000Z",
    "amount"    : -8.25
  },
  {
    "id"        : 380,
    "payeeId"   : 6,
    "personId"  : 203,
    "categoryId": 103,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-07-25T19:48:00.000Z",
    "amount"    : -46
  },
  {
    "id"        : 381,
    "payeeId"   : 13,
    "personId"  : 203,
    "categoryId": 104,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-07-26T19:21:00.000Z",
    "amount"    : -3.75
  },
  {
    "id"        : 382,
    "payeeId"   : 19,
    "personId"  : 203,
    "categoryId": 107,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-07-13T20:08:00.000Z",
    "amount"    : -3.75
  },
  {
    "id"        : 383,
    "payeeId"   : 5,
    "personId"  : 203,
    "categoryId": 103,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-07-26T23:24:00.000Z",
    "amount"    : -143.75
  },
  {
    "id"        : 384,
    "payeeId"   : 9,
    "personId"  : 203,
    "categoryId": 107,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-07-27T16:20:00.000Z",
    "amount"    : -12
  },
  {
    "id"        : 385,
    "payeeId"   : 26,
    "personId"  : 203,
    "categoryId": 108,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-07-24T17:11:00.000Z",
    "amount"    : -60
  },
  {
    "id"        : 386,
    "payeeId"   : 10,
    "personId"  : 203,
    "categoryId": 107,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-07-02T18:34:00.000Z",
    "amount"    : -16.5
  },
  {
    "id"        : 387,
    "payeeId"   : 16,
    "personId"  : 203,
    "categoryId": 104,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-07-15T21:17:00.000Z",
    "amount"    : -6.75
  },
  {
    "id"        : 388,
    "payeeId"   : 4,
    "personId"  : 203,
    "categoryId": 103,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-07-14T00:06:00.000Z",
    "amount"    : -7.5
  },
  {
    "id"        : 389,
    "payeeId"   : 7,
    "personId"  : 203,
    "categoryId": 104,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-07-09T21:15:00.000Z",
    "amount"    : -4.5
  },
  {
    "id"        : 390,
    "payeeId"   : 18,
    "personId"  : 203,
    "categoryId": 102,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-07-15T19:39:00.000Z",
    "amount"    : -45
  },
  {
    "id"        : 391,
    "payeeId"   : 15,
    "personId"  : 203,
    "categoryId": 103,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-07-14T16:41:00.000Z",
    "amount"    : -40.25
  },
  {
    "id"        : 392,
    "payeeId"   : 25,
    "personId"  : 203,
    "categoryId": 101,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-07-30T17:57:00.000Z",
    "amount"    : -6
  },
  {
    "id"        : 393,
    "payeeId"   : 24,
    "personId"  : 203,
    "categoryId": 101,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-07-16T18:17:00.000Z",
    "amount"    : -63.25
  },
  {
    "id"        : 394,
    "payeeId"   : 6,
    "personId"  : 203,
    "categoryId": 103,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-07-11T15:59:00.000Z",
    "amount"    : -46
  },
  {
    "id"        : 395,
    "payeeId"   : 13,
    "personId"  : 203,
    "categoryId": 104,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-07-06T00:09:00.000Z",
    "amount"    : -3.75
  },
  {
    "id"        : 396,
    "payeeId"   : 19,
    "personId"  : 203,
    "categoryId": 107,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-07-22T21:58:00.000Z",
    "amount"    : -3.75
  },
  {
    "id"        : 397,
    "payeeId"   : 5,
    "personId"  : 203,
    "categoryId": 103,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-07-28T16:17:00.000Z",
    "amount"    : -143.75
  },
  {
    "id"        : 398,
    "payeeId"   : 9,
    "personId"  : 203,
    "categoryId": 107,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-07-09T00:44:00.000Z",
    "amount"    : -12
  },
  {
    "id"        : 399,
    "payeeId"   : 1,
    "personId"  : 203,
    "categoryId": 102,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-07-01T04:00:00.000Z",
    "amount"    : -1600
  },
  {
    "id"        : 400,
    "payeeId"   : 2,
    "personId"  : 203,
    "categoryId": 106,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-07-10T04:00:00.000Z",
    "amount"    : -22.5
  },
  {
    "id"        : 401,
    "payeeId"   : 3,
    "personId"  : 203,
    "categoryId": 106,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-07-20T04:00:00.000Z",
    "amount"    : -86.25
  },
  {
    "id"        : 402,
    "payeeId"   : 12,
    "personId"  : 203,
    "categoryId": 105,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-09-01T21:10:00.000Z",
    "amount"    : -15
  },
  {
    "id"        : 403,
    "payeeId"   : 14,
    "personId"  : 203,
    "categoryId": 105,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-08-04T22:18:00.000Z",
    "amount"    : -86.25
  },
  {
    "id"        : 404,
    "payeeId"   : 17,
    "personId"  : 203,
    "categoryId": 106,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-07-25T04:00:00.000Z",
    "amount"    : -9.75
  },
  {
    "id"        : 405,
    "payeeId"   : 6,
    "personId"  : 203,
    "categoryId": 103,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-08-24T18:04:00.000Z",
    "amount"    : -46
  },
  {
    "id"        : 406,
    "payeeId"   : 19,
    "personId"  : 203,
    "categoryId": 107,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-08-08T23:26:00.000Z",
    "amount"    : -28.75
  },
  {
    "id"        : 407,
    "payeeId"   : 13,
    "personId"  : 203,
    "categoryId": 104,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-08-14T23:30:00.000Z",
    "amount"    : -28.75
  },
  {
    "id"        : 408,
    "payeeId"   : 25,
    "personId"  : 203,
    "categoryId": 101,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-09-01T23:26:00.000Z",
    "amount"    : -46
  },
  {
    "id"        : 409,
    "payeeId"   : 26,
    "personId"  : 203,
    "categoryId": 108,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-08-06T23:37:00.000Z",
    "amount"    : -60
  },
  {
    "id"        : 410,
    "payeeId"   : 9,
    "personId"  : 203,
    "categoryId": 107,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-08-06T23:32:00.000Z",
    "amount"    : -12
  },
  {
    "id"        : 411,
    "payeeId"   : 16,
    "personId"  : 203,
    "categoryId": 104,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-08-22T18:21:00.000Z",
    "amount"    : -6.75
  },
  {
    "id"        : 412,
    "payeeId"   : 24,
    "personId"  : 203,
    "categoryId": 101,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-08-22T20:48:00.000Z",
    "amount"    : -8.25
  },
  {
    "id"        : 413,
    "payeeId"   : 7,
    "personId"  : 203,
    "categoryId": 104,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-08-25T17:34:00.000Z",
    "amount"    : -34.5
  },
  {
    "id"        : 414,
    "payeeId"   : 10,
    "personId"  : 203,
    "categoryId": 107,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-08-04T20:06:00.000Z",
    "amount"    : -16.5
  },
  {
    "id"        : 415,
    "payeeId"   : 18,
    "personId"  : 203,
    "categoryId": 102,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-08-31T19:09:00.000Z",
    "amount"    : -45
  },
  {
    "id"        : 416,
    "payeeId"   : 5,
    "personId"  : 203,
    "categoryId": 103,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-08-06T23:06:00.000Z",
    "amount"    : -18.75
  },
  {
    "id"        : 417,
    "payeeId"   : 15,
    "personId"  : 203,
    "categoryId": 103,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-08-20T19:29:00.000Z",
    "amount"    : -5.25
  },
  {
    "id"        : 418,
    "payeeId"   : 4,
    "personId"  : 203,
    "categoryId": 103,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-08-16T17:00:00.000Z",
    "amount"    : -7.5
  },
  {
    "id"        : 419,
    "payeeId"   : 6,
    "personId"  : 203,
    "categoryId": 103,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-08-30T19:31:00.000Z",
    "amount"    : -46
  },
  {
    "id"        : 420,
    "payeeId"   : 19,
    "personId"  : 203,
    "categoryId": 107,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-08-10T19:33:00.000Z",
    "amount"    : -28.75
  },
  {
    "id"        : 421,
    "payeeId"   : 13,
    "personId"  : 203,
    "categoryId": 104,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-08-23T17:59:00.000Z",
    "amount"    : -3.75
  },
  {
    "id"        : 422,
    "payeeId"   : 25,
    "personId"  : 203,
    "categoryId": 101,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-08-10T17:17:00.000Z",
    "amount"    : -6
  },
  {
    "id"        : 423,
    "payeeId"   : 26,
    "personId"  : 203,
    "categoryId": 108,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-08-18T18:16:00.000Z",
    "amount"    : -60
  },
  {
    "id"        : 424,
    "payeeId"   : 9,
    "personId"  : 203,
    "categoryId": 107,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-08-18T22:46:00.000Z",
    "amount"    : -92
  },
  {
    "id"        : 425,
    "payeeId"   : 16,
    "personId"  : 203,
    "categoryId": 104,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-08-25T23:28:00.000Z",
    "amount"    : -51.75
  },
  {
    "id"        : 426,
    "payeeId"   : 24,
    "personId"  : 203,
    "categoryId": 101,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-08-21T23:16:00.000Z",
    "amount"    : -63.25
  },
  {
    "id"        : 427,
    "payeeId"   : 7,
    "personId"  : 203,
    "categoryId": 104,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-08-12T23:00:00.000Z",
    "amount"    : -34.5
  },
  {
    "id"        : 428,
    "payeeId"   : 10,
    "personId"  : 203,
    "categoryId": 107,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-08-23T20:23:00.000Z",
    "amount"    : -16.5
  },
  {
    "id"        : 429,
    "payeeId"   : 18,
    "personId"  : 203,
    "categoryId": 102,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-08-05T22:12:00.000Z",
    "amount"    : -45
  },
  {
    "id"        : 430,
    "payeeId"   : 5,
    "personId"  : 203,
    "categoryId": 103,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-08-29T22:16:00.000Z",
    "amount"    : -18.75
  },
  {
    "id"        : 431,
    "payeeId"   : 15,
    "personId"  : 203,
    "categoryId": 103,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-08-12T16:03:00.000Z",
    "amount"    : -5.25
  },
  {
    "id"        : 432,
    "payeeId"   : 4,
    "personId"  : 203,
    "categoryId": 103,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-08-16T22:26:00.000Z",
    "amount"    : -7.5
  },
  {
    "id"        : 433,
    "payeeId"   : 6,
    "personId"  : 203,
    "categoryId": 103,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-08-24T18:37:00.000Z",
    "amount"    : -46
  },
  {
    "id"        : 434,
    "payeeId"   : 19,
    "personId"  : 203,
    "categoryId": 107,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-08-17T21:55:00.000Z",
    "amount"    : -28.75
  },
  {
    "id"        : 435,
    "payeeId"   : 13,
    "personId"  : 203,
    "categoryId": 104,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-08-24T19:14:00.000Z",
    "amount"    : -3.75
  },
  {
    "id"        : 436,
    "payeeId"   : 25,
    "personId"  : 203,
    "categoryId": 101,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-08-02T18:03:00.000Z",
    "amount"    : -46
  },
  {
    "id"        : 437,
    "payeeId"   : 26,
    "personId"  : 203,
    "categoryId": 108,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-08-15T00:30:00.000Z",
    "amount"    : -60
  },
  {
    "id"        : 438,
    "payeeId"   : 9,
    "personId"  : 203,
    "categoryId": 107,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-08-19T23:10:00.000Z",
    "amount"    : -12
  },
  {
    "id"        : 439,
    "payeeId"   : 16,
    "personId"  : 203,
    "categoryId": 104,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-08-16T22:42:00.000Z",
    "amount"    : -6.75
  },
  {
    "id"        : 440,
    "payeeId"   : 24,
    "personId"  : 203,
    "categoryId": 101,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-08-17T00:03:00.000Z",
    "amount"    : -63.25
  },
  {
    "id"        : 441,
    "payeeId"   : 7,
    "personId"  : 203,
    "categoryId": 104,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-08-08T17:31:00.000Z",
    "amount"    : -34.5
  },
  {
    "id"        : 442,
    "payeeId"   : 10,
    "personId"  : 203,
    "categoryId": 107,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-08-27T18:58:00.000Z",
    "amount"    : -126.5
  },
  {
    "id"        : 443,
    "payeeId"   : 18,
    "personId"  : 203,
    "categoryId": 102,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-08-17T18:43:00.000Z",
    "amount"    : -45
  },
  {
    "id"        : 444,
    "payeeId"   : 5,
    "personId"  : 203,
    "categoryId": 103,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-08-30T17:21:00.000Z",
    "amount"    : -143.75
  },
  {
    "id"        : 445,
    "payeeId"   : 15,
    "personId"  : 203,
    "categoryId": 103,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-08-07T00:08:00.000Z",
    "amount"    : -40.25
  },
  {
    "id"        : 446,
    "payeeId"   : 4,
    "personId"  : 203,
    "categoryId": 103,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-08-13T22:51:00.000Z",
    "amount"    : -57.5
  },
  {
    "id"        : 447,
    "payeeId"   : 6,
    "personId"  : 203,
    "categoryId": 103,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-08-21T17:28:00.000Z",
    "amount"    : -6
  },
  {
    "id"        : 448,
    "payeeId"   : 19,
    "personId"  : 203,
    "categoryId": 107,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-08-12T18:25:00.000Z",
    "amount"    : -3.75
  },
  {
    "id"        : 449,
    "payeeId"   : 1,
    "personId"  : 203,
    "categoryId": 102,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-08-01T04:00:00.000Z",
    "amount"    : -1600
  },
  {
    "id"        : 450,
    "payeeId"   : 2,
    "personId"  : 203,
    "categoryId": 106,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-08-10T04:00:00.000Z",
    "amount"    : -172.5
  },
  {
    "id"        : 451,
    "payeeId"   : 3,
    "personId"  : 203,
    "categoryId": 106,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-08-20T04:00:00.000Z",
    "amount"    : -11.25
  },
  {
    "id"        : 452,
    "payeeId"   : 12,
    "personId"  : 203,
    "categoryId": 105,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-09-27T15:59:00.000Z",
    "amount"    : -115
  },
  {
    "id"        : 453,
    "payeeId"   : 14,
    "personId"  : 203,
    "categoryId": 105,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-09-12T18:38:00.000Z",
    "amount"    : -86.25
  },
  {
    "id"        : 454,
    "payeeId"   : 17,
    "personId"  : 203,
    "categoryId": 106,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-08-25T04:00:00.000Z",
    "amount"    : -9.75
  },
  {
    "id"        : 455,
    "payeeId"   : 7,
    "personId"  : 203,
    "categoryId": 104,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-09-27T00:05:00.000Z",
    "amount"    : -34.5
  },
  {
    "id"        : 456,
    "payeeId"   : 5,
    "personId"  : 203,
    "categoryId": 103,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-10-02T00:54:00.000Z",
    "amount"    : -18.75
  },
  {
    "id"        : 457,
    "payeeId"   : 4,
    "personId"  : 203,
    "categoryId": 103,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-09-28T17:36:00.000Z",
    "amount"    : -57.5
  },
  {
    "id"        : 458,
    "payeeId"   : 9,
    "personId"  : 203,
    "categoryId": 107,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-09-14T16:39:00.000Z",
    "amount"    : -92
  },
  {
    "id"        : 459,
    "payeeId"   : 16,
    "personId"  : 203,
    "categoryId": 104,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-09-30T18:03:00.000Z",
    "amount"    : -51.75
  },
  {
    "id"        : 460,
    "payeeId"   : 15,
    "personId"  : 203,
    "categoryId": 103,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-09-06T20:42:00.000Z",
    "amount"    : -40.25
  },
  {
    "id"        : 461,
    "payeeId"   : 6,
    "personId"  : 203,
    "categoryId": 103,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-09-07T23:39:00.000Z",
    "amount"    : -6
  },
  {
    "id"        : 462,
    "payeeId"   : 24,
    "personId"  : 203,
    "categoryId": 101,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-09-05T22:44:00.000Z",
    "amount"    : -8.25
  },
  {
    "id"        : 463,
    "payeeId"   : 18,
    "personId"  : 203,
    "categoryId": 102,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-10-01T18:41:00.000Z",
    "amount"    : -45
  },
  {
    "id"        : 464,
    "payeeId"   : 13,
    "personId"  : 203,
    "categoryId": 104,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-09-12T23:08:00.000Z",
    "amount"    : -3.75
  },
  {
    "id"        : 465,
    "payeeId"   : 25,
    "personId"  : 203,
    "categoryId": 101,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-09-03T20:07:00.000Z",
    "amount"    : -46
  },
  {
    "id"        : 466,
    "payeeId"   : 10,
    "personId"  : 203,
    "categoryId": 107,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-09-24T20:49:00.000Z",
    "amount"    : -126.5
  },
  {
    "id"        : 467,
    "payeeId"   : 26,
    "personId"  : 203,
    "categoryId": 108,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-09-16T00:30:00.000Z",
    "amount"    : -60
  },
  {
    "id"        : 468,
    "payeeId"   : 19,
    "personId"  : 203,
    "categoryId": 107,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-09-11T17:39:00.000Z",
    "amount"    : -28.75
  },
  {
    "id"        : 469,
    "payeeId"   : 7,
    "personId"  : 203,
    "categoryId": 104,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-09-11T22:11:00.000Z",
    "amount"    : -4.5
  },
  {
    "id"        : 470,
    "payeeId"   : 5,
    "personId"  : 203,
    "categoryId": 103,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-09-28T18:21:00.000Z",
    "amount"    : -18.75
  },
  {
    "id"        : 471,
    "payeeId"   : 4,
    "personId"  : 203,
    "categoryId": 103,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-09-17T22:17:00.000Z",
    "amount"    : -57.5
  },
  {
    "id"        : 472,
    "payeeId"   : 9,
    "personId"  : 203,
    "categoryId": 107,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-09-19T00:01:00.000Z",
    "amount"    : -12
  },
  {
    "id"        : 473,
    "payeeId"   : 16,
    "personId"  : 203,
    "categoryId": 104,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-09-19T16:01:00.000Z",
    "amount"    : -51.75
  },
  {
    "id"        : 474,
    "payeeId"   : 15,
    "personId"  : 203,
    "categoryId": 103,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-09-05T16:12:00.000Z",
    "amount"    : -40.25
  },
  {
    "id"        : 475,
    "payeeId"   : 6,
    "personId"  : 203,
    "categoryId": 103,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-09-09T17:20:00.000Z",
    "amount"    : -6
  },
  {
    "id"        : 476,
    "payeeId"   : 24,
    "personId"  : 203,
    "categoryId": 101,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-09-09T18:48:00.000Z",
    "amount"    : -63.25
  },
  {
    "id"        : 477,
    "payeeId"   : 18,
    "personId"  : 203,
    "categoryId": 102,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-10-01T18:45:00.000Z",
    "amount"    : -45
  },
  {
    "id"        : 478,
    "payeeId"   : 13,
    "personId"  : 203,
    "categoryId": 104,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-09-25T00:33:00.000Z",
    "amount"    : -28.75
  },
  {
    "id"        : 479,
    "payeeId"   : 25,
    "personId"  : 203,
    "categoryId": 101,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-09-05T22:24:00.000Z",
    "amount"    : -46
  },
  {
    "id"        : 480,
    "payeeId"   : 10,
    "personId"  : 203,
    "categoryId": 107,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-09-04T20:00:00.000Z",
    "amount"    : -16.5
  },
  {
    "id"        : 481,
    "payeeId"   : 26,
    "personId"  : 203,
    "categoryId": 108,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-09-16T17:49:00.000Z",
    "amount"    : -60
  },
  {
    "id"        : 482,
    "payeeId"   : 19,
    "personId"  : 203,
    "categoryId": 107,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-09-27T20:43:00.000Z",
    "amount"    : -28.75
  },
  {
    "id"        : 483,
    "payeeId"   : 7,
    "personId"  : 203,
    "categoryId": 104,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-09-20T22:36:00.000Z",
    "amount"    : -4.5
  },
  {
    "id"        : 484,
    "payeeId"   : 5,
    "personId"  : 203,
    "categoryId": 103,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-10-01T16:52:00.000Z",
    "amount"    : -18.75
  },
  {
    "id"        : 485,
    "payeeId"   : 4,
    "personId"  : 203,
    "categoryId": 103,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-09-11T16:27:00.000Z",
    "amount"    : -7.5
  },
  {
    "id"        : 486,
    "payeeId"   : 9,
    "personId"  : 203,
    "categoryId": 107,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-09-23T16:11:00.000Z",
    "amount"    : -92
  },
  {
    "id"        : 487,
    "payeeId"   : 16,
    "personId"  : 203,
    "categoryId": 104,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-09-19T00:03:00.000Z",
    "amount"    : -51.75
  },
  {
    "id"        : 488,
    "payeeId"   : 15,
    "personId"  : 203,
    "categoryId": 103,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-09-30T17:17:00.000Z",
    "amount"    : -40.25
  },
  {
    "id"        : 489,
    "payeeId"   : 6,
    "personId"  : 203,
    "categoryId": 103,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-09-19T19:19:00.000Z",
    "amount"    : -6
  },
  {
    "id"        : 490,
    "payeeId"   : 24,
    "personId"  : 203,
    "categoryId": 101,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-09-16T18:37:00.000Z",
    "amount"    : -63.25
  },
  {
    "id"        : 491,
    "payeeId"   : 18,
    "personId"  : 203,
    "categoryId": 102,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-09-15T19:41:00.000Z",
    "amount"    : -45
  },
  {
    "id"        : 492,
    "payeeId"   : 13,
    "personId"  : 203,
    "categoryId": 104,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-09-25T19:24:00.000Z",
    "amount"    : -3.75
  },
  {
    "id"        : 493,
    "payeeId"   : 25,
    "personId"  : 203,
    "categoryId": 101,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-09-26T20:31:00.000Z",
    "amount"    : -46
  },
  {
    "id"        : 494,
    "payeeId"   : 10,
    "personId"  : 203,
    "categoryId": 107,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-09-18T17:55:00.000Z",
    "amount"    : -16.5
  },
  {
    "id"        : 495,
    "payeeId"   : 26,
    "personId"  : 203,
    "categoryId": 108,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-10-01T00:00:00.000Z",
    "amount"    : -60
  },
  {
    "id"        : 496,
    "payeeId"   : 19,
    "personId"  : 203,
    "categoryId": 107,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-09-03T18:15:00.000Z",
    "amount"    : -3.75
  },
  {
    "id"        : 497,
    "payeeId"   : 7,
    "personId"  : 203,
    "categoryId": 104,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-09-02T17:39:00.000Z",
    "amount"    : -34.5
  },
  {
    "id"        : 498,
    "payeeId"   : 5,
    "personId"  : 203,
    "categoryId": 103,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-09-07T17:17:00.000Z",
    "amount"    : -18.75
  },
  {
    "id"        : 499,
    "payeeId"   : 23,
    "personId"  : 203,
    "categoryId": 1,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-06-01T04:00:00.000Z",
    "amount"    : 3000
  },
  {
    "id"        : 500,
    "payeeId"   : 23,
    "personId"  : 203,
    "categoryId": 1,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-06-15T04:00:00.000Z",
    "amount"    : 3000
  },
  {
    "id"        : 501,
    "payeeId"   : 21,
    "personId"  : 203,
    "categoryId": 2,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-07-06T00:50:00.000Z",
    "amount"    : 86.25
  },
  {
    "id"        : 502,
    "payeeId"   : 8,
    "personId"  : 203,
    "categoryId": 3,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-07-11T22:24:00.000Z",
    "amount"    : 115
  },
  {
    "id"        : 503,
    "payeeId"   : 23,
    "personId"  : 203,
    "categoryId": 1,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-07-01T04:00:00.000Z",
    "amount"    : 3000
  },
  {
    "id"        : 504,
    "payeeId"   : 23,
    "personId"  : 203,
    "categoryId": 1,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-07-15T04:00:00.000Z",
    "amount"    : 3000
  },
  {
    "id"        : 505,
    "payeeId"   : 8,
    "personId"  : 203,
    "categoryId": 3,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-08-21T21:28:00.000Z",
    "amount"    : 115
  },
  {
    "id"        : 506,
    "payeeId"   : 20,
    "personId"  : 203,
    "categoryId": 3,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-08-15T17:38:00.000Z",
    "amount"    : 172.5
  },
  {
    "id"        : 507,
    "payeeId"   : 23,
    "personId"  : 203,
    "categoryId": 1,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-08-01T04:00:00.000Z",
    "amount"    : 3000
  },
  {
    "id"        : 508,
    "payeeId"   : 23,
    "personId"  : 203,
    "categoryId": 1,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-08-15T04:00:00.000Z",
    "amount"    : 3000
  },
  {
    "id"        : 509,
    "payeeId"   : 8,
    "personId"  : 203,
    "categoryId": 3,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-09-13T21:31:00.000Z",
    "amount"    : 15
  },
  {
    "id"        : 510,
    "payeeId"   : 11,
    "personId"  : 203,
    "categoryId": 2,
    "accountId" : 5,
    "txType"    : "2",
    "txDate"    : "2016-09-04T18:13:00.000Z",
    "amount"    : 7.5
  },
  {
    "id"        : 511,
    "payeeId"   : 1,
    "personId"  : 204,
    "categoryId": 102,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-06-01T04:00:00.000Z",
    "amount"    : -1600
  },
  {
    "id"        : 512,
    "payeeId"   : 2,
    "personId"  : 204,
    "categoryId": 106,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-06-10T04:00:00.000Z",
    "amount"    : -172.5
  },
  {
    "id"        : 513,
    "payeeId"   : 3,
    "personId"  : 204,
    "categoryId": 106,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-06-20T04:00:00.000Z",
    "amount"    : -11.25
  },
  {
    "id"        : 514,
    "payeeId"   : 12,
    "personId"  : 204,
    "categoryId": 105,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-07-04T23:57:00.000Z",
    "amount"    : -115
  },
  {
    "id"        : 515,
    "payeeId"   : 14,
    "personId"  : 204,
    "categoryId": 105,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-07-11T18:23:00.000Z",
    "amount"    : -86.25
  },
  {
    "id"        : 516,
    "payeeId"   : 17,
    "personId"  : 204,
    "categoryId": 106,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-06-25T04:00:00.000Z",
    "amount"    : -9.75
  },
  {
    "id"        : 517,
    "payeeId"   : 15,
    "personId"  : 204,
    "categoryId": 103,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-07-14T23:33:00.000Z",
    "amount"    : -40.25
  },
  {
    "id"        : 518,
    "payeeId"   : 26,
    "personId"  : 204,
    "categoryId": 108,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-07-02T21:35:00.000Z",
    "amount"    : -60
  },
  {
    "id"        : 519,
    "payeeId"   : 10,
    "personId"  : 204,
    "categoryId": 107,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-07-07T21:32:00.000Z",
    "amount"    : -16.5
  },
  {
    "id"        : 520,
    "payeeId"   : 5,
    "personId"  : 204,
    "categoryId": 103,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-07-03T17:59:00.000Z",
    "amount"    : -18.75
  },
  {
    "id"        : 521,
    "payeeId"   : 9,
    "personId"  : 204,
    "categoryId": 107,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-07-21T21:32:00.000Z",
    "amount"    : -12
  },
  {
    "id"        : 522,
    "payeeId"   : 13,
    "personId"  : 204,
    "categoryId": 104,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-07-26T22:25:00.000Z",
    "amount"    : -28.75
  },
  {
    "id"        : 523,
    "payeeId"   : 24,
    "personId"  : 204,
    "categoryId": 101,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-07-28T17:24:00.000Z",
    "amount"    : -8.25
  },
  {
    "id"        : 524,
    "payeeId"   : 19,
    "personId"  : 204,
    "categoryId": 107,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-07-13T21:47:00.000Z",
    "amount"    : -3.75
  },
  {
    "id"        : 525,
    "payeeId"   : 25,
    "personId"  : 204,
    "categoryId": 101,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-07-06T19:47:00.000Z",
    "amount"    : -46
  },
  {
    "id"        : 526,
    "payeeId"   : 4,
    "personId"  : 204,
    "categoryId": 103,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-07-06T17:02:00.000Z",
    "amount"    : -57.5
  },
  {
    "id"        : 527,
    "payeeId"   : 6,
    "personId"  : 204,
    "categoryId": 103,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-07-23T21:05:00.000Z",
    "amount"    : -46
  },
  {
    "id"        : 528,
    "payeeId"   : 7,
    "personId"  : 204,
    "categoryId": 104,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-07-16T17:42:00.000Z",
    "amount"    : -34.5
  },
  {
    "id"        : 529,
    "payeeId"   : 16,
    "personId"  : 204,
    "categoryId": 104,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-07-04T18:44:00.000Z",
    "amount"    : -51.75
  },
  {
    "id"        : 530,
    "payeeId"   : 18,
    "personId"  : 204,
    "categoryId": 102,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-07-27T22:13:00.000Z",
    "amount"    : -45
  },
  {
    "id"        : 531,
    "payeeId"   : 15,
    "personId"  : 204,
    "categoryId": 103,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-07-07T23:56:00.000Z",
    "amount"    : -40.25
  },
  {
    "id"        : 532,
    "payeeId"   : 26,
    "personId"  : 204,
    "categoryId": 108,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-07-03T18:46:00.000Z",
    "amount"    : -60
  },
  {
    "id"        : 533,
    "payeeId"   : 10,
    "personId"  : 204,
    "categoryId": 107,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-07-16T18:24:00.000Z",
    "amount"    : -126.5
  },
  {
    "id"        : 534,
    "payeeId"   : 5,
    "personId"  : 204,
    "categoryId": 103,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-07-05T20:59:00.000Z",
    "amount"    : -18.75
  },
  {
    "id"        : 535,
    "payeeId"   : 9,
    "personId"  : 204,
    "categoryId": 107,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-07-12T19:56:00.000Z",
    "amount"    : -92
  },
  {
    "id"        : 536,
    "payeeId"   : 13,
    "personId"  : 204,
    "categoryId": 104,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-07-25T18:18:00.000Z",
    "amount"    : -3.75
  },
  {
    "id"        : 537,
    "payeeId"   : 24,
    "personId"  : 204,
    "categoryId": 101,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-07-03T00:00:00.000Z",
    "amount"    : -8.25
  },
  {
    "id"        : 538,
    "payeeId"   : 19,
    "personId"  : 204,
    "categoryId": 107,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-07-31T22:40:00.000Z",
    "amount"    : -28.75
  },
  {
    "id"        : 539,
    "payeeId"   : 25,
    "personId"  : 204,
    "categoryId": 101,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-07-12T23:15:00.000Z",
    "amount"    : -6
  },
  {
    "id"        : 540,
    "payeeId"   : 4,
    "personId"  : 204,
    "categoryId": 103,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-07-04T18:31:00.000Z",
    "amount"    : -7.5
  },
  {
    "id"        : 541,
    "payeeId"   : 6,
    "personId"  : 204,
    "categoryId": 103,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-07-04T20:50:00.000Z",
    "amount"    : -46
  },
  {
    "id"        : 542,
    "payeeId"   : 7,
    "personId"  : 204,
    "categoryId": 104,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-07-29T23:02:00.000Z",
    "amount"    : -34.5
  },
  {
    "id"        : 543,
    "payeeId"   : 16,
    "personId"  : 204,
    "categoryId": 104,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-07-21T18:13:00.000Z",
    "amount"    : -6.75
  },
  {
    "id"        : 544,
    "payeeId"   : 18,
    "personId"  : 204,
    "categoryId": 102,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-07-19T21:45:00.000Z",
    "amount"    : -45
  },
  {
    "id"        : 545,
    "payeeId"   : 15,
    "personId"  : 204,
    "categoryId": 103,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-07-18T16:15:00.000Z",
    "amount"    : -5.25
  },
  {
    "id"        : 546,
    "payeeId"   : 26,
    "personId"  : 204,
    "categoryId": 108,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-07-03T22:24:00.000Z",
    "amount"    : -60
  },
  {
    "id"        : 547,
    "payeeId"   : 10,
    "personId"  : 204,
    "categoryId": 107,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-07-23T18:24:00.000Z",
    "amount"    : -126.5
  },
  {
    "id"        : 548,
    "payeeId"   : 5,
    "personId"  : 204,
    "categoryId": 103,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-07-24T17:18:00.000Z",
    "amount"    : -18.75
  },
  {
    "id"        : 549,
    "payeeId"   : 9,
    "personId"  : 204,
    "categoryId": 107,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-07-31T16:32:00.000Z",
    "amount"    : -92
  },
  {
    "id"        : 550,
    "payeeId"   : 13,
    "personId"  : 204,
    "categoryId": 104,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-07-13T22:50:00.000Z",
    "amount"    : -3.75
  },
  {
    "id"        : 551,
    "payeeId"   : 24,
    "personId"  : 204,
    "categoryId": 101,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-07-06T18:48:00.000Z",
    "amount"    : -63.25
  },
  {
    "id"        : 552,
    "payeeId"   : 19,
    "personId"  : 204,
    "categoryId": 107,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-07-18T20:13:00.000Z",
    "amount"    : -3.75
  },
  {
    "id"        : 553,
    "payeeId"   : 25,
    "personId"  : 204,
    "categoryId": 101,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-07-12T17:47:00.000Z",
    "amount"    : -46
  },
  {
    "id"        : 554,
    "payeeId"   : 4,
    "personId"  : 204,
    "categoryId": 103,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-07-22T16:18:00.000Z",
    "amount"    : -7.5
  },
  {
    "id"        : 555,
    "payeeId"   : 6,
    "personId"  : 204,
    "categoryId": 103,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-07-21T16:49:00.000Z",
    "amount"    : -46
  },
  {
    "id"        : 556,
    "payeeId"   : 7,
    "personId"  : 204,
    "categoryId": 104,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-07-28T23:54:00.000Z",
    "amount"    : -34.5
  },
  {
    "id"        : 557,
    "payeeId"   : 16,
    "personId"  : 204,
    "categoryId": 104,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-07-28T17:35:00.000Z",
    "amount"    : -51.75
  },
  {
    "id"        : 558,
    "payeeId"   : 18,
    "personId"  : 204,
    "categoryId": 102,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-07-09T21:29:00.000Z",
    "amount"    : -45
  },
  {
    "id"        : 559,
    "payeeId"   : 15,
    "personId"  : 204,
    "categoryId": 103,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-07-02T19:22:00.000Z",
    "amount"    : -5.25
  },
  {
    "id"        : 560,
    "payeeId"   : 26,
    "personId"  : 204,
    "categoryId": 108,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-07-08T18:19:00.000Z",
    "amount"    : -60
  },
  {
    "id"        : 561,
    "payeeId"   : 1,
    "personId"  : 204,
    "categoryId": 102,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-07-01T04:00:00.000Z",
    "amount"    : -1600
  },
  {
    "id"        : 562,
    "payeeId"   : 2,
    "personId"  : 204,
    "categoryId": 106,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-07-10T04:00:00.000Z",
    "amount"    : -22.5
  },
  {
    "id"        : 563,
    "payeeId"   : 3,
    "personId"  : 204,
    "categoryId": 106,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-07-20T04:00:00.000Z",
    "amount"    : -11.25
  },
  {
    "id"        : 564,
    "payeeId"   : 12,
    "personId"  : 204,
    "categoryId": 105,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-08-29T16:59:00.000Z",
    "amount"    : -115
  },
  {
    "id"        : 565,
    "payeeId"   : 14,
    "personId"  : 204,
    "categoryId": 105,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-08-10T20:12:00.000Z",
    "amount"    : -11.25
  },
  {
    "id"        : 566,
    "payeeId"   : 17,
    "personId"  : 204,
    "categoryId": 106,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-07-25T04:00:00.000Z",
    "amount"    : -74.75
  },
  {
    "id"        : 567,
    "payeeId"   : 26,
    "personId"  : 204,
    "categoryId": 108,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-09-01T22:12:00.000Z",
    "amount"    : -60
  },
  {
    "id"        : 568,
    "payeeId"   : 25,
    "personId"  : 204,
    "categoryId": 101,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-08-13T22:10:00.000Z",
    "amount"    : -46
  },
  {
    "id"        : 569,
    "payeeId"   : 15,
    "personId"  : 204,
    "categoryId": 103,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-08-19T20:53:00.000Z",
    "amount"    : -40.25
  },
  {
    "id"        : 570,
    "payeeId"   : 4,
    "personId"  : 204,
    "categoryId": 103,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-08-04T18:17:00.000Z",
    "amount"    : -57.5
  },
  {
    "id"        : 571,
    "payeeId"   : 5,
    "personId"  : 204,
    "categoryId": 103,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-08-08T00:02:00.000Z",
    "amount"    : -143.75
  },
  {
    "id"        : 572,
    "payeeId"   : 18,
    "personId"  : 204,
    "categoryId": 102,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-09-01T19:46:00.000Z",
    "amount"    : -45
  },
  {
    "id"        : 573,
    "payeeId"   : 6,
    "personId"  : 204,
    "categoryId": 103,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-08-21T20:50:00.000Z",
    "amount"    : -6
  },
  {
    "id"        : 574,
    "payeeId"   : 10,
    "personId"  : 204,
    "categoryId": 107,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-08-05T00:55:00.000Z",
    "amount"    : -16.5
  },
  {
    "id"        : 575,
    "payeeId"   : 7,
    "personId"  : 204,
    "categoryId": 104,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-08-21T18:35:00.000Z",
    "amount"    : -34.5
  },
  {
    "id"        : 576,
    "payeeId"   : 13,
    "personId"  : 204,
    "categoryId": 104,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-08-25T22:35:00.000Z",
    "amount"    : -28.75
  },
  {
    "id"        : 577,
    "payeeId"   : 16,
    "personId"  : 204,
    "categoryId": 104,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-08-15T19:22:00.000Z",
    "amount"    : -51.75
  },
  {
    "id"        : 578,
    "payeeId"   : 9,
    "personId"  : 204,
    "categoryId": 107,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-08-13T18:15:00.000Z",
    "amount"    : -12
  },
  {
    "id"        : 579,
    "payeeId"   : 24,
    "personId"  : 204,
    "categoryId": 101,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-08-21T23:15:00.000Z",
    "amount"    : -8.25
  },
  {
    "id"        : 580,
    "payeeId"   : 19,
    "personId"  : 204,
    "categoryId": 107,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-08-09T20:11:00.000Z",
    "amount"    : -3.75
  },
  {
    "id"        : 581,
    "payeeId"   : 26,
    "personId"  : 204,
    "categoryId": 108,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-08-28T18:43:00.000Z",
    "amount"    : -60
  },
  {
    "id"        : 582,
    "payeeId"   : 25,
    "personId"  : 204,
    "categoryId": 101,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-08-14T19:09:00.000Z",
    "amount"    : -46
  },
  {
    "id"        : 583,
    "payeeId"   : 15,
    "personId"  : 204,
    "categoryId": 103,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-08-15T23:17:00.000Z",
    "amount"    : -5.25
  },
  {
    "id"        : 584,
    "payeeId"   : 4,
    "personId"  : 204,
    "categoryId": 103,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-08-08T21:13:00.000Z",
    "amount"    : -7.5
  },
  {
    "id"        : 585,
    "payeeId"   : 5,
    "personId"  : 204,
    "categoryId": 103,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-08-28T22:05:00.000Z",
    "amount"    : -18.75
  },
  {
    "id"        : 586,
    "payeeId"   : 18,
    "personId"  : 204,
    "categoryId": 102,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-08-07T16:00:00.000Z",
    "amount"    : -45
  },
  {
    "id"        : 587,
    "payeeId"   : 6,
    "personId"  : 204,
    "categoryId": 103,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-09-01T16:33:00.000Z",
    "amount"    : -6
  },
  {
    "id"        : 588,
    "payeeId"   : 10,
    "personId"  : 204,
    "categoryId": 107,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-08-17T00:50:00.000Z",
    "amount"    : -16.5
  },
  {
    "id"        : 589,
    "payeeId"   : 7,
    "personId"  : 204,
    "categoryId": 104,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-08-26T19:29:00.000Z",
    "amount"    : -4.5
  },
  {
    "id"        : 590,
    "payeeId"   : 13,
    "personId"  : 204,
    "categoryId": 104,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-08-23T16:13:00.000Z",
    "amount"    : -3.75
  },
  {
    "id"        : 591,
    "payeeId"   : 16,
    "personId"  : 204,
    "categoryId": 104,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-08-16T20:40:00.000Z",
    "amount"    : -6.75
  },
  {
    "id"        : 592,
    "payeeId"   : 9,
    "personId"  : 204,
    "categoryId": 107,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-08-12T20:35:00.000Z",
    "amount"    : -12
  },
  {
    "id"        : 593,
    "payeeId"   : 24,
    "personId"  : 204,
    "categoryId": 101,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-08-23T23:59:00.000Z",
    "amount"    : -8.25
  },
  {
    "id"        : 594,
    "payeeId"   : 19,
    "personId"  : 204,
    "categoryId": 107,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-08-22T22:26:00.000Z",
    "amount"    : -3.75
  },
  {
    "id"        : 595,
    "payeeId"   : 26,
    "personId"  : 204,
    "categoryId": 108,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-08-06T22:33:00.000Z",
    "amount"    : -60
  },
  {
    "id"        : 596,
    "payeeId"   : 25,
    "personId"  : 204,
    "categoryId": 101,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-08-26T21:18:00.000Z",
    "amount"    : -6
  },
  {
    "id"        : 597,
    "payeeId"   : 15,
    "personId"  : 204,
    "categoryId": 103,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-08-28T20:10:00.000Z",
    "amount"    : -40.25
  },
  {
    "id"        : 598,
    "payeeId"   : 4,
    "personId"  : 204,
    "categoryId": 103,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-08-26T18:02:00.000Z",
    "amount"    : -7.5
  },
  {
    "id"        : 599,
    "payeeId"   : 5,
    "personId"  : 204,
    "categoryId": 103,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-08-15T19:58:00.000Z",
    "amount"    : -18.75
  },
  {
    "id"        : 600,
    "payeeId"   : 18,
    "personId"  : 204,
    "categoryId": 102,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-08-08T00:24:00.000Z",
    "amount"    : -45
  },
  {
    "id"        : 601,
    "payeeId"   : 6,
    "personId"  : 204,
    "categoryId": 103,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-08-08T23:56:00.000Z",
    "amount"    : -6
  },
  {
    "id"        : 602,
    "payeeId"   : 10,
    "personId"  : 204,
    "categoryId": 107,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-08-03T19:32:00.000Z",
    "amount"    : -126.5
  },
  {
    "id"        : 603,
    "payeeId"   : 7,
    "personId"  : 204,
    "categoryId": 104,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-08-31T22:31:00.000Z",
    "amount"    : -4.5
  },
  {
    "id"        : 604,
    "payeeId"   : 13,
    "personId"  : 204,
    "categoryId": 104,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-08-06T19:59:00.000Z",
    "amount"    : -3.75
  },
  {
    "id"        : 605,
    "payeeId"   : 16,
    "personId"  : 204,
    "categoryId": 104,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-08-05T18:32:00.000Z",
    "amount"    : -6.75
  },
  {
    "id"        : 606,
    "payeeId"   : 9,
    "personId"  : 204,
    "categoryId": 107,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-08-28T16:23:00.000Z",
    "amount"    : -12
  },
  {
    "id"        : 607,
    "payeeId"   : 24,
    "personId"  : 204,
    "categoryId": 101,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-08-28T21:56:00.000Z",
    "amount"    : -8.25
  },
  {
    "id"        : 608,
    "payeeId"   : 19,
    "personId"  : 204,
    "categoryId": 107,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-08-31T22:03:00.000Z",
    "amount"    : -3.75
  },
  {
    "id"        : 609,
    "payeeId"   : 26,
    "personId"  : 204,
    "categoryId": 108,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-08-24T21:37:00.000Z",
    "amount"    : -60
  },
  {
    "id"        : 610,
    "payeeId"   : 25,
    "personId"  : 204,
    "categoryId": 101,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-08-05T16:24:00.000Z",
    "amount"    : -46
  },
  {
    "id"        : 611,
    "payeeId"   : 1,
    "personId"  : 204,
    "categoryId": 102,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-08-01T04:00:00.000Z",
    "amount"    : -1600
  },
  {
    "id"        : 612,
    "payeeId"   : 2,
    "personId"  : 204,
    "categoryId": 106,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-08-10T04:00:00.000Z",
    "amount"    : -22.5
  },
  {
    "id"        : 613,
    "payeeId"   : 3,
    "personId"  : 204,
    "categoryId": 106,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-08-20T04:00:00.000Z",
    "amount"    : -11.25
  },
  {
    "id"        : 614,
    "payeeId"   : 12,
    "personId"  : 204,
    "categoryId": 105,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-09-25T00:31:00.000Z",
    "amount"    : -115
  },
  {
    "id"        : 615,
    "payeeId"   : 14,
    "personId"  : 204,
    "categoryId": 105,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-09-11T23:53:00.000Z",
    "amount"    : -11.25
  },
  {
    "id"        : 616,
    "payeeId"   : 17,
    "personId"  : 204,
    "categoryId": 106,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-08-25T04:00:00.000Z",
    "amount"    : -9.75
  },
  {
    "id"        : 617,
    "payeeId"   : 10,
    "personId"  : 204,
    "categoryId": 107,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-09-16T00:28:00.000Z",
    "amount"    : -126.5
  },
  {
    "id"        : 618,
    "payeeId"   : 24,
    "personId"  : 204,
    "categoryId": 101,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-09-16T17:53:00.000Z",
    "amount"    : -8.25
  },
  {
    "id"        : 619,
    "payeeId"   : 4,
    "personId"  : 204,
    "categoryId": 103,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-09-23T21:13:00.000Z",
    "amount"    : -7.5
  },
  {
    "id"        : 620,
    "payeeId"   : 19,
    "personId"  : 204,
    "categoryId": 107,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-09-12T19:54:00.000Z",
    "amount"    : -3.75
  },
  {
    "id"        : 621,
    "payeeId"   : 25,
    "personId"  : 204,
    "categoryId": 101,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-09-07T22:46:00.000Z",
    "amount"    : -46
  },
  {
    "id"        : 622,
    "payeeId"   : 5,
    "personId"  : 204,
    "categoryId": 103,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-09-12T22:47:00.000Z",
    "amount"    : -143.75
  },
  {
    "id"        : 623,
    "payeeId"   : 15,
    "personId"  : 204,
    "categoryId": 103,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-09-17T00:01:00.000Z",
    "amount"    : -40.25
  },
  {
    "id"        : 624,
    "payeeId"   : 9,
    "personId"  : 204,
    "categoryId": 107,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-09-27T19:06:00.000Z",
    "amount"    : -92
  },
  {
    "id"        : 625,
    "payeeId"   : 13,
    "personId"  : 204,
    "categoryId": 104,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-09-27T23:52:00.000Z",
    "amount"    : -3.75
  },
  {
    "id"        : 626,
    "payeeId"   : 7,
    "personId"  : 204,
    "categoryId": 104,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-09-03T20:05:00.000Z",
    "amount"    : -4.5
  },
  {
    "id"        : 627,
    "payeeId"   : 26,
    "personId"  : 204,
    "categoryId": 108,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-09-06T17:11:00.000Z",
    "amount"    : -60
  },
  {
    "id"        : 628,
    "payeeId"   : 16,
    "personId"  : 204,
    "categoryId": 104,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-09-15T23:14:00.000Z",
    "amount"    : -51.75
  },
  {
    "id"        : 629,
    "payeeId"   : 18,
    "personId"  : 204,
    "categoryId": 102,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-09-14T17:13:00.000Z",
    "amount"    : -45
  },
  {
    "id"        : 630,
    "payeeId"   : 6,
    "personId"  : 204,
    "categoryId": 103,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-09-14T21:31:00.000Z",
    "amount"    : -46
  },
  {
    "id"        : 631,
    "payeeId"   : 10,
    "personId"  : 204,
    "categoryId": 107,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-09-13T23:02:00.000Z",
    "amount"    : -126.5
  },
  {
    "id"        : 632,
    "payeeId"   : 24,
    "personId"  : 204,
    "categoryId": 101,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-09-24T22:19:00.000Z",
    "amount"    : -8.25
  },
  {
    "id"        : 633,
    "payeeId"   : 4,
    "personId"  : 204,
    "categoryId": 103,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-09-30T22:57:00.000Z",
    "amount"    : -57.5
  },
  {
    "id"        : 634,
    "payeeId"   : 19,
    "personId"  : 204,
    "categoryId": 107,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-09-14T21:45:00.000Z",
    "amount"    : -3.75
  },
  {
    "id"        : 635,
    "payeeId"   : 25,
    "personId"  : 204,
    "categoryId": 101,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-09-15T20:26:00.000Z",
    "amount"    : -6
  },
  {
    "id"        : 636,
    "payeeId"   : 5,
    "personId"  : 204,
    "categoryId": 103,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-10-02T00:38:00.000Z",
    "amount"    : -143.75
  },
  {
    "id"        : 637,
    "payeeId"   : 15,
    "personId"  : 204,
    "categoryId": 103,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-09-26T21:26:00.000Z",
    "amount"    : -40.25
  },
  {
    "id"        : 638,
    "payeeId"   : 9,
    "personId"  : 204,
    "categoryId": 107,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-09-20T17:49:00.000Z",
    "amount"    : -12
  },
  {
    "id"        : 639,
    "payeeId"   : 13,
    "personId"  : 204,
    "categoryId": 104,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-09-14T18:30:00.000Z",
    "amount"    : -28.75
  },
  {
    "id"        : 640,
    "payeeId"   : 7,
    "personId"  : 204,
    "categoryId": 104,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-09-24T00:11:00.000Z",
    "amount"    : -4.5
  },
  {
    "id"        : 641,
    "payeeId"   : 26,
    "personId"  : 204,
    "categoryId": 108,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-09-06T23:06:00.000Z",
    "amount"    : -60
  },
  {
    "id"        : 642,
    "payeeId"   : 16,
    "personId"  : 204,
    "categoryId": 104,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-10-01T20:06:00.000Z",
    "amount"    : -6.75
  },
  {
    "id"        : 643,
    "payeeId"   : 18,
    "personId"  : 204,
    "categoryId": 102,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-09-10T22:15:00.000Z",
    "amount"    : -45
  },
  {
    "id"        : 644,
    "payeeId"   : 6,
    "personId"  : 204,
    "categoryId": 103,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-10-01T22:19:00.000Z",
    "amount"    : -6
  },
  {
    "id"        : 645,
    "payeeId"   : 10,
    "personId"  : 204,
    "categoryId": 107,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-10-01T20:08:00.000Z",
    "amount"    : -16.5
  },
  {
    "id"        : 646,
    "payeeId"   : 24,
    "personId"  : 204,
    "categoryId": 101,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-09-23T22:57:00.000Z",
    "amount"    : -8.25
  },
  {
    "id"        : 647,
    "payeeId"   : 4,
    "personId"  : 204,
    "categoryId": 103,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-09-21T22:46:00.000Z",
    "amount"    : -57.5
  },
  {
    "id"        : 648,
    "payeeId"   : 19,
    "personId"  : 204,
    "categoryId": 107,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-09-15T21:04:00.000Z",
    "amount"    : -28.75
  },
  {
    "id"        : 649,
    "payeeId"   : 25,
    "personId"  : 204,
    "categoryId": 101,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-09-04T00:24:00.000Z",
    "amount"    : -46
  },
  {
    "id"        : 650,
    "payeeId"   : 5,
    "personId"  : 204,
    "categoryId": 103,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-09-21T18:24:00.000Z",
    "amount"    : -18.75
  },
  {
    "id"        : 651,
    "payeeId"   : 15,
    "personId"  : 204,
    "categoryId": 103,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-09-28T00:48:00.000Z",
    "amount"    : -5.25
  },
  {
    "id"        : 652,
    "payeeId"   : 9,
    "personId"  : 204,
    "categoryId": 107,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-09-29T21:42:00.000Z",
    "amount"    : -92
  },
  {
    "id"        : 653,
    "payeeId"   : 13,
    "personId"  : 204,
    "categoryId": 104,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-09-24T22:24:00.000Z",
    "amount"    : -3.75
  },
  {
    "id"        : 654,
    "payeeId"   : 7,
    "personId"  : 204,
    "categoryId": 104,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-09-06T18:31:00.000Z",
    "amount"    : -34.5
  },
  {
    "id"        : 655,
    "payeeId"   : 26,
    "personId"  : 204,
    "categoryId": 108,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-09-27T18:10:00.000Z",
    "amount"    : -60
  },
  {
    "id"        : 656,
    "payeeId"   : 16,
    "personId"  : 204,
    "categoryId": 104,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-09-20T23:43:00.000Z",
    "amount"    : -6.75
  },
  {
    "id"        : 657,
    "payeeId"   : 18,
    "personId"  : 204,
    "categoryId": 102,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-09-22T22:58:00.000Z",
    "amount"    : -45
  },
  {
    "id"        : 658,
    "payeeId"   : 6,
    "personId"  : 204,
    "categoryId": 103,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-09-25T21:53:00.000Z",
    "amount"    : -46
  },
  {
    "id"        : 659,
    "payeeId"   : 10,
    "personId"  : 204,
    "categoryId": 107,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-09-03T19:13:00.000Z",
    "amount"    : -16.5
  },
  {
    "id"        : 660,
    "payeeId"   : 24,
    "personId"  : 204,
    "categoryId": 101,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-09-03T19:08:00.000Z",
    "amount"    : -63.25
  },
  {
    "id"        : 661,
    "payeeId"   : 23,
    "personId"  : 204,
    "categoryId": 1,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-06-01T04:00:00.000Z",
    "amount"    : 3000
  },
  {
    "id"        : 662,
    "payeeId"   : 23,
    "personId"  : 204,
    "categoryId": 1,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-06-15T04:00:00.000Z",
    "amount"    : 3000
  },
  {
    "id"        : 663,
    "payeeId"   : 11,
    "personId"  : 204,
    "categoryId": 2,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-07-24T17:45:00.000Z",
    "amount"    : 7.5
  },
  {
    "id"        : 664,
    "payeeId"   : 21,
    "personId"  : 204,
    "categoryId": 2,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-07-09T22:19:00.000Z",
    "amount"    : 11.25
  },
  {
    "id"        : 665,
    "payeeId"   : 23,
    "personId"  : 204,
    "categoryId": 1,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-07-01T04:00:00.000Z",
    "amount"    : 3000
  },
  {
    "id"        : 666,
    "payeeId"   : 23,
    "personId"  : 204,
    "categoryId": 1,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-07-15T04:00:00.000Z",
    "amount"    : 3000
  },
  {
    "id"        : 667,
    "payeeId"   : 21,
    "personId"  : 204,
    "categoryId": 2,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-08-18T22:52:00.000Z",
    "amount"    : 86.25
  },
  {
    "id"        : 668,
    "payeeId"   : 20,
    "personId"  : 204,
    "categoryId": 3,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-08-28T21:56:00.000Z",
    "amount"    : 172.5
  },
  {
    "id"        : 669,
    "payeeId"   : 23,
    "personId"  : 204,
    "categoryId": 1,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-08-01T04:00:00.000Z",
    "amount"    : 3000
  },
  {
    "id"        : 670,
    "payeeId"   : 23,
    "personId"  : 204,
    "categoryId": 1,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-08-15T04:00:00.000Z",
    "amount"    : 3000
  },
  {
    "id"        : 671,
    "payeeId"   : 21,
    "personId"  : 204,
    "categoryId": 2,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-09-14T00:40:00.000Z",
    "amount"    : 11.25
  },
  {
    "id"        : 672,
    "payeeId"   : 8,
    "personId"  : 204,
    "categoryId": 3,
    "accountId" : 6,
    "txType"    : "2",
    "txDate"    : "2016-09-24T22:08:00.000Z",
    "amount"    : 15
  },
  {
    "id"        : 673,
    "payeeId"   : 11,
    "personId"  : 204,
    "categoryId": 2,
    "accountId" : 7,
    "txType"    : "2",
    "txDate"    : "2016-07-06T16:14:00.000Z",
    "amount"    : 57.5
  },
  {
    "id"        : 674,
    "payeeId"   : 20,
    "personId"  : 204,
    "categoryId": 3,
    "accountId" : 7,
    "txType"    : "2",
    "txDate"    : "2016-07-12T21:36:00.000Z",
    "amount"    : 22.5
  },
  {
    "id"        : 675,
    "payeeId"   : 8,
    "personId"  : 204,
    "categoryId": 3,
    "accountId" : 7,
    "txType"    : "2",
    "txDate"    : "2016-07-04T20:58:00.000Z",
    "amount"    : 15
  },
  {
    "id"        : 676,
    "payeeId"   : 21,
    "personId"  : 204,
    "categoryId": 2,
    "accountId" : 7,
    "txType"    : "2",
    "txDate"    : "2016-07-28T22:44:00.000Z",
    "amount"    : 86.25
  },
  {
    "id"        : 677,
    "payeeId"   : 8,
    "personId"  : 204,
    "categoryId": 3,
    "accountId" : 7,
    "txType"    : "2",
    "txDate"    : "2016-08-20T18:47:00.000Z",
    "amount"    : 115
  },
  {
    "id"        : 678,
    "payeeId"   : 20,
    "personId"  : 204,
    "categoryId": 3,
    "accountId" : 7,
    "txType"    : "2",
    "txDate"    : "2016-08-28T16:48:00.000Z",
    "amount"    : 22.5
  },
  {
    "id"        : 679,
    "payeeId"   : 21,
    "personId"  : 204,
    "categoryId": 2,
    "accountId" : 7,
    "txType"    : "2",
    "txDate"    : "2016-08-28T00:15:00.000Z",
    "amount"    : 86.25
  },
  {
    "id"        : 680,
    "payeeId"   : 11,
    "personId"  : 204,
    "categoryId": 2,
    "accountId" : 7,
    "txType"    : "2",
    "txDate"    : "2016-08-17T18:47:00.000Z",
    "amount"    : 7.5
  },
  {
    "id"        : 681,
    "payeeId"   : 8,
    "personId"  : 204,
    "categoryId": 3,
    "accountId" : 7,
    "txType"    : "2",
    "txDate"    : "2016-09-22T23:04:00.000Z",
    "amount"    : 15
  },
  {
    "id"        : 682,
    "payeeId"   : 21,
    "personId"  : 204,
    "categoryId": 2,
    "accountId" : 7,
    "txType"    : "2",
    "txDate"    : "2016-09-27T00:34:00.000Z",
    "amount"    : 11.25
  },
  {
    "id"        : 683,
    "payeeId"   : 20,
    "personId"  : 204,
    "categoryId": 3,
    "accountId" : 7,
    "txType"    : "2",
    "txDate"    : "2016-09-15T00:11:00.000Z",
    "amount"    : 172.5
  },
  {
    "id"        : 684,
    "payeeId"   : 11,
    "personId"  : 204,
    "categoryId": 2,
    "accountId" : 7,
    "txType"    : "2",
    "txDate"    : "2016-10-02T20:17:00.000Z",
    "amount"    : 7.5
  },
  {
    "id"        : 685,
    "payeeId"   : 1,
    "personId"  : 205,
    "categoryId": 102,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-06-01T04:00:00.000Z",
    "amount"    : -1600
  },
  {
    "id"        : 686,
    "payeeId"   : 2,
    "personId"  : 205,
    "categoryId": 106,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-06-10T04:00:00.000Z",
    "amount"    : -22.5
  },
  {
    "id"        : 687,
    "payeeId"   : 3,
    "personId"  : 205,
    "categoryId": 106,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-06-20T04:00:00.000Z",
    "amount"    : -86.25
  },
  {
    "id"        : 688,
    "payeeId"   : 12,
    "personId"  : 205,
    "categoryId": 105,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-07-28T19:01:00.000Z",
    "amount"    : -15
  },
  {
    "id"        : 689,
    "payeeId"   : 14,
    "personId"  : 205,
    "categoryId": 105,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-07-02T19:06:00.000Z",
    "amount"    : -86.25
  },
  {
    "id"        : 690,
    "payeeId"   : 17,
    "personId"  : 205,
    "categoryId": 106,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-06-25T04:00:00.000Z",
    "amount"    : -9.75
  },
  {
    "id"        : 691,
    "payeeId"   : 9,
    "personId"  : 205,
    "categoryId": 107,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-07-05T22:06:00.000Z",
    "amount"    : -12
  },
  {
    "id"        : 692,
    "payeeId"   : 7,
    "personId"  : 205,
    "categoryId": 104,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-07-04T18:10:00.000Z",
    "amount"    : -4.5
  },
  {
    "id"        : 693,
    "payeeId"   : 24,
    "personId"  : 205,
    "categoryId": 101,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-07-05T00:05:00.000Z",
    "amount"    : -8.25
  },
  {
    "id"        : 694,
    "payeeId"   : 13,
    "personId"  : 205,
    "categoryId": 104,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-07-17T23:53:00.000Z",
    "amount"    : -3.75
  },
  {
    "id"        : 695,
    "payeeId"   : 5,
    "personId"  : 205,
    "categoryId": 103,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-07-03T20:00:00.000Z",
    "amount"    : -143.75
  },
  {
    "id"        : 696,
    "payeeId"   : 15,
    "personId"  : 205,
    "categoryId": 103,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-07-25T23:47:00.000Z",
    "amount"    : -5.25
  },
  {
    "id"        : 697,
    "payeeId"   : 18,
    "personId"  : 205,
    "categoryId": 102,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-07-15T21:50:00.000Z",
    "amount"    : -45
  },
  {
    "id"        : 698,
    "payeeId"   : 6,
    "personId"  : 205,
    "categoryId": 103,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-07-12T20:29:00.000Z",
    "amount"    : -46
  },
  {
    "id"        : 699,
    "payeeId"   : 19,
    "personId"  : 205,
    "categoryId": 107,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-07-20T22:02:00.000Z",
    "amount"    : -28.75
  },
  {
    "id"        : 700,
    "payeeId"   : 10,
    "personId"  : 205,
    "categoryId": 107,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-07-17T22:45:00.000Z",
    "amount"    : -16.5
  },
  {
    "id"        : 701,
    "payeeId"   : 16,
    "personId"  : 205,
    "categoryId": 104,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-07-22T17:47:00.000Z",
    "amount"    : -51.75
  },
  {
    "id"        : 702,
    "payeeId"   : 25,
    "personId"  : 205,
    "categoryId": 101,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-07-09T19:37:00.000Z",
    "amount"    : -46
  },
  {
    "id"        : 703,
    "payeeId"   : 4,
    "personId"  : 205,
    "categoryId": 103,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-07-12T23:43:00.000Z",
    "amount"    : -7.5
  },
  {
    "id"        : 704,
    "payeeId"   : 26,
    "personId"  : 205,
    "categoryId": 108,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-07-14T21:12:00.000Z",
    "amount"    : -60
  },
  {
    "id"        : 705,
    "payeeId"   : 9,
    "personId"  : 205,
    "categoryId": 107,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-07-31T23:14:00.000Z",
    "amount"    : -12
  },
  {
    "id"        : 706,
    "payeeId"   : 7,
    "personId"  : 205,
    "categoryId": 104,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-07-23T22:11:00.000Z",
    "amount"    : -4.5
  },
  {
    "id"        : 707,
    "payeeId"   : 24,
    "personId"  : 205,
    "categoryId": 101,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-07-05T18:51:00.000Z",
    "amount"    : -8.25
  },
  {
    "id"        : 708,
    "payeeId"   : 13,
    "personId"  : 205,
    "categoryId": 104,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-07-14T20:16:00.000Z",
    "amount"    : -3.75
  },
  {
    "id"        : 709,
    "payeeId"   : 5,
    "personId"  : 205,
    "categoryId": 103,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-07-13T00:04:00.000Z",
    "amount"    : -18.75
  },
  {
    "id"        : 710,
    "payeeId"   : 15,
    "personId"  : 205,
    "categoryId": 103,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-07-27T00:20:00.000Z",
    "amount"    : -5.25
  },
  {
    "id"        : 711,
    "payeeId"   : 18,
    "personId"  : 205,
    "categoryId": 102,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-07-03T23:04:00.000Z",
    "amount"    : -45
  },
  {
    "id"        : 712,
    "payeeId"   : 6,
    "personId"  : 205,
    "categoryId": 103,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-07-30T20:56:00.000Z",
    "amount"    : -6
  },
  {
    "id"        : 713,
    "payeeId"   : 19,
    "personId"  : 205,
    "categoryId": 107,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-07-19T20:57:00.000Z",
    "amount"    : -3.75
  },
  {
    "id"        : 714,
    "payeeId"   : 10,
    "personId"  : 205,
    "categoryId": 107,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-07-20T17:52:00.000Z",
    "amount"    : -16.5
  },
  {
    "id"        : 715,
    "payeeId"   : 16,
    "personId"  : 205,
    "categoryId": 104,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-07-16T17:44:00.000Z",
    "amount"    : -51.75
  },
  {
    "id"        : 716,
    "payeeId"   : 25,
    "personId"  : 205,
    "categoryId": 101,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-08-01T00:10:00.000Z",
    "amount"    : -46
  },
  {
    "id"        : 717,
    "payeeId"   : 4,
    "personId"  : 205,
    "categoryId": 103,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-07-19T17:43:00.000Z",
    "amount"    : -57.5
  },
  {
    "id"        : 718,
    "payeeId"   : 26,
    "personId"  : 205,
    "categoryId": 108,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-07-22T22:56:00.000Z",
    "amount"    : -60
  },
  {
    "id"        : 719,
    "payeeId"   : 9,
    "personId"  : 205,
    "categoryId": 107,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-07-26T17:49:00.000Z",
    "amount"    : -92
  },
  {
    "id"        : 720,
    "payeeId"   : 7,
    "personId"  : 205,
    "categoryId": 104,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-07-29T00:52:00.000Z",
    "amount"    : -34.5
  },
  {
    "id"        : 721,
    "payeeId"   : 24,
    "personId"  : 205,
    "categoryId": 101,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-07-14T20:19:00.000Z",
    "amount"    : -63.25
  },
  {
    "id"        : 722,
    "payeeId"   : 13,
    "personId"  : 205,
    "categoryId": 104,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-07-02T18:29:00.000Z",
    "amount"    : -3.75
  },
  {
    "id"        : 723,
    "payeeId"   : 5,
    "personId"  : 205,
    "categoryId": 103,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-07-10T17:13:00.000Z",
    "amount"    : -143.75
  },
  {
    "id"        : 724,
    "payeeId"   : 15,
    "personId"  : 205,
    "categoryId": 103,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-07-24T20:49:00.000Z",
    "amount"    : -40.25
  },
  {
    "id"        : 725,
    "payeeId"   : 18,
    "personId"  : 205,
    "categoryId": 102,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-07-31T23:56:00.000Z",
    "amount"    : -45
  },
  {
    "id"        : 726,
    "payeeId"   : 6,
    "personId"  : 205,
    "categoryId": 103,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-07-08T18:10:00.000Z",
    "amount"    : -6
  },
  {
    "id"        : 727,
    "payeeId"   : 19,
    "personId"  : 205,
    "categoryId": 107,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-07-28T00:24:00.000Z",
    "amount"    : -3.75
  },
  {
    "id"        : 728,
    "payeeId"   : 10,
    "personId"  : 205,
    "categoryId": 107,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-07-27T23:40:00.000Z",
    "amount"    : -126.5
  },
  {
    "id"        : 729,
    "payeeId"   : 16,
    "personId"  : 205,
    "categoryId": 104,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-07-11T22:18:00.000Z",
    "amount"    : -51.75
  },
  {
    "id"        : 730,
    "payeeId"   : 25,
    "personId"  : 205,
    "categoryId": 101,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-07-24T17:35:00.000Z",
    "amount"    : -6
  },
  {
    "id"        : 731,
    "payeeId"   : 4,
    "personId"  : 205,
    "categoryId": 103,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-07-19T22:19:00.000Z",
    "amount"    : -7.5
  },
  {
    "id"        : 732,
    "payeeId"   : 26,
    "personId"  : 205,
    "categoryId": 108,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-07-05T20:18:00.000Z",
    "amount"    : -60
  },
  {
    "id"        : 733,
    "payeeId"   : 9,
    "personId"  : 205,
    "categoryId": 107,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-07-04T19:06:00.000Z",
    "amount"    : -12
  },
  {
    "id"        : 734,
    "payeeId"   : 7,
    "personId"  : 205,
    "categoryId": 104,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-07-28T17:04:00.000Z",
    "amount"    : -34.5
  },
  {
    "id"        : 735,
    "payeeId"   : 1,
    "personId"  : 205,
    "categoryId": 102,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-07-01T04:00:00.000Z",
    "amount"    : -1600
  },
  {
    "id"        : 736,
    "payeeId"   : 2,
    "personId"  : 205,
    "categoryId": 106,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-07-10T04:00:00.000Z",
    "amount"    : -22.5
  },
  {
    "id"        : 737,
    "payeeId"   : 3,
    "personId"  : 205,
    "categoryId": 106,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-07-20T04:00:00.000Z",
    "amount"    : -86.25
  },
  {
    "id"        : 738,
    "payeeId"   : 12,
    "personId"  : 205,
    "categoryId": 105,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-08-31T17:02:00.000Z",
    "amount"    : -15
  },
  {
    "id"        : 739,
    "payeeId"   : 14,
    "personId"  : 205,
    "categoryId": 105,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-08-20T18:58:00.000Z",
    "amount"    : -11.25
  },
  {
    "id"        : 740,
    "payeeId"   : 17,
    "personId"  : 205,
    "categoryId": 106,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-07-25T04:00:00.000Z",
    "amount"    : -74.75
  },
  {
    "id"        : 741,
    "payeeId"   : 10,
    "personId"  : 205,
    "categoryId": 107,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-08-21T22:10:00.000Z",
    "amount"    : -16.5
  },
  {
    "id"        : 742,
    "payeeId"   : 7,
    "personId"  : 205,
    "categoryId": 104,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-08-18T19:43:00.000Z",
    "amount"    : -4.5
  },
  {
    "id"        : 743,
    "payeeId"   : 25,
    "personId"  : 205,
    "categoryId": 101,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-08-08T19:22:00.000Z",
    "amount"    : -46
  },
  {
    "id"        : 744,
    "payeeId"   : 15,
    "personId"  : 205,
    "categoryId": 103,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-08-13T16:34:00.000Z",
    "amount"    : -40.25
  },
  {
    "id"        : 745,
    "payeeId"   : 4,
    "personId"  : 205,
    "categoryId": 103,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-08-16T20:14:00.000Z",
    "amount"    : -7.5
  },
  {
    "id"        : 746,
    "payeeId"   : 9,
    "personId"  : 205,
    "categoryId": 107,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-08-28T19:30:00.000Z",
    "amount"    : -92
  },
  {
    "id"        : 747,
    "payeeId"   : 6,
    "personId"  : 205,
    "categoryId": 103,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-08-14T21:23:00.000Z",
    "amount"    : -46
  },
  {
    "id"        : 748,
    "payeeId"   : 24,
    "personId"  : 205,
    "categoryId": 101,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-08-11T19:07:00.000Z",
    "amount"    : -8.25
  },
  {
    "id"        : 749,
    "payeeId"   : 18,
    "personId"  : 205,
    "categoryId": 102,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-08-13T19:40:00.000Z",
    "amount"    : -45
  },
  {
    "id"        : 750,
    "payeeId"   : 19,
    "personId"  : 205,
    "categoryId": 107,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-08-30T22:37:00.000Z",
    "amount"    : -3.75
  },
  {
    "id"        : 751,
    "payeeId"   : 5,
    "personId"  : 205,
    "categoryId": 103,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-08-02T21:06:00.000Z",
    "amount"    : -18.75
  },
  {
    "id"        : 752,
    "payeeId"   : 16,
    "personId"  : 205,
    "categoryId": 104,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-08-04T00:55:00.000Z",
    "amount"    : -6.75
  },
  {
    "id"        : 753,
    "payeeId"   : 13,
    "personId"  : 205,
    "categoryId": 104,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-08-28T23:56:00.000Z",
    "amount"    : -3.75
  },
  {
    "id"        : 754,
    "payeeId"   : 26,
    "personId"  : 205,
    "categoryId": 108,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-08-10T22:59:00.000Z",
    "amount"    : -60
  },
  {
    "id"        : 755,
    "payeeId"   : 10,
    "personId"  : 205,
    "categoryId": 107,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-08-26T19:11:00.000Z",
    "amount"    : -126.5
  },
  {
    "id"        : 756,
    "payeeId"   : 7,
    "personId"  : 205,
    "categoryId": 104,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-08-12T22:25:00.000Z",
    "amount"    : -34.5
  },
  {
    "id"        : 757,
    "payeeId"   : 25,
    "personId"  : 205,
    "categoryId": 101,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-08-19T00:11:00.000Z",
    "amount"    : -6
  },
  {
    "id"        : 758,
    "payeeId"   : 15,
    "personId"  : 205,
    "categoryId": 103,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-08-14T20:20:00.000Z",
    "amount"    : -40.25
  },
  {
    "id"        : 759,
    "payeeId"   : 4,
    "personId"  : 205,
    "categoryId": 103,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-08-29T23:14:00.000Z",
    "amount"    : -57.5
  },
  {
    "id"        : 760,
    "payeeId"   : 9,
    "personId"  : 205,
    "categoryId": 107,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-08-14T16:43:00.000Z",
    "amount"    : -92
  },
  {
    "id"        : 761,
    "payeeId"   : 6,
    "personId"  : 205,
    "categoryId": 103,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-08-19T20:53:00.000Z",
    "amount"    : -6
  },
  {
    "id"        : 762,
    "payeeId"   : 24,
    "personId"  : 205,
    "categoryId": 101,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-08-14T22:41:00.000Z",
    "amount"    : -8.25
  },
  {
    "id"        : 763,
    "payeeId"   : 18,
    "personId"  : 205,
    "categoryId": 102,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-08-30T19:13:00.000Z",
    "amount"    : -45
  },
  {
    "id"        : 764,
    "payeeId"   : 19,
    "personId"  : 205,
    "categoryId": 107,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-08-05T18:39:00.000Z",
    "amount"    : -28.75
  },
  {
    "id"        : 765,
    "payeeId"   : 5,
    "personId"  : 205,
    "categoryId": 103,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-08-24T22:40:00.000Z",
    "amount"    : -18.75
  },
  {
    "id"        : 766,
    "payeeId"   : 16,
    "personId"  : 205,
    "categoryId": 104,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-08-20T21:57:00.000Z",
    "amount"    : -6.75
  },
  {
    "id"        : 767,
    "payeeId"   : 13,
    "personId"  : 205,
    "categoryId": 104,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-08-17T18:31:00.000Z",
    "amount"    : -28.75
  },
  {
    "id"        : 768,
    "payeeId"   : 26,
    "personId"  : 205,
    "categoryId": 108,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-08-24T00:02:00.000Z",
    "amount"    : -60
  },
  {
    "id"        : 769,
    "payeeId"   : 10,
    "personId"  : 205,
    "categoryId": 107,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-08-04T23:51:00.000Z",
    "amount"    : -126.5
  },
  {
    "id"        : 770,
    "payeeId"   : 7,
    "personId"  : 205,
    "categoryId": 104,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-09-01T22:59:00.000Z",
    "amount"    : -34.5
  },
  {
    "id"        : 771,
    "payeeId"   : 25,
    "personId"  : 205,
    "categoryId": 101,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-08-26T19:42:00.000Z",
    "amount"    : -46
  },
  {
    "id"        : 772,
    "payeeId"   : 15,
    "personId"  : 205,
    "categoryId": 103,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-08-29T23:53:00.000Z",
    "amount"    : -40.25
  },
  {
    "id"        : 773,
    "payeeId"   : 4,
    "personId"  : 205,
    "categoryId": 103,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-08-13T22:12:00.000Z",
    "amount"    : -57.5
  },
  {
    "id"        : 774,
    "payeeId"   : 9,
    "personId"  : 205,
    "categoryId": 107,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-08-11T19:55:00.000Z",
    "amount"    : -92
  },
  {
    "id"        : 775,
    "payeeId"   : 6,
    "personId"  : 205,
    "categoryId": 103,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-08-30T21:52:00.000Z",
    "amount"    : -46
  },
  {
    "id"        : 776,
    "payeeId"   : 24,
    "personId"  : 205,
    "categoryId": 101,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-08-30T18:37:00.000Z",
    "amount"    : -8.25
  },
  {
    "id"        : 777,
    "payeeId"   : 18,
    "personId"  : 205,
    "categoryId": 102,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-08-16T23:30:00.000Z",
    "amount"    : -45
  },
  {
    "id"        : 778,
    "payeeId"   : 19,
    "personId"  : 205,
    "categoryId": 107,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-08-23T22:53:00.000Z",
    "amount"    : -3.75
  },
  {
    "id"        : 779,
    "payeeId"   : 5,
    "personId"  : 205,
    "categoryId": 103,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-08-22T22:28:00.000Z",
    "amount"    : -143.75
  },
  {
    "id"        : 780,
    "payeeId"   : 16,
    "personId"  : 205,
    "categoryId": 104,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-08-03T16:22:00.000Z",
    "amount"    : -51.75
  },
  {
    "id"        : 781,
    "payeeId"   : 13,
    "personId"  : 205,
    "categoryId": 104,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-08-25T20:53:00.000Z",
    "amount"    : -3.75
  },
  {
    "id"        : 782,
    "payeeId"   : 26,
    "personId"  : 205,
    "categoryId": 108,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-08-23T19:58:00.000Z",
    "amount"    : -60
  },
  {
    "id"        : 783,
    "payeeId"   : 10,
    "personId"  : 205,
    "categoryId": 107,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-08-15T20:12:00.000Z",
    "amount"    : -126.5
  },
  {
    "id"        : 784,
    "payeeId"   : 7,
    "personId"  : 205,
    "categoryId": 104,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-08-07T18:30:00.000Z",
    "amount"    : -4.5
  },
  {
    "id"        : 785,
    "payeeId"   : 1,
    "personId"  : 205,
    "categoryId": 102,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-08-01T04:00:00.000Z",
    "amount"    : -1600
  },
  {
    "id"        : 786,
    "payeeId"   : 2,
    "personId"  : 205,
    "categoryId": 106,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-08-10T04:00:00.000Z",
    "amount"    : -172.5
  },
  {
    "id"        : 787,
    "payeeId"   : 3,
    "personId"  : 205,
    "categoryId": 106,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-08-20T04:00:00.000Z",
    "amount"    : -86.25
  },
  {
    "id"        : 788,
    "payeeId"   : 12,
    "personId"  : 205,
    "categoryId": 105,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-09-21T19:16:00.000Z",
    "amount"    : -115
  },
  {
    "id"        : 789,
    "payeeId"   : 14,
    "personId"  : 205,
    "categoryId": 105,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-09-28T17:15:00.000Z",
    "amount"    : -11.25
  },
  {
    "id"        : 790,
    "payeeId"   : 17,
    "personId"  : 205,
    "categoryId": 106,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-08-25T04:00:00.000Z",
    "amount"    : -9.75
  },
  {
    "id"        : 791,
    "payeeId"   : 13,
    "personId"  : 205,
    "categoryId": 104,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-09-13T20:50:00.000Z",
    "amount"    : -3.75
  },
  {
    "id"        : 792,
    "payeeId"   : 25,
    "personId"  : 205,
    "categoryId": 101,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-09-28T21:22:00.000Z",
    "amount"    : -46
  },
  {
    "id"        : 793,
    "payeeId"   : 4,
    "personId"  : 205,
    "categoryId": 103,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-09-23T17:48:00.000Z",
    "amount"    : -7.5
  },
  {
    "id"        : 794,
    "payeeId"   : 6,
    "personId"  : 205,
    "categoryId": 103,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-09-19T18:20:00.000Z",
    "amount"    : -46
  },
  {
    "id"        : 795,
    "payeeId"   : 9,
    "personId"  : 205,
    "categoryId": 107,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-09-13T00:16:00.000Z",
    "amount"    : -12
  },
  {
    "id"        : 796,
    "payeeId"   : 26,
    "personId"  : 205,
    "categoryId": 108,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-09-30T22:33:00.000Z",
    "amount"    : -60
  },
  {
    "id"        : 797,
    "payeeId"   : 15,
    "personId"  : 205,
    "categoryId": 103,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-09-25T22:56:00.000Z",
    "amount"    : -40.25
  },
  {
    "id"        : 798,
    "payeeId"   : 7,
    "personId"  : 205,
    "categoryId": 104,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-09-08T20:52:00.000Z",
    "amount"    : -4.5
  },
  {
    "id"        : 799,
    "payeeId"   : 10,
    "personId"  : 205,
    "categoryId": 107,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-09-22T22:37:00.000Z",
    "amount"    : -126.5
  },
  {
    "id"        : 800,
    "payeeId"   : 24,
    "personId"  : 205,
    "categoryId": 101,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-09-23T17:28:00.000Z",
    "amount"    : -8.25
  },
  {
    "id"        : 801,
    "payeeId"   : 19,
    "personId"  : 205,
    "categoryId": 107,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-09-04T23:00:00.000Z",
    "amount"    : -28.75
  },
  {
    "id"        : 802,
    "payeeId"   : 5,
    "personId"  : 205,
    "categoryId": 103,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-09-19T21:56:00.000Z",
    "amount"    : -143.75
  },
  {
    "id"        : 803,
    "payeeId"   : 18,
    "personId"  : 205,
    "categoryId": 102,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-09-10T21:45:00.000Z",
    "amount"    : -45
  },
  {
    "id"        : 804,
    "payeeId"   : 16,
    "personId"  : 205,
    "categoryId": 104,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-10-01T18:39:00.000Z",
    "amount"    : -6.75
  },
  {
    "id"        : 805,
    "payeeId"   : 13,
    "personId"  : 205,
    "categoryId": 104,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-09-13T20:45:00.000Z",
    "amount"    : -3.75
  },
  {
    "id"        : 806,
    "payeeId"   : 25,
    "personId"  : 205,
    "categoryId": 101,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-10-02T16:58:00.000Z",
    "amount"    : -6
  },
  {
    "id"        : 807,
    "payeeId"   : 4,
    "personId"  : 205,
    "categoryId": 103,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-09-25T22:48:00.000Z",
    "amount"    : -7.5
  },
  {
    "id"        : 808,
    "payeeId"   : 6,
    "personId"  : 205,
    "categoryId": 103,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-09-22T19:08:00.000Z",
    "amount"    : -46
  },
  {
    "id"        : 809,
    "payeeId"   : 9,
    "personId"  : 205,
    "categoryId": 107,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-09-08T19:53:00.000Z",
    "amount"    : -92
  },
  {
    "id"        : 810,
    "payeeId"   : 26,
    "personId"  : 205,
    "categoryId": 108,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-09-26T00:35:00.000Z",
    "amount"    : -60
  },
  {
    "id"        : 811,
    "payeeId"   : 15,
    "personId"  : 205,
    "categoryId": 103,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-09-30T20:58:00.000Z",
    "amount"    : -40.25
  },
  {
    "id"        : 812,
    "payeeId"   : 7,
    "personId"  : 205,
    "categoryId": 104,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-09-25T23:01:00.000Z",
    "amount"    : -34.5
  },
  {
    "id"        : 813,
    "payeeId"   : 10,
    "personId"  : 205,
    "categoryId": 107,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-09-04T20:12:00.000Z",
    "amount"    : -16.5
  },
  {
    "id"        : 814,
    "payeeId"   : 24,
    "personId"  : 205,
    "categoryId": 101,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-09-21T16:48:00.000Z",
    "amount"    : -63.25
  },
  {
    "id"        : 815,
    "payeeId"   : 19,
    "personId"  : 205,
    "categoryId": 107,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-09-16T22:19:00.000Z",
    "amount"    : -3.75
  },
  {
    "id"        : 816,
    "payeeId"   : 5,
    "personId"  : 205,
    "categoryId": 103,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-09-16T17:56:00.000Z",
    "amount"    : -143.75
  },
  {
    "id"        : 817,
    "payeeId"   : 18,
    "personId"  : 205,
    "categoryId": 102,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-09-29T23:02:00.000Z",
    "amount"    : -45
  },
  {
    "id"        : 818,
    "payeeId"   : 16,
    "personId"  : 205,
    "categoryId": 104,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-09-23T21:21:00.000Z",
    "amount"    : -51.75
  },
  {
    "id"        : 819,
    "payeeId"   : 13,
    "personId"  : 205,
    "categoryId": 104,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-09-07T23:51:00.000Z",
    "amount"    : -3.75
  },
  {
    "id"        : 820,
    "payeeId"   : 25,
    "personId"  : 205,
    "categoryId": 101,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-09-25T00:00:00.000Z",
    "amount"    : -46
  },
  {
    "id"        : 821,
    "payeeId"   : 4,
    "personId"  : 205,
    "categoryId": 103,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-09-17T19:15:00.000Z",
    "amount"    : -7.5
  },
  {
    "id"        : 822,
    "payeeId"   : 6,
    "personId"  : 205,
    "categoryId": 103,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-09-04T17:34:00.000Z",
    "amount"    : -46
  },
  {
    "id"        : 823,
    "payeeId"   : 9,
    "personId"  : 205,
    "categoryId": 107,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-09-30T16:34:00.000Z",
    "amount"    : -92
  },
  {
    "id"        : 824,
    "payeeId"   : 26,
    "personId"  : 205,
    "categoryId": 108,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-09-14T17:43:00.000Z",
    "amount"    : -60
  },
  {
    "id"        : 825,
    "payeeId"   : 15,
    "personId"  : 205,
    "categoryId": 103,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-09-06T19:55:00.000Z",
    "amount"    : -40.25
  },
  {
    "id"        : 826,
    "payeeId"   : 7,
    "personId"  : 205,
    "categoryId": 104,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-09-13T21:11:00.000Z",
    "amount"    : -34.5
  },
  {
    "id"        : 827,
    "payeeId"   : 10,
    "personId"  : 205,
    "categoryId": 107,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-09-13T20:59:00.000Z",
    "amount"    : -126.5
  },
  {
    "id"        : 828,
    "payeeId"   : 24,
    "personId"  : 205,
    "categoryId": 101,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-09-06T17:56:00.000Z",
    "amount"    : -8.25
  },
  {
    "id"        : 829,
    "payeeId"   : 19,
    "personId"  : 205,
    "categoryId": 107,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-09-23T20:36:00.000Z",
    "amount"    : -3.75
  },
  {
    "id"        : 830,
    "payeeId"   : 5,
    "personId"  : 205,
    "categoryId": 103,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-09-17T00:29:00.000Z",
    "amount"    : -143.75
  },
  {
    "id"        : 831,
    "payeeId"   : 18,
    "personId"  : 205,
    "categoryId": 102,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-10-01T00:41:00.000Z",
    "amount"    : -45
  },
  {
    "id"        : 832,
    "payeeId"   : 16,
    "personId"  : 205,
    "categoryId": 104,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-09-06T19:26:00.000Z",
    "amount"    : -51.75
  },
  {
    "id"        : 833,
    "payeeId"   : 13,
    "personId"  : 205,
    "categoryId": 104,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-09-26T17:36:00.000Z",
    "amount"    : -28.75
  },
  {
    "id"        : 834,
    "payeeId"   : 25,
    "personId"  : 205,
    "categoryId": 101,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-09-04T19:22:00.000Z",
    "amount"    : -46
  },
  {
    "id"        : 835,
    "payeeId"   : 22,
    "personId"  : 205,
    "categoryId": 1,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-06-01T04:00:00.000Z",
    "amount"    : 3000
  },
  {
    "id"        : 836,
    "payeeId"   : 22,
    "personId"  : 205,
    "categoryId": 1,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-06-15T04:00:00.000Z",
    "amount"    : 3000
  },
  {
    "id"        : 837,
    "payeeId"   : 20,
    "personId"  : 205,
    "categoryId": 3,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-07-22T23:46:00.000Z",
    "amount"    : 172.5
  },
  {
    "id"        : 838,
    "payeeId"   : 21,
    "personId"  : 205,
    "categoryId": 2,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-07-15T19:13:00.000Z",
    "amount"    : 11.25
  },
  {
    "id"        : 839,
    "payeeId"   : 22,
    "personId"  : 205,
    "categoryId": 1,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-07-01T04:00:00.000Z",
    "amount"    : 3000
  },
  {
    "id"        : 840,
    "payeeId"   : 22,
    "personId"  : 205,
    "categoryId": 1,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-07-15T04:00:00.000Z",
    "amount"    : 3000
  },
  {
    "id"        : 841,
    "payeeId"   : 11,
    "personId"  : 205,
    "categoryId": 2,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-08-24T20:12:00.000Z",
    "amount"    : 7.5
  },
  {
    "id"        : 842,
    "payeeId"   : 21,
    "personId"  : 205,
    "categoryId": 2,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-08-08T18:15:00.000Z",
    "amount"    : 86.25
  },
  {
    "id"        : 843,
    "payeeId"   : 22,
    "personId"  : 205,
    "categoryId": 1,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-08-01T04:00:00.000Z",
    "amount"    : 3000
  },
  {
    "id"        : 844,
    "payeeId"   : 22,
    "personId"  : 205,
    "categoryId": 1,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-08-15T04:00:00.000Z",
    "amount"    : 3000
  },
  {
    "id"        : 845,
    "payeeId"   : 21,
    "personId"  : 205,
    "categoryId": 2,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-09-20T22:40:00.000Z",
    "amount"    : 11.25
  },
  {
    "id"        : 846,
    "payeeId"   : 11,
    "personId"  : 205,
    "categoryId": 2,
    "accountId" : 8,
    "txType"    : "2",
    "txDate"    : "2016-09-25T17:30:00.000Z",
    "amount"    : 57.5
  },
  {
    "id"        : 847,
    "payeeId"   : 20,
    "personId"  : 205,
    "categoryId": 3,
    "accountId" : 9,
    "txType"    : "2",
    "txDate"    : "2016-07-12T21:47:00.000Z",
    "amount"    : 172.5
  },
  {
    "id"        : 848,
    "payeeId"   : 21,
    "personId"  : 205,
    "categoryId": 2,
    "accountId" : 9,
    "txType"    : "2",
    "txDate"    : "2016-07-20T19:22:00.000Z",
    "amount"    : 86.25
  },
  {
    "id"        : 849,
    "payeeId"   : 8,
    "personId"  : 205,
    "categoryId": 3,
    "accountId" : 9,
    "txType"    : "2",
    "txDate"    : "2016-07-09T21:57:00.000Z",
    "amount"    : 115
  },
  {
    "id"        : 850,
    "payeeId"   : 11,
    "personId"  : 205,
    "categoryId": 2,
    "accountId" : 9,
    "txType"    : "2",
    "txDate"    : "2016-07-24T22:00:00.000Z",
    "amount"    : 7.5
  },
  {
    "id"        : 851,
    "payeeId"   : 20,
    "personId"  : 205,
    "categoryId": 3,
    "accountId" : 9,
    "txType"    : "2",
    "txDate"    : "2016-08-19T00:15:00.000Z",
    "amount"    : 172.5
  },
  {
    "id"        : 852,
    "payeeId"   : 8,
    "personId"  : 205,
    "categoryId": 3,
    "accountId" : 9,
    "txType"    : "2",
    "txDate"    : "2016-08-06T22:57:00.000Z",
    "amount"    : 115
  },
  {
    "id"        : 853,
    "payeeId"   : 11,
    "personId"  : 205,
    "categoryId": 2,
    "accountId" : 9,
    "txType"    : "2",
    "txDate"    : "2016-08-18T19:19:00.000Z",
    "amount"    : 7.5
  },
  {
    "id"        : 854,
    "payeeId"   : 21,
    "personId"  : 205,
    "categoryId": 2,
    "accountId" : 9,
    "txType"    : "2",
    "txDate"    : "2016-08-24T16:05:00.000Z",
    "amount"    : 11.25
  },
  {
    "id"        : 855,
    "payeeId"   : 21,
    "personId"  : 205,
    "categoryId": 2,
    "accountId" : 9,
    "txType"    : "2",
    "txDate"    : "2016-09-11T16:36:00.000Z",
    "amount"    : 11.25
  },
  {
    "id"        : 856,
    "payeeId"   : 20,
    "personId"  : 205,
    "categoryId": 3,
    "accountId" : 9,
    "txType"    : "2",
    "txDate"    : "2016-09-07T22:12:00.000Z",
    "amount"    : 22.5
  },
  {
    "id"        : 857,
    "payeeId"   : 11,
    "personId"  : 205,
    "categoryId": 2,
    "accountId" : 9,
    "txType"    : "2",
    "txDate"    : "2016-09-26T21:30:00.000Z",
    "amount"    : 57.5
  },
  {
    "id"        : 858,
    "payeeId"   : 8,
    "personId"  : 205,
    "categoryId": 3,
    "accountId" : 9,
    "txType"    : "2",
    "txDate"    : "2016-09-14T20:46:00.000Z",
    "amount"    : 115
  },
  {
    "id"        : 859,
    "payeeId"   : 1,
    "personId"  : 206,
    "categoryId": 102,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-06-01T04:00:00.000Z",
    "amount"    : -1600
  },
  {
    "id"        : 860,
    "payeeId"   : 2,
    "personId"  : 206,
    "categoryId": 106,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-06-10T04:00:00.000Z",
    "amount"    : -172.5
  },
  {
    "id"        : 861,
    "payeeId"   : 3,
    "personId"  : 206,
    "categoryId": 106,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-06-20T04:00:00.000Z",
    "amount"    : -86.25
  },
  {
    "id"        : 862,
    "payeeId"   : 12,
    "personId"  : 206,
    "categoryId": 105,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-07-15T16:47:00.000Z",
    "amount"    : -15
  },
  {
    "id"        : 863,
    "payeeId"   : 14,
    "personId"  : 206,
    "categoryId": 105,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-07-25T17:27:00.000Z",
    "amount"    : -86.25
  },
  {
    "id"        : 864,
    "payeeId"   : 17,
    "personId"  : 206,
    "categoryId": 106,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-06-25T04:00:00.000Z",
    "amount"    : -74.75
  },
  {
    "id"        : 865,
    "payeeId"   : 15,
    "personId"  : 206,
    "categoryId": 103,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-07-29T21:24:00.000Z",
    "amount"    : -5.25
  },
  {
    "id"        : 866,
    "payeeId"   : 7,
    "personId"  : 206,
    "categoryId": 104,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-07-19T16:54:00.000Z",
    "amount"    : -4.5
  },
  {
    "id"        : 867,
    "payeeId"   : 9,
    "personId"  : 206,
    "categoryId": 107,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-07-02T23:58:00.000Z",
    "amount"    : -12
  },
  {
    "id"        : 868,
    "payeeId"   : 26,
    "personId"  : 206,
    "categoryId": 108,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-07-27T16:27:00.000Z",
    "amount"    : -60
  },
  {
    "id"        : 869,
    "payeeId"   : 5,
    "personId"  : 206,
    "categoryId": 103,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-07-15T21:42:00.000Z",
    "amount"    : -143.75
  },
  {
    "id"        : 870,
    "payeeId"   : 10,
    "personId"  : 206,
    "categoryId": 107,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-07-07T00:40:00.000Z",
    "amount"    : -126.5
  },
  {
    "id"        : 871,
    "payeeId"   : 24,
    "personId"  : 206,
    "categoryId": 101,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-07-21T18:51:00.000Z",
    "amount"    : -63.25
  },
  {
    "id"        : 872,
    "payeeId"   : 16,
    "personId"  : 206,
    "categoryId": 104,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-07-31T15:59:00.000Z",
    "amount"    : -6.75
  },
  {
    "id"        : 873,
    "payeeId"   : 18,
    "personId"  : 206,
    "categoryId": 102,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-07-08T19:50:00.000Z",
    "amount"    : -45
  },
  {
    "id"        : 874,
    "payeeId"   : 6,
    "personId"  : 206,
    "categoryId": 103,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-07-30T21:33:00.000Z",
    "amount"    : -46
  },
  {
    "id"        : 875,
    "payeeId"   : 25,
    "personId"  : 206,
    "categoryId": 101,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-07-29T17:13:00.000Z",
    "amount"    : -46
  },
  {
    "id"        : 876,
    "payeeId"   : 13,
    "personId"  : 206,
    "categoryId": 104,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-07-21T00:04:00.000Z",
    "amount"    : -28.75
  },
  {
    "id"        : 877,
    "payeeId"   : 4,
    "personId"  : 206,
    "categoryId": 103,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-07-22T21:06:00.000Z",
    "amount"    : -7.5
  },
  {
    "id"        : 878,
    "payeeId"   : 19,
    "personId"  : 206,
    "categoryId": 107,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-07-27T23:28:00.000Z",
    "amount"    : -3.75
  },
  {
    "id"        : 879,
    "payeeId"   : 15,
    "personId"  : 206,
    "categoryId": 103,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-07-12T00:10:00.000Z",
    "amount"    : -5.25
  },
  {
    "id"        : 880,
    "payeeId"   : 7,
    "personId"  : 206,
    "categoryId": 104,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-07-16T23:19:00.000Z",
    "amount"    : -34.5
  },
  {
    "id"        : 881,
    "payeeId"   : 9,
    "personId"  : 206,
    "categoryId": 107,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-07-22T00:31:00.000Z",
    "amount"    : -92
  },
  {
    "id"        : 882,
    "payeeId"   : 26,
    "personId"  : 206,
    "categoryId": 108,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-07-13T17:38:00.000Z",
    "amount"    : -60
  },
  {
    "id"        : 883,
    "payeeId"   : 5,
    "personId"  : 206,
    "categoryId": 103,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-07-12T23:17:00.000Z",
    "amount"    : -18.75
  },
  {
    "id"        : 884,
    "payeeId"   : 10,
    "personId"  : 206,
    "categoryId": 107,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-07-06T16:48:00.000Z",
    "amount"    : -16.5
  },
  {
    "id"        : 885,
    "payeeId"   : 24,
    "personId"  : 206,
    "categoryId": 101,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-07-26T19:00:00.000Z",
    "amount"    : -63.25
  },
  {
    "id"        : 886,
    "payeeId"   : 16,
    "personId"  : 206,
    "categoryId": 104,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-07-25T23:47:00.000Z",
    "amount"    : -6.75
  },
  {
    "id"        : 887,
    "payeeId"   : 18,
    "personId"  : 206,
    "categoryId": 102,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-07-03T18:37:00.000Z",
    "amount"    : -45
  },
  {
    "id"        : 888,
    "payeeId"   : 6,
    "personId"  : 206,
    "categoryId": 103,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-07-19T21:34:00.000Z",
    "amount"    : -6
  },
  {
    "id"        : 889,
    "payeeId"   : 25,
    "personId"  : 206,
    "categoryId": 101,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-07-05T21:20:00.000Z",
    "amount"    : -6
  },
  {
    "id"        : 890,
    "payeeId"   : 13,
    "personId"  : 206,
    "categoryId": 104,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-07-24T20:56:00.000Z",
    "amount"    : -28.75
  },
  {
    "id"        : 891,
    "payeeId"   : 4,
    "personId"  : 206,
    "categoryId": 103,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-07-17T20:04:00.000Z",
    "amount"    : -7.5
  },
  {
    "id"        : 892,
    "payeeId"   : 19,
    "personId"  : 206,
    "categoryId": 107,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-07-12T20:42:00.000Z",
    "amount"    : -3.75
  },
  {
    "id"        : 893,
    "payeeId"   : 15,
    "personId"  : 206,
    "categoryId": 103,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-07-26T00:50:00.000Z",
    "amount"    : -40.25
  },
  {
    "id"        : 894,
    "payeeId"   : 7,
    "personId"  : 206,
    "categoryId": 104,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-07-11T16:56:00.000Z",
    "amount"    : -4.5
  },
  {
    "id"        : 895,
    "payeeId"   : 9,
    "personId"  : 206,
    "categoryId": 107,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-07-10T18:09:00.000Z",
    "amount"    : -92
  },
  {
    "id"        : 896,
    "payeeId"   : 26,
    "personId"  : 206,
    "categoryId": 108,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-07-19T19:38:00.000Z",
    "amount"    : -60
  },
  {
    "id"        : 897,
    "payeeId"   : 5,
    "personId"  : 206,
    "categoryId": 103,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-07-27T19:56:00.000Z",
    "amount"    : -143.75
  },
  {
    "id"        : 898,
    "payeeId"   : 10,
    "personId"  : 206,
    "categoryId": 107,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-07-03T17:50:00.000Z",
    "amount"    : -126.5
  },
  {
    "id"        : 899,
    "payeeId"   : 24,
    "personId"  : 206,
    "categoryId": 101,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-07-07T21:11:00.000Z",
    "amount"    : -8.25
  },
  {
    "id"        : 900,
    "payeeId"   : 16,
    "personId"  : 206,
    "categoryId": 104,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-07-22T18:42:00.000Z",
    "amount"    : -51.75
  },
  {
    "id"        : 901,
    "payeeId"   : 18,
    "personId"  : 206,
    "categoryId": 102,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-07-15T00:14:00.000Z",
    "amount"    : -45
  },
  {
    "id"        : 902,
    "payeeId"   : 6,
    "personId"  : 206,
    "categoryId": 103,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-07-17T17:52:00.000Z",
    "amount"    : -6
  },
  {
    "id"        : 903,
    "payeeId"   : 25,
    "personId"  : 206,
    "categoryId": 101,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-07-11T20:29:00.000Z",
    "amount"    : -6
  },
  {
    "id"        : 904,
    "payeeId"   : 13,
    "personId"  : 206,
    "categoryId": 104,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-07-02T18:33:00.000Z",
    "amount"    : -28.75
  },
  {
    "id"        : 905,
    "payeeId"   : 4,
    "personId"  : 206,
    "categoryId": 103,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-07-21T18:13:00.000Z",
    "amount"    : -57.5
  },
  {
    "id"        : 906,
    "payeeId"   : 19,
    "personId"  : 206,
    "categoryId": 107,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-07-10T22:58:00.000Z",
    "amount"    : -3.75
  },
  {
    "id"        : 907,
    "payeeId"   : 15,
    "personId"  : 206,
    "categoryId": 103,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-07-19T20:59:00.000Z",
    "amount"    : -5.25
  },
  {
    "id"        : 908,
    "payeeId"   : 7,
    "personId"  : 206,
    "categoryId": 104,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-07-05T21:39:00.000Z",
    "amount"    : -4.5
  },
  {
    "id"        : 909,
    "payeeId"   : 1,
    "personId"  : 206,
    "categoryId": 102,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-07-01T04:00:00.000Z",
    "amount"    : -1600
  },
  {
    "id"        : 910,
    "payeeId"   : 2,
    "personId"  : 206,
    "categoryId": 106,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-07-10T04:00:00.000Z",
    "amount"    : -172.5
  },
  {
    "id"        : 911,
    "payeeId"   : 3,
    "personId"  : 206,
    "categoryId": 106,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-07-20T04:00:00.000Z",
    "amount"    : -86.25
  },
  {
    "id"        : 912,
    "payeeId"   : 12,
    "personId"  : 206,
    "categoryId": 105,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-08-20T19:51:00.000Z",
    "amount"    : -15
  },
  {
    "id"        : 913,
    "payeeId"   : 14,
    "personId"  : 206,
    "categoryId": 105,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-08-06T22:46:00.000Z",
    "amount"    : -11.25
  },
  {
    "id"        : 914,
    "payeeId"   : 17,
    "personId"  : 206,
    "categoryId": 106,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-07-25T04:00:00.000Z",
    "amount"    : -74.75
  },
  {
    "id"        : 915,
    "payeeId"   : 6,
    "personId"  : 206,
    "categoryId": 103,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-08-29T18:39:00.000Z",
    "amount"    : -6
  },
  {
    "id"        : 916,
    "payeeId"   : 7,
    "personId"  : 206,
    "categoryId": 104,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-08-10T21:10:00.000Z",
    "amount"    : -4.5
  },
  {
    "id"        : 917,
    "payeeId"   : 10,
    "personId"  : 206,
    "categoryId": 107,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-08-08T17:04:00.000Z",
    "amount"    : -16.5
  },
  {
    "id"        : 918,
    "payeeId"   : 9,
    "personId"  : 206,
    "categoryId": 107,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-08-05T20:44:00.000Z",
    "amount"    : -92
  },
  {
    "id"        : 919,
    "payeeId"   : 25,
    "personId"  : 206,
    "categoryId": 101,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-08-17T21:33:00.000Z",
    "amount"    : -6
  },
  {
    "id"        : 920,
    "payeeId"   : 19,
    "personId"  : 206,
    "categoryId": 107,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-08-05T23:15:00.000Z",
    "amount"    : -3.75
  },
  {
    "id"        : 921,
    "payeeId"   : 5,
    "personId"  : 206,
    "categoryId": 103,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-09-01T18:38:00.000Z",
    "amount"    : -18.75
  },
  {
    "id"        : 922,
    "payeeId"   : 13,
    "personId"  : 206,
    "categoryId": 104,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-08-04T19:46:00.000Z",
    "amount"    : -3.75
  },
  {
    "id"        : 923,
    "payeeId"   : 15,
    "personId"  : 206,
    "categoryId": 103,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-08-19T23:41:00.000Z",
    "amount"    : -5.25
  },
  {
    "id"        : 924,
    "payeeId"   : 24,
    "personId"  : 206,
    "categoryId": 101,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-08-10T17:08:00.000Z",
    "amount"    : -63.25
  },
  {
    "id"        : 925,
    "payeeId"   : 16,
    "personId"  : 206,
    "categoryId": 104,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-08-25T00:41:00.000Z",
    "amount"    : -6.75
  },
  {
    "id"        : 926,
    "payeeId"   : 18,
    "personId"  : 206,
    "categoryId": 102,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-08-14T16:52:00.000Z",
    "amount"    : -45
  },
  {
    "id"        : 927,
    "payeeId"   : 26,
    "personId"  : 206,
    "categoryId": 108,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-08-23T22:41:00.000Z",
    "amount"    : -60
  },
  {
    "id"        : 928,
    "payeeId"   : 4,
    "personId"  : 206,
    "categoryId": 103,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-08-06T19:42:00.000Z",
    "amount"    : -7.5
  },
  {
    "id"        : 929,
    "payeeId"   : 6,
    "personId"  : 206,
    "categoryId": 103,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-08-11T23:21:00.000Z",
    "amount"    : -6
  },
  {
    "id"        : 930,
    "payeeId"   : 7,
    "personId"  : 206,
    "categoryId": 104,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-08-23T21:01:00.000Z",
    "amount"    : -4.5
  },
  {
    "id"        : 931,
    "payeeId"   : 10,
    "personId"  : 206,
    "categoryId": 107,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-08-28T00:32:00.000Z",
    "amount"    : -126.5
  },
  {
    "id"        : 932,
    "payeeId"   : 9,
    "personId"  : 206,
    "categoryId": 107,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-08-27T17:37:00.000Z",
    "amount"    : -92
  },
  {
    "id"        : 933,
    "payeeId"   : 25,
    "personId"  : 206,
    "categoryId": 101,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-08-21T20:22:00.000Z",
    "amount"    : -6
  },
  {
    "id"        : 934,
    "payeeId"   : 19,
    "personId"  : 206,
    "categoryId": 107,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-08-05T18:55:00.000Z",
    "amount"    : -3.75
  },
  {
    "id"        : 935,
    "payeeId"   : 5,
    "personId"  : 206,
    "categoryId": 103,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-08-13T19:44:00.000Z",
    "amount"    : -18.75
  },
  {
    "id"        : 936,
    "payeeId"   : 13,
    "personId"  : 206,
    "categoryId": 104,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-08-24T21:04:00.000Z",
    "amount"    : -3.75
  },
  {
    "id"        : 937,
    "payeeId"   : 15,
    "personId"  : 206,
    "categoryId": 103,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-08-04T22:04:00.000Z",
    "amount"    : -40.25
  },
  {
    "id"        : 938,
    "payeeId"   : 24,
    "personId"  : 206,
    "categoryId": 101,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-08-12T17:52:00.000Z",
    "amount"    : -63.25
  },
  {
    "id"        : 939,
    "payeeId"   : 16,
    "personId"  : 206,
    "categoryId": 104,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-08-25T21:09:00.000Z",
    "amount"    : -6.75
  },
  {
    "id"        : 940,
    "payeeId"   : 18,
    "personId"  : 206,
    "categoryId": 102,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-08-17T19:32:00.000Z",
    "amount"    : -45
  },
  {
    "id"        : 941,
    "payeeId"   : 26,
    "personId"  : 206,
    "categoryId": 108,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-08-16T23:13:00.000Z",
    "amount"    : -60
  },
  {
    "id"        : 942,
    "payeeId"   : 4,
    "personId"  : 206,
    "categoryId": 103,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-09-02T00:09:00.000Z",
    "amount"    : -7.5
  },
  {
    "id"        : 943,
    "payeeId"   : 6,
    "personId"  : 206,
    "categoryId": 103,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-08-30T23:27:00.000Z",
    "amount"    : -46
  },
  {
    "id"        : 944,
    "payeeId"   : 7,
    "personId"  : 206,
    "categoryId": 104,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-08-27T22:36:00.000Z",
    "amount"    : -34.5
  },
  {
    "id"        : 945,
    "payeeId"   : 10,
    "personId"  : 206,
    "categoryId": 107,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-08-30T16:06:00.000Z",
    "amount"    : -16.5
  },
  {
    "id"        : 946,
    "payeeId"   : 9,
    "personId"  : 206,
    "categoryId": 107,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-08-29T22:28:00.000Z",
    "amount"    : -12
  },
  {
    "id"        : 947,
    "payeeId"   : 25,
    "personId"  : 206,
    "categoryId": 101,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-08-30T19:50:00.000Z",
    "amount"    : -46
  },
  {
    "id"        : 948,
    "payeeId"   : 19,
    "personId"  : 206,
    "categoryId": 107,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-08-07T17:45:00.000Z",
    "amount"    : -3.75
  },
  {
    "id"        : 949,
    "payeeId"   : 5,
    "personId"  : 206,
    "categoryId": 103,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-09-01T23:25:00.000Z",
    "amount"    : -18.75
  },
  {
    "id"        : 950,
    "payeeId"   : 13,
    "personId"  : 206,
    "categoryId": 104,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-08-02T23:07:00.000Z",
    "amount"    : -3.75
  },
  {
    "id"        : 951,
    "payeeId"   : 15,
    "personId"  : 206,
    "categoryId": 103,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-08-22T19:52:00.000Z",
    "amount"    : -5.25
  },
  {
    "id"        : 952,
    "payeeId"   : 24,
    "personId"  : 206,
    "categoryId": 101,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-08-18T19:46:00.000Z",
    "amount"    : -8.25
  },
  {
    "id"        : 953,
    "payeeId"   : 16,
    "personId"  : 206,
    "categoryId": 104,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-08-26T19:29:00.000Z",
    "amount"    : -6.75
  },
  {
    "id"        : 954,
    "payeeId"   : 18,
    "personId"  : 206,
    "categoryId": 102,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-08-24T19:54:00.000Z",
    "amount"    : -45
  },
  {
    "id"        : 955,
    "payeeId"   : 26,
    "personId"  : 206,
    "categoryId": 108,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-08-23T16:41:00.000Z",
    "amount"    : -60
  },
  {
    "id"        : 956,
    "payeeId"   : 4,
    "personId"  : 206,
    "categoryId": 103,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-08-13T23:51:00.000Z",
    "amount"    : -57.5
  },
  {
    "id"        : 957,
    "payeeId"   : 6,
    "personId"  : 206,
    "categoryId": 103,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-08-20T17:14:00.000Z",
    "amount"    : -46
  },
  {
    "id"        : 958,
    "payeeId"   : 7,
    "personId"  : 206,
    "categoryId": 104,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-08-15T21:30:00.000Z",
    "amount"    : -4.5
  },
  {
    "id"        : 959,
    "payeeId"   : 1,
    "personId"  : 206,
    "categoryId": 102,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-08-01T04:00:00.000Z",
    "amount"    : -1600
  },
  {
    "id"        : 960,
    "payeeId"   : 2,
    "personId"  : 206,
    "categoryId": 106,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-08-10T04:00:00.000Z",
    "amount"    : -22.5
  },
  {
    "id"        : 961,
    "payeeId"   : 3,
    "personId"  : 206,
    "categoryId": 106,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-08-20T04:00:00.000Z",
    "amount"    : -86.25
  },
  {
    "id"        : 962,
    "payeeId"   : 12,
    "personId"  : 206,
    "categoryId": 105,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-10-01T21:11:00.000Z",
    "amount"    : -15
  },
  {
    "id"        : 963,
    "payeeId"   : 14,
    "personId"  : 206,
    "categoryId": 105,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-09-28T17:25:00.000Z",
    "amount"    : -86.25
  },
  {
    "id"        : 964,
    "payeeId"   : 17,
    "personId"  : 206,
    "categoryId": 106,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-08-25T04:00:00.000Z",
    "amount"    : -74.75
  },
  {
    "id"        : 965,
    "payeeId"   : 7,
    "personId"  : 206,
    "categoryId": 104,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-09-20T17:25:00.000Z",
    "amount"    : -4.5
  },
  {
    "id"        : 966,
    "payeeId"   : 19,
    "personId"  : 206,
    "categoryId": 107,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-09-24T00:27:00.000Z",
    "amount"    : -28.75
  },
  {
    "id"        : 967,
    "payeeId"   : 24,
    "personId"  : 206,
    "categoryId": 101,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-09-25T19:24:00.000Z",
    "amount"    : -8.25
  },
  {
    "id"        : 968,
    "payeeId"   : 4,
    "personId"  : 206,
    "categoryId": 103,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-09-20T16:40:00.000Z",
    "amount"    : -7.5
  },
  {
    "id"        : 969,
    "payeeId"   : 16,
    "personId"  : 206,
    "categoryId": 104,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-09-12T20:38:00.000Z",
    "amount"    : -6.75
  },
  {
    "id"        : 970,
    "payeeId"   : 25,
    "personId"  : 206,
    "categoryId": 101,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-09-15T20:47:00.000Z",
    "amount"    : -46
  },
  {
    "id"        : 971,
    "payeeId"   : 6,
    "personId"  : 206,
    "categoryId": 103,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-09-03T22:36:00.000Z",
    "amount"    : -46
  },
  {
    "id"        : 972,
    "payeeId"   : 18,
    "personId"  : 206,
    "categoryId": 102,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-09-10T21:32:00.000Z",
    "amount"    : -45
  },
  {
    "id"        : 973,
    "payeeId"   : 15,
    "personId"  : 206,
    "categoryId": 103,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-09-29T23:12:00.000Z",
    "amount"    : -5.25
  },
  {
    "id"        : 974,
    "payeeId"   : 5,
    "personId"  : 206,
    "categoryId": 103,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-09-20T00:27:00.000Z",
    "amount"    : -143.75
  },
  {
    "id"        : 975,
    "payeeId"   : 10,
    "personId"  : 206,
    "categoryId": 107,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-09-15T22:01:00.000Z",
    "amount"    : -126.5
  },
  {
    "id"        : 976,
    "payeeId"   : 13,
    "personId"  : 206,
    "categoryId": 104,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-09-17T21:04:00.000Z",
    "amount"    : -3.75
  },
  {
    "id"        : 977,
    "payeeId"   : 26,
    "personId"  : 206,
    "categoryId": 108,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-09-22T23:59:00.000Z",
    "amount"    : -60
  },
  {
    "id"        : 978,
    "payeeId"   : 9,
    "personId"  : 206,
    "categoryId": 107,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-09-02T22:49:00.000Z",
    "amount"    : -12
  },
  {
    "id"        : 979,
    "payeeId"   : 7,
    "personId"  : 206,
    "categoryId": 104,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-09-17T00:22:00.000Z",
    "amount"    : -34.5
  },
  {
    "id"        : 980,
    "payeeId"   : 19,
    "personId"  : 206,
    "categoryId": 107,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-09-20T23:08:00.000Z",
    "amount"    : -28.75
  },
  {
    "id"        : 981,
    "payeeId"   : 24,
    "personId"  : 206,
    "categoryId": 101,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-09-23T17:57:00.000Z",
    "amount"    : -63.25
  },
  {
    "id"        : 982,
    "payeeId"   : 4,
    "personId"  : 206,
    "categoryId": 103,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-09-25T17:24:00.000Z",
    "amount"    : -57.5
  },
  {
    "id"        : 983,
    "payeeId"   : 16,
    "personId"  : 206,
    "categoryId": 104,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-09-20T18:59:00.000Z",
    "amount"    : -6.75
  },
  {
    "id"        : 984,
    "payeeId"   : 25,
    "personId"  : 206,
    "categoryId": 101,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-09-15T17:34:00.000Z",
    "amount"    : -6
  },
  {
    "id"        : 985,
    "payeeId"   : 6,
    "personId"  : 206,
    "categoryId": 103,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-09-27T21:07:00.000Z",
    "amount"    : -6
  },
  {
    "id"        : 986,
    "payeeId"   : 18,
    "personId"  : 206,
    "categoryId": 102,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-10-01T16:48:00.000Z",
    "amount"    : -45
  },
  {
    "id"        : 987,
    "payeeId"   : 15,
    "personId"  : 206,
    "categoryId": 103,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-09-28T20:41:00.000Z",
    "amount"    : -40.25
  },
  {
    "id"        : 988,
    "payeeId"   : 5,
    "personId"  : 206,
    "categoryId": 103,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-09-22T23:24:00.000Z",
    "amount"    : -143.75
  },
  {
    "id"        : 989,
    "payeeId"   : 10,
    "personId"  : 206,
    "categoryId": 107,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-09-27T19:02:00.000Z",
    "amount"    : -16.5
  },
  {
    "id"        : 990,
    "payeeId"   : 13,
    "personId"  : 206,
    "categoryId": 104,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-09-07T21:06:00.000Z",
    "amount"    : -3.75
  },
  {
    "id"        : 991,
    "payeeId"   : 26,
    "personId"  : 206,
    "categoryId": 108,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-09-08T16:17:00.000Z",
    "amount"    : -60
  },
  {
    "id"        : 992,
    "payeeId"   : 9,
    "personId"  : 206,
    "categoryId": 107,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-10-02T17:14:00.000Z",
    "amount"    : -12
  },
  {
    "id"        : 993,
    "payeeId"   : 7,
    "personId"  : 206,
    "categoryId": 104,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-09-03T19:23:00.000Z",
    "amount"    : -4.5
  },
  {
    "id"        : 994,
    "payeeId"   : 19,
    "personId"  : 206,
    "categoryId": 107,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-09-29T23:01:00.000Z",
    "amount"    : -3.75
  },
  {
    "id"        : 995,
    "payeeId"   : 24,
    "personId"  : 206,
    "categoryId": 101,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-09-15T16:14:00.000Z",
    "amount"    : -8.25
  },
  {
    "id"        : 996,
    "payeeId"   : 4,
    "personId"  : 206,
    "categoryId": 103,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-09-21T17:37:00.000Z",
    "amount"    : -57.5
  },
  {
    "id"        : 997,
    "payeeId"   : 16,
    "personId"  : 206,
    "categoryId": 104,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-09-12T20:16:00.000Z",
    "amount"    : -51.75
  },
  {
    "id"        : 998,
    "payeeId"   : 25,
    "personId"  : 206,
    "categoryId": 101,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-09-07T16:47:00.000Z",
    "amount"    : -46
  },
  {
    "id"        : 999,
    "payeeId"   : 6,
    "personId"  : 206,
    "categoryId": 103,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-09-14T21:54:00.000Z",
    "amount"    : -6
  },
  {
    "id"        : 1000,
    "payeeId"   : 18,
    "personId"  : 206,
    "categoryId": 102,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-09-05T22:27:00.000Z",
    "amount"    : -45
  },
  {
    "id"        : 1001,
    "payeeId"   : 15,
    "personId"  : 206,
    "categoryId": 103,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-09-07T21:01:00.000Z",
    "amount"    : -5.25
  },
  {
    "id"        : 1002,
    "payeeId"   : 5,
    "personId"  : 206,
    "categoryId": 103,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-09-27T16:25:00.000Z",
    "amount"    : -18.75
  },
  {
    "id"        : 1003,
    "payeeId"   : 10,
    "personId"  : 206,
    "categoryId": 107,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-09-27T23:16:00.000Z",
    "amount"    : -126.5
  },
  {
    "id"        : 1004,
    "payeeId"   : 13,
    "personId"  : 206,
    "categoryId": 104,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-09-19T23:16:00.000Z",
    "amount"    : -3.75
  },
  {
    "id"        : 1005,
    "payeeId"   : 26,
    "personId"  : 206,
    "categoryId": 108,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-09-03T21:24:00.000Z",
    "amount"    : -60
  },
  {
    "id"        : 1006,
    "payeeId"   : 9,
    "personId"  : 206,
    "categoryId": 107,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-09-26T19:04:00.000Z",
    "amount"    : -92
  },
  {
    "id"        : 1007,
    "payeeId"   : 7,
    "personId"  : 206,
    "categoryId": 104,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-09-24T16:11:00.000Z",
    "amount"    : -4.5
  },
  {
    "id"        : 1008,
    "payeeId"   : 19,
    "personId"  : 206,
    "categoryId": 107,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-09-07T22:11:00.000Z",
    "amount"    : -28.75
  },
  {
    "id"        : 1009,
    "payeeId"   : 23,
    "personId"  : 206,
    "categoryId": 1,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-06-01T04:00:00.000Z",
    "amount"    : 3000
  },
  {
    "id"        : 1010,
    "payeeId"   : 23,
    "personId"  : 206,
    "categoryId": 1,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-06-15T04:00:00.000Z",
    "amount"    : 3000
  },
  {
    "id"        : 1011,
    "payeeId"   : 11,
    "personId"  : 206,
    "categoryId": 2,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-07-09T21:14:00.000Z",
    "amount"    : 7.5
  },
  {
    "id"        : 1012,
    "payeeId"   : 20,
    "personId"  : 206,
    "categoryId": 3,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-07-03T17:06:00.000Z",
    "amount"    : 172.5
  },
  {
    "id"        : 1013,
    "payeeId"   : 23,
    "personId"  : 206,
    "categoryId": 1,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-07-01T04:00:00.000Z",
    "amount"    : 3000
  },
  {
    "id"        : 1014,
    "payeeId"   : 23,
    "personId"  : 206,
    "categoryId": 1,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-07-15T04:00:00.000Z",
    "amount"    : 3000
  },
  {
    "id"        : 1015,
    "payeeId"   : 20,
    "personId"  : 206,
    "categoryId": 3,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-08-06T16:05:00.000Z",
    "amount"    : 172.5
  },
  {
    "id"        : 1016,
    "payeeId"   : 21,
    "personId"  : 206,
    "categoryId": 2,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-08-29T00:09:00.000Z",
    "amount"    : 86.25
  },
  {
    "id"        : 1017,
    "payeeId"   : 23,
    "personId"  : 206,
    "categoryId": 1,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-08-01T04:00:00.000Z",
    "amount"    : 3000
  },
  {
    "id"        : 1018,
    "payeeId"   : 23,
    "personId"  : 206,
    "categoryId": 1,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-08-15T04:00:00.000Z",
    "amount"    : 3000
  },
  {
    "id"        : 1019,
    "payeeId"   : 20,
    "personId"  : 206,
    "categoryId": 3,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-10-02T19:18:00.000Z",
    "amount"    : 22.5
  },
  {
    "id"        : 1020,
    "payeeId"   : 11,
    "personId"  : 206,
    "categoryId": 2,
    "accountId" : 10,
    "txType"    : "2",
    "txDate"    : "2016-09-25T20:22:00.000Z",
    "amount"    : 57.5
  },
  {
    "id"        : 1021,
    "payeeId"   : 11,
    "personId"  : 206,
    "categoryId": 2,
    "accountId" : 11,
    "txType"    : "2",
    "txDate"    : "2016-07-08T21:43:00.000Z",
    "amount"    : 57.5
  },
  {
    "id"        : 1022,
    "payeeId"   : 20,
    "personId"  : 206,
    "categoryId": 3,
    "accountId" : 11,
    "txType"    : "2",
    "txDate"    : "2016-07-14T22:48:00.000Z",
    "amount"    : 172.5
  },
  {
    "id"        : 1023,
    "payeeId"   : 21,
    "personId"  : 206,
    "categoryId": 2,
    "accountId" : 11,
    "txType"    : "2",
    "txDate"    : "2016-07-27T22:01:00.000Z",
    "amount"    : 86.25
  },
  {
    "id"        : 1024,
    "payeeId"   : 8,
    "personId"  : 206,
    "categoryId": 3,
    "accountId" : 11,
    "txType"    : "2",
    "txDate"    : "2016-07-25T21:37:00.000Z",
    "amount"    : 115
  },
  {
    "id"        : 1025,
    "payeeId"   : 8,
    "personId"  : 206,
    "categoryId": 3,
    "accountId" : 11,
    "txType"    : "2",
    "txDate"    : "2016-08-15T19:30:00.000Z",
    "amount"    : 15
  },
  {
    "id"        : 1026,
    "payeeId"   : 20,
    "personId"  : 206,
    "categoryId": 3,
    "accountId" : 11,
    "txType"    : "2",
    "txDate"    : "2016-08-04T20:07:00.000Z",
    "amount"    : 172.5
  },
  {
    "id"        : 1027,
    "payeeId"   : 11,
    "personId"  : 206,
    "categoryId": 2,
    "accountId" : 11,
    "txType"    : "2",
    "txDate"    : "2016-08-26T19:32:00.000Z",
    "amount"    : 57.5
  },
  {
    "id"        : 1028,
    "payeeId"   : 21,
    "personId"  : 206,
    "categoryId": 2,
    "accountId" : 11,
    "txType"    : "2",
    "txDate"    : "2016-08-23T22:33:00.000Z",
    "amount"    : 11.25
  },
  {
    "id"        : 1029,
    "payeeId"   : 11,
    "personId"  : 206,
    "categoryId": 2,
    "accountId" : 11,
    "txType"    : "2",
    "txDate"    : "2016-09-09T17:26:00.000Z",
    "amount"    : 57.5
  },
  {
    "id"        : 1030,
    "payeeId"   : 21,
    "personId"  : 206,
    "categoryId": 2,
    "accountId" : 11,
    "txType"    : "2",
    "txDate"    : "2016-09-29T19:36:00.000Z",
    "amount"    : 86.25
  },
  {
    "id"        : 1031,
    "payeeId"   : 20,
    "personId"  : 206,
    "categoryId": 3,
    "accountId" : 11,
    "txType"    : "2",
    "txDate"    : "2016-09-28T18:11:00.000Z",
    "amount"    : 172.5
  },
  {
    "id"        : 1032,
    "payeeId"   : 8,
    "personId"  : 206,
    "categoryId": 3,
    "accountId" : 11,
    "txType"    : "2",
    "txDate"    : "2016-09-10T00:34:00.000Z",
    "amount"    : 115
  },
  {
    "id"        : 1033,
    "payeeId"   : 1,
    "personId"  : 207,
    "categoryId": 102,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-06-01T04:00:00.000Z",
    "amount"    : -1600
  },
  {
    "id"        : 1034,
    "payeeId"   : 2,
    "personId"  : 207,
    "categoryId": 106,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-06-10T04:00:00.000Z",
    "amount"    : -22.5
  },
  {
    "id"        : 1035,
    "payeeId"   : 3,
    "personId"  : 207,
    "categoryId": 106,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-06-20T04:00:00.000Z",
    "amount"    : -86.25
  },
  {
    "id"        : 1036,
    "payeeId"   : 12,
    "personId"  : 207,
    "categoryId": 105,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-07-02T20:02:00.000Z",
    "amount"    : -15
  },
  {
    "id"        : 1037,
    "payeeId"   : 14,
    "personId"  : 207,
    "categoryId": 105,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-07-14T19:54:00.000Z",
    "amount"    : -86.25
  },
  {
    "id"        : 1038,
    "payeeId"   : 17,
    "personId"  : 207,
    "categoryId": 106,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-06-25T04:00:00.000Z",
    "amount"    : -9.75
  },
  {
    "id"        : 1039,
    "payeeId"   : 6,
    "personId"  : 207,
    "categoryId": 103,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-07-02T16:48:00.000Z",
    "amount"    : -6
  },
  {
    "id"        : 1040,
    "payeeId"   : 19,
    "personId"  : 207,
    "categoryId": 107,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-07-08T18:15:00.000Z",
    "amount"    : -3.75
  },
  {
    "id"        : 1041,
    "payeeId"   : 18,
    "personId"  : 207,
    "categoryId": 102,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-07-30T20:58:00.000Z",
    "amount"    : -45
  },
  {
    "id"        : 1042,
    "payeeId"   : 15,
    "personId"  : 207,
    "categoryId": 103,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-07-19T16:08:00.000Z",
    "amount"    : -5.25
  },
  {
    "id"        : 1043,
    "payeeId"   : 9,
    "personId"  : 207,
    "categoryId": 107,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-07-28T18:10:00.000Z",
    "amount"    : -92
  },
  {
    "id"        : 1044,
    "payeeId"   : 26,
    "personId"  : 207,
    "categoryId": 108,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-07-10T19:05:00.000Z",
    "amount"    : -60
  },
  {
    "id"        : 1045,
    "payeeId"   : 16,
    "personId"  : 207,
    "categoryId": 104,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-07-17T22:11:00.000Z",
    "amount"    : -51.75
  },
  {
    "id"        : 1046,
    "payeeId"   : 25,
    "personId"  : 207,
    "categoryId": 101,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-07-27T16:31:00.000Z",
    "amount"    : -46
  },
  {
    "id"        : 1047,
    "payeeId"   : 7,
    "personId"  : 207,
    "categoryId": 104,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-07-17T17:18:00.000Z",
    "amount"    : -34.5
  },
  {
    "id"        : 1048,
    "payeeId"   : 24,
    "personId"  : 207,
    "categoryId": 101,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-07-14T00:55:00.000Z",
    "amount"    : -63.25
  },
  {
    "id"        : 1049,
    "payeeId"   : 4,
    "personId"  : 207,
    "categoryId": 103,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-07-09T22:28:00.000Z",
    "amount"    : -7.5
  },
  {
    "id"        : 1050,
    "payeeId"   : 10,
    "personId"  : 207,
    "categoryId": 107,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-07-25T17:22:00.000Z",
    "amount"    : -16.5
  },
  {
    "id"        : 1051,
    "payeeId"   : 5,
    "personId"  : 207,
    "categoryId": 103,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-07-10T22:51:00.000Z",
    "amount"    : -18.75
  },
  {
    "id"        : 1052,
    "payeeId"   : 13,
    "personId"  : 207,
    "categoryId": 104,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-07-22T16:05:00.000Z",
    "amount"    : -3.75
  },
  {
    "id"        : 1053,
    "payeeId"   : 6,
    "personId"  : 207,
    "categoryId": 103,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-07-22T19:36:00.000Z",
    "amount"    : -6
  },
  {
    "id"        : 1054,
    "payeeId"   : 19,
    "personId"  : 207,
    "categoryId": 107,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-07-06T19:34:00.000Z",
    "amount"    : -28.75
  },
  {
    "id"        : 1055,
    "payeeId"   : 18,
    "personId"  : 207,
    "categoryId": 102,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-07-13T00:52:00.000Z",
    "amount"    : -45
  },
  {
    "id"        : 1056,
    "payeeId"   : 15,
    "personId"  : 207,
    "categoryId": 103,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-07-11T19:32:00.000Z",
    "amount"    : -5.25
  },
  {
    "id"        : 1057,
    "payeeId"   : 9,
    "personId"  : 207,
    "categoryId": 107,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-07-22T18:22:00.000Z",
    "amount"    : -12
  },
  {
    "id"        : 1058,
    "payeeId"   : 26,
    "personId"  : 207,
    "categoryId": 108,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-07-22T21:14:00.000Z",
    "amount"    : -60
  },
  {
    "id"        : 1059,
    "payeeId"   : 16,
    "personId"  : 207,
    "categoryId": 104,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-07-21T22:06:00.000Z",
    "amount"    : -6.75
  },
  {
    "id"        : 1060,
    "payeeId"   : 25,
    "personId"  : 207,
    "categoryId": 101,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-07-14T00:46:00.000Z",
    "amount"    : -46
  },
  {
    "id"        : 1061,
    "payeeId"   : 7,
    "personId"  : 207,
    "categoryId": 104,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-07-28T22:37:00.000Z",
    "amount"    : -34.5
  },
  {
    "id"        : 1062,
    "payeeId"   : 24,
    "personId"  : 207,
    "categoryId": 101,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-07-12T00:03:00.000Z",
    "amount"    : -63.25
  },
  {
    "id"        : 1063,
    "payeeId"   : 4,
    "personId"  : 207,
    "categoryId": 103,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-07-04T22:41:00.000Z",
    "amount"    : -57.5
  },
  {
    "id"        : 1064,
    "payeeId"   : 10,
    "personId"  : 207,
    "categoryId": 107,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-07-11T00:37:00.000Z",
    "amount"    : -16.5
  },
  {
    "id"        : 1065,
    "payeeId"   : 5,
    "personId"  : 207,
    "categoryId": 103,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-07-08T17:44:00.000Z",
    "amount"    : -18.75
  },
  {
    "id"        : 1066,
    "payeeId"   : 13,
    "personId"  : 207,
    "categoryId": 104,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-07-08T22:36:00.000Z",
    "amount"    : -3.75
  },
  {
    "id"        : 1067,
    "payeeId"   : 6,
    "personId"  : 207,
    "categoryId": 103,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-07-21T16:33:00.000Z",
    "amount"    : -6
  },
  {
    "id"        : 1068,
    "payeeId"   : 19,
    "personId"  : 207,
    "categoryId": 107,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-07-25T16:58:00.000Z",
    "amount"    : -28.75
  },
  {
    "id"        : 1069,
    "payeeId"   : 18,
    "personId"  : 207,
    "categoryId": 102,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-07-21T20:01:00.000Z",
    "amount"    : -45
  },
  {
    "id"        : 1070,
    "payeeId"   : 15,
    "personId"  : 207,
    "categoryId": 103,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-07-08T19:11:00.000Z",
    "amount"    : -5.25
  },
  {
    "id"        : 1071,
    "payeeId"   : 9,
    "personId"  : 207,
    "categoryId": 107,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-07-20T19:00:00.000Z",
    "amount"    : -92
  },
  {
    "id"        : 1072,
    "payeeId"   : 26,
    "personId"  : 207,
    "categoryId": 108,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-07-20T00:13:00.000Z",
    "amount"    : -60
  },
  {
    "id"        : 1073,
    "payeeId"   : 16,
    "personId"  : 207,
    "categoryId": 104,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-07-20T22:06:00.000Z",
    "amount"    : -6.75
  },
  {
    "id"        : 1074,
    "payeeId"   : 25,
    "personId"  : 207,
    "categoryId": 101,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-07-02T16:42:00.000Z",
    "amount"    : -46
  },
  {
    "id"        : 1075,
    "payeeId"   : 7,
    "personId"  : 207,
    "categoryId": 104,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-07-14T22:53:00.000Z",
    "amount"    : -4.5
  },
  {
    "id"        : 1076,
    "payeeId"   : 24,
    "personId"  : 207,
    "categoryId": 101,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-07-19T22:08:00.000Z",
    "amount"    : -63.25
  },
  {
    "id"        : 1077,
    "payeeId"   : 4,
    "personId"  : 207,
    "categoryId": 103,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-07-23T16:45:00.000Z",
    "amount"    : -57.5
  },
  {
    "id"        : 1078,
    "payeeId"   : 10,
    "personId"  : 207,
    "categoryId": 107,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-07-05T20:34:00.000Z",
    "amount"    : -126.5
  },
  {
    "id"        : 1079,
    "payeeId"   : 5,
    "personId"  : 207,
    "categoryId": 103,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-07-28T00:06:00.000Z",
    "amount"    : -143.75
  },
  {
    "id"        : 1080,
    "payeeId"   : 13,
    "personId"  : 207,
    "categoryId": 104,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-07-04T00:14:00.000Z",
    "amount"    : -3.75
  },
  {
    "id"        : 1081,
    "payeeId"   : 6,
    "personId"  : 207,
    "categoryId": 103,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-07-26T00:54:00.000Z",
    "amount"    : -46
  },
  {
    "id"        : 1082,
    "payeeId"   : 19,
    "personId"  : 207,
    "categoryId": 107,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-07-11T18:55:00.000Z",
    "amount"    : -28.75
  },
  {
    "id"        : 1083,
    "payeeId"   : 1,
    "personId"  : 207,
    "categoryId": 102,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-07-01T04:00:00.000Z",
    "amount"    : -1600
  },
  {
    "id"        : 1084,
    "payeeId"   : 2,
    "personId"  : 207,
    "categoryId": 106,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-07-10T04:00:00.000Z",
    "amount"    : -172.5
  },
  {
    "id"        : 1085,
    "payeeId"   : 3,
    "personId"  : 207,
    "categoryId": 106,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-07-20T04:00:00.000Z",
    "amount"    : -86.25
  },
  {
    "id"        : 1086,
    "payeeId"   : 12,
    "personId"  : 207,
    "categoryId": 105,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-08-20T23:09:00.000Z",
    "amount"    : -115
  },
  {
    "id"        : 1087,
    "payeeId"   : 14,
    "personId"  : 207,
    "categoryId": 105,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-08-27T22:08:00.000Z",
    "amount"    : -11.25
  },
  {
    "id"        : 1088,
    "payeeId"   : 17,
    "personId"  : 207,
    "categoryId": 106,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-07-25T04:00:00.000Z",
    "amount"    : -9.75
  },
  {
    "id"        : 1089,
    "payeeId"   : 5,
    "personId"  : 207,
    "categoryId": 103,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-08-31T20:00:00.000Z",
    "amount"    : -18.75
  },
  {
    "id"        : 1090,
    "payeeId"   : 9,
    "personId"  : 207,
    "categoryId": 107,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-08-09T00:41:00.000Z",
    "amount"    : -12
  },
  {
    "id"        : 1091,
    "payeeId"   : 26,
    "personId"  : 207,
    "categoryId": 108,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-08-06T19:13:00.000Z",
    "amount"    : -60
  },
  {
    "id"        : 1092,
    "payeeId"   : 24,
    "personId"  : 207,
    "categoryId": 101,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-08-26T23:32:00.000Z",
    "amount"    : -8.25
  },
  {
    "id"        : 1093,
    "payeeId"   : 4,
    "personId"  : 207,
    "categoryId": 103,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-08-04T18:44:00.000Z",
    "amount"    : -7.5
  },
  {
    "id"        : 1094,
    "payeeId"   : 25,
    "personId"  : 207,
    "categoryId": 101,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-08-05T19:17:00.000Z",
    "amount"    : -46
  },
  {
    "id"        : 1095,
    "payeeId"   : 15,
    "personId"  : 207,
    "categoryId": 103,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-08-10T00:16:00.000Z",
    "amount"    : -40.25
  },
  {
    "id"        : 1096,
    "payeeId"   : 13,
    "personId"  : 207,
    "categoryId": 104,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-08-27T00:58:00.000Z",
    "amount"    : -28.75
  },
  {
    "id"        : 1097,
    "payeeId"   : 16,
    "personId"  : 207,
    "categoryId": 104,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-09-01T22:12:00.000Z",
    "amount"    : -51.75
  },
  {
    "id"        : 1098,
    "payeeId"   : 19,
    "personId"  : 207,
    "categoryId": 107,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-08-04T21:25:00.000Z",
    "amount"    : -28.75
  },
  {
    "id"        : 1099,
    "payeeId"   : 18,
    "personId"  : 207,
    "categoryId": 102,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-08-21T22:21:00.000Z",
    "amount"    : -45
  },
  {
    "id"        : 1100,
    "payeeId"   : 10,
    "personId"  : 207,
    "categoryId": 107,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-09-01T17:17:00.000Z",
    "amount"    : -16.5
  },
  {
    "id"        : 1101,
    "payeeId"   : 6,
    "personId"  : 207,
    "categoryId": 103,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-08-16T00:27:00.000Z",
    "amount"    : -6
  },
  {
    "id"        : 1102,
    "payeeId"   : 7,
    "personId"  : 207,
    "categoryId": 104,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-08-12T00:23:00.000Z",
    "amount"    : -34.5
  },
  {
    "id"        : 1103,
    "payeeId"   : 5,
    "personId"  : 207,
    "categoryId": 103,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-08-25T00:12:00.000Z",
    "amount"    : -18.75
  },
  {
    "id"        : 1104,
    "payeeId"   : 9,
    "personId"  : 207,
    "categoryId": 107,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-08-28T19:01:00.000Z",
    "amount"    : -92
  },
  {
    "id"        : 1105,
    "payeeId"   : 26,
    "personId"  : 207,
    "categoryId": 108,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-08-25T16:58:00.000Z",
    "amount"    : -60
  },
  {
    "id"        : 1106,
    "payeeId"   : 24,
    "personId"  : 207,
    "categoryId": 101,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-08-25T21:11:00.000Z",
    "amount"    : -63.25
  },
  {
    "id"        : 1107,
    "payeeId"   : 4,
    "personId"  : 207,
    "categoryId": 103,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-08-02T23:28:00.000Z",
    "amount"    : -7.5
  },
  {
    "id"        : 1108,
    "payeeId"   : 25,
    "personId"  : 207,
    "categoryId": 101,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-08-19T17:17:00.000Z",
    "amount"    : -46
  },
  {
    "id"        : 1109,
    "payeeId"   : 15,
    "personId"  : 207,
    "categoryId": 103,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-08-26T00:36:00.000Z",
    "amount"    : -5.25
  },
  {
    "id"        : 1110,
    "payeeId"   : 13,
    "personId"  : 207,
    "categoryId": 104,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-08-28T16:06:00.000Z",
    "amount"    : -3.75
  },
  {
    "id"        : 1111,
    "payeeId"   : 16,
    "personId"  : 207,
    "categoryId": 104,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-08-04T17:14:00.000Z",
    "amount"    : -6.75
  },
  {
    "id"        : 1112,
    "payeeId"   : 19,
    "personId"  : 207,
    "categoryId": 107,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-08-11T16:09:00.000Z",
    "amount"    : -28.75
  },
  {
    "id"        : 1113,
    "payeeId"   : 18,
    "personId"  : 207,
    "categoryId": 102,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-09-01T23:19:00.000Z",
    "amount"    : -45
  },
  {
    "id"        : 1114,
    "payeeId"   : 10,
    "personId"  : 207,
    "categoryId": 107,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-08-06T16:48:00.000Z",
    "amount"    : -16.5
  },
  {
    "id"        : 1115,
    "payeeId"   : 6,
    "personId"  : 207,
    "categoryId": 103,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-08-24T20:12:00.000Z",
    "amount"    : -6
  },
  {
    "id"        : 1116,
    "payeeId"   : 7,
    "personId"  : 207,
    "categoryId": 104,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-09-02T00:38:00.000Z",
    "amount"    : -34.5
  },
  {
    "id"        : 1117,
    "payeeId"   : 5,
    "personId"  : 207,
    "categoryId": 103,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-08-19T18:09:00.000Z",
    "amount"    : -143.75
  },
  {
    "id"        : 1118,
    "payeeId"   : 9,
    "personId"  : 207,
    "categoryId": 107,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-08-31T18:10:00.000Z",
    "amount"    : -12
  },
  {
    "id"        : 1119,
    "payeeId"   : 26,
    "personId"  : 207,
    "categoryId": 108,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-08-02T19:26:00.000Z",
    "amount"    : -60
  },
  {
    "id"        : 1120,
    "payeeId"   : 24,
    "personId"  : 207,
    "categoryId": 101,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-08-08T21:11:00.000Z",
    "amount"    : -63.25
  },
  {
    "id"        : 1121,
    "payeeId"   : 4,
    "personId"  : 207,
    "categoryId": 103,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-08-11T20:01:00.000Z",
    "amount"    : -7.5
  },
  {
    "id"        : 1122,
    "payeeId"   : 25,
    "personId"  : 207,
    "categoryId": 101,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-08-14T19:18:00.000Z",
    "amount"    : -46
  },
  {
    "id"        : 1123,
    "payeeId"   : 15,
    "personId"  : 207,
    "categoryId": 103,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-08-12T16:25:00.000Z",
    "amount"    : -5.25
  },
  {
    "id"        : 1124,
    "payeeId"   : 13,
    "personId"  : 207,
    "categoryId": 104,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-08-25T21:08:00.000Z",
    "amount"    : -3.75
  },
  {
    "id"        : 1125,
    "payeeId"   : 16,
    "personId"  : 207,
    "categoryId": 104,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-08-14T00:58:00.000Z",
    "amount"    : -51.75
  },
  {
    "id"        : 1126,
    "payeeId"   : 19,
    "personId"  : 207,
    "categoryId": 107,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-08-28T19:27:00.000Z",
    "amount"    : -3.75
  },
  {
    "id"        : 1127,
    "payeeId"   : 18,
    "personId"  : 207,
    "categoryId": 102,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-08-18T17:42:00.000Z",
    "amount"    : -45
  },
  {
    "id"        : 1128,
    "payeeId"   : 10,
    "personId"  : 207,
    "categoryId": 107,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-08-31T20:17:00.000Z",
    "amount"    : -16.5
  },
  {
    "id"        : 1129,
    "payeeId"   : 6,
    "personId"  : 207,
    "categoryId": 103,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-08-16T16:44:00.000Z",
    "amount"    : -46
  },
  {
    "id"        : 1130,
    "payeeId"   : 7,
    "personId"  : 207,
    "categoryId": 104,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-08-10T23:03:00.000Z",
    "amount"    : -34.5
  },
  {
    "id"        : 1131,
    "payeeId"   : 5,
    "personId"  : 207,
    "categoryId": 103,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-08-26T23:06:00.000Z",
    "amount"    : -18.75
  },
  {
    "id"        : 1132,
    "payeeId"   : 9,
    "personId"  : 207,
    "categoryId": 107,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-08-29T17:35:00.000Z",
    "amount"    : -12
  },
  {
    "id"        : 1133,
    "payeeId"   : 1,
    "personId"  : 207,
    "categoryId": 102,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-08-01T04:00:00.000Z",
    "amount"    : -1600
  },
  {
    "id"        : 1134,
    "payeeId"   : 2,
    "personId"  : 207,
    "categoryId": 106,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-08-10T04:00:00.000Z",
    "amount"    : -172.5
  },
  {
    "id"        : 1135,
    "payeeId"   : 3,
    "personId"  : 207,
    "categoryId": 106,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-08-20T04:00:00.000Z",
    "amount"    : -86.25
  },
  {
    "id"        : 1136,
    "payeeId"   : 12,
    "personId"  : 207,
    "categoryId": 105,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-10-02T16:16:00.000Z",
    "amount"    : -15
  },
  {
    "id"        : 1137,
    "payeeId"   : 14,
    "personId"  : 207,
    "categoryId": 105,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-09-25T16:22:00.000Z",
    "amount"    : -86.25
  },
  {
    "id"        : 1138,
    "payeeId"   : 17,
    "personId"  : 207,
    "categoryId": 106,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-08-25T04:00:00.000Z",
    "amount"    : -74.75
  },
  {
    "id"        : 1139,
    "payeeId"   : 9,
    "personId"  : 207,
    "categoryId": 107,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-09-21T21:32:00.000Z",
    "amount"    : -12
  },
  {
    "id"        : 1140,
    "payeeId"   : 4,
    "personId"  : 207,
    "categoryId": 103,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-09-13T19:31:00.000Z",
    "amount"    : -57.5
  },
  {
    "id"        : 1141,
    "payeeId"   : 13,
    "personId"  : 207,
    "categoryId": 104,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-09-06T16:37:00.000Z",
    "amount"    : -28.75
  },
  {
    "id"        : 1142,
    "payeeId"   : 25,
    "personId"  : 207,
    "categoryId": 101,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-09-04T21:33:00.000Z",
    "amount"    : -46
  },
  {
    "id"        : 1143,
    "payeeId"   : 18,
    "personId"  : 207,
    "categoryId": 102,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-09-25T21:39:00.000Z",
    "amount"    : -45
  },
  {
    "id"        : 1144,
    "payeeId"   : 16,
    "personId"  : 207,
    "categoryId": 104,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-09-16T00:25:00.000Z",
    "amount"    : -6.75
  },
  {
    "id"        : 1145,
    "payeeId"   : 24,
    "personId"  : 207,
    "categoryId": 101,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-09-11T21:00:00.000Z",
    "amount"    : -8.25
  },
  {
    "id"        : 1146,
    "payeeId"   : 15,
    "personId"  : 207,
    "categoryId": 103,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-09-08T16:30:00.000Z",
    "amount"    : -5.25
  },
  {
    "id"        : 1147,
    "payeeId"   : 7,
    "personId"  : 207,
    "categoryId": 104,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-09-18T20:18:00.000Z",
    "amount"    : -34.5
  },
  {
    "id"        : 1148,
    "payeeId"   : 6,
    "personId"  : 207,
    "categoryId": 103,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-09-06T16:12:00.000Z",
    "amount"    : -46
  },
  {
    "id"        : 1149,
    "payeeId"   : 5,
    "personId"  : 207,
    "categoryId": 103,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-09-22T18:57:00.000Z",
    "amount"    : -18.75
  },
  {
    "id"        : 1150,
    "payeeId"   : 26,
    "personId"  : 207,
    "categoryId": 108,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-09-17T17:16:00.000Z",
    "amount"    : -60
  },
  {
    "id"        : 1151,
    "payeeId"   : 10,
    "personId"  : 207,
    "categoryId": 107,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-09-18T23:11:00.000Z",
    "amount"    : -16.5
  },
  {
    "id"        : 1152,
    "payeeId"   : 19,
    "personId"  : 207,
    "categoryId": 107,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-09-02T17:23:00.000Z",
    "amount"    : -3.75
  },
  {
    "id"        : 1153,
    "payeeId"   : 9,
    "personId"  : 207,
    "categoryId": 107,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-09-08T00:00:00.000Z",
    "amount"    : -92
  },
  {
    "id"        : 1154,
    "payeeId"   : 4,
    "personId"  : 207,
    "categoryId": 103,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-09-06T00:57:00.000Z",
    "amount"    : -57.5
  },
  {
    "id"        : 1155,
    "payeeId"   : 13,
    "personId"  : 207,
    "categoryId": 104,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-09-28T18:22:00.000Z",
    "amount"    : -28.75
  },
  {
    "id"        : 1156,
    "payeeId"   : 25,
    "personId"  : 207,
    "categoryId": 101,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-09-07T19:52:00.000Z",
    "amount"    : -6
  },
  {
    "id"        : 1157,
    "payeeId"   : 18,
    "personId"  : 207,
    "categoryId": 102,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-09-23T17:30:00.000Z",
    "amount"    : -45
  },
  {
    "id"        : 1158,
    "payeeId"   : 16,
    "personId"  : 207,
    "categoryId": 104,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-09-07T00:57:00.000Z",
    "amount"    : -6.75
  },
  {
    "id"        : 1159,
    "payeeId"   : 24,
    "personId"  : 207,
    "categoryId": 101,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-09-05T00:54:00.000Z",
    "amount"    : -8.25
  },
  {
    "id"        : 1160,
    "payeeId"   : 15,
    "personId"  : 207,
    "categoryId": 103,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-09-13T16:59:00.000Z",
    "amount"    : -40.25
  },
  {
    "id"        : 1161,
    "payeeId"   : 7,
    "personId"  : 207,
    "categoryId": 104,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-09-20T00:27:00.000Z",
    "amount"    : -34.5
  },
  {
    "id"        : 1162,
    "payeeId"   : 6,
    "personId"  : 207,
    "categoryId": 103,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-09-29T20:33:00.000Z",
    "amount"    : -6
  },
  {
    "id"        : 1163,
    "payeeId"   : 5,
    "personId"  : 207,
    "categoryId": 103,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-09-15T17:42:00.000Z",
    "amount"    : -18.75
  },
  {
    "id"        : 1164,
    "payeeId"   : 26,
    "personId"  : 207,
    "categoryId": 108,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-09-18T23:24:00.000Z",
    "amount"    : -60
  },
  {
    "id"        : 1165,
    "payeeId"   : 10,
    "personId"  : 207,
    "categoryId": 107,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-09-08T00:57:00.000Z",
    "amount"    : -16.5
  },
  {
    "id"        : 1166,
    "payeeId"   : 19,
    "personId"  : 207,
    "categoryId": 107,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-09-12T00:04:00.000Z",
    "amount"    : -28.75
  },
  {
    "id"        : 1167,
    "payeeId"   : 9,
    "personId"  : 207,
    "categoryId": 107,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-09-15T22:13:00.000Z",
    "amount"    : -92
  },
  {
    "id"        : 1168,
    "payeeId"   : 4,
    "personId"  : 207,
    "categoryId": 103,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-09-06T22:43:00.000Z",
    "amount"    : -7.5
  },
  {
    "id"        : 1169,
    "payeeId"   : 13,
    "personId"  : 207,
    "categoryId": 104,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-10-02T17:28:00.000Z",
    "amount"    : -3.75
  },
  {
    "id"        : 1170,
    "payeeId"   : 25,
    "personId"  : 207,
    "categoryId": 101,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-09-11T17:20:00.000Z",
    "amount"    : -46
  },
  {
    "id"        : 1171,
    "payeeId"   : 18,
    "personId"  : 207,
    "categoryId": 102,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-09-22T00:35:00.000Z",
    "amount"    : -45
  },
  {
    "id"        : 1172,
    "payeeId"   : 16,
    "personId"  : 207,
    "categoryId": 104,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-09-03T23:51:00.000Z",
    "amount"    : -51.75
  },
  {
    "id"        : 1173,
    "payeeId"   : 24,
    "personId"  : 207,
    "categoryId": 101,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-09-23T21:40:00.000Z",
    "amount"    : -63.25
  },
  {
    "id"        : 1174,
    "payeeId"   : 15,
    "personId"  : 207,
    "categoryId": 103,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-09-24T21:25:00.000Z",
    "amount"    : -5.25
  },
  {
    "id"        : 1175,
    "payeeId"   : 7,
    "personId"  : 207,
    "categoryId": 104,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-09-04T20:53:00.000Z",
    "amount"    : -34.5
  },
  {
    "id"        : 1176,
    "payeeId"   : 6,
    "personId"  : 207,
    "categoryId": 103,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-09-25T16:33:00.000Z",
    "amount"    : -46
  },
  {
    "id"        : 1177,
    "payeeId"   : 5,
    "personId"  : 207,
    "categoryId": 103,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-09-04T22:17:00.000Z",
    "amount"    : -143.75
  },
  {
    "id"        : 1178,
    "payeeId"   : 26,
    "personId"  : 207,
    "categoryId": 108,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-09-22T22:57:00.000Z",
    "amount"    : -60
  },
  {
    "id"        : 1179,
    "payeeId"   : 10,
    "personId"  : 207,
    "categoryId": 107,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-09-10T21:56:00.000Z",
    "amount"    : -16.5
  },
  {
    "id"        : 1180,
    "payeeId"   : 19,
    "personId"  : 207,
    "categoryId": 107,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-09-20T23:57:00.000Z",
    "amount"    : -28.75
  },
  {
    "id"        : 1181,
    "payeeId"   : 9,
    "personId"  : 207,
    "categoryId": 107,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-09-02T23:11:00.000Z",
    "amount"    : -12
  },
  {
    "id"        : 1182,
    "payeeId"   : 4,
    "personId"  : 207,
    "categoryId": 103,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-09-09T23:02:00.000Z",
    "amount"    : -57.5
  },
  {
    "id"        : 1183,
    "payeeId"   : 22,
    "personId"  : 207,
    "categoryId": 1,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-06-01T04:00:00.000Z",
    "amount"    : 3000
  },
  {
    "id"        : 1184,
    "payeeId"   : 22,
    "personId"  : 207,
    "categoryId": 1,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-06-15T04:00:00.000Z",
    "amount"    : 3000
  },
  {
    "id"        : 1185,
    "payeeId"   : 20,
    "personId"  : 207,
    "categoryId": 3,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-07-14T22:04:00.000Z",
    "amount"    : 22.5
  },
  {
    "id"        : 1186,
    "payeeId"   : 21,
    "personId"  : 207,
    "categoryId": 2,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-07-19T18:02:00.000Z",
    "amount"    : 11.25
  },
  {
    "id"        : 1187,
    "payeeId"   : 22,
    "personId"  : 207,
    "categoryId": 1,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-07-01T04:00:00.000Z",
    "amount"    : 3000
  },
  {
    "id"        : 1188,
    "payeeId"   : 22,
    "personId"  : 207,
    "categoryId": 1,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-07-15T04:00:00.000Z",
    "amount"    : 3000
  },
  {
    "id"        : 1189,
    "payeeId"   : 11,
    "personId"  : 207,
    "categoryId": 2,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-08-08T00:38:00.000Z",
    "amount"    : 7.5
  },
  {
    "id"        : 1190,
    "payeeId"   : 21,
    "personId"  : 207,
    "categoryId": 2,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-08-15T23:56:00.000Z",
    "amount"    : 86.25
  },
  {
    "id"        : 1191,
    "payeeId"   : 22,
    "personId"  : 207,
    "categoryId": 1,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-08-01T04:00:00.000Z",
    "amount"    : 3000
  },
  {
    "id"        : 1192,
    "payeeId"   : 22,
    "personId"  : 207,
    "categoryId": 1,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-08-15T04:00:00.000Z",
    "amount"    : 3000
  },
  {
    "id"        : 1193,
    "payeeId"   : 8,
    "personId"  : 207,
    "categoryId": 3,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-09-20T20:24:00.000Z",
    "amount"    : 115
  },
  {
    "id"        : 1194,
    "payeeId"   : 21,
    "personId"  : 207,
    "categoryId": 2,
    "accountId" : 12,
    "txType"    : "2",
    "txDate"    : "2016-09-13T22:55:00.000Z",
    "amount"    : 11.25
  },
  {
    "id"        : 1195,
    "payeeId"   : 1,
    "personId"  : 208,
    "categoryId": 102,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-06-01T04:00:00.000Z",
    "amount"    : -1600
  },
  {
    "id"        : 1196,
    "payeeId"   : 2,
    "personId"  : 208,
    "categoryId": 106,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-06-10T04:00:00.000Z",
    "amount"    : -172.5
  },
  {
    "id"        : 1197,
    "payeeId"   : 3,
    "personId"  : 208,
    "categoryId": 106,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-06-20T04:00:00.000Z",
    "amount"    : -86.25
  },
  {
    "id"        : 1198,
    "payeeId"   : 12,
    "personId"  : 208,
    "categoryId": 105,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-07-16T16:54:00.000Z",
    "amount"    : -15
  },
  {
    "id"        : 1199,
    "payeeId"   : 14,
    "personId"  : 208,
    "categoryId": 105,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-07-07T19:37:00.000Z",
    "amount"    : -11.25
  },
  {
    "id"        : 1200,
    "payeeId"   : 17,
    "personId"  : 208,
    "categoryId": 106,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-06-25T04:00:00.000Z",
    "amount"    : -9.75
  },
  {
    "id"        : 1201,
    "payeeId"   : 7,
    "personId"  : 208,
    "categoryId": 104,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-07-04T00:13:00.000Z",
    "amount"    : -4.5
  },
  {
    "id"        : 1202,
    "payeeId"   : 13,
    "personId"  : 208,
    "categoryId": 104,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-07-02T22:01:00.000Z",
    "amount"    : -28.75
  },
  {
    "id"        : 1203,
    "payeeId"   : 16,
    "personId"  : 208,
    "categoryId": 104,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-07-29T21:02:00.000Z",
    "amount"    : -51.75
  },
  {
    "id"        : 1204,
    "payeeId"   : 5,
    "personId"  : 208,
    "categoryId": 103,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-07-29T19:18:00.000Z",
    "amount"    : -18.75
  },
  {
    "id"        : 1205,
    "payeeId"   : 6,
    "personId"  : 208,
    "categoryId": 103,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-07-03T18:48:00.000Z",
    "amount"    : -46
  },
  {
    "id"        : 1206,
    "payeeId"   : 9,
    "personId"  : 208,
    "categoryId": 107,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-07-14T19:33:00.000Z",
    "amount"    : -92
  },
  {
    "id"        : 1207,
    "payeeId"   : 24,
    "personId"  : 208,
    "categoryId": 101,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-07-18T19:47:00.000Z",
    "amount"    : -63.25
  },
  {
    "id"        : 1208,
    "payeeId"   : 15,
    "personId"  : 208,
    "categoryId": 103,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-07-02T20:46:00.000Z",
    "amount"    : -5.25
  },
  {
    "id"        : 1209,
    "payeeId"   : 19,
    "personId"  : 208,
    "categoryId": 107,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-07-23T17:52:00.000Z",
    "amount"    : -28.75
  },
  {
    "id"        : 1210,
    "payeeId"   : 4,
    "personId"  : 208,
    "categoryId": 103,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-07-25T00:55:00.000Z",
    "amount"    : -7.5
  },
  {
    "id"        : 1211,
    "payeeId"   : 26,
    "personId"  : 208,
    "categoryId": 108,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-07-02T17:12:00.000Z",
    "amount"    : -60
  },
  {
    "id"        : 1212,
    "payeeId"   : 10,
    "personId"  : 208,
    "categoryId": 107,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-07-21T21:37:00.000Z",
    "amount"    : -16.5
  },
  {
    "id"        : 1213,
    "payeeId"   : 18,
    "personId"  : 208,
    "categoryId": 102,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-07-03T19:32:00.000Z",
    "amount"    : -45
  },
  {
    "id"        : 1214,
    "payeeId"   : 25,
    "personId"  : 208,
    "categoryId": 101,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-07-16T20:49:00.000Z",
    "amount"    : -46
  },
  {
    "id"        : 1215,
    "payeeId"   : 7,
    "personId"  : 208,
    "categoryId": 104,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-07-05T17:41:00.000Z",
    "amount"    : -4.5
  },
  {
    "id"        : 1216,
    "payeeId"   : 13,
    "personId"  : 208,
    "categoryId": 104,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-07-19T20:38:00.000Z",
    "amount"    : -3.75
  },
  {
    "id"        : 1217,
    "payeeId"   : 16,
    "personId"  : 208,
    "categoryId": 104,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-07-20T00:33:00.000Z",
    "amount"    : -6.75
  },
  {
    "id"        : 1218,
    "payeeId"   : 5,
    "personId"  : 208,
    "categoryId": 103,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-07-06T23:04:00.000Z",
    "amount"    : -143.75
  },
  {
    "id"        : 1219,
    "payeeId"   : 6,
    "personId"  : 208,
    "categoryId": 103,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-07-16T23:10:00.000Z",
    "amount"    : -6
  },
  {
    "id"        : 1220,
    "payeeId"   : 9,
    "personId"  : 208,
    "categoryId": 107,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-07-25T21:45:00.000Z",
    "amount"    : -12
  },
  {
    "id"        : 1221,
    "payeeId"   : 24,
    "personId"  : 208,
    "categoryId": 101,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-07-18T16:07:00.000Z",
    "amount"    : -63.25
  },
  {
    "id"        : 1222,
    "payeeId"   : 15,
    "personId"  : 208,
    "categoryId": 103,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-07-31T17:42:00.000Z",
    "amount"    : -40.25
  },
  {
    "id"        : 1223,
    "payeeId"   : 19,
    "personId"  : 208,
    "categoryId": 107,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-07-26T20:39:00.000Z",
    "amount"    : -3.75
  },
  {
    "id"        : 1224,
    "payeeId"   : 4,
    "personId"  : 208,
    "categoryId": 103,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-07-27T21:40:00.000Z",
    "amount"    : -7.5
  },
  {
    "id"        : 1225,
    "payeeId"   : 26,
    "personId"  : 208,
    "categoryId": 108,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-07-21T18:50:00.000Z",
    "amount"    : -60
  },
  {
    "id"        : 1226,
    "payeeId"   : 10,
    "personId"  : 208,
    "categoryId": 107,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-07-17T00:28:00.000Z",
    "amount"    : -126.5
  },
  {
    "id"        : 1227,
    "payeeId"   : 18,
    "personId"  : 208,
    "categoryId": 102,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-07-04T22:36:00.000Z",
    "amount"    : -45
  },
  {
    "id"        : 1228,
    "payeeId"   : 25,
    "personId"  : 208,
    "categoryId": 101,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-07-27T21:20:00.000Z",
    "amount"    : -46
  },
  {
    "id"        : 1229,
    "payeeId"   : 7,
    "personId"  : 208,
    "categoryId": 104,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-07-25T17:05:00.000Z",
    "amount"    : -4.5
  },
  {
    "id"        : 1230,
    "payeeId"   : 13,
    "personId"  : 208,
    "categoryId": 104,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-07-11T16:46:00.000Z",
    "amount"    : -28.75
  },
  {
    "id"        : 1231,
    "payeeId"   : 16,
    "personId"  : 208,
    "categoryId": 104,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-07-07T23:09:00.000Z",
    "amount"    : -6.75
  },
  {
    "id"        : 1232,
    "payeeId"   : 5,
    "personId"  : 208,
    "categoryId": 103,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-07-09T23:51:00.000Z",
    "amount"    : -18.75
  },
  {
    "id"        : 1233,
    "payeeId"   : 6,
    "personId"  : 208,
    "categoryId": 103,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-07-08T19:21:00.000Z",
    "amount"    : -6
  },
  {
    "id"        : 1234,
    "payeeId"   : 9,
    "personId"  : 208,
    "categoryId": 107,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-07-04T18:18:00.000Z",
    "amount"    : -92
  },
  {
    "id"        : 1235,
    "payeeId"   : 24,
    "personId"  : 208,
    "categoryId": 101,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-07-30T18:39:00.000Z",
    "amount"    : -8.25
  },
  {
    "id"        : 1236,
    "payeeId"   : 15,
    "personId"  : 208,
    "categoryId": 103,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-07-11T18:57:00.000Z",
    "amount"    : -5.25
  },
  {
    "id"        : 1237,
    "payeeId"   : 19,
    "personId"  : 208,
    "categoryId": 107,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-07-14T17:34:00.000Z",
    "amount"    : -28.75
  },
  {
    "id"        : 1238,
    "payeeId"   : 4,
    "personId"  : 208,
    "categoryId": 103,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-07-02T20:11:00.000Z",
    "amount"    : -57.5
  },
  {
    "id"        : 1239,
    "payeeId"   : 26,
    "personId"  : 208,
    "categoryId": 108,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-07-23T23:41:00.000Z",
    "amount"    : -60
  },
  {
    "id"        : 1240,
    "payeeId"   : 10,
    "personId"  : 208,
    "categoryId": 107,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-07-31T23:14:00.000Z",
    "amount"    : -126.5
  },
  {
    "id"        : 1241,
    "payeeId"   : 18,
    "personId"  : 208,
    "categoryId": 102,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-07-06T18:39:00.000Z",
    "amount"    : -45
  },
  {
    "id"        : 1242,
    "payeeId"   : 25,
    "personId"  : 208,
    "categoryId": 101,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-07-09T20:58:00.000Z",
    "amount"    : -6
  },
  {
    "id"        : 1243,
    "payeeId"   : 7,
    "personId"  : 208,
    "categoryId": 104,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-07-15T18:44:00.000Z",
    "amount"    : -34.5
  },
  {
    "id"        : 1244,
    "payeeId"   : 13,
    "personId"  : 208,
    "categoryId": 104,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-07-23T18:50:00.000Z",
    "amount"    : -28.75
  },
  {
    "id"        : 1245,
    "payeeId"   : 1,
    "personId"  : 208,
    "categoryId": 102,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-07-01T04:00:00.000Z",
    "amount"    : -1600
  },
  {
    "id"        : 1246,
    "payeeId"   : 2,
    "personId"  : 208,
    "categoryId": 106,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-07-10T04:00:00.000Z",
    "amount"    : -172.5
  },
  {
    "id"        : 1247,
    "payeeId"   : 3,
    "personId"  : 208,
    "categoryId": 106,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-07-20T04:00:00.000Z",
    "amount"    : -11.25
  },
  {
    "id"        : 1248,
    "payeeId"   : 12,
    "personId"  : 208,
    "categoryId": 105,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-08-31T18:37:00.000Z",
    "amount"    : -115
  },
  {
    "id"        : 1249,
    "payeeId"   : 14,
    "personId"  : 208,
    "categoryId": 105,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-08-14T00:09:00.000Z",
    "amount"    : -11.25
  },
  {
    "id"        : 1250,
    "payeeId"   : 17,
    "personId"  : 208,
    "categoryId": 106,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-07-25T04:00:00.000Z",
    "amount"    : -74.75
  },
  {
    "id"        : 1251,
    "payeeId"   : 25,
    "personId"  : 208,
    "categoryId": 101,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-08-04T19:55:00.000Z",
    "amount"    : -46
  },
  {
    "id"        : 1252,
    "payeeId"   : 15,
    "personId"  : 208,
    "categoryId": 103,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-08-16T18:29:00.000Z",
    "amount"    : -5.25
  },
  {
    "id"        : 1253,
    "payeeId"   : 9,
    "personId"  : 208,
    "categoryId": 107,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-09-01T23:18:00.000Z",
    "amount"    : -12
  },
  {
    "id"        : 1254,
    "payeeId"   : 6,
    "personId"  : 208,
    "categoryId": 103,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-08-02T19:40:00.000Z",
    "amount"    : -46
  },
  {
    "id"        : 1255,
    "payeeId"   : 5,
    "personId"  : 208,
    "categoryId": 103,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-08-05T23:59:00.000Z",
    "amount"    : -143.75
  },
  {
    "id"        : 1256,
    "payeeId"   : 13,
    "personId"  : 208,
    "categoryId": 104,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-08-10T17:28:00.000Z",
    "amount"    : -3.75
  },
  {
    "id"        : 1257,
    "payeeId"   : 24,
    "personId"  : 208,
    "categoryId": 101,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-08-16T17:47:00.000Z",
    "amount"    : -63.25
  },
  {
    "id"        : 1258,
    "payeeId"   : 18,
    "personId"  : 208,
    "categoryId": 102,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-08-31T18:22:00.000Z",
    "amount"    : -45
  },
  {
    "id"        : 1259,
    "payeeId"   : 7,
    "personId"  : 208,
    "categoryId": 104,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-09-01T22:30:00.000Z",
    "amount"    : -34.5
  },
  {
    "id"        : 1260,
    "payeeId"   : 16,
    "personId"  : 208,
    "categoryId": 104,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-08-12T18:19:00.000Z",
    "amount"    : -6.75
  },
  {
    "id"        : 1261,
    "payeeId"   : 26,
    "personId"  : 208,
    "categoryId": 108,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-08-05T22:50:00.000Z",
    "amount"    : -60
  },
  {
    "id"        : 1262,
    "payeeId"   : 19,
    "personId"  : 208,
    "categoryId": 107,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-08-06T23:55:00.000Z",
    "amount"    : -3.75
  },
  {
    "id"        : 1263,
    "payeeId"   : 4,
    "personId"  : 208,
    "categoryId": 103,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-08-12T16:50:00.000Z",
    "amount"    : -57.5
  },
  {
    "id"        : 1264,
    "payeeId"   : 10,
    "personId"  : 208,
    "categoryId": 107,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-08-02T17:53:00.000Z",
    "amount"    : -126.5
  },
  {
    "id"        : 1265,
    "payeeId"   : 25,
    "personId"  : 208,
    "categoryId": 101,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-08-17T00:23:00.000Z",
    "amount"    : -6
  },
  {
    "id"        : 1266,
    "payeeId"   : 15,
    "personId"  : 208,
    "categoryId": 103,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-08-26T16:37:00.000Z",
    "amount"    : -40.25
  },
  {
    "id"        : 1267,
    "payeeId"   : 9,
    "personId"  : 208,
    "categoryId": 107,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-08-10T20:54:00.000Z",
    "amount"    : -92
  },
  {
    "id"        : 1268,
    "payeeId"   : 6,
    "personId"  : 208,
    "categoryId": 103,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-08-24T00:44:00.000Z",
    "amount"    : -6
  },
  {
    "id"        : 1269,
    "payeeId"   : 5,
    "personId"  : 208,
    "categoryId": 103,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-08-30T16:30:00.000Z",
    "amount"    : -143.75
  },
  {
    "id"        : 1270,
    "payeeId"   : 13,
    "personId"  : 208,
    "categoryId": 104,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-08-05T16:14:00.000Z",
    "amount"    : -28.75
  },
  {
    "id"        : 1271,
    "payeeId"   : 24,
    "personId"  : 208,
    "categoryId": 101,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-08-27T21:49:00.000Z",
    "amount"    : -8.25
  },
  {
    "id"        : 1272,
    "payeeId"   : 18,
    "personId"  : 208,
    "categoryId": 102,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-08-07T23:50:00.000Z",
    "amount"    : -45
  },
  {
    "id"        : 1273,
    "payeeId"   : 7,
    "personId"  : 208,
    "categoryId": 104,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-09-01T19:12:00.000Z",
    "amount"    : -4.5
  },
  {
    "id"        : 1274,
    "payeeId"   : 16,
    "personId"  : 208,
    "categoryId": 104,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-08-25T16:42:00.000Z",
    "amount"    : -6.75
  },
  {
    "id"        : 1275,
    "payeeId"   : 26,
    "personId"  : 208,
    "categoryId": 108,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-08-28T19:27:00.000Z",
    "amount"    : -60
  },
  {
    "id"        : 1276,
    "payeeId"   : 19,
    "personId"  : 208,
    "categoryId": 107,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-08-06T21:11:00.000Z",
    "amount"    : -28.75
  },
  {
    "id"        : 1277,
    "payeeId"   : 4,
    "personId"  : 208,
    "categoryId": 103,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-09-01T22:00:00.000Z",
    "amount"    : -7.5
  },
  {
    "id"        : 1278,
    "payeeId"   : 10,
    "personId"  : 208,
    "categoryId": 107,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-08-26T23:09:00.000Z",
    "amount"    : -16.5
  },
  {
    "id"        : 1279,
    "payeeId"   : 25,
    "personId"  : 208,
    "categoryId": 101,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-09-01T18:01:00.000Z",
    "amount"    : -46
  },
  {
    "id"        : 1280,
    "payeeId"   : 15,
    "personId"  : 208,
    "categoryId": 103,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-08-24T17:52:00.000Z",
    "amount"    : -5.25
  },
  {
    "id"        : 1281,
    "payeeId"   : 9,
    "personId"  : 208,
    "categoryId": 107,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-08-15T23:04:00.000Z",
    "amount"    : -92
  },
  {
    "id"        : 1282,
    "payeeId"   : 6,
    "personId"  : 208,
    "categoryId": 103,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-08-30T22:28:00.000Z",
    "amount"    : -6
  },
  {
    "id"        : 1283,
    "payeeId"   : 5,
    "personId"  : 208,
    "categoryId": 103,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-08-10T21:21:00.000Z",
    "amount"    : -18.75
  },
  {
    "id"        : 1284,
    "payeeId"   : 13,
    "personId"  : 208,
    "categoryId": 104,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-08-12T17:03:00.000Z",
    "amount"    : -3.75
  },
  {
    "id"        : 1285,
    "payeeId"   : 24,
    "personId"  : 208,
    "categoryId": 101,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-08-28T00:24:00.000Z",
    "amount"    : -63.25
  },
  {
    "id"        : 1286,
    "payeeId"   : 18,
    "personId"  : 208,
    "categoryId": 102,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-08-25T20:54:00.000Z",
    "amount"    : -45
  },
  {
    "id"        : 1287,
    "payeeId"   : 7,
    "personId"  : 208,
    "categoryId": 104,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-08-11T18:38:00.000Z",
    "amount"    : -34.5
  },
  {
    "id"        : 1288,
    "payeeId"   : 16,
    "personId"  : 208,
    "categoryId": 104,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-08-21T00:23:00.000Z",
    "amount"    : -6.75
  },
  {
    "id"        : 1289,
    "payeeId"   : 26,
    "personId"  : 208,
    "categoryId": 108,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-08-06T17:31:00.000Z",
    "amount"    : -60
  },
  {
    "id"        : 1290,
    "payeeId"   : 19,
    "personId"  : 208,
    "categoryId": 107,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-08-28T17:38:00.000Z",
    "amount"    : -28.75
  },
  {
    "id"        : 1291,
    "payeeId"   : 4,
    "personId"  : 208,
    "categoryId": 103,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-08-28T19:10:00.000Z",
    "amount"    : -7.5
  },
  {
    "id"        : 1292,
    "payeeId"   : 10,
    "personId"  : 208,
    "categoryId": 107,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-08-12T18:09:00.000Z",
    "amount"    : -16.5
  },
  {
    "id"        : 1293,
    "payeeId"   : 25,
    "personId"  : 208,
    "categoryId": 101,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-08-16T17:56:00.000Z",
    "amount"    : -6
  },
  {
    "id"        : 1294,
    "payeeId"   : 15,
    "personId"  : 208,
    "categoryId": 103,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-08-06T21:54:00.000Z",
    "amount"    : -40.25
  },
  {
    "id"        : 1295,
    "payeeId"   : 1,
    "personId"  : 208,
    "categoryId": 102,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-08-01T04:00:00.000Z",
    "amount"    : -1600
  },
  {
    "id"        : 1296,
    "payeeId"   : 2,
    "personId"  : 208,
    "categoryId": 106,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-08-10T04:00:00.000Z",
    "amount"    : -172.5
  },
  {
    "id"        : 1297,
    "payeeId"   : 3,
    "personId"  : 208,
    "categoryId": 106,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-08-20T04:00:00.000Z",
    "amount"    : -86.25
  },
  {
    "id"        : 1298,
    "payeeId"   : 12,
    "personId"  : 208,
    "categoryId": 105,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-09-23T19:31:00.000Z",
    "amount"    : -15
  },
  {
    "id"        : 1299,
    "payeeId"   : 14,
    "personId"  : 208,
    "categoryId": 105,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-09-06T16:32:00.000Z",
    "amount"    : -86.25
  },
  {
    "id"        : 1300,
    "payeeId"   : 17,
    "personId"  : 208,
    "categoryId": 106,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-08-25T04:00:00.000Z",
    "amount"    : -9.75
  },
  {
    "id"        : 1301,
    "payeeId"   : 7,
    "personId"  : 208,
    "categoryId": 104,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-10-01T19:36:00.000Z",
    "amount"    : -34.5
  },
  {
    "id"        : 1302,
    "payeeId"   : 10,
    "personId"  : 208,
    "categoryId": 107,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-09-27T21:33:00.000Z",
    "amount"    : -16.5
  },
  {
    "id"        : 1303,
    "payeeId"   : 16,
    "personId"  : 208,
    "categoryId": 104,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-09-04T19:20:00.000Z",
    "amount"    : -51.75
  },
  {
    "id"        : 1304,
    "payeeId"   : 6,
    "personId"  : 208,
    "categoryId": 103,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-09-02T17:32:00.000Z",
    "amount"    : -6
  },
  {
    "id"        : 1305,
    "payeeId"   : 18,
    "personId"  : 208,
    "categoryId": 102,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-09-09T00:57:00.000Z",
    "amount"    : -45
  },
  {
    "id"        : 1306,
    "payeeId"   : 26,
    "personId"  : 208,
    "categoryId": 108,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-09-29T22:58:00.000Z",
    "amount"    : -60
  },
  {
    "id"        : 1307,
    "payeeId"   : 15,
    "personId"  : 208,
    "categoryId": 103,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-09-17T17:12:00.000Z",
    "amount"    : -40.25
  },
  {
    "id"        : 1308,
    "payeeId"   : 19,
    "personId"  : 208,
    "categoryId": 107,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-09-06T19:01:00.000Z",
    "amount"    : -28.75
  },
  {
    "id"        : 1309,
    "payeeId"   : 5,
    "personId"  : 208,
    "categoryId": 103,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-09-05T19:46:00.000Z",
    "amount"    : -18.75
  },
  {
    "id"        : 1310,
    "payeeId"   : 25,
    "personId"  : 208,
    "categoryId": 101,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-09-05T17:11:00.000Z",
    "amount"    : -6
  },
  {
    "id"        : 1311,
    "payeeId"   : 9,
    "personId"  : 208,
    "categoryId": 107,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-09-12T17:49:00.000Z",
    "amount"    : -92
  },
  {
    "id"        : 1312,
    "payeeId"   : 13,
    "personId"  : 208,
    "categoryId": 104,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-09-08T20:12:00.000Z",
    "amount"    : -28.75
  },
  {
    "id"        : 1313,
    "payeeId"   : 24,
    "personId"  : 208,
    "categoryId": 101,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-09-17T20:46:00.000Z",
    "amount"    : -8.25
  },
  {
    "id"        : 1314,
    "payeeId"   : 4,
    "personId"  : 208,
    "categoryId": 103,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-09-10T00:29:00.000Z",
    "amount"    : -57.5
  },
  {
    "id"        : 1315,
    "payeeId"   : 7,
    "personId"  : 208,
    "categoryId": 104,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-09-06T19:06:00.000Z",
    "amount"    : -4.5
  },
  {
    "id"        : 1316,
    "payeeId"   : 10,
    "personId"  : 208,
    "categoryId": 107,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-09-05T18:27:00.000Z",
    "amount"    : -126.5
  },
  {
    "id"        : 1317,
    "payeeId"   : 16,
    "personId"  : 208,
    "categoryId": 104,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-09-10T18:34:00.000Z",
    "amount"    : -6.75
  },
  {
    "id"        : 1318,
    "payeeId"   : 6,
    "personId"  : 208,
    "categoryId": 103,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-09-02T19:24:00.000Z",
    "amount"    : -46
  },
  {
    "id"        : 1319,
    "payeeId"   : 18,
    "personId"  : 208,
    "categoryId": 102,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-09-23T20:32:00.000Z",
    "amount"    : -45
  },
  {
    "id"        : 1320,
    "payeeId"   : 26,
    "personId"  : 208,
    "categoryId": 108,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-09-03T16:21:00.000Z",
    "amount"    : -60
  },
  {
    "id"        : 1321,
    "payeeId"   : 15,
    "personId"  : 208,
    "categoryId": 103,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-09-23T21:57:00.000Z",
    "amount"    : -5.25
  },
  {
    "id"        : 1322,
    "payeeId"   : 19,
    "personId"  : 208,
    "categoryId": 107,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-09-19T17:42:00.000Z",
    "amount"    : -28.75
  },
  {
    "id"        : 1323,
    "payeeId"   : 5,
    "personId"  : 208,
    "categoryId": 103,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-09-13T19:09:00.000Z",
    "amount"    : -18.75
  },
  {
    "id"        : 1324,
    "payeeId"   : 25,
    "personId"  : 208,
    "categoryId": 101,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-09-14T23:34:00.000Z",
    "amount"    : -6
  },
  {
    "id"        : 1325,
    "payeeId"   : 9,
    "personId"  : 208,
    "categoryId": 107,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-09-02T20:54:00.000Z",
    "amount"    : -12
  },
  {
    "id"        : 1326,
    "payeeId"   : 13,
    "personId"  : 208,
    "categoryId": 104,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-09-14T23:46:00.000Z",
    "amount"    : -3.75
  },
  {
    "id"        : 1327,
    "payeeId"   : 24,
    "personId"  : 208,
    "categoryId": 101,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-09-04T00:26:00.000Z",
    "amount"    : -63.25
  },
  {
    "id"        : 1328,
    "payeeId"   : 4,
    "personId"  : 208,
    "categoryId": 103,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-09-21T19:55:00.000Z",
    "amount"    : -57.5
  },
  {
    "id"        : 1329,
    "payeeId"   : 7,
    "personId"  : 208,
    "categoryId": 104,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-09-13T18:46:00.000Z",
    "amount"    : -34.5
  },
  {
    "id"        : 1330,
    "payeeId"   : 10,
    "personId"  : 208,
    "categoryId": 107,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-09-07T18:45:00.000Z",
    "amount"    : -126.5
  },
  {
    "id"        : 1331,
    "payeeId"   : 16,
    "personId"  : 208,
    "categoryId": 104,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-09-23T17:48:00.000Z",
    "amount"    : -6.75
  },
  {
    "id"        : 1332,
    "payeeId"   : 6,
    "personId"  : 208,
    "categoryId": 103,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-09-14T17:09:00.000Z",
    "amount"    : -6
  },
  {
    "id"        : 1333,
    "payeeId"   : 18,
    "personId"  : 208,
    "categoryId": 102,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-09-30T16:12:00.000Z",
    "amount"    : -45
  },
  {
    "id"        : 1334,
    "payeeId"   : 26,
    "personId"  : 208,
    "categoryId": 108,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-09-10T18:49:00.000Z",
    "amount"    : -60
  },
  {
    "id"        : 1335,
    "payeeId"   : 15,
    "personId"  : 208,
    "categoryId": 103,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-09-03T23:06:00.000Z",
    "amount"    : -5.25
  },
  {
    "id"        : 1336,
    "payeeId"   : 19,
    "personId"  : 208,
    "categoryId": 107,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-09-07T16:28:00.000Z",
    "amount"    : -28.75
  },
  {
    "id"        : 1337,
    "payeeId"   : 5,
    "personId"  : 208,
    "categoryId": 103,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-09-13T16:02:00.000Z",
    "amount"    : -18.75
  },
  {
    "id"        : 1338,
    "payeeId"   : 25,
    "personId"  : 208,
    "categoryId": 101,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-10-02T23:07:00.000Z",
    "amount"    : -6
  },
  {
    "id"        : 1339,
    "payeeId"   : 9,
    "personId"  : 208,
    "categoryId": 107,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-09-26T00:10:00.000Z",
    "amount"    : -92
  },
  {
    "id"        : 1340,
    "payeeId"   : 13,
    "personId"  : 208,
    "categoryId": 104,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-09-23T15:59:00.000Z",
    "amount"    : -28.75
  },
  {
    "id"        : 1341,
    "payeeId"   : 24,
    "personId"  : 208,
    "categoryId": 101,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-09-20T20:31:00.000Z",
    "amount"    : -63.25
  },
  {
    "id"        : 1342,
    "payeeId"   : 4,
    "personId"  : 208,
    "categoryId": 103,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-09-18T18:08:00.000Z",
    "amount"    : -7.5
  },
  {
    "id"        : 1343,
    "payeeId"   : 7,
    "personId"  : 208,
    "categoryId": 104,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-09-30T16:29:00.000Z",
    "amount"    : -34.5
  },
  {
    "id"        : 1344,
    "payeeId"   : 10,
    "personId"  : 208,
    "categoryId": 107,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-09-13T20:28:00.000Z",
    "amount"    : -126.5
  },
  {
    "id"        : 1345,
    "payeeId"   : 22,
    "personId"  : 208,
    "categoryId": 1,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-06-01T04:00:00.000Z",
    "amount"    : 3000
  },
  {
    "id"        : 1346,
    "payeeId"   : 22,
    "personId"  : 208,
    "categoryId": 1,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-06-15T04:00:00.000Z",
    "amount"    : 3000
  },
  {
    "id"        : 1347,
    "payeeId"   : 8,
    "personId"  : 208,
    "categoryId": 3,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-07-21T22:47:00.000Z",
    "amount"    : 15
  },
  {
    "id"        : 1348,
    "payeeId"   : 21,
    "personId"  : 208,
    "categoryId": 2,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-07-17T00:18:00.000Z",
    "amount"    : 11.25
  },
  {
    "id"        : 1349,
    "payeeId"   : 22,
    "personId"  : 208,
    "categoryId": 1,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-07-01T04:00:00.000Z",
    "amount"    : 3000
  },
  {
    "id"        : 1350,
    "payeeId"   : 22,
    "personId"  : 208,
    "categoryId": 1,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-07-15T04:00:00.000Z",
    "amount"    : 3000
  },
  {
    "id"        : 1351,
    "payeeId"   : 20,
    "personId"  : 208,
    "categoryId": 3,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-08-03T17:07:00.000Z",
    "amount"    : 22.5
  },
  {
    "id"        : 1352,
    "payeeId"   : 21,
    "personId"  : 208,
    "categoryId": 2,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-08-29T00:24:00.000Z",
    "amount"    : 86.25
  },
  {
    "id"        : 1353,
    "payeeId"   : 22,
    "personId"  : 208,
    "categoryId": 1,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-08-01T04:00:00.000Z",
    "amount"    : 3000
  },
  {
    "id"        : 1354,
    "payeeId"   : 22,
    "personId"  : 208,
    "categoryId": 1,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-08-15T04:00:00.000Z",
    "amount"    : 3000
  },
  {
    "id"        : 1355,
    "payeeId"   : 11,
    "personId"  : 208,
    "categoryId": 2,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-09-13T16:44:00.000Z",
    "amount"    : 7.5
  },
  {
    "id"        : 1356,
    "payeeId"   : 21,
    "personId"  : 208,
    "categoryId": 2,
    "accountId" : 13,
    "txType"    : "2",
    "txDate"    : "2016-09-10T18:44:00.000Z",
    "amount"    : 11.25
  },
  {
    "id"        : 1357,
    "payeeId"   : 21,
    "personId"  : 209,
    "categoryId": 2,
    "accountId" : 14,
    "txType"    : "2",
    "txDate"    : "2016-07-02T17:02:00.000Z",
    "amount"    : 86.25
  },
  {
    "id"        : 1358,
    "payeeId"   : 11,
    "personId"  : 209,
    "categoryId": 2,
    "accountId" : 14,
    "txType"    : "2",
    "txDate"    : "2016-07-10T21:03:00.000Z",
    "amount"    : 57.5
  },
  {
    "id"        : 1359,
    "payeeId"   : 8,
    "personId"  : 209,
    "categoryId": 3,
    "accountId" : 14,
    "txType"    : "2",
    "txDate"    : "2016-07-17T21:46:00.000Z",
    "amount"    : 15
  },
  {
    "id"        : 1360,
    "payeeId"   : 20,
    "personId"  : 209,
    "categoryId": 3,
    "accountId" : 14,
    "txType"    : "2",
    "txDate"    : "2016-07-04T00:04:00.000Z",
    "amount"    : 22.5
  },
  {
    "id"        : 1361,
    "payeeId"   : 21,
    "personId"  : 209,
    "categoryId": 2,
    "accountId" : 14,
    "txType"    : "2",
    "txDate"    : "2016-08-11T17:13:00.000Z",
    "amount"    : 86.25
  },
  {
    "id"        : 1362,
    "payeeId"   : 8,
    "personId"  : 209,
    "categoryId": 3,
    "accountId" : 14,
    "txType"    : "2",
    "txDate"    : "2016-08-12T20:28:00.000Z",
    "amount"    : 115
  },
  {
    "id"        : 1363,
    "payeeId"   : 11,
    "personId"  : 209,
    "categoryId": 2,
    "accountId" : 14,
    "txType"    : "2",
    "txDate"    : "2016-08-09T19:06:00.000Z",
    "amount"    : 7.5
  },
  {
    "id"        : 1364,
    "payeeId"   : 20,
    "personId"  : 209,
    "categoryId": 3,
    "accountId" : 14,
    "txType"    : "2",
    "txDate"    : "2016-08-10T18:33:00.000Z",
    "amount"    : 172.5
  },
  {
    "id"        : 1365,
    "payeeId"   : 20,
    "personId"  : 209,
    "categoryId": 3,
    "accountId" : 14,
    "txType"    : "2",
    "txDate"    : "2016-09-13T00:07:00.000Z",
    "amount"    : 22.5
  },
  {
    "id"        : 1366,
    "payeeId"   : 21,
    "personId"  : 209,
    "categoryId": 2,
    "accountId" : 14,
    "txType"    : "2",
    "txDate"    : "2016-09-24T19:45:00.000Z",
    "amount"    : 86.25
  },
  {
    "id"        : 1367,
    "payeeId"   : 8,
    "personId"  : 209,
    "categoryId": 3,
    "accountId" : 14,
    "txType"    : "2",
    "txDate"    : "2016-09-15T22:35:00.000Z",
    "amount"    : 115
  },
  {
    "id"        : 1368,
    "payeeId"   : 11,
    "personId"  : 209,
    "categoryId": 2,
    "accountId" : 14,
    "txType"    : "2",
    "txDate"    : "2016-09-16T18:03:00.000Z",
    "amount"    : 7.5
  },
  {
    "id"        : 1369,
    "payeeId"   : 1,
    "personId"  : 210,
    "categoryId": 102,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-06-01T04:00:00.000Z",
    "amount"    : -1600
  },
  {
    "id"        : 1370,
    "payeeId"   : 2,
    "personId"  : 210,
    "categoryId": 106,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-06-10T04:00:00.000Z",
    "amount"    : -22.5
  },
  {
    "id"        : 1371,
    "payeeId"   : 3,
    "personId"  : 210,
    "categoryId": 106,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-06-20T04:00:00.000Z",
    "amount"    : -11.25
  },
  {
    "id"        : 1372,
    "payeeId"   : 12,
    "personId"  : 210,
    "categoryId": 105,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-07-11T16:07:00.000Z",
    "amount"    : -15
  },
  {
    "id"        : 1373,
    "payeeId"   : 14,
    "personId"  : 210,
    "categoryId": 105,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-07-21T19:34:00.000Z",
    "amount"    : -11.25
  },
  {
    "id"        : 1374,
    "payeeId"   : 17,
    "personId"  : 210,
    "categoryId": 106,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-06-25T04:00:00.000Z",
    "amount"    : -74.75
  },
  {
    "id"        : 1375,
    "payeeId"   : 6,
    "personId"  : 210,
    "categoryId": 103,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-07-30T21:42:00.000Z",
    "amount"    : -6
  },
  {
    "id"        : 1376,
    "payeeId"   : 13,
    "personId"  : 210,
    "categoryId": 104,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-07-18T00:02:00.000Z",
    "amount"    : -3.75
  },
  {
    "id"        : 1377,
    "payeeId"   : 16,
    "personId"  : 210,
    "categoryId": 104,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-07-15T21:36:00.000Z",
    "amount"    : -51.75
  },
  {
    "id"        : 1378,
    "payeeId"   : 18,
    "personId"  : 210,
    "categoryId": 102,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-07-27T17:05:00.000Z",
    "amount"    : -45
  },
  {
    "id"        : 1379,
    "payeeId"   : 25,
    "personId"  : 210,
    "categoryId": 101,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-07-17T00:44:00.000Z",
    "amount"    : -46
  },
  {
    "id"        : 1380,
    "payeeId"   : 9,
    "personId"  : 210,
    "categoryId": 107,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-07-08T18:49:00.000Z",
    "amount"    : -92
  },
  {
    "id"        : 1381,
    "payeeId"   : 5,
    "personId"  : 210,
    "categoryId": 103,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-07-16T20:50:00.000Z",
    "amount"    : -143.75
  },
  {
    "id"        : 1382,
    "payeeId"   : 24,
    "personId"  : 210,
    "categoryId": 101,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-08-01T00:48:00.000Z",
    "amount"    : -63.25
  },
  {
    "id"        : 1383,
    "payeeId"   : 10,
    "personId"  : 210,
    "categoryId": 107,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-07-28T23:36:00.000Z",
    "amount"    : -16.5
  },
  {
    "id"        : 1384,
    "payeeId"   : 15,
    "personId"  : 210,
    "categoryId": 103,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-07-25T23:13:00.000Z",
    "amount"    : -5.25
  },
  {
    "id"        : 1385,
    "payeeId"   : 19,
    "personId"  : 210,
    "categoryId": 107,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-07-26T22:41:00.000Z",
    "amount"    : -3.75
  },
  {
    "id"        : 1386,
    "payeeId"   : 7,
    "personId"  : 210,
    "categoryId": 104,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-07-30T18:22:00.000Z",
    "amount"    : -34.5
  },
  {
    "id"        : 1387,
    "payeeId"   : 4,
    "personId"  : 210,
    "categoryId": 103,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-07-25T18:49:00.000Z",
    "amount"    : -7.5
  },
  {
    "id"        : 1388,
    "payeeId"   : 26,
    "personId"  : 210,
    "categoryId": 108,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-07-13T19:05:00.000Z",
    "amount"    : -60
  },
  {
    "id"        : 1389,
    "payeeId"   : 6,
    "personId"  : 210,
    "categoryId": 103,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-07-11T17:14:00.000Z",
    "amount"    : -6
  },
  {
    "id"        : 1390,
    "payeeId"   : 13,
    "personId"  : 210,
    "categoryId": 104,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-07-12T17:02:00.000Z",
    "amount"    : -3.75
  },
  {
    "id"        : 1391,
    "payeeId"   : 16,
    "personId"  : 210,
    "categoryId": 104,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-07-02T23:08:00.000Z",
    "amount"    : -51.75
  },
  {
    "id"        : 1392,
    "payeeId"   : 18,
    "personId"  : 210,
    "categoryId": 102,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-07-09T16:38:00.000Z",
    "amount"    : -45
  },
  {
    "id"        : 1393,
    "payeeId"   : 25,
    "personId"  : 210,
    "categoryId": 101,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-07-08T23:58:00.000Z",
    "amount"    : -46
  },
  {
    "id"        : 1394,
    "payeeId"   : 9,
    "personId"  : 210,
    "categoryId": 107,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-07-11T00:17:00.000Z",
    "amount"    : -12
  },
  {
    "id"        : 1395,
    "payeeId"   : 5,
    "personId"  : 210,
    "categoryId": 103,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-07-03T23:47:00.000Z",
    "amount"    : -143.75
  },
  {
    "id"        : 1396,
    "payeeId"   : 24,
    "personId"  : 210,
    "categoryId": 101,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-07-16T00:24:00.000Z",
    "amount"    : -63.25
  },
  {
    "id"        : 1397,
    "payeeId"   : 10,
    "personId"  : 210,
    "categoryId": 107,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-07-30T17:47:00.000Z",
    "amount"    : -16.5
  },
  {
    "id"        : 1398,
    "payeeId"   : 15,
    "personId"  : 210,
    "categoryId": 103,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-07-05T18:14:00.000Z",
    "amount"    : -5.25
  },
  {
    "id"        : 1399,
    "payeeId"   : 19,
    "personId"  : 210,
    "categoryId": 107,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-07-03T21:20:00.000Z",
    "amount"    : -28.75
  },
  {
    "id"        : 1400,
    "payeeId"   : 7,
    "personId"  : 210,
    "categoryId": 104,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-07-09T16:21:00.000Z",
    "amount"    : -4.5
  },
  {
    "id"        : 1401,
    "payeeId"   : 4,
    "personId"  : 210,
    "categoryId": 103,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-07-07T19:11:00.000Z",
    "amount"    : -7.5
  },
  {
    "id"        : 1402,
    "payeeId"   : 26,
    "personId"  : 210,
    "categoryId": 108,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-07-28T16:50:00.000Z",
    "amount"    : -60
  },
  {
    "id"        : 1403,
    "payeeId"   : 6,
    "personId"  : 210,
    "categoryId": 103,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-07-26T17:14:00.000Z",
    "amount"    : -46
  },
  {
    "id"        : 1404,
    "payeeId"   : 13,
    "personId"  : 210,
    "categoryId": 104,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-07-31T19:24:00.000Z",
    "amount"    : -3.75
  },
  {
    "id"        : 1405,
    "payeeId"   : 16,
    "personId"  : 210,
    "categoryId": 104,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-07-21T16:43:00.000Z",
    "amount"    : -6.75
  },
  {
    "id"        : 1406,
    "payeeId"   : 18,
    "personId"  : 210,
    "categoryId": 102,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-07-12T22:16:00.000Z",
    "amount"    : -45
  },
  {
    "id"        : 1407,
    "payeeId"   : 25,
    "personId"  : 210,
    "categoryId": 101,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-07-22T19:42:00.000Z",
    "amount"    : -6
  },
  {
    "id"        : 1408,
    "payeeId"   : 9,
    "personId"  : 210,
    "categoryId": 107,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-07-08T00:37:00.000Z",
    "amount"    : -92
  },
  {
    "id"        : 1409,
    "payeeId"   : 5,
    "personId"  : 210,
    "categoryId": 103,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-07-07T18:04:00.000Z",
    "amount"    : -143.75
  },
  {
    "id"        : 1410,
    "payeeId"   : 24,
    "personId"  : 210,
    "categoryId": 101,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-07-11T16:08:00.000Z",
    "amount"    : -63.25
  },
  {
    "id"        : 1411,
    "payeeId"   : 10,
    "personId"  : 210,
    "categoryId": 107,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-07-03T21:41:00.000Z",
    "amount"    : -16.5
  },
  {
    "id"        : 1412,
    "payeeId"   : 15,
    "personId"  : 210,
    "categoryId": 103,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-07-07T18:15:00.000Z",
    "amount"    : -40.25
  },
  {
    "id"        : 1413,
    "payeeId"   : 19,
    "personId"  : 210,
    "categoryId": 107,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-07-12T00:31:00.000Z",
    "amount"    : -28.75
  },
  {
    "id"        : 1414,
    "payeeId"   : 7,
    "personId"  : 210,
    "categoryId": 104,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-07-23T23:05:00.000Z",
    "amount"    : -34.5
  },
  {
    "id"        : 1415,
    "payeeId"   : 4,
    "personId"  : 210,
    "categoryId": 103,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-07-21T23:29:00.000Z",
    "amount"    : -7.5
  },
  {
    "id"        : 1416,
    "payeeId"   : 26,
    "personId"  : 210,
    "categoryId": 108,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-07-21T23:46:00.000Z",
    "amount"    : -60
  },
  {
    "id"        : 1417,
    "payeeId"   : 6,
    "personId"  : 210,
    "categoryId": 103,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-07-10T18:36:00.000Z",
    "amount"    : -6
  },
  {
    "id"        : 1418,
    "payeeId"   : 13,
    "personId"  : 210,
    "categoryId": 104,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-07-10T16:52:00.000Z",
    "amount"    : -28.75
  },
  {
    "id"        : 1419,
    "payeeId"   : 1,
    "personId"  : 210,
    "categoryId": 102,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-07-01T04:00:00.000Z",
    "amount"    : -1600
  },
  {
    "id"        : 1420,
    "payeeId"   : 2,
    "personId"  : 210,
    "categoryId": 106,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-07-10T04:00:00.000Z",
    "amount"    : -172.5
  },
  {
    "id"        : 1421,
    "payeeId"   : 3,
    "personId"  : 210,
    "categoryId": 106,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-07-20T04:00:00.000Z",
    "amount"    : -11.25
  },
  {
    "id"        : 1422,
    "payeeId"   : 12,
    "personId"  : 210,
    "categoryId": 105,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-08-17T22:37:00.000Z",
    "amount"    : -15
  },
  {
    "id"        : 1423,
    "payeeId"   : 14,
    "personId"  : 210,
    "categoryId": 105,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-08-21T21:43:00.000Z",
    "amount"    : -86.25
  },
  {
    "id"        : 1424,
    "payeeId"   : 17,
    "personId"  : 210,
    "categoryId": 106,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-07-25T04:00:00.000Z",
    "amount"    : -74.75
  },
  {
    "id"        : 1425,
    "payeeId"   : 15,
    "personId"  : 210,
    "categoryId": 103,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-08-31T22:01:00.000Z",
    "amount"    : -40.25
  },
  {
    "id"        : 1426,
    "payeeId"   : 26,
    "personId"  : 210,
    "categoryId": 108,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-08-21T20:57:00.000Z",
    "amount"    : -60
  },
  {
    "id"        : 1427,
    "payeeId"   : 16,
    "personId"  : 210,
    "categoryId": 104,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-08-08T21:59:00.000Z",
    "amount"    : -6.75
  },
  {
    "id"        : 1428,
    "payeeId"   : 18,
    "personId"  : 210,
    "categoryId": 102,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-08-23T17:26:00.000Z",
    "amount"    : -45
  },
  {
    "id"        : 1429,
    "payeeId"   : 9,
    "personId"  : 210,
    "categoryId": 107,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-08-26T19:02:00.000Z",
    "amount"    : -92
  },
  {
    "id"        : 1430,
    "payeeId"   : 6,
    "personId"  : 210,
    "categoryId": 103,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-08-02T20:45:00.000Z",
    "amount"    : -6
  },
  {
    "id"        : 1431,
    "payeeId"   : 13,
    "personId"  : 210,
    "categoryId": 104,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-08-03T18:55:00.000Z",
    "amount"    : -3.75
  },
  {
    "id"        : 1432,
    "payeeId"   : 5,
    "personId"  : 210,
    "categoryId": 103,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-08-17T18:38:00.000Z",
    "amount"    : -143.75
  },
  {
    "id"        : 1433,
    "payeeId"   : 4,
    "personId"  : 210,
    "categoryId": 103,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-08-08T16:58:00.000Z",
    "amount"    : -57.5
  },
  {
    "id"        : 1434,
    "payeeId"   : 19,
    "personId"  : 210,
    "categoryId": 107,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-08-13T16:33:00.000Z",
    "amount"    : -3.75
  },
  {
    "id"        : 1435,
    "payeeId"   : 24,
    "personId"  : 210,
    "categoryId": 101,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-08-09T18:26:00.000Z",
    "amount"    : -63.25
  },
  {
    "id"        : 1436,
    "payeeId"   : 10,
    "personId"  : 210,
    "categoryId": 107,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-08-25T16:52:00.000Z",
    "amount"    : -16.5
  },
  {
    "id"        : 1437,
    "payeeId"   : 7,
    "personId"  : 210,
    "categoryId": 104,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-08-05T20:08:00.000Z",
    "amount"    : -34.5
  },
  {
    "id"        : 1438,
    "payeeId"   : 25,
    "personId"  : 210,
    "categoryId": 101,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-08-12T19:36:00.000Z",
    "amount"    : -6
  },
  {
    "id"        : 1439,
    "payeeId"   : 15,
    "personId"  : 210,
    "categoryId": 103,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-08-30T16:59:00.000Z",
    "amount"    : -40.25
  },
  {
    "id"        : 1440,
    "payeeId"   : 26,
    "personId"  : 210,
    "categoryId": 108,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-08-16T20:52:00.000Z",
    "amount"    : -60
  },
  {
    "id"        : 1441,
    "payeeId"   : 16,
    "personId"  : 210,
    "categoryId": 104,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-08-05T22:59:00.000Z",
    "amount"    : -6.75
  },
  {
    "id"        : 1442,
    "payeeId"   : 18,
    "personId"  : 210,
    "categoryId": 102,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-08-27T23:04:00.000Z",
    "amount"    : -45
  },
  {
    "id"        : 1443,
    "payeeId"   : 9,
    "personId"  : 210,
    "categoryId": 107,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-08-19T00:57:00.000Z",
    "amount"    : -12
  },
  {
    "id"        : 1444,
    "payeeId"   : 6,
    "personId"  : 210,
    "categoryId": 103,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-08-05T22:57:00.000Z",
    "amount"    : -46
  },
  {
    "id"        : 1445,
    "payeeId"   : 13,
    "personId"  : 210,
    "categoryId": 104,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-08-06T19:14:00.000Z",
    "amount"    : -28.75
  },
  {
    "id"        : 1446,
    "payeeId"   : 5,
    "personId"  : 210,
    "categoryId": 103,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-08-04T21:42:00.000Z",
    "amount"    : -143.75
  },
  {
    "id"        : 1447,
    "payeeId"   : 4,
    "personId"  : 210,
    "categoryId": 103,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-08-26T17:26:00.000Z",
    "amount"    : -57.5
  },
  {
    "id"        : 1448,
    "payeeId"   : 19,
    "personId"  : 210,
    "categoryId": 107,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-08-20T16:27:00.000Z",
    "amount"    : -28.75
  },
  {
    "id"        : 1449,
    "payeeId"   : 24,
    "personId"  : 210,
    "categoryId": 101,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-08-25T20:06:00.000Z",
    "amount"    : -63.25
  },
  {
    "id"        : 1450,
    "payeeId"   : 10,
    "personId"  : 210,
    "categoryId": 107,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-08-21T20:59:00.000Z",
    "amount"    : -16.5
  },
  {
    "id"        : 1451,
    "payeeId"   : 7,
    "personId"  : 210,
    "categoryId": 104,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-08-04T18:09:00.000Z",
    "amount"    : -34.5
  },
  {
    "id"        : 1452,
    "payeeId"   : 25,
    "personId"  : 210,
    "categoryId": 101,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-08-16T00:27:00.000Z",
    "amount"    : -6
  },
  {
    "id"        : 1453,
    "payeeId"   : 15,
    "personId"  : 210,
    "categoryId": 103,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-08-03T18:58:00.000Z",
    "amount"    : -40.25
  },
  {
    "id"        : 1454,
    "payeeId"   : 26,
    "personId"  : 210,
    "categoryId": 108,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-08-30T00:52:00.000Z",
    "amount"    : -60
  },
  {
    "id"        : 1455,
    "payeeId"   : 16,
    "personId"  : 210,
    "categoryId": 104,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-08-15T00:40:00.000Z",
    "amount"    : -6.75
  },
  {
    "id"        : 1456,
    "payeeId"   : 18,
    "personId"  : 210,
    "categoryId": 102,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-08-23T18:53:00.000Z",
    "amount"    : -45
  },
  {
    "id"        : 1457,
    "payeeId"   : 9,
    "personId"  : 210,
    "categoryId": 107,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-08-23T00:58:00.000Z",
    "amount"    : -12
  },
  {
    "id"        : 1458,
    "payeeId"   : 6,
    "personId"  : 210,
    "categoryId": 103,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-08-16T23:50:00.000Z",
    "amount"    : -6
  },
  {
    "id"        : 1459,
    "payeeId"   : 13,
    "personId"  : 210,
    "categoryId": 104,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-08-26T22:33:00.000Z",
    "amount"    : -28.75
  },
  {
    "id"        : 1460,
    "payeeId"   : 5,
    "personId"  : 210,
    "categoryId": 103,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-08-18T17:43:00.000Z",
    "amount"    : -18.75
  },
  {
    "id"        : 1461,
    "payeeId"   : 4,
    "personId"  : 210,
    "categoryId": 103,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-09-01T20:10:00.000Z",
    "amount"    : -7.5
  },
  {
    "id"        : 1462,
    "payeeId"   : 19,
    "personId"  : 210,
    "categoryId": 107,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-08-08T16:02:00.000Z",
    "amount"    : -3.75
  },
  {
    "id"        : 1463,
    "payeeId"   : 24,
    "personId"  : 210,
    "categoryId": 101,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-08-23T00:45:00.000Z",
    "amount"    : -63.25
  },
  {
    "id"        : 1464,
    "payeeId"   : 10,
    "personId"  : 210,
    "categoryId": 107,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-08-23T23:53:00.000Z",
    "amount"    : -16.5
  },
  {
    "id"        : 1465,
    "payeeId"   : 7,
    "personId"  : 210,
    "categoryId": 104,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-08-16T21:54:00.000Z",
    "amount"    : -34.5
  },
  {
    "id"        : 1466,
    "payeeId"   : 25,
    "personId"  : 210,
    "categoryId": 101,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-08-07T22:17:00.000Z",
    "amount"    : -6
  },
  {
    "id"        : 1467,
    "payeeId"   : 15,
    "personId"  : 210,
    "categoryId": 103,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-08-09T17:24:00.000Z",
    "amount"    : -5.25
  },
  {
    "id"        : 1468,
    "payeeId"   : 26,
    "personId"  : 210,
    "categoryId": 108,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-08-04T22:00:00.000Z",
    "amount"    : -60
  },
  {
    "id"        : 1469,
    "payeeId"   : 1,
    "personId"  : 210,
    "categoryId": 102,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-08-01T04:00:00.000Z",
    "amount"    : -1600
  },
  {
    "id"        : 1470,
    "payeeId"   : 2,
    "personId"  : 210,
    "categoryId": 106,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-08-10T04:00:00.000Z",
    "amount"    : -22.5
  },
  {
    "id"        : 1471,
    "payeeId"   : 3,
    "personId"  : 210,
    "categoryId": 106,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-08-20T04:00:00.000Z",
    "amount"    : -11.25
  },
  {
    "id"        : 1472,
    "payeeId"   : 12,
    "personId"  : 210,
    "categoryId": 105,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-09-02T16:47:00.000Z",
    "amount"    : -115
  },
  {
    "id"        : 1473,
    "payeeId"   : 14,
    "personId"  : 210,
    "categoryId": 105,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-09-26T00:54:00.000Z",
    "amount"    : -86.25
  },
  {
    "id"        : 1474,
    "payeeId"   : 17,
    "personId"  : 210,
    "categoryId": 106,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-08-25T04:00:00.000Z",
    "amount"    : -9.75
  },
  {
    "id"        : 1475,
    "payeeId"   : 16,
    "personId"  : 210,
    "categoryId": 104,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-09-18T00:38:00.000Z",
    "amount"    : -6.75
  },
  {
    "id"        : 1476,
    "payeeId"   : 9,
    "personId"  : 210,
    "categoryId": 107,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-09-09T20:01:00.000Z",
    "amount"    : -92
  },
  {
    "id"        : 1477,
    "payeeId"   : 5,
    "personId"  : 210,
    "categoryId": 103,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-09-19T23:01:00.000Z",
    "amount"    : -143.75
  },
  {
    "id"        : 1478,
    "payeeId"   : 19,
    "personId"  : 210,
    "categoryId": 107,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-09-05T00:24:00.000Z",
    "amount"    : -3.75
  },
  {
    "id"        : 1479,
    "payeeId"   : 26,
    "personId"  : 210,
    "categoryId": 108,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-09-03T21:26:00.000Z",
    "amount"    : -60
  },
  {
    "id"        : 1480,
    "payeeId"   : 24,
    "personId"  : 210,
    "categoryId": 101,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-09-04T22:59:00.000Z",
    "amount"    : -63.25
  },
  {
    "id"        : 1481,
    "payeeId"   : 4,
    "personId"  : 210,
    "categoryId": 103,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-09-22T23:43:00.000Z",
    "amount"    : -7.5
  },
  {
    "id"        : 1482,
    "payeeId"   : 6,
    "personId"  : 210,
    "categoryId": 103,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-10-02T20:21:00.000Z",
    "amount"    : -6
  },
  {
    "id"        : 1483,
    "payeeId"   : 7,
    "personId"  : 210,
    "categoryId": 104,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-09-26T17:20:00.000Z",
    "amount"    : -34.5
  },
  {
    "id"        : 1484,
    "payeeId"   : 15,
    "personId"  : 210,
    "categoryId": 103,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-09-09T18:41:00.000Z",
    "amount"    : -40.25
  },
  {
    "id"        : 1485,
    "payeeId"   : 25,
    "personId"  : 210,
    "categoryId": 101,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-10-01T23:13:00.000Z",
    "amount"    : -6
  },
  {
    "id"        : 1486,
    "payeeId"   : 10,
    "personId"  : 210,
    "categoryId": 107,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-10-01T23:49:00.000Z",
    "amount"    : -126.5
  },
  {
    "id"        : 1487,
    "payeeId"   : 18,
    "personId"  : 210,
    "categoryId": 102,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-09-06T16:33:00.000Z",
    "amount"    : -45
  },
  {
    "id"        : 1488,
    "payeeId"   : 13,
    "personId"  : 210,
    "categoryId": 104,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-09-12T17:01:00.000Z",
    "amount"    : -28.75
  },
  {
    "id"        : 1489,
    "payeeId"   : 16,
    "personId"  : 210,
    "categoryId": 104,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-10-01T00:19:00.000Z",
    "amount"    : -6.75
  },
  {
    "id"        : 1490,
    "payeeId"   : 9,
    "personId"  : 210,
    "categoryId": 107,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-09-28T18:54:00.000Z",
    "amount"    : -92
  },
  {
    "id"        : 1491,
    "payeeId"   : 5,
    "personId"  : 210,
    "categoryId": 103,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-09-15T00:05:00.000Z",
    "amount"    : -18.75
  },
  {
    "id"        : 1492,
    "payeeId"   : 19,
    "personId"  : 210,
    "categoryId": 107,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-09-29T20:34:00.000Z",
    "amount"    : -28.75
  },
  {
    "id"        : 1493,
    "payeeId"   : 26,
    "personId"  : 210,
    "categoryId": 108,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-09-29T21:34:00.000Z",
    "amount"    : -60
  },
  {
    "id"        : 1494,
    "payeeId"   : 24,
    "personId"  : 210,
    "categoryId": 101,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-09-15T19:18:00.000Z",
    "amount"    : -63.25
  },
  {
    "id"        : 1495,
    "payeeId"   : 4,
    "personId"  : 210,
    "categoryId": 103,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-09-04T20:27:00.000Z",
    "amount"    : -57.5
  },
  {
    "id"        : 1496,
    "payeeId"   : 6,
    "personId"  : 210,
    "categoryId": 103,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-09-09T21:39:00.000Z",
    "amount"    : -6
  },
  {
    "id"        : 1497,
    "payeeId"   : 7,
    "personId"  : 210,
    "categoryId": 104,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-09-18T21:08:00.000Z",
    "amount"    : -4.5
  },
  {
    "id"        : 1498,
    "payeeId"   : 15,
    "personId"  : 210,
    "categoryId": 103,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-09-19T20:01:00.000Z",
    "amount"    : -40.25
  },
  {
    "id"        : 1499,
    "payeeId"   : 25,
    "personId"  : 210,
    "categoryId": 101,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-09-09T21:24:00.000Z",
    "amount"    : -46
  },
  {
    "id"        : 1500,
    "payeeId"   : 10,
    "personId"  : 210,
    "categoryId": 107,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-09-03T21:04:00.000Z",
    "amount"    : -16.5
  },
  {
    "id"        : 1501,
    "payeeId"   : 18,
    "personId"  : 210,
    "categoryId": 102,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-09-12T23:21:00.000Z",
    "amount"    : -45
  },
  {
    "id"        : 1502,
    "payeeId"   : 13,
    "personId"  : 210,
    "categoryId": 104,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-09-13T00:33:00.000Z",
    "amount"    : -3.75
  },
  {
    "id"        : 1503,
    "payeeId"   : 16,
    "personId"  : 210,
    "categoryId": 104,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-09-16T18:47:00.000Z",
    "amount"    : -6.75
  },
  {
    "id"        : 1504,
    "payeeId"   : 9,
    "personId"  : 210,
    "categoryId": 107,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-10-02T18:19:00.000Z",
    "amount"    : -12
  },
  {
    "id"        : 1505,
    "payeeId"   : 5,
    "personId"  : 210,
    "categoryId": 103,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-09-25T22:31:00.000Z",
    "amount"    : -18.75
  },
  {
    "id"        : 1506,
    "payeeId"   : 19,
    "personId"  : 210,
    "categoryId": 107,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-09-14T17:56:00.000Z",
    "amount"    : -28.75
  },
  {
    "id"        : 1507,
    "payeeId"   : 26,
    "personId"  : 210,
    "categoryId": 108,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-09-14T22:44:00.000Z",
    "amount"    : -60
  },
  {
    "id"        : 1508,
    "payeeId"   : 24,
    "personId"  : 210,
    "categoryId": 101,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-10-01T16:06:00.000Z",
    "amount"    : -63.25
  },
  {
    "id"        : 1509,
    "payeeId"   : 4,
    "personId"  : 210,
    "categoryId": 103,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-09-24T18:22:00.000Z",
    "amount"    : -7.5
  },
  {
    "id"        : 1510,
    "payeeId"   : 6,
    "personId"  : 210,
    "categoryId": 103,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-09-13T19:28:00.000Z",
    "amount"    : -46
  },
  {
    "id"        : 1511,
    "payeeId"   : 7,
    "personId"  : 210,
    "categoryId": 104,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-09-13T20:24:00.000Z",
    "amount"    : -34.5
  },
  {
    "id"        : 1512,
    "payeeId"   : 15,
    "personId"  : 210,
    "categoryId": 103,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-09-15T21:40:00.000Z",
    "amount"    : -5.25
  },
  {
    "id"        : 1513,
    "payeeId"   : 25,
    "personId"  : 210,
    "categoryId": 101,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-09-30T16:56:00.000Z",
    "amount"    : -6
  },
  {
    "id"        : 1514,
    "payeeId"   : 10,
    "personId"  : 210,
    "categoryId": 107,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-09-22T19:15:00.000Z",
    "amount"    : -126.5
  },
  {
    "id"        : 1515,
    "payeeId"   : 18,
    "personId"  : 210,
    "categoryId": 102,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-09-06T16:51:00.000Z",
    "amount"    : -45
  },
  {
    "id"        : 1516,
    "payeeId"   : 13,
    "personId"  : 210,
    "categoryId": 104,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-09-15T19:54:00.000Z",
    "amount"    : -28.75
  },
  {
    "id"        : 1517,
    "payeeId"   : 16,
    "personId"  : 210,
    "categoryId": 104,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-09-11T22:54:00.000Z",
    "amount"    : -6.75
  },
  {
    "id"        : 1518,
    "payeeId"   : 9,
    "personId"  : 210,
    "categoryId": 107,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-09-07T00:07:00.000Z",
    "amount"    : -92
  },
  {
    "id"        : 1519,
    "payeeId"   : 23,
    "personId"  : 210,
    "categoryId": 1,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-06-01T04:00:00.000Z",
    "amount"    : 3000
  },
  {
    "id"        : 1520,
    "payeeId"   : 23,
    "personId"  : 210,
    "categoryId": 1,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-06-15T04:00:00.000Z",
    "amount"    : 3000
  },
  {
    "id"        : 1521,
    "payeeId"   : 11,
    "personId"  : 210,
    "categoryId": 2,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-07-05T16:13:00.000Z",
    "amount"    : 7.5
  },
  {
    "id"        : 1522,
    "payeeId"   : 8,
    "personId"  : 210,
    "categoryId": 3,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-07-12T17:11:00.000Z",
    "amount"    : 15
  },
  {
    "id"        : 1523,
    "payeeId"   : 23,
    "personId"  : 210,
    "categoryId": 1,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-07-01T04:00:00.000Z",
    "amount"    : 3000
  },
  {
    "id"        : 1524,
    "payeeId"   : 23,
    "personId"  : 210,
    "categoryId": 1,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-07-15T04:00:00.000Z",
    "amount"    : 3000
  },
  {
    "id"        : 1525,
    "payeeId"   : 21,
    "personId"  : 210,
    "categoryId": 2,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-08-02T20:10:00.000Z",
    "amount"    : 11.25
  },
  {
    "id"        : 1526,
    "payeeId"   : 8,
    "personId"  : 210,
    "categoryId": 3,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-08-07T23:21:00.000Z",
    "amount"    : 115
  },
  {
    "id"        : 1527,
    "payeeId"   : 23,
    "personId"  : 210,
    "categoryId": 1,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-08-01T04:00:00.000Z",
    "amount"    : 3000
  },
  {
    "id"        : 1528,
    "payeeId"   : 23,
    "personId"  : 210,
    "categoryId": 1,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-08-15T04:00:00.000Z",
    "amount"    : 3000
  },
  {
    "id"        : 1529,
    "payeeId"   : 20,
    "personId"  : 210,
    "categoryId": 3,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-09-07T18:04:00.000Z",
    "amount"    : 22.5
  },
  {
    "id"        : 1530,
    "payeeId"   : 8,
    "personId"  : 210,
    "categoryId": 3,
    "accountId" : 15,
    "txType"    : "2",
    "txDate"    : "2016-10-01T22:20:00.000Z",
    "amount"    : 115
  },
  {
    "id"        : 1531,
    "payeeId"   : 21,
    "personId"  : 210,
    "categoryId": 2,
    "accountId" : 16,
    "txType"    : "2",
    "txDate"    : "2016-07-19T16:38:00.000Z",
    "amount"    : 11.25
  },
  {
    "id"        : 1532,
    "payeeId"   : 11,
    "personId"  : 210,
    "categoryId": 2,
    "accountId" : 16,
    "txType"    : "2",
    "txDate"    : "2016-07-18T17:17:00.000Z",
    "amount"    : 57.5
  },
  {
    "id"        : 1533,
    "payeeId"   : 8,
    "personId"  : 210,
    "categoryId": 3,
    "accountId" : 16,
    "txType"    : "2",
    "txDate"    : "2016-07-15T19:44:00.000Z",
    "amount"    : 115
  },
  {
    "id"        : 1534,
    "payeeId"   : 20,
    "personId"  : 210,
    "categoryId": 3,
    "accountId" : 16,
    "txType"    : "2",
    "txDate"    : "2016-07-17T19:16:00.000Z",
    "amount"    : 172.5
  },
  {
    "id"        : 1535,
    "payeeId"   : 11,
    "personId"  : 210,
    "categoryId": 2,
    "accountId" : 16,
    "txType"    : "2",
    "txDate"    : "2016-08-24T00:37:00.000Z",
    "amount"    : 57.5
  },
  {
    "id"        : 1536,
    "payeeId"   : 8,
    "personId"  : 210,
    "categoryId": 3,
    "accountId" : 16,
    "txType"    : "2",
    "txDate"    : "2016-08-29T16:59:00.000Z",
    "amount"    : 15
  },
  {
    "id"        : 1537,
    "payeeId"   : 21,
    "personId"  : 210,
    "categoryId": 2,
    "accountId" : 16,
    "txType"    : "2",
    "txDate"    : "2016-08-07T20:57:00.000Z",
    "amount"    : 86.25
  },
  {
    "id"        : 1538,
    "payeeId"   : 20,
    "personId"  : 210,
    "categoryId": 3,
    "accountId" : 16,
    "txType"    : "2",
    "txDate"    : "2016-08-16T19:04:00.000Z",
    "amount"    : 22.5
  },
  {
    "id"        : 1539,
    "payeeId"   : 20,
    "personId"  : 210,
    "categoryId": 3,
    "accountId" : 16,
    "txType"    : "2",
    "txDate"    : "2016-09-27T20:56:00.000Z",
    "amount"    : 172.5
  },
  {
    "id"        : 1540,
    "payeeId"   : 8,
    "personId"  : 210,
    "categoryId": 3,
    "accountId" : 16,
    "txType"    : "2",
    "txDate"    : "2016-09-13T17:30:00.000Z",
    "amount"    : 115
  },
  {
    "id"        : 1541,
    "payeeId"   : 21,
    "personId"  : 210,
    "categoryId": 2,
    "accountId" : 16,
    "txType"    : "2",
    "txDate"    : "2016-09-17T22:52:00.000Z",
    "amount"    : 11.25
  },
  {
    "id"        : 1542,
    "payeeId"   : 11,
    "personId"  : 210,
    "categoryId": 2,
    "accountId" : 16,
    "txType"    : "2",
    "txDate"    : "2016-09-07T19:55:00.000Z",
    "amount"    : 57.5
  }
];

let payees = {
  get: id => {
    let tmpPayee = payeesData.find( payee => payee.id === id );
    tmpPayee.category = categories.get( tmpPayee.categoryId );
    return tmpPayee;
  },

  size: () => this.payeesData.length
};

let accounts = {
  get: id => {
    let tmpAccount = accountsData.find( account => account.id === id );
    tmpAccount.person = people.get( tmpAccount.personId );
    tmpAccount.accountType = staticData.accountTypes[ tmpAccount.accountTypeId ];
    tmpAccount.accountName = tmpAccount.accountType.accountTypeName;
    return tmpAccount;
  },

  size: () => this.accountsData.length,
};

let people = {
  get: id => peopleData.find( person => person.id === Number(id) ),

  size: () => peopleData.length,

  list: () => [...peopleData]
};

let categories = {
  get: id => categoriesData.find( category => category.id === Number(id) ),

  size: () => this.categoriesData.length
};

let tx = {
  get: id => {
    let tmpTx = txData.find( tx => tx.id === Number(id) );
    tmpTx.person = people.get( tmpTx.personId );
    tmpTx.account = accounts.get( tmpTx.accountId );
    tmpTx.payee = payees.get( tmpTx.payeeId );
    tmpTx.category = categories.get( tmpTx.categoryId );

    return tmpTx;
  },

  size: () => txData.length

};

module.exports = { categories, staticData, accounts, people, payees, tx };

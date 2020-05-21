const dataset1 = [
	{
		"raion_id": "1",
		"raion_name": "город-герой Волгоград",
		"raion_value": "-2.8",
		"raion_group": "4"
	},
	{
		"raion_id": "2",
		"raion_name": "г. Волжский",
		"raion_value": "-3.0",
		"raion_group": "4"
	},
	{
		"raion_id": "3",
		"raion_name": "г. Камышин",
		"raion_value": "-5.9",
		"raion_group": "3"
	},
	{
		"raion_id": "4",
		"raion_name": "г. Михайловка",
		"raion_value": "-5.5",
		"raion_group": "3"
	},
	{
		"raion_id": "5",
		"raion_name": "г. Урюпинск",
		"raion_value": "-6.8",
		"raion_group": "2"
	},
	{
		"raion_id": "6",
		"raion_name": "г. Фролово",
		"raion_value": "-5.6",
		"raion_group": "3"
	},
	{
		"raion_id": "7",
		"raion_name": "Алексеевский",
		"raion_value": "-7.4",
		"raion_group": "2"
	},
	{
		"raion_id": "8",
		"raion_name": "Быковский",
		"raion_value": "-0.8",
		"raion_group": "5"
	},
	{
		"raion_id": "9",
		"raion_name": "Городищенский",
		"raion_value": "-1.4",
		"raion_group": "5"
	},
	{
		"raion_id": "10",
		"raion_name": "Даниловский",
		"raion_value": "-10.6",
		"raion_group": "1"
	},
	{
		"raion_id": "11",
		"raion_name": "Дубовский",
		"raion_value": "-5.8",
		"raion_group": "3"
	},
	{
		"raion_id": "12",
		"raion_name": "Еланский",
		"raion_value": "-8.7",
		"raion_group": "1"
	},
	{
		"raion_id": "13",
		"raion_name": "Жирновский",
		"raion_value": "-9.6",
		"raion_group": "1"
	},
	{
		"raion_id": "14",
		"raion_name": "Иловлинский",
		"raion_value": "-3.9",
		"raion_group": "4"
	},
	{
		"raion_id": "15",
		"raion_name": "Калачевский",
		"raion_value": "-5.8",
		"raion_group": "3"
	},
	{
		"raion_id": "16",
		"raion_name": "Камышинский",
		"raion_value": "-6.0",
		"raion_group": "2"
	},
	{
		"raion_id": "17",
		"raion_name": "Киквидзенский",
		"raion_value": "-6.4",
		"raion_group": "2"
	},
	{
		"raion_id": "18",
		"raion_name": "Клетский",
		"raion_value": "-3.7",
		"raion_group": "4"
	},
	{
		"raion_id": "19",
		"raion_name": "Котельниковский",
		"raion_value": "-1.5",
		"raion_group": "5"
	},
	{
		"raion_id": "20",
		"raion_name": "Котовский",
		"raion_value": "-6.6",
		"raion_group": "2"
	},
	{
		"raion_id": "21",
		"raion_name": "Кумылженский",
		"raion_value": "-6.6",
		"raion_group": "2"
	},
	{
		"raion_id": "22",
		"raion_name": "Ленинский",
		"raion_value": "-4.9",
		"raion_group": "4"
	},
	{
		"raion_id": "23",
		"raion_name": "Нехаевский",
		"raion_value": "-9.8",
		"raion_group": "1"
	},
	{
		"raion_id": "24",
		"raion_name": "Николаевский",
		"raion_value": "-1.7",
		"raion_group": "5"
	},
	{
		"raion_id": "25",
		"raion_name": "Новоаннинский",
		"raion_value": "-8.3",
		"raion_group": "1"
	},
	{
		"raion_id": "26",
		"raion_name": "Новониколаевский",
		"raion_value": "-5.2",
		"raion_group": "3"
	},
	{
		"raion_id": "27",
		"raion_name": "Октябрьский",
		"raion_value": "-5.0",
		"raion_group": "3"
	},
	{
		"raion_id": "28",
		"raion_name": "Ольховский",
		"raion_value": "-5.1",
		"raion_group": "3"
	},
	{
		"raion_id": "29",
		"raion_name": "Палласовский",
		"raion_value": "0.8",
		"raion_group": "6"
	},
	{
		"raion_id": "30",
		"raion_name": "Руднянский",
		"raion_value": "-9.8",
		"raion_group": "1"
	},
	{
		"raion_id": "31",
		"raion_name": "Светлоярский",
		"raion_value": "-1.0",
		"raion_group": "5"
	},
	{
		"raion_id": "32",
		"raion_name": "Серафимовичский",
		"raion_value": "-9.8",
		"raion_group": "1"
	},
	{
		"raion_id": "33",
		"raion_name": "Среднеахтубинский",
		"raion_value": "-2.7",
		"raion_group": "4"
	},
	{
		"raion_id": "34",
		"raion_name": "Старополтавский",
		"raion_value": "-2.9",
		"raion_group": "4"
	},
	{
		"raion_id": "35",
		"raion_name": "Суровикинский",
		"raion_value": "-5.7",
		"raion_group": "3"
	},
	{
		"raion_id": "36",
		"raion_name": "Урюпинский",
		"raion_value": "-11.3",
		"raion_group": "1"
	},
	{
		"raion_id": "37",
		"raion_name": "Фроловский",
		"raion_value": "-4.4",
		"raion_group": "4"
	},
	{
		"raion_id": "38",
		"raion_name": "Чернышковский",
		"raion_value": "-7.7",
		"raion_group": "2"
	}
];

const legend1 = [
    {
        "zag": "Естественный прирост (убыль) населения Волгоградской области за 2018 год",
        "podzag": "на 1000 человек населения"
    },
    {
        "min": "-11.3",
        "max": "-8.3"
    },
    {
        "min": "-8.2",
        "max": "-6.0"
    },
    {
        "min": "-5.9",
        "max": "-5.0"
    },
    {
        "min": "-4.9",
        "max": "-2.7"
    },
    {
        "min": "-2.6",
        "max": "0"
    },
    {
        "min": "0.1",
        "max": "0.8"
    }
];

const dataset2 = [
	{
		"raion_id": "1",
		"raion_name": "город-герой Волгоград",
		"raion_value": "9.6",
		"raion_group": "3"
	},
	{
		"raion_id": "2",
		"raion_name": "г. Волжский",
		"raion_value": "8.6",
		"raion_group": "2"
	},
	{
		"raion_id": "3",
		"raion_name": "г. Камышин",
		"raion_value": "7.9",
		"raion_group": "1"
	},
	{
		"raion_id": "4",
		"raion_name": "г. Михайловка",
		"raion_value": "8.2",
		"raion_group": "2"
	},
	{
		"raion_id": "5",
		"raion_name": "г. Урюпинск",
		"raion_value": "8.3",
		"raion_group": "2"
	},
	{
		"raion_id": "6",
		"raion_name": "г. Фролово",
		"raion_value": "9",
		"raion_group": "2"
	},
	{
		"raion_id": "7",
		"raion_name": "Алексеевский",
		"raion_value": "6.7",
		"raion_group": "1"
	},
	{
		"raion_id": "8",
		"raion_name": "Быковский",
		"raion_value": "12",
		"raion_group": "5"
	},
	{
		"raion_id": "9",
		"raion_name": "Городищенский",
		"raion_value": "11.3",
		"raion_group": "5"
	},
	{
		"raion_id": "10",
		"raion_name": "Даниловский",
		"raion_value": "9.6",
		"raion_group": "3"
	},
	{
		"raion_id": "11",
		"raion_name": "Дубовский",
		"raion_value": "9.3",
		"raion_group": "3"
	},
	{
		"raion_id": "12",
		"raion_name": "Еланский",
		"raion_value": "7.9",
		"raion_group": "1"
	},
	{
		"raion_id": "13",
		"raion_name": "Жирновский",
		"raion_value": "8.6",
		"raion_group": "2"
	},
	{
		"raion_id": "14",
		"raion_name": "Иловлинский",
		"raion_value": "10.8",
		"raion_group": "5"
	},
	{
		"raion_id": "15",
		"raion_name": "Калачевский",
		"raion_value": "10.8",
		"raion_group": "5"
	},
	{
		"raion_id": "16",
		"raion_name": "Камышинский",
		"raion_value": "8.6",
		"raion_group": "2"
	},
	{
		"raion_id": "17",
		"raion_name": "Киквидзенский",
		"raion_value": "8.5",
		"raion_group": "2"
	},
	{
		"raion_id": "18",
		"raion_name": "Клетский",
		"raion_value": "10.2",
		"raion_group": "4"
	},
	{
		"raion_id": "19",
		"raion_name": "Котельниковский",
		"raion_value": "10.2",
		"raion_group": "4"
	},
	{
		"raion_id": "20",
		"raion_name": "Котовский",
		"raion_value": "10.6",
		"raion_group": "4"
	},
	{
		"raion_id": "21",
		"raion_name": "Кумылженский",
		"raion_value": "7.9",
		"raion_group": "1"
	},
	{
		"raion_id": "22",
		"raion_name": "Ленинский",
		"raion_value": "10.1",
		"raion_group": "4"
	},
	{
		"raion_id": "23",
		"raion_name": "Нехаевский",
		"raion_value": "7.9",
		"raion_group": "1"
	},
	{
		"raion_id": "24",
		"raion_name": "Николаевский",
		"raion_value": "11.4",
		"raion_group": "5"
	},
	{
		"raion_id": "25",
		"raion_name": "Новоаннинский",
		"raion_value": "9.2",
		"raion_group": "3"
	},
	{
		"raion_id": "26",
		"raion_name": "Новониколаевский",
		"raion_value": "9.7",
		"raion_group": "4"
	},
	{
		"raion_id": "27",
		"raion_name": "Октябрьский",
		"raion_value": "10.4",
		"raion_group": "4"
	},
	{
		"raion_id": "28",
		"raion_name": "Ольховский",
		"raion_value": "10.7",
		"raion_group": "4"
	},
	{
		"raion_id": "29",
		"raion_name": "Палласовский",
		"raion_value": "12.8",
		"raion_group": "5"
	},
	{
		"raion_id": "30",
		"raion_name": "Руднянский",
		"raion_value": "7.6",
		"raion_group": "1"
	},
	{
		"raion_id": "31",
		"raion_name": "Светлоярский",
		"raion_value": "12",
		"raion_group": "5"
	},
	{
		"raion_id": "32",
		"raion_name": "Серафимовичский",
		"raion_value": "5.8",
		"raion_group": "1"
	},
	{
		"raion_id": "33",
		"raion_name": "Среднеахтубинский",
		"raion_value": "9.1",
		"raion_group": "3"
	},
	{
		"raion_id": "34",
		"raion_name": "Старополтавский",
		"raion_value": "11.3",
		"raion_group": "5"
	},
	{
		"raion_id": "35",
		"raion_name": "Суровикинский",
		"raion_value": "9.6",
		"raion_group": "3"
	},
	{
		"raion_id": "36",
		"raion_name": "Урюпинский",
		"raion_value": "6.2",
		"raion_group": "1"
	},
	{
		"raion_id": "37",
		"raion_name": "Фроловский",
		"raion_value": "8.9",
		"raion_group": "2"
	},
	{
		"raion_id": "38",
		"raion_name": "Чернышковский",
		"raion_value": "8",
		"raion_group": "2"
	}
	
];

const legend2 = [
    {
        "zag": "Число родившихся в Волгоградской области за 2018 год",
        "podzag": "на 1000 человек населения"
    },
    {
        "min": "5.8",
        "max": "7.9"
    },
    {
        "min": "8.0",
        "max": "9.0"
    },
    {
        "min": "9.1",
        "max": "9.6"
    },
    {
        "min": "9.7",
        "max": "10.7"
    },
    {
        "min": "10.8",
        "max": "12.8"
    }
];

const dataset3 = [
	{
		"raion_id": "1",
		"raion_name": "город-герой Волгоград",
		"raion_value": "383",
		"raion_group": "6"
	},
	{
		"raion_id": "2",
		"raion_name": "г. Волжский",
		"raion_value": "65",
		"raion_group": "1"
	},
	{
		"raion_id": "3",
		"raion_name": "г. Камышин",
		"raion_value": "86",
		"raion_group": "2"
	},
	{
		"raion_id": "4",
		"raion_name": "г. Михайловка",
		"raion_value": "241",
		"raion_group": "5"
	},
	{
		"raion_id": "5",
		"raion_name": "г. Урюпинск",
		"raion_value": "137",
		"raion_group": "4"
	},
	{
		"raion_id": "6",
		"raion_name": "г. Фролово",
		"raion_value": "123",
		"raion_group": "3"
	},
	{
		"raion_id": "7",
		"raion_name": "Алексеевский",
		"raion_value": "194",
		"raion_group": "5"
	},
	{
		"raion_id": "8",
		"raion_name": "Быковский",
		"raion_value": "170",
		"raion_group": "4"
	},
	{
		"raion_id": "9",
		"raion_name": "Городищенский",
		"raion_value": "362",
		"raion_group": "6"
	},
	{
		"raion_id": "10",
		"raion_name": "Даниловский",
		"raion_value": "33",
		"raion_group": "1"
	},
	{
		"raion_id": "11",
		"raion_name": "Дубовский",
		"raion_value": "245",
		"raion_group": "5"
	},
	{
		"raion_id": "12",
		"raion_name": "Еланский",
		"raion_value": "117",
		"raion_group": "3"
	},
	{
		"raion_id": "13",
		"raion_name": "Жирновский",
		"raion_value": "135",
		"raion_group": "3"
	},
	{
		"raion_id": "14",
		"raion_name": "Иловлинский",
		"raion_value": "184",
		"raion_group": "5"
	},
	{
		"raion_id": "15",
		"raion_name": "Калачевский",
		"raion_value": "181",
		"raion_group": "4"
	},
	{
		"raion_id": "16",
		"raion_name": "Камышинский",
		"raion_value": "25",
		"raion_group": "1"
	},
	{
		"raion_id": "17",
		"raion_name": "Киквидзенский",
		"raion_value": "108",
		"raion_group": "3"
	},
	{
		"raion_id": "18",
		"raion_name": "Клетский",
		"raion_value": "35",
		"raion_group": "1"
	},
	{
		"raion_id": "19",
		"raion_name": "Котельниковский",
		"raion_value": "176",
		"raion_group": "4"
	},
	{
		"raion_id": "20",
		"raion_name": "Котовский",
		"raion_value": "140",
		"raion_group": "4"
	},
	{
		"raion_id": "21",
		"raion_name": "Кумылженский",
		"raion_value": "140",
		"raion_group": "4"
	},
	{
		"raion_id": "22",
		"raion_name": "Ленинский",
		"raion_value": "327",
		"raion_group": "6"
	},
	{
		"raion_id": "23",
		"raion_name": "Нехаевский",
		"raion_value": "7",
		"raion_group": "1"
	},
	{
		"raion_id": "24",
		"raion_name": "Николаевский",
		"raion_value": "145",
		"raion_group": "4"
	},
	{
		"raion_id": "25",
		"raion_name": "Новоаннинский",
		"raion_value": "128",
		"raion_group": "3"
	},
	{
		"raion_id": "26",
		"raion_name": "Новониколаевский",
		"raion_value": "213",
		"raion_group": "5"
	},
	{
		"raion_id": "27",
		"raion_name": "Октябрьский",
		"raion_value": "93",
		"raion_group": "2"
	},
	{
		"raion_id": "28",
		"raion_name": "Ольховский",
		"raion_value": "71",
		"raion_group": "2"
	},
	{
		"raion_id": "29",
		"raion_name": "Палласовский",
		"raion_value": "100",
		"raion_group": "2"
	},
	{
		"raion_id": "30",
		"raion_name": "Руднянский",
		"raion_value": "87",
		"raion_group": "2"
	},
	{
		"raion_id": "31",
		"raion_name": "Светлоярский",
		"raion_value": "319",
		"raion_group": "5"
	},
	{
		"raion_id": "32",
		"raion_name": "Серафимовичский",
		"raion_value": "107",
		"raion_group": "2"
	},
	{
		"raion_id": "33",
		"raion_name": "Среднеахтубинский",
		"raion_value": "540",
		"raion_group": "6"
	},
	{
		"raion_id": "34",
		"raion_name": "Старополтавский",
		"raion_value": "56",
		"raion_group": "1"
	},
	{
		"raion_id": "35",
		"raion_name": "Суровикинский",
		"raion_value": "46",
		"raion_group": "1"
	},
	{
		"raion_id": "36",
		"raion_name": "Урюпинский",
		"raion_value": "25",
		"raion_group": "1"
	},
	{
		"raion_id": "37",
		"raion_name": "Фроловский",
		"raion_value": "49",
		"raion_group": "1"
	},
	{
		"raion_id": "38",
		"raion_name": "Чернышковский",
		"raion_value": "66",
		"raion_group": "2"
	}
];

const legend3 = [
    {
        "zag": "Ввод в действие жилых домов в Волгоградской области в расчете на 1000 человек населения в 2018 году",
        "podzag": "м<sup>2</sup> общей площади"
    },
    {
        "min": "7",
        "max": "65"
    },
    {
        "min": "66",
        "max": "107"
    },
    {
        "min": "108",
        "max": "135"
    },
    {
        "min": "136",
        "max": "181"
    },
    {
        "min": "182",
        "max": "319"
    },
    {
        "min": "320",
        "max": "540"
    }
];
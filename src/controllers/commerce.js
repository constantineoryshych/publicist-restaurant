import {
    APIRequests
} from "./commerceLib/API_QuerryClass.js";
import {
    FirstCheckBascet
} from "../basket/basket.js";
import {
    SecondCheckBascet
} from "../basket/basket.js";
import {
    TableNamberStore
} from "../index";
import {
    dataOrder
} from "../basketView/index.jsx";

const today = new Date();
let mm = (today.getMonth() + 1);
mm = (mm <= 9) ? ("0" + mm) : mm;
let dd = today.getDate();
dd = (dd <= 9) ? ("0" + dd) : dd;
const date = today.getFullYear() + '-' + mm + '-' + dd;
const time = today.toLocaleTimeString();

export async function waiterСall() {
    if (!TableNamberStore.getState().tableNumber) return
    let tableNum = TableNamberStore.getState().tableNumber;

    let api = new APIRequests("https://iiko.biz:9900/api/0");
    await api.setcurentmarker("publicistAPI", "tRxa25T1P9");
    let marker = api.curent_marker
    let data = {
        "organization": "0beff7b8-8f87-11ea-80f4-d8d38565926f",
        "customer": {
            "name": tableNum,
            "phone": "+380 (044) 111-11-11"
        },
        "order": {
            "phone": "+380 (044) 111-11-11",
            "isSelfService": true,
            "date": (date + " " + time),
            "personsCount": "1",
            "comment": "Table-6",
            "orderTypeID": "5b1508f9-fe5b-d6af-cb8d-043af587d5c2",
            "items": [{
                "code": "35281",
                "id": "9d0232c5-97d3-41c6-b22b-d1fd4318f285",
                "name": "Виклик офіціанта",
                "amount": "1"
            }]
        }
    }
    api.create_order(marker, data)
}


function takeOrderWithYouData() {
    let firstCheck = FirstCheckBascet.getState();
    let secondCheck = SecondCheckBascet.getState();
    let items = (firstCheck.data.length > 0) ? firstCheck.data : secondCheck.data;
    items = items.map(el => el.data);
    return {
        "organization": "0beff7b8-8f87-11ea-80f4-d8d38565926f",
        "customer": {
            "name": dataOrder.name,
            "surName": dataOrder.soName,
            "email": dataOrder.addres,
            "phone": dataOrder.telephone
        },
        "order": {
            "phone": (dataOrder.telephone) ? dataOrder.telephone : "+380 (044) 111-11-11",
            "isSelfService": true,
            "date": (date + " " + time),
            "personsCount": "1",
            "comment": dataOrder.textearea,
            "orderTypeID": "5b1508f9-fe5b-d6af-cb8d-043af587d5c2",
            "items": items
        }
    }
}

function makeAnOrderInRestoranData(tableNum) {
    let firstCheck = FirstCheckBascet.getState();
    let secondCheck = SecondCheckBascet.getState();
    let items = (firstCheck.data.length > 0) ? firstCheck.data : secondCheck.data;
    items = items.map(el => el.data);
    return {
        "organization": "0beff7b8-8f87-11ea-80f4-d8d38565926f",
        "customer": {
            "name": tableNum,
            "phone": "+380 (044) 111-11-11"
        },
        "order": {
            "phone": "+380 (044) 111-11-11",
            "isSelfService": true,
            "date": (date + " " + time),
            "personsCount": "1",
            "comment": (dataOrder.servises === "anotherVariant") ? dataOrder.sequenceServingDishes : dataOrder.servises,
            "orderTypeID": "5b1508f9-fe5b-d6af-cb8d-043af587d5c2",
            "items": items
        }
    }
}

export async function makeAnOrder(orderType) {

    if (!TableNamberStore.getState().tableNumber) return;
    let tableNum = TableNamberStore.getState().tableNumber;
    let orderData = null;

    if (orderType === "inTheRestaurant") orderData = makeAnOrderInRestoranData(tableNum);
    if (orderType === "takeWithYou") orderData = takeOrderWithYouData();

    let api = new APIRequests("https://iiko.biz:9900/api/0");
    await api.setcurentmarker("publicistAPI", "tRxa25T1P9");
    let marker = api.curent_marker;

    api.create_order(marker, orderData);

}
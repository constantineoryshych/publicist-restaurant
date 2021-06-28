"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.APIRequests = void 0;
var request = require("request");
var exeption = "error";
var APIRequests = /** @class */ (function () {
    function APIRequests(address) {
        this.address = address;
    }

    APIRequests.prototype.setcurentmarker = function (user_id, user_secret) {
        return __awaiter(this, void 0, void 0, function () {
            var body, _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, new Promise(function (res) { return request.get(_this.address + '/auth/access_token?user_id=' + user_id + '&user_secret=' + user_secret, {}, function (error, response, body) {
                                if (error) { }
                                else {
                                    res(body);
                                }
                            }); })];
                    case 1:
                        body = _b.sent();
                        this.curent_marker = (body + "").toString().replace("\"", "").replace("\"", "");
                        return [2 /*return*/, "done"];
                    case 2:
                        _a = _b.sent();
                        return [2 /*return*/, exeption];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };

    APIRequests.prototype.getnomenclature = function (organisation_id, accessToken) {
        return __awaiter(this, void 0, void 0, function () {
            var data, body, _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        data = {};
                        return [4 /*yield*/, new Promise(function (res) { return request.get(_this.address + "/nomenclature/" + organisation_id + "?access_token=" + accessToken, { json: data, headers: {} }, function (error, response, body) {
                                if (error) { }
                                else {
                                    res(body);
                                }
                            }); })];
                    case 1:
                        body = _b.sent();
                        return [2 /*return*/, body];
                    case 2:
                        _a = _b.sent();
                        return [2 /*return*/, exeption];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };

    APIRequests.prototype.create_order = function (accessToken, data) {
        return __awaiter(this, void 0, void 0, function () {
            var body, _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, new Promise(function (res) { return request.post(_this.address + "/orders/add?access_token=" + accessToken + "&request_timeout=0:0:30", { json: data, headers: {} }, function (error, response, body) {
                                if (error) { }
                                else {
                                    res(body);
                                }
                            }); })];
                    case 1:
                        body = _b.sent();
                        return [2 /*return*/, body];
                    case 2:
                        _a = _b.sent();
                        return [2 /*return*/, exeption];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };

    APIRequests.prototype.getgroups = function (organisation_id, accessToken) {
        return __awaiter(this, void 0, void 0, function () {
            var data, body, _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        data = {};
                        return [4 /*yield*/, new Promise(function (res) { return request.get(_this.address + "/nomenclature/" + organisation_id + "?access_token=" + accessToken, { json: data, headers: {} }, function (error, response, body) {
                                if (error) { }
                                else {
                                    res(body);
                                }
                            }); })];
                    case 1:
                        body = _b.sent();
                        return [2 /*return*/, body["groups"]];
                    case 2:
                        _a = _b.sent();
                        return [2 /*return*/, exeption];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
  
    APIRequests.prototype.getproductCategories = function (organisation_id, accessToken) {
        return __awaiter(this, void 0, void 0, function () {
            var data, body, _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        data = {};
                        return [4 /*yield*/, new Promise(function (res) { return request.get(_this.address + "/nomenclature/" + organisation_id + "?access_token=" + accessToken, { json: data, headers: {} }, function (error, response, body) {
                                if (error) { }
                                else {
                                    res(body);
                                }
                            }); })];
                    case 1:
                        body = _b.sent();
                        return [2 /*return*/, body["productCategories"]];
                    case 2:
                        _a = _b.sent();
                        return [2 /*return*/, exeption];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };

    APIRequests.prototype.getproducts = function (organisation_id, accessToken) {
        return __awaiter(this, void 0, void 0, function () {
            var data, body, _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        data = {};
                        return [4 /*yield*/, new Promise(function (res) { return request.get(_this.address + "/nomenclature/" + organisation_id + "?access_token=" + accessToken, { json: data, headers: {} }, function (error, response, body) {
                                if (error) { }
                                else {
                                    res(body);
                                }
                            }); })];
                    case 1:
                        body = _b.sent();
                        return [2 /*return*/, body["products"]];
                    case 2:
                        _a = _b.sent();
                        return [2 /*return*/, exeption];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };


    APIRequests.prototype.getrevision = function (organisation_id, accessToken) {
        return __awaiter(this, void 0, void 0, function () {
            var data, body, _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        data = {};
                        return [4 /*yield*/, new Promise(function (res) { return request.get(_this.address + "/nomenclature/" + organisation_id + "?access_token=" + accessToken, { json: data, headers: {} }, function (error, response, body) {
                                if (error) { }
                                else {
                                    res(body);
                                }
                            }); })];
                    case 1:
                        body = _b.sent();
                        return [2 /*return*/, body["revision"]];
                    case 2:
                        _a = _b.sent();
                        return [2 /*return*/, exeption];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };

    APIRequests.prototype.getuploadDate = function (organisation_id, accessToken) {
        return __awaiter(this, void 0, void 0, function () {
            var data, body, _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        data = {};
                        return [4 /*yield*/, new Promise(function (res) { return request.get(_this.address + "/nomenclature/" + organisation_id + "?access_token=" + accessToken, { json: data, headers: {} }, function (error, response, body) {
                                if (error) { }
                                else {
                                    res(body);
                                }
                            }); })];
                    case 1:
                        body = _b.sent();
                        return [2 /*return*/, body["uploadDate"]];
                    case 2:
                        _a = _b.sent();
                        return [2 /*return*/, exeption];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };

    APIRequests.prototype.parser = function (nomenclature) {
        return __awaiter(this, void 0, void 0, function () {
            var answer, ancientgroup, parentGroup, key, groupname, menuposition, tags, _i, tags_1, element, pushobj, key, maingroup, name_1, parentid, id, grouptype, groupposition, tags, _a, tags_2, element, pushableobj, key1, key2, pushableobj, name_2, parentid, id, key1, key2, key1, ancientgroupkey, productname, key01, key02, key03, imgarr, urlimgarr, _b, _c, element, pushableimg, pricefrom, tags, _d, tags_3, element, pushedproduct, Glassorbottle, tags, _e, tags_4, element, key0, key1, element, key2, key0, key1, element, positionARR, key, key, help, key, key0, keyname, key, help;
            return __generator(this, function (_f) {
                answer = {};
                answer["ua"] = [];
                ancientgroup = {};
                parentGroup = {};
                for (key in nomenclature["groups"]) {
                    if (nomenclature["groups"][key]["parentGroup"] == null) {
                        groupname = (nomenclature["groups"][key]["name"] + "").toString();
                        menuposition = null;
                        if (nomenclature["groups"][key]["tags"] != null) {
                            tags = nomenclature["groups"][key]["tags"][0].split(" $ ");
                            for (_i = 0, tags_1 = tags; _i < tags_1.length; _i++) {
                                element = tags_1[_i];
                                if (element.split("=")[0] == 'menuposition') {
                                    menuposition = element.split("=")[1];
                                }
                            }
                        }
                        if (groupname == "Бар" ||
                            groupname == "Вино" ||
                            groupname == "Їжа") {
                            pushobj = {};
                            pushobj[groupname] = [];
                            answer["ua"].push(pushobj);
                            ancientgroup[nomenclature["groups"][key]["id"]] = { "name": nomenclature["groups"][key]["name"], "menuposition": parseInt(menuposition) };
                        }
                    }
                }
                for (key in nomenclature["groups"]) {
                    if (nomenclature["groups"][key]["parentGroup"] != null) {
                        maingroup = ancientgroup[nomenclature["groups"][key]["parentGroup"]]["name"];
                        if (maingroup != 'Вино') {
                            name_1 = nomenclature["groups"][key]["name"];
                            parentid = nomenclature["groups"][key]["parentGroup"];
                            id = nomenclature["groups"][key]["id"];
                            grouptype = "catalogFood";
                            if (maingroup == 'Бар') {
                                grouptype = "list";
                            }
                            groupposition = null;
                            if (nomenclature["groups"][key]["tags"] != null) {
                                tags = nomenclature["groups"][key]["tags"][0].split(" $ ");
                                for (_a = 0, tags_2 = tags; _a < tags_2.length; _a++) {
                                    element = tags_2[_a];
                                    if (element.split("=")[0] == 'groupposition') {
                                        groupposition = element.split("=")[1];
                                    }
                                }
                            }
                            parentGroup[id] = { name: name_1, parentid: parentid, groupposition: groupposition };
                            pushableobj = {};
                            pushableobj["id"] = nomenclature["groups"][key]["id"];
                            pushableobj[name_1] = {
                                catalog: [{
                                        name: name_1,
                                        description: nomenclature["groups"][key]["description"],
                                        type: grouptype,
                                        content: []
                                    }]
                            };
                            for (key1 in answer["ua"]) {
                                for (key2 in answer["ua"][key1]) {
                                    if (key2 == maingroup) {
                                        answer["ua"][key1][key2].push(pushableobj);
                                    }
                                }
                            }
                        }
                        else {
                            pushableobj = {};
                            name_2 = nomenclature["groups"][key]["name"];
                            parentid = nomenclature["groups"][key]["parentGroup"];
                            id = nomenclature["groups"][key]["id"];
                            parentGroup[id] = { name: name_2, parentid: parentid };
                            pushableobj["id"] = nomenclature["groups"][key]["id"];
                            pushableobj[name_2] = {
                                catalog: [{
                                        name: "WINE BY THE GLASS",
                                        description: nomenclature["groups"][key]["description"],
                                        type: "list",
                                        content: []
                                    }, {
                                        name: "WINE BY THE BOTTLE",
                                        description: nomenclature["groups"][key]["description"],
                                        type: "list",
                                        content: []
                                    }]
                            };
                            for (key1 in answer["ua"]) {
                                for (key2 in answer["ua"][key1]) {
                                    if (key2 == maingroup) {
                                        answer["ua"][key1][key2].push(pushableobj);
                                    }
                                }
                            }
                        }
                    }
                    else {
                  
                    }
                }
                for (key1 in nomenclature["products"]) {
                    ancientgroupkey = void 0;
                    if (nomenclature["products"][key1]["parentGroup"] != null && parentGroup[nomenclature["products"][key1]["parentGroup"]] != null) {
                        ancientgroupkey = ancientgroup[parentGroup[nomenclature["products"][key1]["parentGroup"]]["parentid"]]["name"];
                        productname = parentGroup[nomenclature["products"][key1]["parentGroup"]]["name"];
                        for (key01 in answer["ua"]) {
                            for (key02 in answer["ua"][key01]) {
                                if (key02 == ancientgroupkey) {
                                    for (key03 in answer["ua"][key01][key02]) {
                                        if (answer["ua"][key01][key02][key03]["id"] == nomenclature["products"][key1]["parentGroup"]) {
                                            imgarr = [];
                                            urlimgarr = [];
                                            for (_b = 0, _c = nomenclature["products"][key1]["images"]; _b < _c.length; _b++) {
                                                element = _c[_b];
                                                pushableimg = element["imageUrl"].split("/");
                                                imgarr.push("files/small/small-" + pushableimg[pushableimg.length - 1]);
                                                urlimgarr.push(element["imageUrl"]);
                                            }
                                            pricefrom = false;
                                            if (nomenclature["products"][key1]["tags"] != null) {
                                                tags = nomenclature["products"][key1]["tags"][0].split(" $ ");
                                                for (_d = 0, tags_3 = tags; _d < tags_3.length; _d++) {
                                                    element = tags_3[_d];
                                                    if (element.split("=")[0] == 'pricefrom') {
                                                        if (element.split("=")[1] == "true") {
                                                            pricefrom = true;
                                                        }
                                                    }
                                                }
                                            }
                                            pushedproduct = {
                                                id: nomenclature["products"][key1]["id"],
                                                name: nomenclature["products"][key1]["name"],
                                                description: nomenclature["products"][key1]["description"],
                                                price: nomenclature["products"][key1]["price"],
                                                img: imgarr,
                                                urlimg: urlimgarr,
                                                pricefrom: pricefrom
                                            };
                                            if (key02 != "Вино") {
                                                if (typeof nomenclature["products"][key1]["price"] == "number") {
                                                    answer["ua"][key01][key02][key03][productname]["catalog"][0]["content"].push(pushedproduct);
                                                }
                                            }
                                            else {
                                                Glassorbottle = -1;
                                                if (nomenclature["products"][key1]["tags"] != null) {
                                                    tags = nomenclature["products"][key1]["tags"][0].split(" $ ");
                                                    for (_e = 0, tags_4 = tags; _e < tags_4.length; _e++) {
                                                        element = tags_4[_e];
                                                        if (element.split("=")[0] == 'listgroup') {
                                                            if (element.split("=")[1] == "glass") {
                                                                Glassorbottle = 0;
                                                            }
                                                            if (element.split("=")[1] == "botlle") {
                                                                Glassorbottle = 1;
                                                            }
                                                        }
                                                    }
                                                    if (typeof nomenclature["products"][key1]["price"] == "number" && Glassorbottle != -1) {
                                                        answer["ua"][key01][key02][key03][productname]["catalog"][Glassorbottle]["content"].push(pushedproduct);
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    else {
           
                    }
                }
                for (key0 = 0; key0 < answer["ua"].length; key0++) {
                    for (key1 = 0; key1 < answer["ua"][key0][Object.keys(answer["ua"][key0])[0]].length; key1++) {
                        element = answer["ua"][key0][Object.keys(answer["ua"][key0])[0]][key1][Object.keys(answer["ua"][key0][Object.keys(answer["ua"][key0])[0]][key1])[1]]["catalog"];
                        for (key2 = 0; key2 < element.length; key2++) {
                            if (element[key2]["content"].length == 0) {
                                if (key2 != 0) {
                                    element = element.splice(key2, 1);
                                    key2 = -1;
                                }
                                else {
                                    element = [];
                                }
                            }
                        }
                    }
                }
                for (key0 = 0; key0 < answer["ua"].length; key0++) {
                    for (key1 = 0; key1 < answer["ua"][key0][Object.keys(answer["ua"][key0])[0]].length; key1++) {
                        element = answer["ua"][key0][Object.keys(answer["ua"][key0])[0]][key1][Object.keys(answer["ua"][key0][Object.keys(answer["ua"][key0])[0]][key1])[1]]["catalog"];
                        if (element.length == 0) {
                            if (key1 != 0) {
                                answer["ua"][key0][Object.keys(answer["ua"][key0])[0]].splice(key1, 1);
                                key1 = -1;
                            }
                            else {
                                answer["ua"][key0][Object.keys(answer["ua"][key0])[0]] = [];
                            }
                        }
                    }
                }
                positionARR = {};
                for (key in ancientgroup) {
                    positionARR[ancientgroup[key]["name"]] = ancientgroup[key]["menuposition"];
                }
                for (key = 1; key < answer["ua"].length; key++) {
                    if (positionARR[Object.keys(answer["ua"][key])[0]] < positionARR[Object.keys(answer["ua"][key - 1])[0]]) {
                        help = answer["ua"][key];
                        answer["ua"][key] = {};
                        answer["ua"][key] = answer["ua"][key - 1];
                        answer["ua"][key - 1] = help;
                        key = 0;
                    }
                }
                positionARR = {};
                for (key in parentGroup) {
                    positionARR[parentGroup[key]["name"]] = parentGroup[key]["groupposition"];
                }
                for (key0 in answer["ua"]) {
                    keyname = Object.keys(answer["ua"][key0])[0];
                    for (key = 1; key < answer["ua"][key0][keyname].length; key++) {
                        if (parseInt(positionARR[Object.keys(answer["ua"][key0][keyname][key])[1]]) < parseInt(positionARR[Object.keys(answer["ua"][key0][keyname][key - 1])[1]])) {
                            help = answer["ua"][key0][keyname][key];
                            answer["ua"][key0][keyname][key] = {};
                            answer["ua"][key0][keyname][key] = answer["ua"][key0][keyname][key - 1];
                            answer["ua"][key0][keyname][key - 1] = help;
                            key = 0;
                        }
        
                    }
                }
    
                return [2 /*return*/, answer];
            });
        });
    };
    return APIRequests;
}());
exports.APIRequests = APIRequests;

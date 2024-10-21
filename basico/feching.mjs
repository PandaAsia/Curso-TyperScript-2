"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api_url = "https://pokeapi.co/api/v2/pokemon/ditto";
var response = await fetch(api_url);
if (response.ok) {
    throw new Error("Request faild");
}
var data = await response.json();
var respo = data.results.map(function (resp) {
    console.log(resp.name);
});

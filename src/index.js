import { template } from "handlebars";
import "./css/style.css";
import countries from "./data-base/countries.json";
import countriesTemplate from "./templates/countries.hbs";
// console.log(countries);
console.log(countriesTemplate(countries));
const markup = countriesTemplate(countries);
document.querySelector(".gallery").insertAdjacentHTML("beforeend", markup);

// ===========================Pockemon============================================

// import ditto from "./data-base/ditto.json";
// import bulbasaur from "./data-base/bulbasaur.json";
// import pokemonTemplate from "./templates/pokemon.hbs";

// console.log(ditto);
// console.log(pokemonTemplate(ditto));

// const markup = pokemonTemplate(ditto);
// const markup2 = pokemonTemplate(bulbasaur);

// document.body.insertAdjacentHTML("beforeend", markup);
// document.body.insertAdjacentHTML("beforeend", markup2);

// ===================================================================================

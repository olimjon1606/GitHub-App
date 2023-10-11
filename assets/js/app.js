/**
 * @license MIT
 * @author codewithsadee <olimjon.coder@gmail.com>
 * @copyright O.Olimjon 2023
 */


'use strict';


// @param { NodeList } $elements NodeList
// @param { String }eventType String
// @param { Function } callback

const addEventOnElements = function ($elements, eventType, callback) {
    for (const $item of $elements) {
        $item.addEventListener(eventType, callback);
    }
}

const $header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
    $header.classList[window.scrollY > 50 ? "add" : "remove"]("active");
})


// search toggle 

const $searchToggler = document.querySelector("[data-search-toggler")
const $searchField = document.querySelector("[data-search-field")

let isExpanded = false;

$searchToggler.addEventListener("click", function () {
    $header.classList.toggle("search-active")
    isExpanded = isExpanded ? false : true;
    this.setAttribute("aria-expanded", isExpanded);
    $searchField.focus()
})
/**
 * @license MIT
 * @author codewithsadee <olimjon.coder@gmail.com>
 * @copyright O.Olimjon 2023
 */


'use strict';

import { fetchData } from "./api.js";


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


// Tab navigation

const $tabBtns = document.querySelectorAll("[data-tab-btn]")
const $tabPanels = document.querySelectorAll("[data-tab-panel]")

let [$lastActiveTabBtn] = $tabBtns
let [$lastActiveTabPanel] = $tabPanels

addEventOnElements($tabBtns, "click", function () {
    $lastActiveTabBtn.setAttribute("aria-selected", "false");
    $lastActiveTabPanel.setAttribute("hidden", "");

    this.setAttribute("aria-selected", "true");
    const $currentTabPanel = document.querySelector(`#${this.getAttribute("aria-controls")}`);
    $currentTabPanel.removeAttribute("hidden")

    $lastActiveTabBtn = this
    $lastActiveTabPanel = $currentTabPanel
})


// keyboard accessibility for tab buttons

addEventOnElements($tabBtns, "keydown", function (e) {
    const $nextElement = this.$nextElementSibling;
    const $previousElement = this.$previousElementSibling

    if (e.key === "ArrowRight" && $nextElement) {
        this.setAttribute("tabindex", "-1")
        $nextElement.setAttribute("tabindex", "0");
        $nextElement.focus();
    } else if (e.key === "ArrowLeft" && $previousElement) {
        this.setAttribute("tabindex", "-1")
        $previousElement.setAttribute("tabindex", "0");
        $previousElement.focus();
    }
})
/**
 * @license MIT
 * @author codewithsadee <olimjon.coder@gmail.com>
 * @copyright O.Olimjon 2023
 */


'use strict';


// *@param { NodeList } $elements NodeList

const addEventListener = function ($elements, eventType, collback) {
    for (const $item of $elements) {
        $item.addEventListener(eventType, collback);
    }
}

const $header = document.querySelector("data-header");

window.addEventListener("scroll", function () {
    $header.classList[window.scrollY > 50 ? "add" : "remove"]("active");
})
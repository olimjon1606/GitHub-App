/**
 * @license MIT
 * @author codewithsadee <olimjon.coder@gmail.com>
 * @copyright O.Olimjon 2023
 */


'use strict';

export async function fetchData(url, successCallback, errorCallback) {
    const response = await fetch(url)

    if (response.ok) {
        const data = await response.json();
        successCallback(data)
    } else {
        const error = await response.json()
        errorCallback && errorCallback(error)
    }
}

const $searchSubmit = document.querySelector("[data-search-submit]")

let apiUrl = "https://api.github.com/users/olimjon1606"
let repoUrl, followerUrl, followingUrl = ""

const searchUser = function () {
    if (!$searchField.value) return;
    apiUrl = `https://api.github.com/users/${$searchField.value}`
}

$searchSubmit.addEventListener("click", searchUser);
$searchField.addEventListener("keydown", e => {
    if (e.key === "Enter") searchUser();
});
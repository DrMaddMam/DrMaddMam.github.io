function load() {
    let level = getCookie("level");
    if (level == "1") {
        document.getElementById("jonathanGameLink").hidden = true;
    }
}
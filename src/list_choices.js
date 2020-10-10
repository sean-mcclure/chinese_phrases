const {search} = require("fast-fuzzy");

var phrases = {
    "What time is it?" : "https://collaboratescience.com/chinese/sounds/what_time_is_it.mp3",
    "Today is monday" : "https://collaboratescience.com/chinese/sounds/today_is_monday.mp3"
}

export function search_phrases(e) {
    var fuzzy_result_arr = search(e.target.value, Object.keys(phrases))
    document.getElementById("hold_results").innerHTML = ""
    fuzzy_result_arr.forEach(function(result) {
        var new_div_elem = document.createElement("div");
        new_div_elem.style.width = "100%"
        new_div_elem.style.height = "auto"
        new_div_elem.style.padding = "5px"
        new_div_elem.style.background = "#227093"
        new_div_elem.style.marginBottom = "10px"
        new_div_elem.style.color = "whitesmoke"
        new_div_elem.style.fontSize = "20px"
        new_div_elem.style.cursor = "pointer"
        new_div_elem.innerHTML = result
        new_div_elem.addEventListener("click", function(e) {play_chinese(e)}, false);
        document.getElementById("hold_results").append(new_div_elem)
    })
}

export function play_chinese(e) {
    console.log(e.target.innerHTML)
    const audio = new Audio(phrases[e.target.innerHTML]);
    audio.crossOrigin = 'anonymous';
    audio.load()
    audio.play()
}
const {search} = require("fast-fuzzy");
var phrases = ["What Time is It?", "It is Your Nap/Bed Time", "Today is Monday", "And Today Too!!", "The Time is Now"]

export function search_phrases(e) {
    var fuzzy_result_arr = search(e.target.value, phrases)
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
        document.getElementById("hold_results").append(new_div_elem)
    })
}
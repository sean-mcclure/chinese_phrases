const {search} = require("fast-fuzzy");

var phrases = {
    "What time is it?" : "https://collaboratescience.com/chinese/sounds/what_time_is_it.mp3",
    "Today is monday" : "https://collaboratescience.com/chinese/sounds/today_is_monday.mp3",
    "Monday" : "https://collaboratescience.com/chinese/sounds/monday.mp3",
    "Tuesday" : "https://collaboratescience.com/chinese/sounds/tuesday.mp3",
    "Wednesday" : "https://collaboratescience.com/chinese/sounds/wednesday.mp3",
    "Thursday" : "https://collaboratescience.com/chinese/sounds/thursday.mp3",
    "Friday" : "https://collaboratescience.com/chinese/sounds/friday.mp3",
    "Saturday" : "https://collaboratescience.com/chinese/sounds/saturday.mp3",
    "Sunday" : "https://collaboratescience.com/chinese/sounds/sunday.mp3",
    "What’s the date today?" : "https://collaboratescience.com/chinese/sounds/whats_the_date_today.mp3",
    "It is Tuesday, September 1st" : "https://collaboratescience.com/chinese/sounds/it_is_tuesday_september_1st.mp3",
    "What’s the weather today?" : "https://collaboratescience.com/chinese/sounds/whats_the_weather_today.mp3",
    "It is 9:30" : "https://collaboratescience.com/chinese/sounds/it_is_9_30.mp3",
    "1" : "",
    "2" : "",
    "3" : "",
    "4" : "",
    "5" : "",
    "6" : "",
    "7" : "",
    "8" : "",
    "9" : "",
    "10" : "",
    "Go play with daddy" : "",
    "Which book do you want to read next?" : "",
    "Can you pick a book?" : "",
    "Turn the page please" : "",
    "Sun" : "",
    "Cloud" : "",
    "Sky" : "",
    "Moon" : "",
    "Please put your toys away" : "",
    "Let’s go out to the park" : "",
    "Maybe we’ll see a squirrel or a dog" : "",
    "When we go out, we need to put on our shoes." : "",
    "Inside" : "",
    "Outside" : "",
    "Above" : "",
    "Beneath" : "",
    "In front of" : "",
    "Behind" : "",
    "Beside" : "",
    "Good morning" : "",
    "Good night" : "" 
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
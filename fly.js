import { sky } from "./sky.js";
import { imgs } from "./createHTML.js";
const div = document.getElementById('fly');

export function fly() {
    document.querySelectorAll('.part').forEach(d => imgs(d))
    const img = document.createElement('img');
    img.src = './static/rocket.jpg'
    img.width = '100'
    div.replaceChildren(img)

    setTimeout(sky, 2000)
}


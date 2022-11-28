
import { imgs } from "./createHTML.js";
import { fly } from "./fly.js";

const div = document.getElementById('launch');

export function launch(){
    document.querySelectorAll('.part').forEach(d => imgs(d))
    const img = document.createElement('img');
    img.src = './static/rocket.jpg';
    img.width = '100'
    div.replaceChildren(img)

    setTimeout(fly, 2000)
    
    
}
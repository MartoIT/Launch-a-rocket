import { imgs } from "./createHTML.js";
import { space } from "./space.js";
const div = document.getElementById('sky');

export function sky(){
    document.querySelectorAll('.part').forEach(d => imgs(d))
    const img = document.createElement('img');
    img.src = './static/rocket.jpg';
    img.width = '100'
    div.replaceChildren(img)

    setTimeout(space, 2000)
    
    
}
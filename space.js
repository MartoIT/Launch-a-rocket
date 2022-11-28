import { imgs } from "./createHTML.js";
import { finish } from "./finish.js";
const div = document.getElementById('space');

export function space(){
    document.querySelectorAll('.part').forEach(d => imgs(d))
    const img = document.createElement('img');
    img.src = './static/rocket.jpg';
    img.width = '100'
    div.replaceChildren(img)

    setTimeout(finish, 2000)
    
}
const div = document.getElementById('main');
export function finish(){
    div.querySelectorAll('.part').forEach(d => d.remove())
    const img = document.createElement('img');
    img.src = './static/elon.jpg';
    img.width = '800'
    div.replaceChildren(img)

}
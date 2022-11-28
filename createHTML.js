export function imgs(d){
    const target = d;
    const imgSky = document.createElement('img');
    imgSky.src = './static/ba.png';
    imgSky.width = '100'
    target.replaceChildren(imgSky)
    
}
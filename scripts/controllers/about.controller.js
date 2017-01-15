import routie  from 'libs/routie.js'

let $page = document.getElementById('page');

routie('o-mnie', controller);

function controller() {
    let template = document.getElementById('template-about').innerHTML;

    let content = Mustache.render(template, {});
    $page.innerHTML = "";
    $page.innerHTML = content;
}

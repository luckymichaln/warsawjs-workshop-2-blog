import routie  from 'libs/routie.js'
import { PostFormComponent } from '../components/write.component.js'

let $page = document.getElementById('page');

routie('napisz', controller);

function controller() {
    PostFormComponent.render({}, $page)
}

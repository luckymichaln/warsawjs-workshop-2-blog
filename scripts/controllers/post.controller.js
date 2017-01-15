import routie  from 'libs/routie.js'
import { PostComponent } from '../components/post.component.js'
import { PostService } from '../services/post.service.js'

let $page = document.getElementById('page');

routie('post/:id', controller);

function controller(id) {
    PostService.get(id).then(post=>{
        PostComponent.render({post}, $page)
    })
}

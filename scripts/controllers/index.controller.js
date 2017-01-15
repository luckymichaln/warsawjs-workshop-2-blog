import routie  from 'libs/routie.js'
import { PostListComponent } from '../components/post-list.component.js'
import { PostService } from '../services/post.service.js'

let $page = document.getElementById('page');

routie('', controller);

export function controller() {
    PostService.list().then(posts=>{
      console.log('posty z serwisu', posts);
        PostListComponent.render({posts:posts.reverse()}, $page)
    })
}

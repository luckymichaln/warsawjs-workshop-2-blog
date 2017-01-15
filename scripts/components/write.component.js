import routie  from 'libs/routie.js'
import { PostService } from '../services/post.service.js'
import { Component } from './component.js'

export class PostFormComponent extends Component {


    template() {
        return document.querySelector('#template-post-form').innerHTML;
    }

    init() {
        this.$form = this.$el.querySelector('form');
        this.$form.addEventListener('submit', this.onSubmit.bind(this))
    }

    onSubmit(e) {
        e.preventDefault();
        let results = {};
        let formData = new FormData(this.$form);
        formData.forEach((value, key) => {
            results[key] = value;
        });
        PostService.create(results);
        routie('')
    }
}

let posts = [
    {id: 1, title: 'pierwszy post', text: 'tresc posta'},
    {id: 2, title: 'drugi post', text: 'tresc posta drugiego'}
]
export class PostService {

    static list() {
        return new Promise((resolve, reject) => {
            resolve(posts);
        })
    }

    static create(data) {
        data.id = posts.length+1;
        posts.push(data);
        return new Promise((resolve, reject) => {
            resolve(data);
        })
    }

    static get(id) {
        return new Promise((resolve, reject) => {
            resolve(posts[parseInt(id)-1]);
        })
    }
}


/// promise explanation

// let UserService = {login: function(){}};
// export function controller() {
//     let promise = UserService.login()
//
//       .then(user=>{
//         return PostService.list(user)
//       }, err=>{
//         return UserService.loginAlternative()
//         return Promise.reject('nie da rady');
//       })
//
//      .then(posts=>{
//         posts.push({nowy:'record'})
//         return UserService.update(posts);
//      })
//     .then(postsSavedMessage=>{
//         PostListComponent.render({posts:posts}, $page)
//      })
// }

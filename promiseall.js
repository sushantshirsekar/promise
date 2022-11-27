// Task 2





const posts = [

    { title: 'Post One', body: 'This is post one', createdAt: new Date().getTime() },

    { title: 'Post Two', body: 'This is post two', createdAt: new Date().getTime() }

];



let intervalID = 0;





function getPosts() {

    clearInterval(intervalID);

    intervalId = setInterval(() => {

        let output = '';

        for (let i = 0; i < posts.length; i++) {

            output = output + `<li id=post${i}> ${posts[i].title} created ${(new Date().getTime() - posts[i].createdAt) / 1000} seconds ago</li> `

        }

        document.getElementById('parent').innerHTML = output;

    }, 1000);



}



function createPost(post) {

    return new Promise((resolve, reject) => {

        const err = false;



        if (!err) {
            resolve();
        }
        else {
            reject('Err0r: Something went wrong');
        }

        setTimeout(() => {
            posts.push({ ...post, createdAt: new Date().getTime() });
        }, 1000);
    })

}

function deletePost() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length > 0) {
                resolve(posts.pop());
            }
            else {
                reject('Error: Something went wrong');
            }
        }, 1000)
    })
}


function updateCreatedAt(){
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            posts.createdAt = new Date();
            resolve(posts.createdAt);
        })
    })
}

Promise.all([createPost({title:'Post3', body:'body3'}), updateCreatedAt()]).then(([x,y])=> {
    
    console.log(y);
    console.log(posts);
    getPosts()
})

deletePost()
.then(()=>{
    console.log(posts);
})
.catch((err)=>{
    console.log('Error 404', err);
})
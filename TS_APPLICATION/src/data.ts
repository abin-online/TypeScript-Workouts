//fetch data from this link https://jsonplaceholder.typicode.com/posts

type details = {
    userId: number
    id: number
    title : string
    body: string
}

async function fetchData() : Promise <details[]> {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data: details[] = await response.json()
        return data
    } catch (error) {
        console.error(error);
        return []
    }
}

fetchData().then((post)=>{
    console.log(post.splice(1));
    
}).catch(err=>{console.log(err);
})



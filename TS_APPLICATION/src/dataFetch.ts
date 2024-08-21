// Define the interface to represent the structure of the data
interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

// Function to fetch data from the API
async function fetchPosts(): Promise<Post[]> {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');

        // Check if the response is OK (status code 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse the response JSON to the Post array
        const posts: Post[] = await response.json();
        return posts;
    } catch (error) {
        console.error('Failed to fetch posts:', error);
        return [];
    }
}

// Use the fetchPosts function to get and display data
fetchPosts().then(posts => {
    console.log('Fetched Posts:', posts);
}).catch(error => {
    console.error('Error fetching posts:', error);
});

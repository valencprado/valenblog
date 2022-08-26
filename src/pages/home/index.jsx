import {useState, useEffect} from 'react';
import FeaturedPost from "../../components/featured-post"
import PostList from "../../components/post-list"

export default function Home(){
    const [posts, setPosts] = useState();
    async function getPosts(){
        const response = await fetch('https://valenblog-api.herokuapp.com/');
        const cors = await fetch('https://murmuring-chamber-80815.herokuapp.com/');
        console.log(response)
        const data = await response.json();
        console.log(data);
        setPosts(data.data)
    }
    useEffect(() => {
        getPosts();
    }, [])
    return(
        <div>
            {
                posts && posts.length > 0 && <FeaturedPost post={posts[0].attributes}/>
            }
            <PostList posts={posts} />
        </div>
    ); 
}
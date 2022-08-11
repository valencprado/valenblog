import {useState, useEffect} from 'react';
import FeaturedPost from "../../components/featured-post"
import PostList from "../../components/post-list"

export default function Home(){
    const [posts, setPosts] = useState();
    async function getPosts(){
        const response = await fetch('https://cms-blog-tutorial.herokuapp.com/api/posts?populate=*');
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
import React from 'react';
import HeaderBar from '../components/nav/HeaderBar';
import BottomNavBar from '../components/nav/BottomNavbar';
import AddButton from '../components/common/AddButton';
import CharterList from '../components/charters-page/CharterList';

export default function Reflections() {
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [posts, setPosts] = React.useState([]);

    const loadPosts = async () => {
        await fetch("http://localhost:3000/api/board/621d26f81a997588eb8b7979/1")
            .then(res => res.json())
            .then(receivedPosts => {
                setPosts(receivedPosts);
                setIsLoaded(true);
            })
            .catch(error => {
                setIsLoaded(false);
                console.log("load data error:", error);
            })
    }
    React.useEffect(() => {
        // fetch posts from api
        loadPosts();
    }, []);


    const postPath = "/tasks/create-post";

    return (
        <div>
            {!isLoaded && <p>Loading...</p>}
            {isLoaded && (
                <div>
                    <HeaderBar screenname="Reflection" />
                    <AddButton path={postPath} />
                    <CharterList name="Reflection" data_list={posts} />
                    <BottomNavBar />
                </div>
            )}
        </div>
    )
}
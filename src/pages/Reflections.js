import React from 'react';
import HeaderBar from '../components/nav/HeaderBar';
import BottomNavBar from '../components/nav/BottomNavbar';
import AddButton from '../components/common/AddButton';
import CharterList from '../components/charters-page/CharterList';

export default function Reflections() {
    const [posts, setPosts] = React.useState([]);
    // React.useEffect(() => {
    // fetch posts from api
    // setPosts(api_res)
    fetch("http://localhost:3000/api/board/621d26f81a997588eb8b7979/1", { mode: "no-cors" })
        .then(res => res.json())
        .then(data => setPosts(data))
        .catch(error => console.log("error:", error));

    console.log("posts:", posts);
    const postPath = "/tasks/create-post";

    return (
        <div>
            <HeaderBar />
            Reflections page
            <AddButton path={postPath} />
            <CharterList />
            <BottomNavBar />
        </div>
    )
}
import React from 'react'
import"./Feed.css"
import Post from './Post'
import TweetBox from './TweetBox'
import db from "./firebase";
import { useState, useEffect } from "react";
import FlipMove from 'react-flip-move';

function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => doc.data()))
    );
}, []);
    return (
        <div className="feed">
            <div className="feed_header">
            <h1>Twitter clone</h1>
            </div>

            <TweetBox />
            <FlipMove>
                {posts.map((post) => (
                <Post
                    key={post.text}
                    displayName={post.displayName}
                    username={post.username}
                    verified={post.verified}
                    text={post.text}
                    avatar={post.avatar}
                    image={post.image}
                />
            ))}
        </FlipMove>
        </div>
    );
}

export default Feed

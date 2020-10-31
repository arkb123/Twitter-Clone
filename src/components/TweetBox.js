    import React, { useState } from "react";
    import "./TweetBox.css";
    import { Avatar, Button } from "@material-ui/core";
    import db from "./firebase";

    function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");
    const [avatar, setAvatar] = useState("https://merriam-webster.com/assets/mw/images/article/art-wap-article-main/egg-3442-e1f6463624338504cd021bf23aef8441@1x.jpg")

    const sendTweet = (e) => {
        e.preventDefault();

        db.collection("posts").add({
        displayName: "Demo User",
        username: "Demo_user123",
        verified: false,
        text: tweetMessage,
        image: tweetImage,
        avatar:
            avatar,
        });

        setTweetMessage("");
        setTweetImage("");
    };

    return (
        <div className="tweetBox">
        <form>
            <div className="tweetBox_input">
            <Avatar src={avatar} />
            <input
                onChange={(e) => setTweetMessage(e.target.value)}
                value={tweetMessage}
                placeholder="What's happening?"
                type="text"
            />
            </div>
            <input
            value={tweetImage}
            onChange={(e) => setTweetImage(e.target.value)}
            className="tweetBox_imageInput"
            placeholder="Optional: Enter image URL"
            type="text"
            />

            <Button
            disabled = {!tweetMessage}
            onClick={sendTweet}
            type="submit"
            className="tweetBox_tweetButton"
            >
            Tweet
            </Button>
        </form>
        </div>
    );
    }

    export default TweetBox;
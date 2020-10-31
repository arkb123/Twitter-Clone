    import React, { useState } from "react";
    import "./TweetBox.css";
    import { Avatar, Button } from "@material-ui/core";
    import db from "./firebase";

    function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");
    const [avatar, setAvatar] = useState("https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Noto_Emoji_KitKat_263a.svg/1200px-Noto_Emoji_KitKat_263a.svg.png")

    const sendTweet = (e) => {
        e.preventDefault();

        db.collection("posts").add({
        displayName: "Ark B",
        username: "Arkb123",
        verified: true,
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
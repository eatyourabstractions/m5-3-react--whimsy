import React, { useState } from "react";

import avatar from "../assets/carmen-sandiego.png";

import moment from 'moment';
export const TweetContext = React.createContext(null);

export const TweetProvider = ({ children }) =>{
    const date = moment().format('h:mm a - MMM Do, YYYY').toString()
    const [numOfLikes, setNumOfLikes] = useState(460);
    const [numOfRetweets, setNumOfRetweets] = useState(65);
    const [isLiked, setIsLiked] = useState(false);
    const [isRetweeted, setIsRetweeted] = useState(false);

    const handleToggleLike = () =>{
        if(!isLiked){
            setIsLiked(!isLiked)
            setNumOfLikes(numOfLikes + 1)
        } else {
            setIsLiked(!isLiked)
            setNumOfLikes(numOfLikes - 1)
        }
        
    }

    const handleToggleRetweet = () =>{
        if(!isRetweeted){
            setIsRetweeted(!isRetweeted)
            setNumOfRetweets(numOfRetweets + 1)
        } else {
            setIsRetweeted(!isRetweeted)
            setNumOfRetweets(numOfRetweets - 1)
        }
       
        
    }
   

    return <TweetContext.Provider value={{
        tweetContents:"Where in the world am I?",
        displayName:"Carmen Sandiego ✨",
        username:"carmen-sandiego",
        avatarSrc: avatar,
        isRetweetedByCurrentUser: isRetweeted,
        isLikedByCurrentUser: isLiked,
        date: date,
        numOfLikes: numOfLikes,
        numOfRetweets: numOfRetweets,
        handleToggleLike: handleToggleLike,
        handleToggleRetweet: handleToggleRetweet,
    }}>{children}</TweetContext.Provider>


}
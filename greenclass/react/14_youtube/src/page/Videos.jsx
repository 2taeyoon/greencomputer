import React from 'react'
import { useParams } from 'react-router-dom';
const Video = () => {
    // const params = useParams();
    // const keyword = params.keyword;
    const { keyword } = useParams();
    console.log('params',keyword)
    return (
        <div>Videos - { keyword ? ` 🔍 ${keyword}` : '🔥 인기급상승'} </div>
        // keyword가 있을 때 / 없을 때
    )
}

export default Video;
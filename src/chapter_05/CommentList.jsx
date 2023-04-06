import React from "react";
import Comment from "./Comment";

function CommentList(props) { 
    return (
        <div>
            <Comment name={"이인재"} Comment={"안녕하세요, 소플입니다"}/>
            <Comment name={"이인재"} Comment={"안녕하세요, 소플입니다"}/>
        </div>
    )
}

export default CommentList;
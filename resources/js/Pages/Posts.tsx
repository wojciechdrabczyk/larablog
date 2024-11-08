import {formatDistanceToNow} from 'date-fns'
import React from "react";


interface User {
    username: string;
}

interface Post {
    id: number;
    url: string;
    title: string;
    createdAt: Date;
    user: User;
}

interface Props {
    posts: Post[];
}


const Posts: React.FC<Props> = ({posts}) => {
    console.log(posts);
    return (
        <div>
            Testing
        </div>
    )
}
export default Posts;

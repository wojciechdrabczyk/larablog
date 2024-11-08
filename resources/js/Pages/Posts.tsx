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
    console.log("Posts array:", posts);
    return (
        <div>
            <ul>
                {posts.map(post =>
                    <div key={post.id}>
                        <a href={`/posts/${post.id}`}>{post.title}</a>
                        <span className={"text-sm text-gray-600"}>
                                {formatDistanceToNow(new Date(post.createdAt))} ago by {post.user.username}
                        </span>
                    </div>
                    )}
            </ul>
        </div>
    )
}
export default Posts;

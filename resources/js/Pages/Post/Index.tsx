import {formatDistanceToNow} from 'date-fns'
import React from "react";


interface User {
    username: string;
}

interface Post {
    id: number;
    url: string;
    title: string;
    created_at: Date;
    user: User;
}

interface Props {
    posts: Post[];
}


const Index: React.FC<Props> = ({posts}) => {
    console.log("Index array:", posts);
    return (
        <>
        <div>
            <ul>
                {posts.map(post =>
                    <div key={post.id}>
                        <a href={`/posts/${post.id}`} className={""}>{post.title}</a>
                        <span className={"text-sm text-gray-600"}>
                                {formatDistanceToNow(new Date(post.created_at))} ago by {post.user.username}
                        </span>
                    </div>
                    )}
            </ul>
                    <Post/>
        </div>
        </>
    )
}
export default Index;

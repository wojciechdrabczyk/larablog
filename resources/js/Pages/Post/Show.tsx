interface User {
    username: string;
}

interface Post {
    id: number;
    url: string;
    title: string;
    body: string;
    created_at: Date;
    user: User;
}

interface Props {
    post: Post[];
}

const Post: React.FC<Props> = ({ post }) => {

    return (
        <div className={"mx-auto w-2/6 t-4"}>
            <div className={"flex items-center justify-start font-bold"}>
                <div className={"py-2"}>
                    {post.title}
                </div>
            </div>
            <div>
                <span className={"flex flex-row py-2 justify-start"}>
                    {post.body}
                </span>
            </div>
        </div>
    )
}
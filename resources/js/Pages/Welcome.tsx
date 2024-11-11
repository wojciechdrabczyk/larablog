import {Head, Link} from "@inertiajs/react";
import Index from "./Posts/Index";

export default function Welcome({posts}: any) {
    return (
        <>
            <Head title={"Welcome"}></Head>
            <nav className="text-black flex-1 justify-start">
                <Link href={route('home')} className="text-black">Home</Link>
            </nav>
            <Index posts={posts} />
        </>
    )
}

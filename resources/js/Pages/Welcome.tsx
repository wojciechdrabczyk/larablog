import {Head, Link} from "@inertiajs/react";
import Posts from "@/Pages/Posts";
import posts from "@/Pages/Posts";

export default function Welcome({auth}: any) {
    return (
        <>
            <Head title={"Welcome"}></Head>
            <nav className="-mx-3 flex flex-1 justify-end">
                {auth.user ? (
                    <Link
                        href={route('dashboard')}
                        className="text-black px-5 py-5"
                    >
                        Dashboard
                    </Link>
                ) : (
                    <>
                        <Link
                            href={route('login')}
                            className="text-black px-6 py-6"
                        >
                            Log in
                        </Link>
                        <Link
                            href={route('register')}
                            className="text-black px-6 py-6"

                        >
                            Register
                        </Link>
                    </>
                )}
            </nav>
            <Posts posts={posts} />
        </>
    )
}

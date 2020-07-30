import Head from 'next/head'
import { useRouter } from 'next/router'
import Link from 'next/link'
export default function User() {
    const router = useRouter();
    function handleClick(){
        router.push('/')
    }
    return (
        <>
            <Head>
                <title>User page {router.query.id}</title>
                <link rel="stylesheet" href="/global.css" />
            </Head>
            <h1>This is user: {router.query.id} </h1>
            <button onClick={handleClick}>Back to homepage </button>
            <br/>
            <Link href="/"><a>Back to homepage with Link tag</a></Link>
        </>
    )
}


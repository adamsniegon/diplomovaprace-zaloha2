import dynamic from 'next/dynamic';

export default function Map() {
    const MyMap = dynamic(() => import('../components/Map'), {
        ssr: false
    });

    return (
        <>
            <MyMap/>
        </>
    )
}
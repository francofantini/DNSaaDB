import Head from "next/head";
import Footer from "../components/Footer";
import ToDo from "../components/ToDo/ToDo";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <Head>
                <title>DNS as a Database</title>
                <meta name="description" content="DNS as a Database PoC" />
            </Head>

            <div className="flex flex-col items-center justify-center w-3/4">
                <ToDo />
            </div>

            <Footer />
        </div>
    );
}

import Image from "next/image";
import vercel from "../public/vercel.svg";

const Footer = () => {
    return (
        <footer className="mt-4">
            <a href="https://vercel.com" className="text-sm flex flex-row items-center justify-center" target="_blank" rel="noopener noreferrer">
                Powered by{" "}
                <span className="ml-1 flex ">
                    <Image src={vercel} alt="Vercel Logo" width={50} height={16} />
                </span>
            </a>
        </footer>
    );
};
export default Footer;

import { assets } from "@/assets/assets";
import { Button } from "../ui/button";

export default function Header() {
    return (
        <header className="container flex flex-row items-center justify-between py-6 absolute top-0">
            <div className="flex flex-row space-x-2 items-center">
                <img
                    src={assets.logo}
                    alt="imagem da logo"
                    className="w-14 h-14 rounded-full"
                />
                <h1 className="text-2xl font-semibold text-white">
                    NextBite Food
                </h1>
            </div>

            <nav className="flex flex-row items-center space-x-6">
                <ul
                    className="flex flex-row space-x-6 text-white 
                text-xl tracking-[1px]"
                >
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">Sobre</a>
                    </li>
                    <li>
                        <a href="">Contato</a>
                    </li>
                </ul>

                <Button className="rounded-xl text-white text-xl w-[140px} h-[40px] elevation-2 transition duration-600 ease-in-out">
                    <a href="">Login</a>
                </Button>
            </nav>
        </header>
    );
}

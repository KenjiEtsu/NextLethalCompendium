import Image from "next/image";
import lethalLogo from "../assets/lethal-logo.webp";
import Link from "next/link";

export default function Header() {
    return (
        <header>
            <div className="mx-auto flex flex-col p-4 h-[100px] bg-gradient-to-r sm:pb-5">
                <Link className="w-32 h-32 object-contain hover:scale-110 transition-transform" href="/">
                    <Image src={lethalLogo} alt="Lethal Company Logo" width={lethalLogo.width}
                           height={lethalLogo.height} loading="eager" className="pointer-events-none"/>
                </Link>
                <nav className="flex flex-row justify-center gap-4 text-red">
                    <Link href="/moons" className="hover:scale-110 transition-transform hover:font-semibold">Moons</Link>
                    <Link href="/entities"
                       className="hover:scale-110 transition-transform hover:font-semibold">Entities</Link>
                    <Link href="/scrap" className="hover:scale-110 transition-transform hover:font-semibold">Scrap</Link>
                    <Link href="/mods" className="hover:scale-110 transition-transform hover:font-semibold">Mods</Link>

                </nav>
            </div>
            <hr className="h-px bg-red border-none w-full"/>
        </header>
    )
}
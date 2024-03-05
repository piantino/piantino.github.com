import Link from "next/link";

export default function Header() {
    return (
        <nav>
            <ul>
                <li><Link href="/">Início</Link></li>
                <li><Link href="/sobre">Sobre</Link></li>
                <li><Link href="/projetos">Projetos</Link></li>
                <li><Link href="/reconhecimentos">Reconhecimentos</Link></li>
            </ul>
        </nav>
    );
}

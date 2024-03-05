import Link from "next/link";

export default function Header({ links }: any) {

    return (
        <div className="flex">
            <header className="flex-1">
                <h1 className="text-2xl">André Piantino</h1>
            </header>
            <nav>
                <ul className="flex gap-8">
                    {links.map((l: any) =>
                        <li key={l.name}>
                            <Link href={l.href} className="hover:underline">{l.name}</Link>
                        </li>
                    )}
                </ul>
            </nav>
        </div>
    );
}

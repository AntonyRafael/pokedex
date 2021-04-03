import Link from 'next/link'


export default function Sobre() {
    return (
        <ul>
            <li>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </li>
            <li>
                <Link href="/sobre">
                    <a>Sobre o projeto</a>
                </Link>
            </li>
        </ul>
    )
}
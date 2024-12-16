import Link from "next/link"

const Navbar = () => {
    return(
        <div>
            <nav className="bg-black text-white text-lg font-medium mb-5 pl-10">
                <ul className="flex gap-20 py-1">
                    <Link href={"/"}>Home</Link>
                    <Link href={"/books"}>Books</Link>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
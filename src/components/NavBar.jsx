import Link from "next/link";

export function NavBar(){
    return(
        <div className="navBar flex justify-between p-3">
            
            <div className="navBarLeft">
                <Link href="./">TV Shows</Link>
            </div>
            
            <div className="navBarRight">
                <Link href="/">Home </Link>
                |
                <Link href="/about-us"> About </Link>
                {/* |
                <Link href="/add-pet"> Add show</Link> */}
            </div>       
        </div>
    )
}
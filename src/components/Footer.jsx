import Link from "next/link";

export function Footer(){
    return(
        <div className="flex justify-center p-3">
            
            <div className="footer">
                <Link href="/add-category">Add Category</Link>
                &nbsp;|&nbsp;
                <Link href="/add-show">Add Show</Link>
            </div>
                  
        </div>
    )
}
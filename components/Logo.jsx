import Link from "next/link"
import React from "react"


const Logo = () => {
    return (
        <Link href="/" className="text-[28px] font-normal">
            Guilherme<span className="text-accent text-4xl">.</span>
        </Link>
    )
}


export default Logo
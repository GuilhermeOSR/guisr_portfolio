"use client"
import React from "react";

import {AnimatePresence} from "framer-motion"
import {usePathname} from "next/navigation"
// Components
import Retangle from "./Retangle";

const RetangleTransition = () => {
    const pathname = usePathname()
    return  <>
    <AnimatePresence mode="wait">
       <div key={pathname}>
        <div className="h-screen w-screen fixed top-0 left-0 right-0
        pointer-events-none z-50 flex">
            <Retangle/>
        </div>
            
       </div>

    </AnimatePresence>
            
    </>
    
}

export default RetangleTransition
import React from 'react'
import {
    RiReactjsFill,
    RiNextjsFill,
    RiHtml5Fill,
    RiCss3Fill,
    RiTailwindCssFill,
    RiNodejsFill
} from 'react-icons/ri'

import { SiMysql } from 'react-icons/si'

import { SiJavascript, SiPhp, SiLaravel } from 'react-icons/si'
import { FaPython } from 'react-icons/fa'

import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from '@radix-ui/react-tooltip'

const skills = [
    { icon: <RiHtml5Fill />, name: "HTML5" },
    { icon: <RiCss3Fill />, name: "CSS3" },
    { icon: <SiJavascript />, name: "JavaScript" },
    { icon: <SiPhp />, name: "PHP" },
    { icon: <SiLaravel />, name: "Laravel" },
    { icon: <RiNodejsFill />, name: "Node.js" },
    { icon: <RiReactjsFill />, name: "React.js" },
    { icon: <RiNextjsFill />, name: "Next.js" },
    { icon: <RiTailwindCssFill />, name: "Tailwind CSS" },
    { icon: <FaPython />, name: "Python" },
    { icon: <SiMysql />, name: "MySQL" },
    
]

const Skills = () => {
    return (
        <div>
            <h2 className="h2 mb-8">
               <span className="text-accent">Tecnologias</span>
            </h2>
            <div className="flex flex-wrap gap-6 max-w-sm xl:max-w-none">
                {skills.map((item, index) => (
                    <TooltipProvider key={index}>
                        <Tooltip>
                            <TooltipTrigger className="w-16 h-16 rounded-full flex items-center justify-center bg-tertiary/70 group">
                                <div className="text-3xl group-hover:text-accent transition-all duration-300">
                                    {item.icon}
                                </div>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p className="text-lg">{item.name}</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                ))}
            </div>
        </div>
    )
}

export default Skills

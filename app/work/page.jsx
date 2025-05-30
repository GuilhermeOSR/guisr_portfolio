"use client"
import React from "react"

import {motion} from "framer-motion"

import {Swiper, SwiperSlide} from "swiper/react"
import {Pagination} from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"

import { Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import Link from "next/link"
import Image from "next/image"

import {MdArrowOutward} from "react-icons/md"
import {FaGithub} from "react-icons/fa"
import { Description } from "@radix-ui/react-dialog"

const projects = [
    {
        id: 1,
        category: "frontend",
        title: "Gendiesel WebSite",
        description: "React + NextJS website",
        image: "/assets/work/thumb-1.png",
        link: "",
        github: "https://github.com/GuilhermeOSR/mvp_gendiesel",
        tech: ["React", "Tailwind CSS", "Next.js"],
    },
    {
        id: 2,
        category: "fullstack",
        title: "Aguarde La Fora Site",
        description: "Site do Aguarde La Fora ",
        image: "/assets/work/thumb-2.png",
        link: "",
        github: "",
        tech: ["HTML5", "CSS3", "PHP"],
    },

    {
        id: 3,
        category: "fullstack",
        title: "Lynda Rosa Site",
        description: "Site da Lynda Rosa ",
        image: "/assets/work/thumb-4.png",
        link: "",
        github: "",
        tech: ["HTML5", "CSS3", "PHP", "WordPress"],
    },

    {
        id: 4,
        category: "backend",
        title: "DogGen Sistema",
        description: "Sistema de gerenciamento de cachorros",
        image: "/assets/work/thumb-8.png",
        link: "",
        github: "https://github.com/GuilhermeOSR/mvp_doggen_front",
        tech: ["HTML5", "CSS3", "Python", "Flask", "SQLite"],
    },

    {
        id: 5,
        category: "frontend",
        title: "4Users Site",
        description: "Site da 4Users",
        image: "/assets/work/thumb-7.png",
        link: "",
        github: "",
        tech: ["React", "HTML5", "CSS3", "JavaScript"],
    },

    {
        id: 6,
        category: "frontend",
        title: "Raiwonk's Site",
        description: "Site do Raiwonk",
        image: "/assets/work/thumb-6.png",
        link: "",
        github: "https://github.com/GuilhermeOSR/mvp_gendiesel",
        tech: ["HTML5", "CSS3", "JavaScript"],
    },

    {
        id: 7,
        category: "frontend",
        title: "Manemp",
        description: "Manemp ",
        image: "/assets/work/thumb-3.png",
        link: "",
        github: "https://github.com/GuilhermeOSR/ManEmp",
        tech: ["React", "HTML5", "CSS3", "TypeScript, Firebase"],
    },

    {
        id: 8,
        category: "backend",
        title: "Mister Chef Sistema",
        description: "Sistema de cadastro de Fast Foods ",
        image: "/assets/work/thumb-5.png",
        link: "",
        github: "",
        tech: ["HTML5", "CSS3", "PHP"],
    },
]

const categories = ["frontend", "fullstack", "backend"];

const Work = () => {
    return (
        <motion.section
                    initial={{opacity: 0}} 
            animate={{opacity: 1, 
            transition: {delay: 2.4, 
            duration: 0.4, ease: 
            "easeIn"}, 
            
                }}
                className="min-h-screen flex items-center py-24 xl:py-0
                "
        >
            <div className="container mx-auto w-full h-full flex flex-col
            justify-center">
                {/* heading */ }
                <h2 className="h2 mb-6 xl:mb-12 max-w-[600px]">
                   <span className="text-accent"> Trabalhos </span> 
                 Recentes
                </h2>
                <Tabs defaultValue="frontend" className="w-full flex flex-col
                gap-6 xl:gap-12">
                    <TabsList className="flex flex-wrap justify-center 
                    items-center gap-4 h-full mb-4 xl:mb-0">
                        {categories.map((category)=> {
                            return (
                                <TabsTrigger key={category} value={category}
                                className="capitalize border border-white/10
                                data-[state=active]:bg-accent 
                                data-[state=active]:border-accent h-[48px] px-6
                                 rounded-full cursor-pointer">
                                    {category === "frontend" ? "Frontend" : category}
                                  
                                </TabsTrigger>
                            )
                        })}
                    </TabsList>
                    {/*Tabs content */}
                    <div className="h-[400px] scrollbar scrollbar-thumb-accent
                    scrollbar-track-accent/5 overflow-y-scroll">
                        {categories.map((category)=> {
                            return (
                                <TabsContent key={category} value={category}>
                                    <Swiper modules={[Pagination]} pagination={{clickable: true, dynamicBullets: true}} 
                                    className="h-max xl:h-[460px] ">
                                        {projects.filter((project) => project.category === category).map
                                        ((project)=> {
                                            return(
                                <SwiperSlide key={project.id} className="h-full">
  <div className="flex flex-col xl:flex-row gap-8 xl:gap-12">
    
    {/* Project info */}
    <div className="w-full max-w-[380px] flex flex-col gap-6 xl:gap-8 xl:pt-6 order-2 xl:order-none">
      <h3 className="h3">{project.title}</h3>
      
      <div className="xl:mb-4 max-w-[300px] min-h-[130px]">
        <p className="mb-4">Tecnologias Usadas</p>
        <ul className="flex flex-wrap gap-4">
          {project.tech.map((item, index) => (
            <li key={index} className="flex items-center gap-4 bg-[$a883ff]/13 h-[28px] px-[14px] rounded-full">
              {item}
            </li>
          ))}
        </ul>
      </div>

        <div className="flex flex-col sm:flex-row gap-4 
            items-start">
              {/*  <Link href={project.link}>
                <button className="btn btn-sm btn-accent flex gap-2">
                    <MdArrowOutward className="text-xl" />
                    <span>Ver Projeto</span>
                </button>
                </Link>
              */}
                <Link href={project.github}>
                <button className="btn btn-sm btn-white flex gap-2">
                    <FaGithub className="text-xl" />
                    <span>Github Repo</span>
                </button>
                </Link>
  
        </div>
    </div>

    {/* Project image */}
    <div className="w-full h-[200px] md:h-[300px] xl:h-[400px] relative bg-pink-50/10 order-1 xl:order-none rounded-lg overflow-hidden">
      <Image src={project.image} alt={project.image} fill className="object-cover" />
    </div>
    
  </div>
</SwiperSlide>
                                            )
                                  })}
                                    </Swiper>
                                </TabsContent>
                            )
                        })}
                    </div>
                </Tabs>
            </div>
        </motion.section>

    )
}

export default Work      
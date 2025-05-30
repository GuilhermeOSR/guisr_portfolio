"use client"

import React from 'react'
import {motion} from 'framer-motion'
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { 
    Select, 
    SelectTrigger, 
    SelectValue, 
    SelectContent, 
    SelectItem } from "@/components/ui/select"

import {HiOutlineMapPin, HiOutlineArrowLongRight} from 'react-icons/hi2'
import {HiOutlinePhone, HiOutlineMail} from 'react-icons/hi'


const Contact = () => {
 const [selectedService, setSelectedService] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const firstname = form.firstname.value;
    const lastname = form.lastname.value;

    const service = selectedService || 'Não especificado';
    const messageInput = form.message.value;

    const phoneNumber = '5584991442686'; // Seu número com DDI, sem +
    const message = `
Nome: ${firstname} ${lastname} || 
Serviço: ${service} ||

 
Mensagem: ${messageInput}
    `.trim();

    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank'); // Abre o WhatsApp Web ou app com a mensagem preenchida
  };

    return (
        <motion.section
                    initial={{opacity: 0}} 
            animate={{opacity: 1, 
            transition: {delay: 2.4, 
            duration: 0.4, ease: 
            "easeIn"}, 
            
                }}
            className="h-screen flex items-center py-24 xl:py-0"
        >
            <div className="container mx-auto w-full h-full flex flex-col
            items-center xl:justify-center xl:overflow-hidden scrollbar scrollbar-thumb-accent
            scrollbar-track-accent/5 overflow-y-scroll xl:overflow-y-visible">
               <div className="w-full">
                <div className="flex flex-col xl:flex-row gap-6">
                    {/* info text */}
                    <div className="flex-1 xl:w-[600px] flex flex-col gap-12">
                        {/* text novo comentario */}
                        <div>
                            <h2 className="h2 mb-6">
                                Entre em <span className="text-accent">Contato</span>
                            </h2>
                            <p className="max-w-[460px]">
                                Se você tem alguma dúvida, sugestão ou deseja solicitar um orçamento, estou à disposição para conversar!
                            </p>
                        </div>
                        {/* info */}
                        <div className="flex flex-col gap-8 mb-6 xl:mb-0">
                            {/* phone */}
                            <div className="flex items-center gap-4 text-lg">
                                <span className="text-accent">
                                    <HiOutlinePhone className="text-2xl"/>
                                </span>
                                <span>+55 (84)99144-2686</span>
                            </div>
                            {/* email */}
                            <div className="flex items-center gap-4 text-lg">
                                <span className="text-accent">
                                    <HiOutlineMail className="text-2xl"/>
                                </span>
                                <span>guilherme.o.santarosa@gmail.com</span>
                            </div>
                            {/* location */}
                            <div className="flex items-center gap-4 text-lg">
                                <span className="text-accent">
                                    <HiOutlineMapPin className="text-2xl"/>
                                </span>
                                <span>Natal, Brasil</span>
                            </div>
                        </div>
                    </div>
                    {/* form */}
                    <div className="flex-1">
                        <form className="flex flex-col gap-6 items-start" onSubmit={handleSubmit}>
                            {/* first and last name */}
                            <div className="flex flex-col xl:flex-row gap-6 w-full">
                                <div className="w-full">
                                    <Label htmlFor="name">Nome <span className="text-accent">*</span>
                                    </Label>
                                    <Input 
                                    id="firstname" 
                                    name="firstname" 
                                    placeholder="Nome"
                                    required
                                    />
        
                                </div>
                                <div className="w-full">
                                    <Label htmlFor="name">Sobrenome <span className="text-accent">*</span>
                                    </Label>
                                    <Input 
                                    id="lastname" 
                                    name="lastname" 
                                    placeholder="Sobrenome"
                                    required
                                    />
        
                                </div>
                            </div>
                            {/* email 
                            <div className="w-full">
                                    <Label htmlFor="email">Email <span className="text-accent">*</span>
                                    </Label>
                                    <Input 
                                    id="email" 
                                    name="email" 
                                    placeholder="Email"
                                    required
                                    />
        
                            </div>
                            */}
                            {/* select */}
                            <div className="w-full">
                                <Label htmlFor="">
                                Estou interessado em <span className="text-accent">*</span>
                                </Label>
                                <Select name="service" required value={selectedService} onValueChange={setSelectedService}>
                                    <SelectTrigger id="service" className="w-full !h-12 bg-white/5 border-white/10
                                    px-4"
                                    >
                                        <SelectValue placeholder="Escolha aqui" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-black border-white/20">
                                        <SelectItem value="fullstack">Site + Sistema</SelectItem>
                                        <SelectItem value="frontend">Site</SelectItem>
                                        <SelectItem value="backend">Sistema Web</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            {/* textarea */}
                            <div className="w-full">
                                <Label htmlFor="name">
                                    Mensagem <span className="text-accent">*</span>
                                </Label>
                                <Textarea id="message" name="message" placeholder="Escreva sua mensagem..."
                                className="min-h-[160px] bg-white/5 border-white/10 focus-visible:border-accent focus-visible:ring-accent focus-visible:ring-[1px] resize-none p-4 selection:bg-accent placeholder:text-white/50 "
                                />
                                 
                            </div>
                            {/* btn */}
                            <button className="btn btn-lg btn-accent" >
                                <div className="flex items-center gap-3">
                                    <span className="font-medium">Enviar mensagem</span>
                                    <HiOutlineArrowLongRight className="text-xl" />
                                </div>
                            </button>
                        </form>
                    </div>
                </div>
               </div>
            </div>
        </motion.section>
    )
}


export default Contact
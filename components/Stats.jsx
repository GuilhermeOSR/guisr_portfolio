import CountUp from "react-countup"



const Stats = () => {
    return (
    <div className="flex flex-col xl:flex-row xl:items-center gap-8 xl:gap-12">
        <div className="flex gap-4">
            <div className="text-5xl font-bold text-accent flex">
                <CountUp end={4} duration={5} delay={2} className="block w-[60px]" />
                <div>+</div>
            </div>
            <span>
                Anos de <br /> Experiência
            </span>
        </div>

         <div className="flex gap-4">
            <div className="text-5xl font-bold text-accent flex">
                <CountUp end={6} duration={5} delay={2} className="block w-[60px]" />
            </div>
            <span>
                Clientes <br /> por todo mundo
            </span>
        </div>
    </div>
    )
}

export default Stats


const journey = [
    {
        years: "Jun 2024 - Nov 2024",
        role: "Dev. Full Stack",
        instituition: "Lua4"
    }, 

    {
        years: "2023 - 2024",
        role: "Pós-Graduação",
        instituition: "PUC RIO"
    }, 

    {
        years: "2020 - 2022",
        role: "Graduação",
        instituition: "Universidade Potiguar"
    }, 

]

const Journey = () => {
    return (
        <div className="flex flex-col">
            <h2 className="h2 mb-8">
                 Formação & <span className="text-accent">Experiência </span>
            </h2>

            {
                journey.map((item, index) => {
                    const {instituition, role, years} = item;
                    return <div key={index} className="flex items-center gap-12 w-full">
                              {/* Bullets */}
                        <div className="flex flex-col w-max justify-center items-center">
                            <div className="w-3 h-3 bg-accent rounded-full"></div>
                            <div className="w-[1px] h-[180px] bg-white/10"></div>
                        </div>
                        {/* Text*/}
                         <div className="max-w-[500px]">
                            <p className="mb-6 text-lg text-white">{years}</p>
                            <h4 className="h4 mb-2">{role}</h4>
                            <p className="text-lg text-white/50">{instituition}</p>
                         </div>
                    </div>
                })
            }
    
        </div>
    )
}


export default Journey
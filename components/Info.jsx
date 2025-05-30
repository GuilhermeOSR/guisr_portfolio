import {React} from 'react'

import {
    HiOutlinePhone,
    HiOutlineUser,
    HiOutlineLocationMarker,
    HiOutlineMail,
} from "react-icons/hi"

const Info = () => {

    return (
    <div className="flex flex-col gap-6 md:gap-10">
        <div className="flex flex-col md:flex-row gap-4">
            <div className="w-[280px] flex items-start gap-4">
                <HiOutlineUser className="text-2xl mt-1 text-accent" />
                <div>
                    <p className="text-lg">Data de Nascimento</p>
                    <p >05 de Julho 2001</p>
                </div>
            </div>
        <div className="w-[280px] flex items-start gap-4">
                <HiOutlineMail className="text-2xl mt-1 text-accent"/>
                <div>
                    <p className="text-lg">Email</p>
                    <p title="guilherme.o.santarosa@gmail.com">guilherme@gmail.com</p>
                </div>
            </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
            <div className="w-[280px] flex items-start gap-4">
                <HiOutlinePhone className="text-2xl mt-1 text-accent" />
                <div>
                    <p className="text-lg">Tel</p>
                    <p >+55 (84)99144-2686</p>
                </div>
            </div>
        <div className="w-[280px] flex items-start gap-4">
                <HiOutlineLocationMarker className="text-2xl mt-1 text-accent"/>
                <div>
                    <p className="text-lg">Local</p>
                    <p>Natal, Brazil</p>
                </div>
            </div>
        </div>
    </div>
    )
}


export default Info
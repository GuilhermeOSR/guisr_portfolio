
import {
    BiLogoFacebook, 
    BiLogoInstagramAlt, 
    BiLogoDribbble, 
    BiLogoLinkedin} from 'react-icons/bi';

import { FaGithub, FaYoutube } from 'react-icons/fa'; // ⬅️ Adicionado

const socials = [
    {
        icon: <FaGithub />,
        path: "https://github.com/GuilhermeOSR",
    },

    {
        icon: <BiLogoInstagramAlt />,
        path: "https://www.instagram.com/guilherme.osrosa/",
    },
 

    {
        icon: <FaYoutube />,
        path: "https://www.youtube.com/@GuilhermeOliveira-hl5ni",
    },
    {
        icon: <BiLogoLinkedin />,
        path: "https://www.linkedin.com/in/guilherme-de-oliveira-santa-rosa-6093461a0/",
    }
];


const Socials = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => (
                <a 
                    key={index} 
                    href={item.path} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={iconStyles}
                >
                    {item.icon}
                </a>
                
            ))}
        </div>
    );
};


export default Socials
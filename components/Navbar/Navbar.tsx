import React from 'react';
import { Quattrocento_Sans } from 'next/font/google';
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';

export const quattrocento = Quattrocento_Sans({
    weight: ['400', '700'], // Specify font weights
    subsets: ['latin'], // Specify subsets
    style: ['normal'], // Include normal styles only
    variable: '--font-quattrocento', // Optional CSS variable
});

function Navbar() {
    const letters = ['S', 'U', 'B', 'O', 'D', 'H', ' ', 'R', 'A', 'V', 'I', 'D', 'A', 'S'];

    const icons = [
        {
            link: "https://www.linkedin.com/in/subodhravidas/",
            icon: <BsLinkedin />
        },
        {
            link: 'https://github.com/1432Subodh',
            icon: <BsGithub />
        },
        {
            link: 'https://www.instagram.com/subodh_ravidas_01/',
            icon: <BsInstagram />
        },
        {
            link: 'https://www.facebook.com/subodh_ravidas',
            icon: <BsFacebook />
        }
    ]

    return (
        <nav className="w-full sm:px-32 px-4 py-7 flex justify-between items-center border-b">
            {/* Animated "SUBODH RAVIDAS" */}
            <div className="flex space-x-1">
                {letters.map((letter, index) => (
                    <span
                        key={index}
                        className={`${quattrocento.className} sm:text-[1rem] text-xs font-bold tracking-wide`}
                        style={{
                            animation: `
                blur-text 1.5s ${index * 0.3}s  2 linear alternate,
                color-change 2s ${index * 0.4}s  2 linear alternate,
                scale-bounce 1.2s ${index * 0.2}s 2 ease-in-out`,
                        }}
                    >
                        {letter}
                    </span>
                ))}
            </div>
            <div className="flex items-center sm:gap-10 gap-5 text-sm">
                {
                    icons.map((icon, index) => (

                        <a href={icon.link} target='_blank' className="cursor-pointer transition-all duration-300 ease-in-out hover:scale-125 hover:rotate-12 hover:bg-gradient-to-r hover:from-white hover:via-blue-500 hover:to-orange-500 hover:bg-clip-text">
                            {icon.icon}
                        </a>
                    ))
                }
            </div>




            <style jsx>{`
        @keyframes blur-text {
          0% {
            filter: blur(0px);
          }
          100% {
            filter: blur(4px);
          }
        }

        @keyframes color-change {
          0% {
            color: #ffffff; /* White */
          }
          50% {
            color: #ff5733; /* Orange */
          }
          100% {
            color: #33c3ff; /* Light Blue */
          }
        }

        @keyframes scale-bounce {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
        }
      `}</style>
        </nav>
    );
}

export default Navbar;

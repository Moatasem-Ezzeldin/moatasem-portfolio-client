import { Container, Button } from "../../../index";
import { FaFacebook, FaGithub, FaLinkedin} from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { motion } from "motion/react";

const Hero = ({ heroData, name, isEnglish }) => {

  return (
    <div
        name={name}
        className="relative min-h-screen overflow-hidden bg-body"
    >
        {/* ================= Background ================= */}
        <div
            className="
            pointer-events-none
            absolute inset-0
            z-0
            overflow-hidden
            text-primary
            "
        >
            <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 1440 900"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            >
            {/* Base */}
            <rect
                width="1440"
                height="900"
                fill="currentColor"
                fillOpacity="0.025"
            />

            {/* Back wave */}
            <path
                d="
                M0 0
                H1440
                V900
                H0
                Z
                "
                fill="currentColor"
                fillOpacity="0.04"
            />

            {/* Large back wave */}
            <path
                d="
                M0 0
                H1440
                V720

                C1280 630 1140 570 980 650
                C790 745 650 820 470 755
                C290 690 150 600 0 710

                Z
                "
                fill="currentColor"
                fillOpacity="0.06"
            />

            {/* Middle wave */}
            <path
                d="
                M0 0
                H1440
                V570

                C1270 480 1120 430 940 510
                C760 595 630 700 450 630
                C280 565 140 480 0 600

                Z
                "
                fill="currentColor"
                fillOpacity="0.09"
            />

            {/* Main wave */}
            <path
                d="
                M0 0
                H1440
                V430

                C1260 335 1110 300 920 390
                C740 475 610 565 430 495
                C270 430 130 350 0 475

                Z
                "
                fill="currentColor"
                fillOpacity="0.13"
            />
            </svg>

            {/* Decorative circles */}
            <div
            className="
                absolute
                left-[8%] top-[14%]
                h-16 w-16
                rounded-full
                bg-primary/10
                blur-[1px]
                sm:h-20 sm:w-20
                md:h-24 md:w-24
            "
            />

            <div
            className="
                absolute
                right-[10%] top-[18%]
                h-10 w-10
                rounded-full
                bg-primary/15
                sm:h-14 sm:w-14
                md:h-16 md:w-16
            "
            />

            <div
            className="
                absolute
                left-[30%] top-[35%]
                h-6 w-6
                rounded-full
                bg-primary/15
                sm:h-8 sm:w-8
                md:h-10 md:w-10
            "
            />

            <div
            className="
                absolute
                right-[28%] top-[10%]
                h-5 w-5
                rounded-full
                bg-primary/20
                sm:h-6 sm:w-6
                md:h-8 md:w-8
            "
            />

            <div
            className="
                absolute
                bottom-[12%] right-[12%]
                h-12 w-12
                rounded-full
                bg-primary/10
                sm:h-16 sm:w-16
                md:h-20 md:w-20
            "
            />
        </div>
        <Container className="relative z-10 w-full h-full bg-transparent pt-16">
            <div 
                className="w-full min-h-[calc(100vh-4rem)] flex flex-col-reverse items-center justify-center gap-10
                md:flex-row md:justify-between lg:justify-around md:gap-0 py-10"
            >
                {/* left */}
                <div className="">
                    {/* info */}
                    <div className="">
                        <h1 
                            className=" text-3xl lg:text-4xl font-bold text-title"
                           
                        >
                            {heroData.name} 
                        </h1>

                        <h2 className="text-subtitle text-xl lg:text-2xl font-semibold mt-2">
                            {heroData.bio}
                        </h2>

                        <p className="text-sm lg:text-base text-muted font-medium max-w-sm lg:max-w-md mt-2 leading-relaxed">
                            {heroData.desc}
                        </p>
                    </div >
                    {/* Buttons */}
                    <div className="mt-4 flex flex-wrap gap-4">
                        <Button
                            variant="primary"
                            scrollTo="projects"
                            className="px-6 py-2.5 rounded-md text-sm w-full sm:w-fit"
                        >
                            {heroData.textBtnProjects}
                        </Button>
                        <Button
                            variant="secondary"
                            scrollTo="contact"
                            className="px-6 py-2.5 rounded-md text-sm w-full sm:w-fit"
                        >
                            {heroData.textBtnContact}
                        </Button>
                    </div>
                    {/* social icons */}
                    <div className="text-subtitle flex items-center justify-center md:justify-start gap-[1.4rem] 
                    text-[1.9rem] mt-6">
                        <a className="hover:scale-[1.1] transition-300"
                        href={heroData.facebookLink}
                        target="_blank"
                        rel="noopener noreferrer" >
                            <span className="hover:text-blue-600 transition-300 hover:scale-[1.07] cursor-pointer"><FaFacebook /></span>
                        </a>
                        <a 
                            target="_blank"
                            rel="noopener noreferrer" 
                            href={heroData.instagramLink}
                            className="hover:scale-[1.1] transition-300" >
                            <span className="hover:text-red-400 transition-300 hover:scale-[1.07] cursor-pointer"><FaInstagram /></span>
                        </a>
                        <a target="_blank"
                            rel="noopener noreferrer" className="hover:scale-[1.1] transition-300" href={heroData.githubLink}>
                            <span className="hover:text-fuchsia-400 transition-300 hover:scale-[1.07] cursor-pointer"><FaGithub/></span>
                        </a>
                        <a target="_blank"
                            rel="noopener noreferrer" className="hover:scale-[1.1] transition-300" href={heroData.linkedinLink}>
                            <span className="hover:text-blue-400 transition-300 hover:scale-[1.07] cursor-pointer"><FaLinkedin/></span>
                        </a>
                    </div>
                </div>
                {/* Avater */}
                <div className="relative flex items-center justify-center">
                    {/* 🔥 Blue Fire Ring */}
                    <div
                        className="absolute -inset-5  md:-inset-6 rounded-full "
                    >
                        <svg
                            viewBox="0 0 300 300"
                            className="absolute inset-0 w-full h-full overflow-visible"
                        >
                            <defs>

                                {/* Fire gradient */}
                                <linearGradient
                                    id="blueFire"
                                    x1="0%"
                                    y1="0%"
                                    x2="100%"
                                    y2="100%"
                                >
                                    <stop offset="0%" stopColor="#ffffff" />
                                    <stop offset="25%" stopColor="#60a5fa" />
                                    <stop offset="55%" stopColor="#2563eb" />
                                    <stop offset="80%" stopColor="#1d4ed8" />
                                    <stop offset="100%" stopColor="#60a5fa" />
                                </linearGradient>

                                {/* Glow */}
                                <filter
                                    id="fireGlow"
                                    x="-50%"
                                    y="-50%"
                                    width="200%"
                                    height="200%"
                                >
                                    <feGaussianBlur
                                        stdDeviation="5"
                                        result="blur"
                                    />

                                    <feMerge>
                                        <feMergeNode in="blur" />
                                        <feMergeNode in="SourceGraphic" />
                                    </feMerge>
                                </filter>

                            </defs>

                            {/* Main flame */}
                            <path
                                d="
                                    M150 8

                                    C162 28 177 28 185 48
                                    C193 66 184 80 203 88

                                    C224 96 244 86 258 103
                                    C274 122 257 139 271 155

                                    C282 169 292 180 285 198
                                    C279 215 258 216 255 235

                                    C252 251 264 266 249 278

                                    C231 292 211 270 195 279

                                    C176 289 166 300 150 294

                                    C132 288 132 269 113 264

                                    C94 259 78 276 62 263

                                    C47 251 59 230 47 216

                                    C34 201 13 206 10 186

                                    C7 165 29 156 31 139

                                    C33 119 14 107 28 90

                                    C42 73 64 84 80 72

                                    C96 60 92 38 110 28

                                    C126 19 137 29 150 8

                                    Z
                                "
                                fill="none"
                                stroke="url(#blueFire)"
                                strokeWidth="5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                filter="url(#fireGlow)"
                            />

                            {/* Inner flame */}
                            <path
                                d="
                                    M150 28

                                    C160 48 176 54 174 70
                                    C172 86 151 88 158 108

                                    C164 125 190 126 194 145

                                    C198 164 178 170 181 187

                                    C184 204 202 213 191 230

                                    C180 247 157 232 145 244

                                    C131 256 118 241 103 235

                                    C87 229 76 213 86 198

                                    C96 182 78 170 82 151

                                    C86 132 107 126 111 108

                                    C115 90 101 75 112 61

                                    C123 47 139 49 150 28

                                    Z
                                "
                                fill="none"
                                stroke="#60a5fa"
                                strokeWidth="3"
                                opacity="0.8"
                                filter="url(#fireGlow)"
                            />

                        </svg>
                    </div>
                    <div
                        className="
                            relative
                            z-10
                            w-52 h-52
                            sm:w-60 sm:h-60
                            md:w-72 md:h-72
                            lg:w-80 lg:h-80
                            rounded-full
                            overflow-hidden
                        "
                    >
                        <img
                            src={heroData.srcAvatar}
                            alt={heroData.altAvatar}
                            className="w-full h-full rounded-full object-cover"
                        />
                    </div>

                </div>
            </div>
        </Container>
    </div>
  )
}

export default Hero
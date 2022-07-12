import Link from "next/link";
import { useState } from "react";
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { motion } from "framer-motion";


const Navigation = () => {

    const [isVisible, setIsVisible] = useState(false);

    const style = css`
        & .lightbox {
            position: fixed;
            z-index: 900;
            top: 0;
            left: 0;
            height: 100vh;
            width: 100vw;
            background-color: rgba(0, 0, 0, 0.3);
            backdrop-filter: blur(1px);
        }

        & .nav {
            background-color: yellow;
            opacity: 50%;
            width: fit-content;
            height: 3rem;
            position: fixed;
            bottom: 0;
            right: 0;
            z-index: 2000;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            margin: 1rem 1rem 2rem;
            border-radius: 1000px;

        }

        & .nav__link {
            font-size: 0.8rem;
            margin: 0 1rem;
        }

        & .home {
            padding-left: 1.2rem;
        }
        & .nav__link:first-of-type {
            margin-left: 3rem;
        }

        & .nav__btn {
            position: fixed;
            bottom: 0;
            right: 0;
            z-index: 2010;
            margin: 1rem 1rem 2rem;
            background-color: yellow;
            opacity: 100%;
            border-radius: 50%;
            color: #000;
            height: 3rem;
            width: 3rem;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.8rem;
            border: none;
        }  
        
        & .hidden {
            display: none;
        }
    `;

    const variants = {
        open: { x: -150 },
        closed: { x: -10 }
    }

    const variants2 = {
        open: {display: "block", opacity: 10},
        closed: {display: "none", opacity: 0}
    }


    return (
        <div css={style} >
            <motion.div >
                <motion.button 
                className="nav__btn"
                onClick={() => {
                setIsVisible(!isVisible);
                }} 
                animate={isVisible ? "open" : "closed"} variants={variants}
                >
                    art
                </motion.button>
                <nav className="nav">
                    {isVisible ? 
                        <Link href="/" scroll>
                            <a className="nav__link home">
                                <p>home</p>
                            </a>
                        </Link> 
                    : null }
                    {isVisible ? 
                        <Link href="/search" scroll>
                            <a className="nav__link">
                                <p>search</p>
                            </a>
                        </Link> 
                    : null }
                </nav>
            <div  
                animate={isVisible ? "open" : "closed"} 
                variants={variants2} 
                className={isVisible ? "lightbox" : "hidden"}
                onClick={() => {
                //console.log("Lightbox clicked")
                setIsVisible(!isVisible);
                }} 
                >
            </div>
            </motion.div>
        </div>
     );
}
 
export default Navigation;
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import Image from "next/image";
import { IoArrowForwardSharp } from "react-icons/io5";

const Artworks = () => {

    const [artworks, setArtworks] = useState();

    useEffect(() => {
        axios(`https://api.artic.edu/api/v1/artworks?limit=40`, {
        })
        .then((result) => {
            setArtworks(result.data.data)
        });
		}
	, []);

    const style = css`
        list-style: none;
        padding-left: 0;
        margin: 0;

        & .listItem {
            height: fit-content;
        }
        & .listItem__linkAnchor {
            height: 350px;
            width: 100vw;   
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: auto;
        }
        & .overlay {
            height: 350px;
            width: 100vw;
            object-fit: cover;
            grid-area: 1 / 1 / -1 / -1;
            background-color: rgba(0, 0, 0, 0.38);
            z-index: 200;
        }
        & .listItem__imgContainer {
            //display: block;
            height: 350px;
            width: 100vw;
            grid-area: 1 / 1 / -1 / -1;
            overflow: hidden;
            position: relative;
            object-fit: contain;
        }
        & .listItem__img {
            height: 350px;
            width: 100vw;
            object-fit: cover;
            grid-area: 1 / 1 / -1 / -1;
            overflow: hidden;
            display: block;
        }
        & .listItem__textBox{
            height: 100%;
            width: 100vw;
            object-fit: cover;
            grid-area: 1 / 1 / -1 / -1;
            z-index: 300;
            padding: 1rem;
        }
        & .listItem__title {
            text-transform: uppercase;
            font-size: 2.2rem;
            color: yellow;
            font-weight: 200;  
            height: 40%;
            overflow: hidden;
        }
        & .listItem__underline {
            height: 10px;
            display: block;
            width: 30vw;
            border-bottom: solid 1px yellow;
        }
        & .listItem__artist {
            text-transform: uppercase;
            font-size: 0.6rem;
            color: yellow;
            font-weight: 200;
        }
        & .listItem__arrow {
            color: yellow;
            grid-area: 1 / 1 / -1 / -1;
            z-index: 300;
            font-size: 2rem;
            margin: 1rem 1rem 2rem;
            place-self: end;
        }
    `;
    

    return ( 
        
        <ul css={style}>
            {artworks?.map((artwork, index) => (
                <li key={index} className="listItem">
                    <Link href={`/artwork/${artwork.id}`} className="listItem__link" scroll>
                        <a className="listItem__linkAnchor">
                            <div className="listItem__textBox">
                                <h2 className="listItem__title">{artwork.title}</h2>
                                <p className="listItem__artist">{artwork.artist_title ? artwork.artist_title : "unknown"}</p>
                                <div className="listItem__underline"></div>
                            </div>
                            <IoArrowForwardSharp className="listItem__arrow"/>
                            <div className="listItem__imgContainer">
                                <Image src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg` } 
                                alt={artwork.artist_title} 
                                // width={400} 
                                // height={400}
                                // layout="responsive"
                                layout="fill"
                                className="listItem__img"
                                />
                            </div>
                            <div className="overlay"></div>
                        </a>
                    </Link>
                </li>
            ))}
        </ul>
     );
}
 
export default Artworks;

// /** @jsxImportSource @emotion/react */
// import { css } from '@emotion/react';
// import { useEffect, useState, useContext } from "react";
// import { ColorContext } from "../contexts/ColorContext";
// import Link from "next/link";
// import axios from "axios";
// import Image from "next/image";
// import { IoArrowForwardSharp } from "react-icons/io5";
// import { motion } from "framer-motion";

// const Artworks = () => {

//     const { setColor } = useContext(ColorContext);

//     const [artworks, setArtworks] = useState();
//     //const [hslColor, setHslColor] = useState({h: 0, s: 0, l: 0, a: 0});


//     useEffect(() => {
//         axios(`https://api.artic.edu/api/v1/artworks?limit=40`, {
//         })
//         .then((result) => {
//             setArtworks(result.data.data)
//             // setHslColor({
//             //     h: result.data.data.color.h,
//             //     s: result.data.data.color.s,
//             //     l: result.data.data.color.l,
//             //     a: result.data.data.color.percentage
//             // })
//         });
// 		}
// 	, []);

//     const style = css`
//         list-style: none;
//         padding-left: 0;
//         margin: 0;

//         & .listItem {
//             /* position: relative;
//             width: 100vw;
//             max-height: 100%;
//             max-width: 100vw; */
//             height: fit-content;

//         }
//         & .listItem__linkAnchor {
//             height: 350px;
//             width: 100vw;   
//             display: grid;
//             grid-template-columns: 1fr;
//             grid-template-rows: auto;
//         }
//         & .overlay {
//             height: 350px;
//             width: 100vw;
//             object-fit: cover;
//             grid-area: 1 / 1 / -1 / -1;
//             background-color: rgba(0, 0, 0, 0.38);
//             z-index: 200;
//         }
//         & .listItem__imgContainer {
//             //display: block;
//             position: relative;
//             object-fit: contain;
//             max-height: 350px;
//             min-width: 100vw;
//             height: 350px;
//             width: 100vw;
//             grid-area: 1 / 1 / -1 / -1;
//             overflow: hidden;
//         }
//         & .listItem__img {
//             max-height: 350px;
//             width: 100vw;
//             height: 350px;
//             width: 100vw;
//             object-fit: cover;
//             grid-area: 1 / 1 / -1 / -1;
//             overflow: hidden;
//             display: block;
//         }
//         & .listItem__textBox{
//             height: 100%;
//             width: 100vw;
//             object-fit: cover;
//             grid-area: 1 / 1 / -1 / -1;
//             z-index: 300;
//             padding: 1rem;
//         }
//         & .listItem__title {
//             text-transform: uppercase;
//             font-size: 2.2rem;
//             color: yellow;
//             font-weight: 200;  
//             height: 40%;
//             overflow: hidden;
//         }
//         & .listItem__underline {
//             height: 10px;
//             display: block;
//             width: 30vw;
//             border-bottom: solid 1px yellow;
//         }
//         & .listItem__artist {
//             text-transform: uppercase;
//             font-size: 0.6rem;
//             color: yellow;
//             font-weight: 200;
//         }
//         & .listItem__arrow {
//             color: yellow;
//             grid-area: 1 / 1 / -1 / -1;
//             z-index: 300;
//             font-size: 2rem;
//             margin: 1rem 1rem 2rem;
//             place-self: end;
//         }
//     `;

//     //animate: defines animation. Example.: x: 0
//     //intial: defines the initial state of animation. Example.: x: 60
//     //exit: defines animation when component exits
    
//     const easing = [0.6, -0.05, 0.01, 0.99];

//     const fadeInLeft = {
//         initial:{
//             opacity: 0
//         },
//         animate: {
//             opacity: 1,
//             transition: {
//                 duration: .6,
//                 ease: easing
//             }
//         }
//     }

//     return ( 
//         <motion.div exit={{opacity: 0}} initial="initial" animate="animate" style={{position: "relative", width: "100vw", height: "100vh"}}>
//         <ul css={style}>
//             {artworks?.map((artwork, index) => (
//                 <motion.li variants={fadeInLeft} key={index} className="listItem" onClick={() => setColor({
//                     h: artwork?.color.h,
//                     s: artwork?.color.s,
//                     l: artwork?.color.l,
//                     a: artwork?.color.percentage
//                     })}>
//                     <Link href={`/artwork/${artwork.id}`} className="listItem__link" scroll >
//                         <a className="listItem__linkAnchor">
//                             <div className="listItem__textBox">
//                                 <h2 className="listItem__title">{artwork.title}</h2>
//                                 <p className="listItem__artist">{artwork.artist_title ? artwork.artist_title : "unknown"}</p>
//                                 <div className="listItem__underline"></div>
//                             </div>
//                             <IoArrowForwardSharp className="listItem__arrow"/>
//                             <div className="listItem__imgContainer">
//                                 <Image src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg` } 
//                                 alt={artwork.artist_title} 
//                                 // width={400} 
//                                 // height={400}
//                                 // layout="responsive"
//                                 layout="fill"
//                                 className="listItem__img"
//                                 />
//                             </div>
//                             <div className="overlay" ></div>
//                         </a>
//                     </Link>
//                 </motion.li>
//             ))}
//         </ul>
//         </motion.div>
//      );
// }
 
// export default Artworks;

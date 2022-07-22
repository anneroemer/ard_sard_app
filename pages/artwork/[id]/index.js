import { useRouter } from "next/dist/client/router";
import { useState, useEffect, useContext } from "react";
import { ColorContext } from "/Users/anneromer/Documents/Github_anneroemer/ard_sard_app/contexts/ColorContext";
import axios from "axios";
import Image from "next/image";
import { IoArrowBackSharp } from "react-icons/io5";
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const Artwork = () => {

    const router = useRouter();
    const {id} = router.query;
    const { color } = useContext(ColorContext);
    console.log(color)


    const [artwork, setArtwork] = useState();

    useEffect(() => {
        axios(`https://api.artic.edu/api/v1/artworks/${id}`, {
        })
        .then((result) => {
            console.log(result.data.data)
            setArtwork(result.data.data)
        });
		}
	, []);
    

    const style = css`
        background-color: #F4F0E8;
        height: 100%;
        color: gray;
        font-weight: 100;
        
        & .header {
            height: 350px;
            width: 100vw;   
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: auto;
        }
        & .imgContainer {
            grid-area: 1 / 1 / -1 / -1;
            height: 100%;
            width: 100vw;
            position: relative;
            object-fit: cover;
            display: block;
        }
        & .imgContainer__img {
            object-fit: cover;
            width: 100vw;
            max-height: 400px;
            grid-area: 1 / 1 / -1 / -1;
            overflow: hidden;
            z-index: 0;
            display: block;
        }
        & .imgContainer__button {
            grid-area: 1 / 1 / -1 / -1;
            z-index: 500;
            place-items: center;
            height: 3rem;
            width: 3rem;
            margin: 1rem;
        }
        & .arrow {
            font-size: 2rem;
            color: yellow;
        }
        & .artworkMainText {
            padding: 0.6rem;
        }
        & .artworkMainText__title {
            font-size: 2.4rem;
            text-transform: uppercase;
            font-weight: 400;
            margin: 3rem 0 0;           
        }
        & .artworkSecondaryText {
            padding: 0.6rem;
        }
        & .artworkSecondaryText__style {
            text-transform: uppercase;
            font-size: 0.8rem;
        }
        & .artworkSecondaryText__origin {
            text-transform: uppercase;
            font-size: 0.8rem;
        }
        & .artworkSecondaryText__provenance {
            font-size: 0.7rem;
        }
        & .divider {
            height: 10px;
            display: block;
            width: 30vw;
            border-bottom: solid 1px gray;
        }
    `;

    return ( 
        <>
        <div css={style}>
            <div className="header">
                <div className="imgContainer__button" onClick={() => router.back()}>
                    <IoArrowBackSharp className="arrow"/>
                </div> 
                <div className="imgContainer">
                    <Image src={`https://www.artic.edu/iiif/2/${artwork?.image_id}/full/843,/0/default.jpg` } 
                    alt={artwork?.artist_title} 
                    width={400} 
                    height={400}
                    className="imgContainer__img"
                    />
                </div>
            </div>
            <section className="artworkMainText">
                <h1 className="artworkMainText__title">{artwork?.title}</h1>
                <h3>{artwork?.artist_title ? artwork?.artist_title : "unknown"}</h3>
                <div className="divider"></div>
                <p>{artwork?.classification_title ? artwork?.classification_title : null}</p>
                {artwork?.style_title ? <p className="artworkSecondaryText__style">Style: {artwork?.style_title}</p> : null}
                {artwork?.place_of_origin ? <p className="artworkSecondaryText__origin">Place of origin: {artwork?.place_of_origin}</p> : null}
                <div className="divider"></div>
            </section>
            <section className="artworkSecondaryText">
                <p>{artwork?.thumbnail?.alt_text ? artwork?.thumbnail?.alt_text : null}</p>
                {artwork?.provenance_text ? <div className="divider"></div> : null}
                {artwork?.provenance_text ? <p className="artworkSecondaryText__provenance">{artwork?.provenance_text}</p> : null}
            </section>
        </div>
        </>
     );
}
 
export default Artwork;

import React from 'react'
import g1 from "../assets/g-1.jpg"
import g2 from "../assets/g-2.jpg"
import g3 from "../assets/g-3.jpg"
import g4 from "../assets/g-4.jpg"
import g5 from "../assets/g-5.jpg"
import g6 from "../assets/g-6.jpg"
import g7 from "../assets/g-7.jpg"
import g8 from "../assets/g-8.jpg"
import g9 from "../assets/g-9.jpg"
import { times } from "lodash";

const images=[
    {
        "link":g1
    },
    {
        "link":g2
    },
    {
        "link":g3
    },
    {
        "link":g4
    },
    {
        "link":g5
    },
    {
        "link":g6
    },
]

function Gallery() {
    return (
        <>
                      <section class="gallery" id="gallery">

                              <h1 class="heading"> our food <span> gallery </span> </h1>

                                  <div class="box-container">

                                        {/* <div class="box">
                                            <img src={g1} alt=""/>
                                            <div class="content">
                                                <h3>tasty food</h3>
                                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum.</p>
                                                <a href="#" class="btn">ordern now</a>
                                            </div>
                                        </div>

                                        <div class="box">
                                            <img src={g2} alt=""/>
                                            <div class="content">
                                                <h3>tasty food</h3>
                                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum.</p>
                                                <a href="#" class="btn">ordern now</a>
                                            </div>
                                        </div>

                                        <div class="box">
                                            <img src={g3} alt=""/>
                                            <div class="content">
                                                <h3>tasty food</h3>
                                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum.</p>
                                                <a href="#" class="btn">ordern now</a>
                                            </div>
                                        </div>
                                        <div class="box">
                                            <img src={g4} alt=""/>
                                            <div class="content">
                                                <h3>tasty food</h3>
                                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum.</p>
                                                <a href="#" class="btn">ordern now</a>
                                            </div>
                                        </div>
                                        <div class="box">
                                            <img src={g5} alt=""/>
                                            <div class="content">
                                                <h3>tasty food</h3>
                                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum.</p>
                                                <a href="#" class="btn">ordern now</a>
                                            </div>
                                        </div>
                                        <div class="box">
                                            <img src={g6} alt=""/>
                                            <div class="content">
                                                <h3>tasty food</h3>
                                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum.</p>
                                                <a href="#" class="btn">ordern now</a>
                                            </div>
                                        </div>
                                        <div class="box">
                                            <img src={g7} alt=""/>
                                            <div class="content">
                                                <h3>tasty food</h3>
                                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum.</p>
                                                <a href="#" class="btn">ordern now</a>
                                            </div>
                                        </div>
                                        <div class="box">
                                            <img src={g8} alt=""/>
                                            <div class="content">
                                                <h3>tasty food</h3>
                                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum.</p>
                                                <a href="#" class="btn">ordern now</a>
                                            </div>
                                        </div>
                                        <div class="box">
                                            <img src={g9} alt=""/>
                                            <div class="content">
                                                <h3>tasty food</h3>
                                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum.</p>
                                                <a href="#" class="btn">ordern now</a>
                                            </div>
                                        </div>
                                        <div class="box">
                                            <img src={g9} alt=""/>
                                            <div class="content">
                                                <h3>tasty food</h3>
                                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum.</p>
                                                <a href="#" class="btn">ordern now</a>
                                            </div>
                                        </div>
                                        <div class="box">
                                            <img src={g6} alt=""/>
                                            <div class="content">
                                                <h3>tasty food</h3>
                                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum.</p>
                                                <a href="#" class="btn">ordern now</a>
                                            </div>
                                        </div>
                                        <div class="box">
                                            <img src={g8} alt=""/>
                                            <div class="content">
                                                <h3>tasty food</h3>
                                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum.</p>
                                                <a href="#" class="btn">ordern now</a>
                                            </div>
                                        </div> */}

                                            { times( 12, num => (
                                                   <div class="box">
                                                     <img src={g8} alt=""/> 
                                                   <div class="content">
                                                       <h3>tasty food</h3>
                                                       <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum.</p>
                                                       <a href="#" class="btn">ordern now</a>
                                                   </div>
                                               </div>
                                            ) ) }


                            </div>

                </section>
        </>
    )
}

export default Gallery







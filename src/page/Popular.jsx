import React from 'react'
import p1 from "../assets/p-1.jpg"
import p2 from "../assets/p-2.jpg"
import p3 from "../assets/p-3.jpg"
import p4 from "../assets/p-4.jpg"
import p5 from "../assets/p-5.jpg"
import p6 from "../assets/p-6.jpg"
function Popular() {
    return (
        <>
                  <section class="popular" id="popular">

                        <h1 class="heading"> most <span>popular</span> foods </h1>

                             <div class="box-container">

                                    <div class="box">
                                        <span class="price"> $5 - $20 </span>
                                        <img src={p1} alt=""/>
                                        <h3>tasty burger</h3>
                                        <div class="stars">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="far fa-star"></i>
                                        </div>
                                        <a href="#" class="btn">order now</a>
                                    </div>
                                    <div class="box">
                                        <span class="price"> $5 - $20 </span>
                                        <img src={p2} alt=""/>
                                        <h3>tasty cakes</h3>
                                        <div class="stars">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="far fa-star"></i>
                                        </div>
                                        <a href="#" class="btn">order now</a>
                                    </div>
                                    <div class="box">
                                        <span class="price"> $5 - $20 </span>
                                        <img src={p3} alt=""/>
                                        <h3>tasty sweets</h3>
                                        <div class="stars">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="far fa-star"></i>
                                        </div>
                                        <a href="#" class="btn">order now</a>
                                    </div>
                                    <div class="box">
                                        <span class="price"> $5 - $20 </span>
                                        <img src={p4} alt=""/>
                                        <h3>tasty cupcakes</h3>
                                        <div class="stars">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="far fa-star"></i>
                                        </div>
                                        <a href="#" class="btn">order now</a>
                                    </div>
                                    <div class="box">
                                        <span class="price"> $5 - $20 </span>
                                        <img src={p5} alt=""/>
                                        <h3>cold drinks</h3>
                                        <div class="stars">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="far fa-star"></i>
                                        </div>
                                        <a href="#" class="btn">order now</a>
                                    </div>
                                    <div class="box">
                                        <span class="price"> $5 - $20 </span>
                                        <img src={p6} alt=""/>
                                        <h3>cold ice-cream</h3>
                                        <div class="stars">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="far fa-star"></i>
                                        </div>
                                        <a href="#" class="btn">order now</a>
                                    </div>

                            </div>

                </section>
        </>
    )
}

export default Popular

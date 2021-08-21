import React from 'react'
import pic1 from "../assets/pic1.png"
import pic2 from "../assets/pic2.png"
import pic3 from "../assets/pic3.png"
function Rieview() {
    return (
        <>
                   <section class="review" id="review">

                            <h1 class="heading"> our customers <span>reviews</span> </h1>

                                 <div class="box-container">

                                    <div class="box">
                                        <img src={pic1} alt=""/>
                                        <h3>john deo</h3>
                                        <div class="stars">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="far fa-star"></i>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti delectus, ducimus facere quod ratione vel laboriosam? Est, maxime rem. Itaque.</p>
                                    </div>
                                    
                                    <div class="box">
                                        <img src={pic2} alt=""/>
                                        <h3>john deo</h3>
                                        <div class="stars">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="far fa-star"></i>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti delectus, ducimus facere quod ratione vel laboriosam? Est, maxime rem. Itaque.</p>
                                    </div>
                                    <div class="box">
                                        <img src={pic3}alt=""/>
                                        <h3>john deo</h3>
                                        <div class="stars">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="far fa-star"></i>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti delectus, ducimus facere quod ratione vel laboriosam? Est, maxime rem. Itaque.</p>
                                    </div>

                            </div>

                    </section>
        </>
    )
}

export default Rieview

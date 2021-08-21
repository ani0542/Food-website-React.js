import React from 'react'
import step1 from "../assets/step-1.jpg"
import step2 from "../assets/step-2.jpg"
import step3 from "../assets/step-3.jpg"
import step4 from "../assets/step-4.jpg"
function Step() {
    return (
        <>
                   <div class="step-container">

                         <h1 class="heading">how it <span>works</span></h1>

                                        <section class="steps">

                                            <div class="box">
                                                <img src={step1} alt=""/>
                                                <h3>choose your favorite food</h3>
                                            </div>
                                            <div class="box">
                                                <img src={step2} alt=""/>
                                                <h3>free and fast delivery</h3>
                                            </div>
                                            <div class="box">
                                                <img src={step3} alt=""/>
                                                <h3>easy payments methods</h3>
                                            </div>
                                            <div class="box">
                                                <img src={step4} alt=""/>
                                                <h3>and finally, enjoy your food</h3>
                                            </div>

                                        </section>

                    </div>
        </>
    )
}

export default Step

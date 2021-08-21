import React from 'react'
import loader from "../assets/loader.gif"
function Footer() {
    return (
        <>
                  <section class="footer">

                            <div class="share">
                                <a href="#" class="btn">facebook</a>
                                <a href="#" class="btn">twitter</a>
                                <a href="#" class="btn">instagram</a>
                                <a href="#" class="btn">pinterest</a>
                                <a href="#" class="btn">linkedin</a>
                            </div>

                            <h1 class="credit"> created by <span> mr. web designer </span> | all rights reserved! </h1>

                    </section>

                    {/* <a href="#home" class="fas fa-angle-up" id="scroll-top"></a>


                        <div class="loader-container">
                            <img src={loader} alt=""/>
                        </div> */}
        </>
    )
}

export default Footer

import React from 'react'
import { BlogInFlex, Comments, DetalisCard1, DetalisCard2, DetalisCard3, DetalisContainer, DetalisUser, DetalisWrap } from './styled'
import Img from "./img/about_hero.png"
import BlogInput from './blogInput'
import Footer from './footer'
function Detalis() {
    return (
        <>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous"></link>

            <DetalisWrap style={{ backgroundImage: `url(${Img})` }}>
                <h1>Blog Detalis</h1>
            </DetalisWrap>
            <br /><br /><br /><br /><br />
            <DetalisContainer>
                <DetalisCard1>
                    <img src="https://tmb-01.github.io/timezone/assets/img/blog/single_blog_1.png" alt="" />
                    <br /><br />
                    <h2>Second divided from form fish beast made every of seas all gathered us saying he our</h2>
                    <BlogInFlex style={{ marginLeft: "-0px", marginTop: "10px" }}>
                        <p>
                            <i class="fas fa-user"></i>
                            <span> Travel, Lifestyle</span>
                        </p>

                        <div className="bb" />
                        <p>
                            <i class="fas fa-comments"></i>
                            <span>03 Comments</span>
                        </p>
                    </BlogInFlex>
                    <br />
                    <p>MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower
                        <br /><br />
                        MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training. who has the willpower to actually
                    </p>
                    <br />
                    <DetalisCard2>
                        <div>
                            MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training.
                        </div>
                    </DetalisCard2>
                    <p>
                        MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower
                        <br /><br />
                        MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training. who has the willpower to actually
                    </p>
                    <div className="bb"></div>
                    <DetalisCard3>
                        <div>
                            <i class="fas fa-heart"></i>
                            <span> Lily and 4 people like this</span>

                        </div>
                        <head>
                            <i class="fab fa-facebook-f"></i>
                            <i class="fab fa-twitter"></i>
                            <i class="fab fa-dribbble"></i>
                            <i class="fab fa-behance"></i>
                        </head>
                    </DetalisCard3>
                    <br /><br />
                    <DetalisCard3>
                        <div>
                            <img src="	https://tmb-01.github.io/timezone/assets/img/post/preview.png" alt="" />
                            <span>Prev Post <p>Space The Final Frontier</p></span>

                        </div>
                        <head>
                            <span>Next Post <p>Telescopes 101</p></span>
                            <img src="https://tmb-01.github.io/timezone/assets/img/post/next.png" alt="" />
                        </head>
                        <br />

                    </DetalisCard3>
                    <br /><br />
                    <div className="bb"></div>
                    <br /><br />
                    <DetalisUser>
                        <img src="https://tmb-01.github.io/timezone/assets/img/blog/author.png" alt="" />
                        <div>
                            Harvard milan
                            <span>Second divided from form fish beast made. Every of seas all gathered use saying you're, he our dominion twon Second divided from</span>
                        </div>
                    </DetalisUser>
                    <br /><br />
                    <div className="bb"></div>
                    <br /><br />
                    <Comments>
                        <h4>05 Comments</h4>
                        <br />
                        <div>
                            <img src="https://tmb-01.github.io/timezone/assets/img/comment/comment_1.png" alt="" />
                            <tag>

                                Multiply sea night grass fourth day sea lesser rule open subdue female fill which them Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser
                                <span>
                                    December 4, 2017 at 3:12 pm</span>
                                <p>REPLY</p>
                            </tag>
                        </div>
                        <br /><br />
                        <div>
                            <img src="https://tmb-01.github.io/timezone/assets/img/comment/comment_2.png" alt="" />
                            <tag>

                                Multiply sea night grass fourth day sea lesser rule open subdue female fill which them Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser
                                <span>
                                    December 4, 2017 at 3:12 pm</span>
                                <p>REPLY</p>
                            </tag>
                        </div>
                        <br /><br />
                        <div>
                            <img src="https://tmb-01.github.io/timezone/assets/img/comment/comment_3.png" alt="" />
                            <tag>

                                Multiply sea night grass fourth day sea lesser rule open subdue female fill which them Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser
                                <span>
                                    December 4, 2017 at 3:12 pm</span>
                                <p>REPLY</p>
                            </tag>
                        </div>
                        <br /><br /><br /><br />
                        <div className="bb"></div>
                    </Comments>
                    <br /><br />
                    <h3>Leave a Reply</h3>
                    <br />
                    <textarea placeholder="Write Comment"></textarea>
                    <br /><br />
                    <input type="text" placeholder="Name" />
                    <input className="ip" type="text" placeholder="Email" />
                    <br /><br />
                    <input className="inp" type="text" placeholder="Website" />
                    <br /><br />
                    <button>S E N D   M E S S A G E </button>
                    <br /><br />
                </DetalisCard1>

                <BlogInput />
                <br /><br /><br /><br /><br />
                <Footer/>
            </DetalisContainer>
        </>
    )
}

export default Detalis

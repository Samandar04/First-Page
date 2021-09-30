import React, { useState } from 'react'
import { BlogCard1, BlogCard2, BlogCard2inCard1, BlogCard2inCard1flex, BlogCard2inCard2, BlogCard2inCard3, BlogCard2inCard3flex, BlogFlex, BlogImg, BlogInFlex, BlogText, BlogWrap, Card4, Card5flex, Page } from './styled'
import Img from "./img/about_hero.png"
import Footer from './footer'
function Blog() {
    const [card, setcard] = useState([{
        img: "https://tmb-01.github.io/timezone/assets/img/blog/single_blog_1.png",
        jun: 15,
        juntext: "JUN",
        text: " Google inks pact for new 35-storey office",
        p: "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.",
        icon: "fas fa-comments",
        icon1: "fas fa-user",
        text1: "Travel, Lifestyle",
        icontext: "03 Comments"
    },
    {
        img: "https://tmb-01.github.io/timezone/assets/img/blog/single_blog_2.png",
        jun: 15,
        juntext: "JUN",
        text: " Google inks pact for new 35-storey office",
        p: "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.",
        icon: "fas fa-comments",
        icon1: "fas fa-user",
        text1: "Travel, Lifestyle",
        icontext: "03 Comments"
    },
    {
        img: "https://tmb-01.github.io/timezone/assets/img/blog/single_blog_3.png",
        jun: 15,
        juntext: "JUN",
        text: " Google inks pact for new 35-storey office",
        p: "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.",
        icon: "fas fa-comments",
        icon1: "fas fa-user",
        text1: "Travel, Lifestyle",
        icontext: "03 Comments"
    },
    {
        img: "https://tmb-01.github.io/timezone/assets/img/blog/single_blog_4.png",
        jun: 15,
        juntext: "JUN",
        text: " Google inks pact for new 35-storey office",
        p: "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.",
        icon: "fas fa-comments",
        icon1: "fas fa-user",
        text1: "Travel, Lifestyle",
        icontext: "03 Comments"
    },
    {
        img: "https://tmb-01.github.io/timezone/assets/img/blog/single_blog_5.png",
        jun: 15,
        juntext: "JUN",
        text: " Google inks pact for new 35-storey office",
        p: "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.",
        icon: "fas fa-comments",
        icon1: "fas fa-user",
        text1: "Travel, Lifestyle",
        icontext: "03 Comments"
    }])
    return (
        <>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous"></link>
            <BlogWrap style={{ backgroundImage: `url(${Img})` }}>
                <h1>Blog</h1>

            </BlogWrap>
            <br /><br /><br /><br /><br />
            <BlogFlex>
                {
                    card.map((value) => (
                        <BlogCard1>
                            <BlogImg>
                                <img src={value.img} alt="" />
                                <div className="jun">
                                    <p>{value.jun}</p>
                                    <span>{value.juntext}</span>
                                </div>
                            </BlogImg>
                            <br /><br />
                            <BlogText>
                                {value.text}
                                <p>{value.p}</p>

                            </BlogText>
                            <BlogInFlex>
                                <p>
                                    <i class={value.icon1}></i>
                                    <span> {value.text1}</span>
                                </p>

                                <div className="bb" />
                                <p>
                                    <i class={value.icon}></i>
                                    <span>{value.icontext}</span>
                                </p>
                            </BlogInFlex>
                            <br /><br />
                        </BlogCard1>
                    ))
                }
                <BlogCard2>
                    <BlogCard2inCard1>
                        <BlogCard2inCard1flex>
                            <input type="text" placeholder="Search Keyword" />
                            <i class="fas fa-search"></i>
                        </BlogCard2inCard1flex>
                        <button>S E A R CH</button>
                    </BlogCard2inCard1>
                    <br /><br /><br />
                    <BlogCard2inCard2>
                        <h3>Category</h3>
                        <br />
                        <div className="bb" />
                        <p>Resaurant food(37)</p>
                        <div className="bb" />
                        <p>Travel news(10)</p>
                        <div className="bb" />
                        <p>Modern technology</p>
                        <div className="bb" />
                        <p>Product()11</p>
                        <div className="bb" />
                        <p>Inspiration21</p>
                        <div className="bb" />
                        <p>Health Care (21)09</p>
                    </BlogCard2inCard2>
                    <br /><br />
                    <BlogCard2inCard3>
                        <h3>Recent Post</h3>
                        <br />
                        <div className="bb" />
                        <br />
                        <BlogCard2inCard3flex>
                            <img src="https://tmb-01.github.io/timezone/assets/img/post/post_1.png" alt="" />
                            <p>From life was you fish... <span>January 12,2019</span></p>
                        </BlogCard2inCard3flex>
                        <BlogCard2inCard3flex>
                            <img src="https://tmb-01.github.io/timezone/assets/img/post/post_2.png" alt="" />
                            <p>The Amazing Hubble <span>2 Hours ago</span></p>
                        </BlogCard2inCard3flex>
                        <BlogCard2inCard3flex>
                            <img src="https://tmb-01.github.io/timezone/assets/img/post/post_3.png" alt="" />
                            <p>Astronomy Or Astrology<span>3 Hours ago</span></p>
                        </BlogCard2inCard3flex>
                        <BlogCard2inCard3flex>
                            <img src="https://tmb-01.github.io/timezone/assets/img/post/post_4.png" alt="" />
                            <p>Asteroids telescope <span>01 Hours ago</span></p>
                        </BlogCard2inCard3flex>
                    </BlogCard2inCard3>
                    <br /><br />
                    <Card4>
                        <h3> Tag Clouds</h3>
                        <br />
                        <div className="bb"></div>
                        <br />
                        <div className="div">
                            <button>project</button>
                            <button>love</button>
                            <button>technology</button>
                            <button>travel</button>
                            <button>restaurant</button>
                            <button>life style</button>
                            <button>design</button>
                            <button>illustration</button>
                        </div>
                        <br />
                    </Card4>
                    <br /><br />
                    <Card4>
                        <h3>Instagram Feeds</h3>
                        <br />
                        <div className="bb"></div>
                        <br />
                        <Card5flex>
                            <img src="https://tmb-01.github.io/timezone/assets/img/post/post_5.png" alt="" />
                            <img src="https://tmb-01.github.io/timezone/assets/img/post/post_6.png" alt="" />
                            <img src="https://tmb-01.github.io/timezone/assets/img/post/post_7.png" alt="" />
                            <img src="https://tmb-01.github.io/timezone/assets/img/post/post_8.png" alt="" />
                            <img src="https://tmb-01.github.io/timezone/assets/img/post/post_9.png" alt="" />
                            <img src="https://tmb-01.github.io/timezone/assets/img/post/post_9.png" alt="" />
                        </Card5flex>
                        <br />
                    </Card4>
                    <br /><br />
                    <Card4>
                        <h3>Newslater</h3>
                        <br />
                        <div className="bb"></div>
                        <br />
                        <input type="text" placeholder="Enter email" />
                        <button> S U B S C R I B E </button>
                    </Card4>
                </BlogCard2>
                <Page>
                    <div>
                        <i class="fas fa-chevron-left"></i>
                    </div>
                    <div>
                        1
                    </div>
                    <div>2</div>
                    <div><i class="fas fa-chevron-right"></i></div>
                </Page>
                <br /><br />
                <br /><br /><br /><br /><br />
                <Footer/>
            </BlogFlex>
           
          
        </>
    )
}

export default Blog

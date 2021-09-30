import React from 'react'
import { LoginCard1, LoginCard2, Loginflex, LoginWrap } from './styled'
import Img from "./img/about_hero.png"
import Footer from './footer'
function Login() {
    return (
        <>
            <LoginWrap style={{backgroundImage:`url(${Img})`}}>
                <h1>Login</h1>

            </LoginWrap>
            <br /><br /><br /><br /><br />
            <Loginflex>
            <LoginCard1>
                <h3>New to our Shop?</h3>
                <p>There are advances being made in science and technology everyday, and a good example of this is the</p>
                <button>CREATE AN ACCOUNT</button>
                
            </LoginCard1>
            <LoginCard2>
                <h1>Welcome Back ! <span>Please Sign in now</span></h1>
                <br /><br />
                <input type="text" placeholder="Username"/>
                <br /><br />
                <input type="password" placeholder="Username"/>
                <br /><br /><br /><br />
                <button>L O G I N   <span>I N</span></button>
            </LoginCard2>
            </Loginflex>
            <br /><br /><br /><br /><br /><br /><br /><br /><br />
            <div style={{width:"1200px",margin:"auto"}}>
                <Footer/>
            </div>
          
        </>
    )
}

export default Login

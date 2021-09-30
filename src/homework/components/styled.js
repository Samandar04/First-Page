import styled from "styled-components";

export const BlogWrap = styled.div`
width: 100%;
background-image: url(./img/about_hero.png);
background-repeat: no-repeat;
height: 500px;
font-family: cursive;
h1{
    text-align: center;
    font-size: 50px;
    font-weight: bold;
    color: #0B1C39;
    padding-top: 11%;
}
`
export const BlogFlex = styled.div`
/* display: flex; */
position: relative;
font-family: cursive;
justify-content: space-between;
width: 1200px;
margin: auto;
`
export const BlogCard1 = styled.div`
width: 70%;
margin-bottom: 50px;
box-shadow: 0px 10px 20px 0px rgb(221 221 221/30% );

`
export const BlogImg = styled.div`
position: relative;
font-family: cursive;
width: 100%;
img{
    width: 100%;
}
.jun{
    position: absolute;
    left: 50px;
    font-size: 20px;
    bottom: -19px;
    background: #FF2020;
    padding: 20px 30px;
    &:hover{
        background: transparent;
        p{
            color: #FF2020;
        }
        span{
            color: #ff2020;
        }
    }
    p{
        font-weight: bold;
        color: white;
        font-size: 22px;
        text-align: center;
        padding: 0;
        margin: 0;
    }
    span{
        color: white;
        
        text-align: center;
    }
}
`
export const BlogText = styled.div`
 color: #0b1c39;
 font-size: 25px;
 font-family: cursive;
 cursor: pointer;
 margin-left: 50px;
 &:hover{
    color: #ff2020;
 }
 p{
     font-family: cursive;
     color: gray;
     cursor: text;
     text-align: left;
 }
`
export const BlogInFlex = styled.div`
display: flex;
margin-left: 50px;
color: gray;
p{
    font-family: cursive;
    margin: 0;
    
    &:hover{
        color: #ff2020;
    }
    i{
    margin-top: 4px;
    &:hover{
        color: #ff2020;
    }
}
span{
    margin-right: 8px;
    margin-left: 8px;
    &:hover{
        color: #ff2020;
    }
}
}

.bb{
    background: gray;
    margin-top: 8px;
    border: 1px solid gray;
    height: 13px;
    
    

}
`
export const BlogCard2 = styled.div`
width:28%;
position: absolute;
right: 0;
top: 0;
`
export const BlogCard2inCard1 = styled.div`
background: #FBF9FF;
width: 100%;
padding: 20px;
button{
    width: 100%;
    margin-top: 20px;
    padding: 15px;
    background: #ff2020;
    border-color: #ff2020;
    color: white;
    &:hover{
        background: white;
        color: #ff2020;
    }
}
`
export const BlogCard2inCard1flex = styled.div`
display: flex;
input{
    padding: 15px;
width: 100%;
}
i{
    padding: 15px 15px;
    background: #ff2020;
    color: white;

}
`
export const BlogCard2inCard2 = styled.div`
background:#FBF9FF;
padding: 20px;
font-family: cursive;
h3{
    font-family: cursive;
}
.bb{
    border: 1px solid #F0E9FF;
    width: 100%;
    border-bottom: 0;
}
p{
    font-family: cursive;
    color: gray;
    cursor: pointer;
    &:hover{
        color: #ff2020;
    }
}
`
export const BlogCard2inCard3 = styled.div`
background:#FBF9FF ;
padding: 20px;
font-family: cursive;
h3{
    font-family: cursive;
}
.bb{
    border: 1px solid #F0E9FF;
    width: 100%;
    border-bottom: 0;
}
`
export const BlogCard2inCard3flex = styled.div`
display: flex;
margin-bottom: 20px;
p{
    font-family: cursive;
    margin-left: 20px;
    cursor: pointer;
    color: black;
    &:hover{
        color: #ff2020;
    }
    span{
        font-size: 15px;
        display: block;
        color: gray;
    }
}
`
export const Card4 = styled.div`
background:#FBF9FF ;
padding: 20px;
font-family: cursive;
input{
    width: 100%;
    padding:15px;
}
button{
    width: 100%;
    padding: 20px;
    font-weight: bold;
    margin-top: 15px;
    background: #ff2020;
    color: white;
    border: #ff2020;
    &:hover{
        background: white;
        color: #ff2020;
    }
}
h3{
    font-family: cursive;
}
.bb{
    border: 1px solid #F0E9FF;
    width: 100%;
    border-bottom: 0;
}
.div{
    display: flex;
    justify-content: space-between;
    flex-wrap:wrap;
    button{
        margin-bottom: 10px;
        width: 90px;
        padding:8px 15px;
        border: 0;
        background: white;
        color: gray;
    }
}
`
export const Card5flex = styled.div`
display: flex;
justify-content: space-between;
flex-wrap: wrap;
img{
    cursor: pointer;
    margin-bottom: 10px;
}
`
export const Page = styled.div`
display: flex;
margin-left: 25%;
div{
    &:hover{
        color: #ff2020;
    }
    margin-left: 10px;
    padding: 10px 15px;
    border: 1px solid gray;
    cursor: pointer;
    color: gray;
}
`
export const DetalisWrap = styled.div`
width: 100%;
width: 100%;
background-image: url(./img/about_hero.png);
background-repeat: no-repeat;
height: 500px;
font-family: cursive;
h1{
    text-align: center;
    font-size: 50px;
    font-weight: bold;
    color: #0B1C39;
    padding-top: 11%;
}
`
export const DetalisContainer = styled.div`
width: 1200px;
margin:auto ;
position: relative;
`
export const DetalisCard1 = styled.div`
width: 70%;
img{
    width: 100%;
}
h2{    
    text-align: left;
    font-family: cursive;
    color: #0b1c39;
}
p{
    color: gray;
}
.bb{
    border: 1px solid #F0E9FF;
    width: 100%;
    border-bottom: 0;
}
textarea{
    width: 100%;
    height: 200px;
    padding: 20px;
}
input{
    width: 48%;
  
    padding: 15px;
}
.ip{
    width: 48%;
   margin-left: 33px;
    padding: 15px; 
}
.inp{
    display: block;
    width: 100%;
    padding: 15px;
}
button{
    width: 200px;
    border: 1px solid #ff2020;
    padding: 15px 20px;
    background: #ff2020;
    color: white;
    cursor: pointer;
    &:hover{
        background: white;
        color: #ff2020;
        display: block;
    }
}
`
export const DetalisCard2 = styled.div`
width: 100%;
background: #F2F3F7;
padding: 30px;
div{
    background: white;
    padding: 25px;
    color: gray;
    border-left: 1px solid black;
}
`
export const DetalisCard3 = styled.div`
display: flex;
margin-top: 10px;
justify-content: space-between;
color: gray;
div{
    font-size: 17px;
    display: flex;
    color: gray;
    i{
        margin-top: 5px;
    }
    img{
        width: 60px;
        height: 60px;
        cursor: pointer;
    }
    span{
        margin-left: 10px;
        p{
            color: black;
            cursor: pointer;
            margin: 0;
            &:hover{
                color: #ff2020;
            }
        }
    }
}
head{
    display: flex;
    color: gray;
    span{
        color: gray;
        margin-right: 10px;
        p{
            margin: 0;
            color: black;
            cursor: pointer;
            &:hover{
                color: #ff2020;
            }
        }
    }
    img{
        width: 60px;
        height: 60px;
        cursor: pointer;
    }
    i{
        margin-right: 15px;
        cursor: pointer;
        &:hover{
            color: #ff2020;
        }
    }
}
.bb{
    border: 1px solid #F0E9FF;
    width: 100%;
    border-bottom: 0;
}
`
export const DetalisUser = styled.div`
width: 100%;
background: #FBF9FF;

padding: 30px;
display: flex;
img{
    width: 90px;
    height: 90px;
    border-radius: 50%;
}
div{
    margin-left: 20px;
    color: black;

    span{
        display: block;
        color: gray;
        margin-top: 10px;
    }
}
`
export const Comments = styled.div`
h4{
    font-weight: bold;
}
div{
    display: flex;
    img{
        width: 70px;
        height: 70px;
        border-radius:50%;
    }
    tag{
        color: gray;
        position: relative;
        margin-left: 20px;
        span{
            margin-top: 10px;
            display: block;
            margin-left: 80px;
        }
        p{
            position: absolute;
            right: 20px;
            cursor: pointer;
            &:hover{
                color: #ff2020;
            }
            bottom: 0;
            margin: 0;
        }
    }
}
`
export const LoginWrap = styled.div`
width: 100%;
height: 500px;
background-repeat: no-repeat;
h1{
    text-align: center;
    font-size: 50px;
    font-weight: bold;
    color: #0B1C39;
    padding-top: 11%;
}
`
export const Loginflex = styled.div`
display: flex;
width: 1200px;
margin: auto;

`
export const LoginCard1 = styled.div`
background: rgb(166,133,163);
height: 600px;
background: linear-gradient(90deg, rgba(166,133,163,1) 0%, rgba(101,73,99,1) 69%);
width: 555px;
h3{
    text-align: center;
    font-weight: bold;
    color: white;
    padding-top: 250px;
    padding-bottom: 20px;
}
p{
    text-align: center;
    margin-top: 20px;
    width: 350px;
    margin: auto;
    color: white;
}
button{
    margin-top: 20px;
    margin-left:30%;
color: white;
    background: transparent;
    width: 200px;
    border: 1PX solid white;
    padding:20px;
    cursor: pointer;
    &:hover{
        background: white;
        color: #ff2020;
    }
}
`
export const LoginCard2=styled.div`
width: 415px;height: 440px;
margin-left: 50PX;
margin-top: 50px;
h1{
    color: #0b1c39;
    font-weight: bold;
    span{
        display: block;
    }
}
input{
    width: 100%;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    border-bottom: 1px solid gray;
    padding:20px ;
}
button{
    width: 100%;
    padding: 20px;
    border-color: #2577FD;
    color: #2577FD;
    cursor: pointer;
    font-weight: bold;
    background: white;
    SPAN{
        margin-left: 10px;
    }
    &:hover{
        background: #2577FD;
        color: white;
    }
}
`
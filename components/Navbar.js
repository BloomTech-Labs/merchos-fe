import Link from 'next/link';
import styled from 'styled-components';


const Wrapper = styled.section`

display: flex;
justify-content: space-evenly;
align-content: center;
align-items: center;

width: auto;
height: 10%;
padding-top: 1%;


background: #F3F3FF;
box-shadow: inset 5px 5px 13px rgba(0, 0, 0, 0.2), inset -9px -9px 3.37829px rgba(255, 255, 255, 0.65);

.log {
    display:none;
    
}
.prof:hover .log {
    display: block;
    transition: all .5s ease;
    
}

`
const ProfileBtn = styled.button`

width: 145px;
height: 50px;

font-family: 'Roboto', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 25px;
line-height: 29px;
display: flex;
align-items: center;
text-align: right;
justify-content: center;



color: #000000;

background: #F3F3FF;
box-shadow: -2px -2px 6px 2px #FFF,
2px 2px 6px 2px #787878; 
border-radius: 55px;

`
const Title = styled.h1`
font-family: 'Roboto', sans-serif;
font-style: thin;
font-weight: 20;
font-size: 50px;
line-height: 73px;
display: flex;
align-items: center;
text-align: center;
justify-content: center;

color: #000000;
`
const BackBtn = styled.button`
width: 125px;
height: 50px;


background: #F3F3FF;
box-shadow: -2px -2px 6px 2px #FFF,
2px 2px 6px 2px #787878;
border-radius: 55px;

font-family: 'Roboto', sans-serif;

font-size: 25px;

display: flex;
align-items: center;
text-align: center;
justify-content: center;

color: #000000
`
const DropLogout = styled.h1`
display: none;
width: 150px;
height: 40px;


font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 25px;
line-height: 29px;
display: flex;
align-items: center;
text-align: center;
justify-content: center;


color: #871a04;

background: #F3F3FF;
box-shadow: 
    -2px -2px 6px 2px #FFF,
    2px 2px 6px 2px #787878;
border-radius: 15px;
z-index: -8;
`



const Navbar = () => {
    const logout = e => {
        e.preventDefault();
        localStorage.removeItem('token');
        localStorage.removeItem('user_id');
        props.history.push('/')
    }

    // function Hidden(e) {
    //     e.preventDefault();
    //     const act = document.getElementById('hide')
    //     if (act.style.display === "none") {
    //         act.style.display = "block"
    //     } else { act.style.display = "none" }
    // }

    return (
        <Wrapper>
            <BackBtn>Back</BackBtn>
            <Title>Back Office</Title>
            {/* <ProfileBtn> */}
            {/* <ProfileBtn onClick={Hidden}> */}

            {/* <label for="select">Hello</label>
                <div className="select"> */}
            <ul className='prof'>
                <li><ProfileBtn>Alberta</ProfileBtn></li>
                <ul className='log'>
                    <li><DropLogout id="hide" value="1" onClick={logout}>Sign Out</DropLogout></li>
                </ul>
            </ul>
            {/* </div> */}

            {/* </ProfileBtn> */}









        </Wrapper >
    )

}

export default Navbar
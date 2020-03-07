import Link from 'next/link';
import styled from 'styled-components';

const Wrapper = styled.section`

display: flex;
justify-content: space-between;
align-items: center

background: #F3F3FF;
box-shadow: inset 5px 5px 13px rgba(0, 0, 0, 0.2), inset -9px -9px 3.37829px rgba(255, 255, 255, 0.65);

`
const ProfileBtn = styled.button`

width: 209px;
height: 77px;
left: 1650px;
top: 18px;

font-family: Roboto;
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
box-shadow: 3px 3px 14px rgba(0, 0, 0, 0.41), -6px -6px 12px #FFFFFF;
border-radius: 55px;


`
const Title = styled.h1`
font-family: Roboto;
font-style: normal;
font-weight: 200;
font-size: 62px;
line-height: 73px;
display: flex;
align-items: center;
text-align: center;
justify-content: center;

color: #000000;
`
const BackBtn = styled.button`
width: 182px;
height: 77px;
left: 19px;
top: 18px;

background: #F3F3FF;
box-shadow: 3px 3px 14px rgba(0, 0, 0, 0.41), -6px -6px 12px #FFFFFF;
border-radius: 55px;

font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 25px;
line-height: 29px;
display: flex;
align-items: center;
text-align: center;
justify-content: center;

color: #000000
`

const Navbar = () => {
    return (
        <Wrapper>
            <BackBtn>Back</BackBtn>
            <Title>Back Office</Title>
            <ProfileBtn id="myDropdown" className="dropdown-content">Mike</ProfileBtn>



            <button onclick="myFunction()" className="dropbtn">Welcome Alberta</button>
            <div id="myDropdown" className="dropdown-content">
                <Link href="/" className="link"><a>Log Out</a></Link>
            </div>


        </Wrapper >
    )

}

export default Navbar
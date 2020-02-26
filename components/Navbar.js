import Link from 'next/link';
import styled from 'styled-components';

const SwagNavBar = styled.nav`
 display: flex;
 flex-flow: row nowrap;
 justify-content: space-evenly;
 align-items: center;

 background: red;
 color: white;
 height: 15vh;

 .nav-logo {
    font-size: 7vh;
    font-weight: bold;
    text-shadow: 3px 3px 3px black;
 }

 .nav-links {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center; 
 }
 `

const Navbar = () => {
    retunr(
        <SwagNavBar>
            <div className="nav-logo">SwagDragon</div >

            <ul className="nav-links">
                <li><Link to="/" className="link"><a>Home</a></Link></li>
                <li><Link to="/" className="link"><a>My Stores</a></Link></li>
                <li><Link href=""><a>Log Out</a></Link></li>
            </ul>

            <div className="avatar">

            </div>
        </SwagNavBar>
    )
}

export default Navbar
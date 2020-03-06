import Link from 'next/link';
import styled from 'styled-components';

const SwagNavBar = styled.nav`
 display: flex;
 flex-flow: row nowrap;
 justify-content: space-evenly;
 align-items: center;

 background: #F3F3FF;
 color: white;
 height: 8rem;
 width: 90%;

 .head {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-size: 62px;
    font-weight: 200;
    line-height: 73px
    display: flex;
    align-items: center;
    text-align: center
    color: #000000;
 }
.link {

}
 .nav-item {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center; 
    width: 35vh;
 }
 .dropbtn {
    background-color: #3498DB;
    color: white;
    padding: 16px;
    font-size: 16px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
  }
  .dropbtn:hover, .dropbtn:focus {
    background-color: #2980B9;
  }
  .user-dropdown {
    position: relative;
    display: inline-block;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    min-width: 160px;
    overflow: auto;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
  }

  .dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }

  .dropdown a:hover {
      background-color: #ddd;
  }

  
  
 `

const Navbar = () => {
    return (
        <SwagNavBar>
            <div className="Head">Back Office</div >

            <div className="user-dropdown">
                <button onclick="myFunction()" className="dropbtn">Welcome Alberta</button>
                <div id="myDropdown" className="dropdown-content">
                    <Link href="/" className="link"><a>Log Out</a></Link>
                </div>

            </div>
        </SwagNavBar >
    )

}

export default Navbar
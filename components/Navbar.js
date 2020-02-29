import Link from 'next/link';
import styled from 'styled-components';

const SwagNavBar = styled.nav`
 display: flex;
 flex-flow: row nowrap;
 justify-content: space-evenly;
 align-items: center;

 background: gray;
 color: white;
 height: 8rem;
 width: 90%;

 .nav-logo {
    font-size: 4rem;
    font-weight: bold;
    text-shadow: 3px 3px 3px black;
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

  .show {
      display: block;
 }
  
 `

const Navbar = () => {
    return (
        <SwagNavBar>
            <div className="nav-logo">SwagDragon</div >

            {/* <ul className="nav-item">
                <li><Link href="/" className="link"><a>Home</a></Link></li>
                <li><Link href="/" className="link"><a>My Stores</a></Link></li>
                <li><Link href="/" className="link"><a>Log Out</a></Link></li>
            </ul> */}

            <div className="user-dropdown">
                <button onclick="myFunction()" className="dropbtn">Welcome Alberta</button>
                <div id="myDropdown" className="dropdown-content">
                    <Link href="/" className="link"><a>Log Out</a></Link>
                </div>

            </div>
        </SwagNavBar >
    )
    function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
    }
    window.onclick = function (event) {
        if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }
}

export default Navbar
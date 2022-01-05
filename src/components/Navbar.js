import './Navbar.css';

function navbar() {
     return (
          <header className="navbar">
               <div className="logo">
                    <img
                         src="https://cdn.kiit.ac.in/wp-content/uploads/2017/11/convo-kiit-logo.png"
                         alt="KIIT" height={50} />
                    <p className='title'>KORTAL</p>
               </div>
               <div className="links">
                    <ul className="single-link">
                         <li><a href="#">Services</a></li>
                         <li><a href="#">About Us</a></li>
                         <li><a href="#">Contact Us</a></li>
                    </ul>
               </div>
               <div className='search'>
                    <textarea name="searchbar" id="searchbar" rows="1"></textarea>
               </div>
          </header>
     )
}

export default navbar
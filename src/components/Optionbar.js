import './Optionbar.css';

function Optionbar() {
     return (
          <div className='optionbar'>
               <div className="profile">
                    <img src="../images/profile_image.png" alt="" />
                    <p className='profile_name'>John Doe</p>
                    <p className='profile_roll'>1905837</p>
               </div>

               <div className="options">
                    <div className='current'>
                         <a href="#">Dashboard</a>
                    </div>
                    <div>
                         <a href="#">Academics</a>
                    </div>
                    <div>
                         <a href="#">Fee Details</a>
                    </div>
                    <div>
                         <a href="#">Opportunities</a>
                    </div>
                    <div>
                         <a href="#">Notices</a>
                    </div>
                    <div>
                         <a href="#"> E-Library</a>
                    </div>
                    <div className='logout'>
                         <a href="#">Log Out</a>
                    </div>
               </div >
          </div>
     )
}

export default Optionbar
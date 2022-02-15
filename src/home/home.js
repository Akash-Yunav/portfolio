// import logo from './logo.svg';
// import react from 'react';
import './home.css';
import svg from './final.png';
import img from './profile.png';

function Home() {
  return (
      <>
          <div className="image-container">
              
              <div className="image-details">

               
                <img src={img} alt="Img" className="profileImage" />
                
                
                <div className="details">
                        <div className="details-firstLine">
                            <div>
                            <strong>Name:</strong>  &nbsp; <span>Akash Srivastava</span>
                            </div>
                            <div>
                            <strong>Residence:</strong>  &nbsp;<span>Delhi / NCR</span> 
                            </div>
                        </div>
                        <div className="details-secondLine">
                            <div>
                            <strong>Age:</strong>  &nbsp;<span>21 Years</span> 
                            </div>
                            <div>
                            <strong>Citizenship:</strong>  &nbsp;<span>Indian</span>
                            </div>
                        </div>
                </div>
                
              </div>

           
           
              <img src={svg} alt="Img" className="nameImage" />
              
           

              
                  {/* <h1 className="profile-name">
                  Akash Srivastava
                  </h1> */}

              
          </div>
        
       
         
      </>
);
}

    

export default Home;

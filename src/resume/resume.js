// import logo from './logo.svg';
// import react from 'react';
import './resume.css';
import svg from './icons8-scroll-down.gif';
import img from './profile.png';
import {
    useLocation,
    useNavigate,
    useParams
  } from "react-router-dom";
  
  function withRouter(Component) {
    function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return (
        <Component
          {...props}
          router={{ location, navigate, params }}
        />
      );
    }
  
    return ComponentWithRouterProp;
  }


function Resume() {
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

           
           
                <div className="resume-div">
                    <h1>
                    Resume
                    </h1>
                    <img 
                      src={svg}
                      alt="new"
                      className="scroll-image"
                    />
                </div>
                
              
      </div>
      
      <div>
        <div>edcedc</div>Experience
        <div>edcedc</div>Experience
        <div>edcedc</div>Experience
        <div>edcedc</div>Experience
        <div>edcedc</div>Experience
        <div>edcedc</div>Experience
        <div>edcedc</div>Experience

      </div>
        
       
         
      </>
);
}

    

export default withRouter(Resume);

import LifeMusicAbout from '../img/LifeMusicAbout.png'
import AboutDialog from '../components/AboutDialog'
function About({songs}) {


  return (
    
    <div className="about">
      <br></br>
      <br></br>
      <div className="songs-container" >
      <AboutDialog>
        Instructions
      </AboutDialog>
      </div>
    <div className="about-img">
        <img src={LifeMusicAbout} alt="about" />

      </div>
      </div>
    
  );
}

export default About;




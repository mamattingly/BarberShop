import './BackgroundVideo.css'; // Import your CSS file for styling
import bgv from '../assets/background-video.mp4';

const BackgroundVideo = () => {
  return (
    <div className="video-background">
      <video autoPlay loop muted>
              <source src={bgv} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <h1>Your Content Here</h1>
      </div>
    </div>
  );
};

export default BackgroundVideo;

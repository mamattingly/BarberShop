import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import bgv from "./assets/background-video.mp4";


import "./main.css";

export default function App() {
    const location = useLocation();

    return (
        <>
            <div className="video-background">
                <video autoPlay loop muted>
                    <source src={bgv} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="content">
                    <Header />
                    <main>
                        <Outlet location={location} key={location.pathname} />
                    </main>
                    <Footer />
                </div>
            </div>
        </>
    );
}

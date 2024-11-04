import { FaEnvelope, FaInstagram } from "react-icons/fa";

function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer>
            <p>The Elegant Edge © {year}</p>
            <p>
                Address: 665 W Lyndon B Johnson Fwy Suite 237, Las Colinas, TX
                75063
            </p>
            <p>Phone: (469) 360-5668</p>
            <div className='icons-tray'>
                <a href="mailto: theelegantedge24@gmail.com">
                    <FaEnvelope size={25} style={{ color: "#FFF" }} />
                </a>
                <a
                    href="https://www.instagram.com/theelegantedge24/#"
                    target="blank"
                >
                    <FaInstagram size={25} style={{ color: "#FFF" }} />
                </a>
            </div>
        </footer>
    );
}
export default Footer;


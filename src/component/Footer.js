import { GrFacebook, GrInstagram, GrLinkedin } from "react-icons/gr";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <h3>Designed & Developed by Supun Ganegoda</h3>
        <p>
          Curio is a website for express your ideas, feelings and discoveries
          into the world free! Community can read and vote on your ideas
        </p>
        <div className="footer-social">
          <Link
            to="https://www.facebook.com/supun.ganegoda.5/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GrFacebook color="#fff" />
          </Link>
          <Link
            to="https://www.instagram.com/supunganegoda/?fbclid=IwAR2m6a2gzk7bqnYM5_eb4r5QDDCLJTjGvhBZ8U6-uXdZj4J0PjfCDTKzSH4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GrInstagram color="#fff" />
          </Link>
          <Link
            to="https://www.linkedin.com/in/supun-ganegoda-3265ab215/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GrLinkedin color="#fff" />
          </Link>
        </div>
      </div>
    </>
  );
};
export default Footer;

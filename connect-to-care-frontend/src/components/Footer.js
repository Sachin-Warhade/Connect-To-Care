import React from "react";

const Footer = () => {
  return (
    <footer className="page-footer fixed-bottom bg-dark text-light">
      <div className="container-fluid">
        <a href="/Terms" className="text-white">
          Terms of Services
        </a>
        <br></br>
        <a href="/Privacypolicy" className="text-white">
          Privacy policy
        </a>

        <p className="text-center">Copyright &copy; ConnectToCare@gmail.com</p>
      </div>
    </footer>
  );
};
export default Footer;

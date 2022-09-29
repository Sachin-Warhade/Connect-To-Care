import React from "react";

const Contact = () => {
  return (
    <>
      <div className="container">
        <h2 className="py-3 text-center">Contact Us</h2>
        <h3>
          Start working with us today. For getting registered as a doctor please
          email your details to any of the given admin below :
        </h3>
        <ul style={{ color: "grey" }}>
          <li>
            <h5>Call us: +91 9666666666</h5>
          </li>

          <li>
            <h5>Email: ConnectToCare@gmail.com</h5>
          </li>
          <li>
            <h5>
              Address: Software Training and Development Centre,<br></br>
              40/8147,C II Floor,Narakathara Road, Ernakulam -682035
            </h5>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Contact;
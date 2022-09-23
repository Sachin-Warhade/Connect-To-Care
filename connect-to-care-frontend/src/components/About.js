import React from "react";

const About = () => {
  return (
    <>
      <div className="container">
        <h3 className="py-3">About Us</h3>

        <p>
          Connect To Care (C2C) - Hospital Recommendation System is a web-based
          system for the patient care. Depending on the patients’ symptoms, it
          suggests doctors and nearby hospitals based on their location and
          ratings of the users.
        </p>
        <p>
          Patient can make an appointment concerning to doctor availability.
          System also provides a chatbot for information about the diseases.
        </p>
        <p className="text-muted">
          Regards, from creators:
          <ul>
            <li>Saikumar Padige</li>
            <li>Sachin A. Warhade</li>
            <li>Vipul Patil</li>
            <li>Saurabh Kulkarni</li>
            <li>Lalna Barhate</li>
            <li>Hanumant Borade</li>
          </ul>
        </p>
      </div>
    </>
  );
};

export default About;

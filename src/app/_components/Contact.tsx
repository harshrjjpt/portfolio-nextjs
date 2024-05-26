"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./Contact.module.scss";
import { HomePageContainer } from "./ui/Container/Container.styled";
import { Title } from "./ui/Title/Title.styled";
import Map from "./ui/Map/Map";
import HeaderTitle from "./HeaderTitle";
import { Parallax } from "react-parallax";
import Footer from "./ui/footer/Footer";
// import { Resend } from "resend";

function Contact() {
  // const resend = new Resend("re_HwPWZUhj_6hALFNmHuh9G4UDLUt2FDMob");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const templateParams = {
      name: name,
      email: email,
      message: message,
    };

    console.log(templateParams);

    // resend.emails.send({
    //   from: templateParams.email,
    //   to: "harshrjjpt@gmail.com",
    //   subject: "Message from portfolio",
    //   text: templateParams.message,
    // });

    // Clear form fields after submission
    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <div className={styles.contactSubContainer}>
      <HeaderTitle title={["LET'S MAKE", "MAGIC HAPPEN !"]} />
      <div className={styles.contactContentContainer}>
        <div className={styles.left}>
          <Title className={styles.sectionTitle}>Wanna build an awesome project together?</Title>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="text">Your name</label>
              <input
                placeholder="Enter name"
                type="text"
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="text">Your email</label>
              <input
                placeholder="Enter email"
                type="text"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* <div>
              <label htmlFor="text">Your name</label>
              <input type="text" />
            </div> */}

            <div>
              <label htmlFor="text">Your message</label>
              <input
                placeholder="type here..."
                type="textfield"
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <button type="submit">Send</button>
          </form>
        </div>
        <div className={styles.right}>
          <div className={styles.mapContainer}>
            <img
              src="https://i.ibb.co/qxcJq3h/Untitled-design-5.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;

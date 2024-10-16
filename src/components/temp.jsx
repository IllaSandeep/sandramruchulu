import React from "react";
import menu1 from "../assets/Sandmenu_page-0001.jpg";
import menu2 from "../assets/Sandmenu_page-0002.jpg";
import "./single-stylesheet.css";
const LandingPage = () => {
  const phoneNumber = "+918500805582";
  const instagramUsername = "sandramruchulu";
  const emailAddress = "sandramruchulu@gmail.com";
  return (
    <main>
      <nav className="navbar">
        <div className="navbar-logo">
          <img
            src="./src/assets/logo.png"
            alt="Logo"
            height={110}
            width={110}
            className="logo-image"
          />
        </div>
        <div className="navbar-text-image">
          <img
            src="./src/assets/text.png"
            alt="Logo"
            height={110}
            className="text-image"
          />
        </div>
      </nav>
      <div className="images-menu">
        <img src={menu1} alt="menu-one" />
        <img src={menu2} alt="menu-two" />
      </div>
      <div className="des-body">
        <p className="des">
          We invite you to savor the vibrant and rich flavors of the coast,
          where each dish is a testament to the beauty and bounty of the sea.
          Our menu is a tribute to authentic coastal cuisine, lovingly prepared
          with the freshest ingredients and time-honored recipes passed down
          through generations. From the bold, spicy zest of our seafood to the
          comforting warmth of coconut-infused curries, every bite is an
          adventure that transports you straight to the shores. Experience
          coastal excellence, where every meal brings you the soul of tradition
          and the joy of unforgettable flavors.
        </p>
      </div>
      <div className="footer1">
        <p className="text"> Contact us </p>
        <a href={`tel:${phoneNumber}`} className="phn-call">
          <img
            className="phnimg"
            src=".\src\assets\phonecall.png"
            alt="Call Us"
          />
        </a>
        <a
          href={`https://wa.me/${phoneNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="whs-cht"
        >
          <img
            className="wtsimg"
            src=".\src\assets\wspp.png"
            alt="Chat with us on WhatsApp"
          />
        </a>
        <a
          href={`https://instagram.com/${instagramUsername}`}
          target="_blank"
          rel="noopener noreferrer"
          className="insta"
        >
          <img
            className="instaimg"
            src=".\src\assets\insta.png"
            alt="Follow us on Instagram"
          />
        </a>
        <a
          href={`mailto:${emailAddress}`}
          target="_blank"
          rel="noopener noreferrer"
          className="gmail"
        >
          <img
            className="gmailimg"
            src=".\src\assets\gmail.png"
            alt="Send us an email"
          />
        </a>
      </div>
    </main>
  );
};
export default LandingPage;

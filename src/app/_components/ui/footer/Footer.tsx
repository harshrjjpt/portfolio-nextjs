import React from "react";
import styles from "./Footer.module.scss";
import { Container } from "../Container/Container.styled";

function Footer() {
  return (
    <div className={styles.footerContainer}>
      <footer className={styles.footerSection}>
        <div className={styles.container}>
          <div className={styles.footerCta + " " + styles.pt5 + " " + styles.pb5}>
            <div className={styles.row}>
              <div className={styles.colXl4 + " " + styles.colMd4 + " " + styles.mb30}>
                <div className={styles.singleCta}>
                  <i className="fas fa-map-marker-alt"></i>
                  <div className={styles.ctaText}>
                    <h4>Find me</h4>
                    <span>Delhi, India</span>
                  </div>
                </div>
              </div>
              <div className={styles.colXl4 + " " + styles.colMd4 + " " + styles.mb30}>
                <div className={styles.singleCta}>
                  <i className="fas fa-phone"></i>
                  <div className={styles.ctaText}>
                    <h4>Call me</h4>
                    <span>9311670605</span>
                  </div>
                </div>
              </div>
              <div className={styles.colXl4 + " " + styles.colMd4 + " " + styles.mb30}>
                <div className={styles.singleCta}>
                  <i className="far fa-envelope-open"></i>
                  <div className={styles.ctaText}>
                    <h4>Mail me</h4>
                    <span>harshrjjpt@gmai.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className={styles.hr} />
          <div className={styles.footerContent + " " + styles.pt5 + " " + styles.pb5}>
            <div className={styles.row}>
              <div className={styles.colXl4 + " " + styles.colLg4 + " " + styles.mb50}>
                <div className={styles.footerWidget}>
                  <div className={styles.footerLogo}>
                    <a href="index.html">
                      <h1 className={styles.myName}>HARSH RAJPUT</h1>
                    </a>
                  </div>
                  <div className={styles.footerText}>
                    <p>
                      Im Harsh, rocking the role of a Frontend Blockchain Engineer at Dapplooker. Im all about diving
                      deep into the latest tech trends, constantly leveling up my skills to stay ahead of the curve.
                    </p>
                  </div>
                  <div className={styles.footerSocialIcon}>
                    <span>Follow me</span>
                    <a href="#">
                      <i className={"fab fa-facebook-f " + styles.facebookBg}></i>
                    </a>
                    <a href="#">
                      <i className={"fab fa-twitter " + styles.twitterBg}></i>
                    </a>
                    <a href="#">
                      <i className={"fab fa-google-plus-g " + styles.googleBg}></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className={styles.colXl4 + " " + styles.colLg4 + " " + styles.colMd6 + " " + styles.mb30}>
                <div className={styles.footerWidget}>
                  <div className={styles.footerWidgetHeading}>
                    <h3 className={styles.myName}>Useful Links</h3>
                  </div>
                  <ul className={styles.ul}>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">about</a>
                    </li>
                    <li>
                      <a href="#">Skills</a>
                    </li>
                    <li>
                      <a href="#">Projects</a>
                    </li>
                    <li>
                      <a href="#">portfolio</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={styles.colXl4 + " " + styles.colLg4 + " " + styles.colMd6 + " " + styles.mb50}>
                <div className={styles.footerWidget}>
                  <div className={styles.footerWidgetHeading}>
                    <h3 className={styles.myName}>Subscribe</h3>
                  </div>
                  <div className={styles.footerText + " " + styles.mb25}>
                    <p>Dont miss to subscribe to our new feeds, kindly fill the form below.</p>
                  </div>
                  <div className={styles.subscribeForm}>
                    <form action="#">
                      <input
                        type="text"
                        placeholder="Email Address"
                      />
                      <button>
                        <i className={"fab fa-telegram-plane " + styles.icon}></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.copyrightArea}>
          <div className={styles.container}>
            <div className={styles.row}>
              <div className={styles.colXl6 + " " + styles.colLg6 + " " + styles.textCenter + " " + styles.textLgLeft}>
                <div className={styles.copyrightText}>
                  <p className={styles.myName}>
                    Made with ❤️ by  <a href="">Harsh Rajput</a>
                  </p>
                </div>
              </div>
              <div
                className={
                  styles.colXl6 +
                  " " +
                  styles.colLg6 +
                  " " +
                  styles.dNone +
                  " " +
                  styles.dLgBlock +
                  " " +
                  styles.textRight
                }
              >
                <div className={styles.footerMenu}>
                  {/* <ul className={styles.ul}>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">Terms</a>
                    </li>
                    <li>
                      <a href="#">Privacy</a>
                    </li>
                    <li>
                      <a href="#">Policy</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                  </ul> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

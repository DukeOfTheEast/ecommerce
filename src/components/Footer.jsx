import classes from "../components/Footer.module.css";

function Footer() {
  return (
    <div className={classes.footer}>
      <div className={classes.halffooter}>
        <div className={classes.footerLogos}>
          <h1>abloke.</h1>
          {/* <img src={Logo} alt="" /> */}
          {/* <div className={classes.socials}>
            <img src={Twiiter} alt="" className={classes.footerImage} />
            <img src={Instagram} alt="" className={classes.footerImage} />
            <img src={Facebook} alt="" className={classes.footerImage} />
            <img src={Linkedin} alt="" className={classes.footerImage} />
            <img src={Mail} alt="" className={classes.footerImage} />
          </div> */}
        </div>
        <div className={classes.who}>
          <h4>Who we are</h4>
          <ul className={classes.footerUl}>
            <li key={1}>
              <a href="/">About us</a>
            </li>
            <li key={2}>
              <a href="/">Our Services</a>
            </li>
            <li key={3}>
              <a href="/">Our Team</a>
            </li>
            <li key={4}>
              <a href="/">Privacy Policy</a>
            </li>
            <li key={5}>
              <a href="/">Terms of Service</a>
            </li>
          </ul>
        </div>
        <div className={classes.support}>
          <h4>Support</h4>
          <ul className={classes.footerUl}>
            <li key={6}>
              <a href="/">Get Started</a>
            </li>
            <li key={7}>
              <a href="/">Help</a>
            </li>
            <li key={8}>
              <a href="/">FAQ</a>
            </li>
          </ul>
        </div>
        <div className={classes.subscribe}>
          <h4>
            Stay in the <span className={classes.loop}>LOOP</span>
          </h4>
          <p>
            Join our mailing list to stay in the loop with our newest
            accessories
          </p>
          <form className={classes.subForm}>
            <input
              type="email"
              placeholder="Enter email address"
              className={classes.inputSub}
            />
            <button className={classes.btnIN}>I`m IN</button>
          </form>
        </div>
      </div>
      <div className={classes.reserve}>
        <span className={classes.footerline}></span>
        <p>&copy; 2023 Abloke | All Right Reserved</p>
      </div>
    </div>
  );
}

export default Footer;

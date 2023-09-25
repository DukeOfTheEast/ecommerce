import Sneaks from "../images/sneaker-removebg-preview.png";
import classes from "../components/Sneaker.module.css";

const Sneaker = () => {
  return (
    <div className={classes.sneaker}>
      <div>
        <h1>Men`s Sneakers</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          magnam vero excepturi soluta architecto impedit.
        </p>
        <button className={classes.btnsneak}>Learn More</button>
      </div>
      <img src={Sneaks} alt="" />
    </div>
  );
};

export default Sneaker;

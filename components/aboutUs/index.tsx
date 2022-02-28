import React, { FunctionComponent } from "react";
import Image from "next/image";
import decoration from "../../assets/Decoration.svg";
import signature from "../../assets/Signature.svg";
import people from "../../assets/People.jpg";
import styles from "../../styles/AboutUs.module.scss";
const AboutUs: FunctionComponent = (): JSX.Element => {
  return (
    <div className={styles.aboutus}>
      <div className={styles.aboutus__left}>
        <h1 className={styles.aboutus__header}>O nas</h1>
        <div className={styles.aboutus__image}>
          <Image src={decoration} />
        </div>

        <p className={styles.aboutus__text}>
          Nori grape silver beet broccoli kombu beet greens fava bean potato
          quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil
          turnip greens parsnip.
        </p>
        <div className={styles.aboutus__signature}>
          <Image src={signature} />
        </div>
      </div>
      <div className="aboutus__right">
        <Image src={people} />
      </div>
    </div>
  );
};

export default AboutUs;

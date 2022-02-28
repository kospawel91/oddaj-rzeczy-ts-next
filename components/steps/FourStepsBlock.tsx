// react
import React, { FunctionComponent } from "react";
// types
import { IFour } from "../../types";
import Image from "next/image";
import styles from "../../styles/FourSteps.module.scss";

interface Props {
  block: IFour;
}

const FourStepsBlock: FunctionComponent<Props> = ({ block }): JSX.Element => {
  const { img, header, text } = block;

  return (
    <div className={styles.steps__container}>
      <div className={styles.steps__image_container}>
        <Image
          src={img}
          className={styles.steps__img}
          alt="Return Things Steps"
        />
      </div>
      <div className={styles.steps__header}>{header}</div>
      <hr className={styles.steps__line} />
      <div className={styles.steps__text}>{text}</div>
    </div>
  );
};

export default FourStepsBlock;

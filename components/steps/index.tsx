import React, { FunctionComponent } from "react";
import Image from "next/image";
import decoration from "../../assets/Decoration.svg";
import styles from "../../styles/FourSteps.module.scss";
import FourStepsContainer from "./FourStepsContainer";

const FourSteps: FunctionComponent = (): JSX.Element => {
  return (
    <div className={styles.fourSteps}>
      <div className={styles.white__container}>
        <h2 className={styles.white__container__heroText}>
          Zacznij pomagać! <br />
          Oddaj niechciane rzeczy w zaufane ręce
        </h2>
        <Image className={styles.white__container__heroText} src={decoration} />
      </div>
      <FourStepsContainer />
    </div>
  );
};

export default FourSteps;

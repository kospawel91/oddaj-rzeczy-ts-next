// react
import React, { FunctionComponent } from "react";
import statisticsFourConfig from "../helpers/stepsConfig";
// components
import FourStepsBlock from "./FourStepsBlock";
import styles from "../../styles/FourSteps.module.scss";

const FourStepsContainer = (): JSX.Element => {
  return (
    <div className={styles.steps}>
      {statisticsFourConfig.map((block) => (
        <FourStepsBlock key={block.text} block={block} />
      ))}
    </div>
  );
};

export default FourStepsContainer;

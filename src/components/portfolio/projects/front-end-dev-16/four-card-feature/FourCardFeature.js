// import "./FourCardStyles.css";
import { Link } from "react-router-dom";
import InfoCard from "./InfoCard";
import Intro from "./Intro";
import { FourCard, TwoCard, FourCardFeatureCont } from "./FourCardStyledComp";

export default function FourCardFeature() {
  return (
    <>
      <FourCardFeatureCont>
        <Link to='/portfolio'>Exit</Link>
        <Intro />
        <FourCard>
          <InfoCard
            borderColor='rgb(69, 211, 211)'
            header='Supervisor'
            text='Monitors activity to identify project roadblocks'
            img='/four-card-images/icon-supervisor.svg'
          />
          <TwoCard>
            <InfoCard
              borderColor='hsl(0, 78%, 62%)'
              header='Team Builder'
              text='Scans our talent network to create the optimal team for your project'
              img='/four-card-images/icon-team-builder.svg'
            />
            <InfoCard
              borderColor='hsl(34, 97%, 64%)'
              header='Karma'
              text='Regularly evaluates our talent to ensure quality'
              img='/four-card-images/icon-karma.svg'
            />
          </TwoCard>
          <InfoCard
            borderColor='hsl(212, 86%, 64%)'
            header='Calculator'
            text='Uses data from past projects to provide better delivery estimates'
            img='/four-card-images/icon-calculator.svg'
          />
        </FourCard>
      </FourCardFeatureCont>
    </>
  );
}

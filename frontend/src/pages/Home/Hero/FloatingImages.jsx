import designImg from "../../../assets/sideimg.png";
import hostImg from "../../../assets/hosting.png";
import applicationImg from "../../../assets/application.svg";
import Card from "../../../components/Card";

export default function FloatingImages() {
  return (
    <div className="swag-block">
      <Card
        id={1}
        img={designImg}
        heading={"Design Selection"}
        content={
          <>
            Select from a wide array of <span>pre-existing</span> or{" "}
            <span>costume designs</span>
          </>
        }
        direction="left-card first-eat-up"
        styles="compress-p"
      />
      <Card
        id={2}
        img={hostImg}
        heading={"Web Hosting"}
        content={
          <>
            We ensure your online presence is <span>impactful</span> and{" "}
            <span>uninterrupted</span>
          </>
        }
        direction="right-card"
        styles="compress-p"
      />
      <Card
        id={3}
        img={applicationImg}
        heading={"Income Verification"}
        content={
          <>
            <span>Strengthen</span> your applications with a{" "}
            <span>credible online presence</span>
          </>
        }
        direction="left-card"
        styles="compress-p"
      />
    </div>
  );
}

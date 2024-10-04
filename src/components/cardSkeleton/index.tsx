import React from "react";
import ContentLoader from "react-content-loader";

type IProps = {
  props: number;
};

const CardSkeleton: React.FC<IProps> = ({ props }) => (
  <>
    {[...Array(props)].map((_, index) => (
      <ContentLoader
        speed={2}
        width="auto"
        height="auto"
        viewBox="0 0 630 610"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        key={index}
      >
        <rect x="8" y="24" rx="0" ry="0" width="500" height="250" />
        <rect x="10" y="236" rx="0" ry="0" width="180" height="40" />
        <rect x="254" y="236" rx="0" ry="0" width="180" height="40" />
        <rect x="11" y="285" rx="0" ry="0" width="180" height="35" />
        <rect x="10" y="326" rx="0" ry="0" width="500" height="75" />
        <rect x="12" y="415" rx="0" ry="0" width="200" height="50" />
        <rect x="195" y="416" rx="0" ry="0" width="250" height="50" />
        <rect x="319" y="438" rx="0" ry="0" width="1" height="5" />
      </ContentLoader>
    ))}
  </>
);

export default CardSkeleton;

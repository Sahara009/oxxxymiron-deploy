import React from "react";
import Skeleton from "react-loading-skeleton";
import "../../../../styles/root.scss";
import { SkeletonTheme } from "react-loading-skeleton";

export const NewsSkeleton = () => {
  return (
    <div className="news_skeleton">
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <Skeleton width={335} height={188} />
        <Skeleton width={335} height={188} />
        <Skeleton width={335} height={188} />
      </SkeletonTheme>
    </div>
  );
};

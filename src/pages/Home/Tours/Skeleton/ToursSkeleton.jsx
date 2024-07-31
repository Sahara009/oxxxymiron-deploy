import React from "react";
import Skeleton from "react-loading-skeleton";
import { SkeletonTheme } from "react-loading-skeleton";

export const ToursSkeleton = () => {
  return (
    <div style={{ marginTop: 20 }}>
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <Skeleton
          style={{ marginBottom: 10 }}
          width={1200}
          height={100}
          count={5}
        />
      </SkeletonTheme>
    </div>
  );
};

import React from "react";
import Skeleton from "react-loading-skeleton";
import { SkeletonTheme } from "react-loading-skeleton";
import "../../../../styles/root.scss";

export const TracksSkeleton = () => {
  return (
    <div
      className="track_skeleton"
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <Skeleton className="skeleton" width={300} height={300} />
        <div>
          <Skeleton className="skeleton_right" width={300} height={300} />
        </div>
        <Skeleton className="skeleton" width={300} height={300} />
      </SkeletonTheme>
    </div>
  );
};

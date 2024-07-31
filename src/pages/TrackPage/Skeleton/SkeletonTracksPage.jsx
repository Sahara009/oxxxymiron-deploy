import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export const SkeletonTracksPage = () => {
  return (
    <div className="track_skeleton">
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {[...Array(3)].map((_, index) => (
            <div key={index} style={{ display: "flex", gap: 20 }}>
              <Skeleton className="skeleton" width={300} height={300} />
              <div className="track_skeleton_info">
                <Skeleton width={100} />
                <Skeleton width={300} height={40} />
                <Skeleton width={900} height={80} />
                <Skeleton width={225} height={40} style={{ marginTop: 75 }} />
              </div>
            </div>
          ))}
        </div>
      </SkeletonTheme>
    </div>
  );
};

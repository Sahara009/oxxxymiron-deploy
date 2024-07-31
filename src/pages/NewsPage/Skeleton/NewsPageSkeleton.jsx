import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "../../../styles/root.scss";

export const NewsPageSkeleton = () => {
  return (
    <div className="news_skeleton">
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
          {[...Array(3)].map((_, index) => (
            <div key={index} style={{ display: "flex", gap: 20 }}>
              <Skeleton className="skeleton" width={300} height={168} />
              <div className="news_skeleton_info">
                <Skeleton width={100} />
                <Skeleton width={500} height={30} style={{ marginTop: 8 }} />
                <Skeleton width={225} height={40} style={{ marginTop: 73 }} />
              </div>
            </div>
          ))}
        </div>
      </SkeletonTheme>
    </div>
  );
};

import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "../../../styles/root.scss";

export const NewsSingleSkeleton = () => {
  return (
    <div>
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <div>
          <div>
            {/* <Skeleton className="skeleton" width={300} height={168} /> */}
            <div>
              <Skeleton width={0} height={70} style={{ marginTop: 15 }} />
              <Skeleton width={150} height={20} style={{ marginBottom: 20 }} />
              <Skeleton width={1200} height={676} />
            </div>
          </div>
        </div>
      </SkeletonTheme>
    </div>
  );
};

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const Loader = () => {
  return (
    <div>
      <Skeleton height="80vh" width="80vw" highlightColor="#deb80d1c" />;
    </div>
  );
};

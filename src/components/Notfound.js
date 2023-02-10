import { useRef } from "react";
import SectionTitle from "./SectionTitle";
const NotFound = () => {
  // const footerRef = useRef(null);

  // useGsapNotFoundHeadline(footerRef, 1.4);
  return (
    <div className="container mx-auto mt-40">
      <SectionTitle title="404" />
    </div>
  );
};

export default NotFound;

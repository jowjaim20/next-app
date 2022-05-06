import * as React from "react";
import { SVGProps } from "react";

const SvgBookmark = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    {...props}
  >
    <path d="M14 2v17l-4-4-4 4V2c0-.553.585-1.02 1-1h6c.689-.02 1 .447 1 1z" />
  </svg>
);

export default SvgBookmark;

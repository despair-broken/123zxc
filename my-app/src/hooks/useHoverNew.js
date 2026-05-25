/** @format */

import { useState } from "react";

export default function useHoverNew() {
  const [isHovering, setHovering] = useState(false);
  const bind = {
    onMouseEnter: () => setHovering(true),
    onMouseLeave: () => setHovering(false),
  };
  return { isHovering, bind };
}

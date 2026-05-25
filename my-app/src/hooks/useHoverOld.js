/** @format */

import { useEffect, useState } from "react";

export default function useHoverOld(ref) {
  const [isHovering, setHovering] = useState(false);
  useEffect(() => {
    if (!ref.current) {
      return;
    }
    const node = ref.current;
    const on = () => setHovering(true);
    const off = () => setHovering(false);
    node.addEventListener("mouseenter", on);
    node.addEventListener("mouseleave", off);

    return function () {
      node.removeEventListener("mouseenter", on);
      node.removeEventListener("mouseleave", off);
    };
  }, []);
  return isHovering;
}

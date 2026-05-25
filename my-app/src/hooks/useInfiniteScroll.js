/** @format */

import { useRef, useCallback, useEffect } from "react";

export default function useInfiniteScroll(callback, isLoading, hasMore) {
  const observer = useRef(null);
  const callbackRef = useRef(callback);
  callbackRef.current = callback;
  const lastElementRef = useCallback(
    (node) => {
      if (observer.current) {
        observer.current.disconnect();
      }
      observer.current = new IntersectionObserver(
        (entries) => {
          if (entries[0]?.isIntersecting && hasMore && !isLoading) {
            callbackRef.current();
          }
        },
        {
          threshold: 0,
          rootMargin: "300px",
        },
      );
      if (node) {
        observer.current.observe(node);
      }
    },
    [isLoading, hasMore],
  );
  useEffect(() => {
    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);
  return lastElementRef;
}

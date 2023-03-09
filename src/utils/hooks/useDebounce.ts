import { useEffect, useRef } from "react";

export function useDebounce<A extends any[]>(
  callback: (...args: A) => void,
  wait: number
): (...args: A) => void {
  const timeout = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => clearTimeout(timeout.current), []);

  return function debouncedCallback(...args: A) {
    clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      if (args) {
        callback(...args);
      }
    }, wait);
  };
}

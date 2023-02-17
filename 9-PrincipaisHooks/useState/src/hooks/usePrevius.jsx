import { useEffect, useRef, useDebugValue } from "react";

export const usePrevius = (value) => {
  const ref = useRef;

  useDebugValue("--- CUSTOM HOOK E USEDEGUBVALUE");

  useDebugValue("o número anterior é:" + value);

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
};

import { useLayoutEffect } from "react";

const useScrollToTop = () => {
  useLayoutEffect(() => {
    window.scrollTo({ behavior: "smooth", top: 0 });
  }, []);
};

export default useScrollToTop;

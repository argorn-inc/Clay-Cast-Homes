  import { useRef, useEffect, useState, useMemo } from "react";

  const useLazyImage = ({ threshold = 0.5 }) => {

    const imgRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const observer = useMemo(
      () =>
        new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(imgRef.current);
              }
            });
          },
          { threshold }
        ),
      [threshold]
    );

    useEffect(() => {
      if (imgRef.current) {
        observer.observe(imgRef.current);
      }

      return () => {
        if (imgRef.current) {
          observer.unobserve(imgRef.current);
        }
      };
    }, [imgRef, observer]);

    return { imgRef, isVisible };
  };

  export default useLazyImage;
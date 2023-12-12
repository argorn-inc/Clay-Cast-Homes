import React from 'react';
import useLazyImage from '../Hook/useLazyImage';

export const LazyImage = ({ src, alt, threshold = 0.5, placeholder }) => {
  const { imgRef, isVisible } = useLazyImage({ src, threshold });

  return (
    <div style={{ position: 'relative', Height: '500px' }}>
      <img
        ref={imgRef}
        src={isVisible ? src : placeholder}
        alt={alt}
        style={{ opacity: isVisible ? 1 : 0, position: 'absolute', top: 0, left: 0 }}
      />
    </div>
  );
};    
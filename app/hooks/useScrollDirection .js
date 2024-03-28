import { useEffect, useRef } from 'react';

const useScrollDirection = (scrollRef) => {
  const prevScrollPositionRef = useRef(0);
  const scrollDirection = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = scrollRef.current.scrollTop;
      const deltaY = currentScrollPosition - prevScrollPositionRef.current;
      scrollDirection.current = deltaY > 0 ? 'down' : 'up';
      prevScrollPositionRef.current = currentScrollPosition;
    };

    const scrollElement = scrollRef.current;
    scrollElement.addEventListener('scroll', handleScroll);

    return () => {
      scrollElement.removeEventListener('scroll', handleScroll);
    };
  }, [scrollRef]);

  return scrollDirection.current;
};

export default useScrollDirection;
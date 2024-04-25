export const handleScroll = ( currentRef ) => {
  
  window.scrollTo({
    top: currentRef ? currentRef.current.offsetTop : 0,
    behavior: 'smooth',
  });
  
};
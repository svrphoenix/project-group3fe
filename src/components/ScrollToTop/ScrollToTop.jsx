import { useEffect, useState } from 'react';
import { ScrollToTopWrapper } from './ScrollToTop.styled';
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded';

export const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleWindowScroll = () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener('scroll', handleWindowScroll);
    return () => window.removeEventListener('scroll', handleWindowScroll);
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <ScrollToTopWrapper>
      {showTopBtn && <ExpandLessRoundedIcon onClick={goToTop} />}
    </ScrollToTopWrapper>
  );
};

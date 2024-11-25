import { useState } from 'react';

function usePopup() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return {
    isPopupOpen,
    openPopup,
    closePopup,
  };
}

export default usePopup;
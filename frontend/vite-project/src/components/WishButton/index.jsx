import React, { useState, useMemo } from 'react';
import WishBtn from "./WishButtonStyle";
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";

function WishButton () {
  const [isWishAdd, setIsWishAdd] = useState(false);
  const [wishCount, setWishCount] = useState(0);

  const toggleWishAdd = () => {
    setIsWishAdd(!isWishAdd);
  };

  const wishCountHandler = () => {
    toggleWishAdd();
    if (!isWishAdd) {
      setWishCount(prevCount => prevCount + 1);
      fetch(`API_URL`,{
        method: "POST",
        body: JSON.stringify({
          "user_id": 8, //더미
          "product_id": 2 //더미
        }),
      })
    }
  };

  const WishIcon = useMemo(() => {
    return isWishAdd ? <IoIosHeart size="24" color="#FECCBE" /> : <IoIosHeartEmpty size="24" />;
  }, [isWishAdd]);

  return (
    <>
      <WishBtn onClick={wishCountHandler}>
        {WishIcon}
      </WishBtn>
    </>
  );
}

export default WishButton;

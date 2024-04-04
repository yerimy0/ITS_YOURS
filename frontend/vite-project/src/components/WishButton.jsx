import { useState } from "react";
import { WishBtn, Icon } from "./WishButtonStyle";

function WishButton () {
  const [isWishAdd, setIsWishAdd] = useState(false);
  const [wishCount, setWishCount] = useState(0);

  const wishAddHandler = () => {
    setIsWishAdd(!isWishAdd);
  };

  const wishCountHandler = () => {
    wishAddHandler();
    if(!isWishAdd) {
      setWishCount(wishCount + 1);
      fetch(`API_URL`,{
        method: "POST",
        body: JSON.stringigy({
          "user_id": 8,
          "product_id": 2
        }),
      })
    }
  };

  return (
    <>
      <WishBtn onClick={wishCountHandler}>
        {isWishAdd ? (
          <Icon src=".svg" alt="찜하기 성공" />
        ) : (
          <Icon src=".svg" alt="찜하기 취소" />
        )}
      </WishBtn>
    </>
  )
}

export default WishButton;
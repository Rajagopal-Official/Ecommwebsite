import { useEffect, useRef, useState } from "react";
import { MessageText, PromotionsContainer } from "../../styles/promotions";
import { Box } from "@mui/system";
import { Slide } from "@mui/material";

const messages = [
  "20% off on your first order!",
  "Summer sale starts now,visit us to grap exciting deals",
  "Someone said Trend we heard Wixiee bags",
];
export default function Promotions() {
  const containerRef=useRef()
  const [messageIndex, setMessageIndex] = useState(0);
  const[show,setShow]=useState(true)
  useEffect(()=>{
    setTimeout(() => {
      setShow(false)//initially it hasnt to be shown for 2 s
    }, 2000);
    const intervalId = setInterval(() => {//Repeatedly will execute the function 
      setMessageIndex((i) => (i + 1) % messages.length); //if goes over 4 4%3 will become 0
      setShow(true)
        setTimeout(() => {
          setShow(false)
        }, 2000);
    }, 3000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <PromotionsContainer ref={containerRef.current}>
      <Slide direction={show?"left":"right"} in={show} timeout={{
        enter:500,
        exit:200
      }}>
        <Box display={"flex"} justifyContent="center" alignItems={"center"}>
          <MessageText>{messages[messageIndex]}</MessageText>
        </Box>
      </Slide>
    </PromotionsContainer>
  );
}

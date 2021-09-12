import React from "react";
// import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";
// import "./Landing.css";
import Simplify from "./Simplify/Simplify";


const Presenter = () => {
//   const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
//   const FadeUp = batch(Fade(), Move(), Sticky());

  return (
      <div className="animeBackground">  


      <div className>
          <Simplify />
      </div>
        {/* <ScrollContainer>
            <ScrollPage page={0}>
                <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
                <span style={{ fontSize: "3em" }}>Let't me show you scroll animation 😀</span>
                </Animator>
            </ScrollPage>
            <ScrollPage page={1}>
                <Animator animation={ZoomInScrollOut}>
                <span style={{ fontSize: "3em" }}>I'm FadeUpScrollOut ✨</span>
                </Animator>
            </ScrollPage>
            <ScrollPage page={2}>
                <Animator animation={FadeUp}>
                    <img src={`./images/Rectangle.svg`} alt="men standing" />   */}
                {/* <span style={{ fontSize: "3em" }}>I'm FadeUp ⛅️</span> */}
                {/* </Animator>
            </ScrollPage>
            <ScrollPage page={3}>
                <div >
                <span style={{ fontSize: "3em" }}>
                     The Brand Growth Company 
                    <Animator animation={MoveIn(-1000, 0)}>Hello Guys 👋🏻</Animator>
                    <Animator animation={MoveIn(1000, 0)}>Nice to meet you 🙋🏻‍♀️</Animator>
                    <Animator animation={MoveOut(1000, 0)}>Good bye ✋🏻</Animator>
                    <Animator animation={MoveOut(-1000, 0)}>See you 💛</Animator>
                </span>
                </div>
            </ScrollPage>
            <ScrollPage page={4}>
                <Animator animation={batch(Fade(), Sticky())}>
                <span style={{ fontSize: "3em" }}>Done</span>
                <span style={{ fontSize: "3em" }}>
                    There's FadeAnimation, MoveAnimation, StickyAnimation, ZoomAnimation
                </span>
                </Animator>
            </ScrollPage>
        </ScrollContainer> */}
    </div>
  );
};

export default Presenter;
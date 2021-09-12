import React from "react";
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";
import './Simplify.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";



const Simplify = () => {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());

  return (
    <div>
        <ScrollContainer>
            <ScrollPage page={0}>
                
            </ScrollPage>
            <ScrollPage page={0}>
                <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -150))}>
                    <p className="brandGrowth">The Brand Growth Company</p> 
                </Animator>
                <div className="simplifyBrand">
                    <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -100))}>We <span className="simplifyColor">Simplify</span> the way brands 
                    <p>are built and managed.</p>
                    <button className="fontButton">Talk to us <FontAwesomeIcon icon={faArrowRight}/> </button>
                    </Animator>
                    {/* <Animator> </Animator> */}
                </div>
                <div>
                    
                </div>
            </ScrollPage>
            
        </ScrollContainer>
        {/* <div className="imageBack" >
            <ScrollContainer>
                <ScrollPage page ={1}>
                    <Animator animation={FadeUp}>
                        <img src={`./images/Rectangle.svg`} alt="men laughing" />
                    </Animator>
                    <div >
                        <span style={{ fontSize: "3em" }}> 
                        <Animator animation={MoveIn(-900, 0)}>
                            <h4>How can we help you?</h4> 
                            <p>Building and managing a great brand can seem like so much at once. you don’t know where to start from and what to do next. You end up loosing money, customers and even losing time. 
                                Our speciality is replacing those entanglements with Clarity.</p>
                        </Animator>
                    <Animator animation={MoveIn(1000, 0)}>Nice to meet you 🙋🏻‍♀️</Animator>
                    <Animator animation={MoveOut(1000, 0)}>Good bye ✋🏻</Animator>
                    <Animator animation={MoveOut(-1000, 0)}>See you 💛</Animator>
                </span>
                </div>
                </ScrollPage>
            </ScrollContainer> 
        </div>
        <div>
            <p>name of a thing</p>
        </div> */}
    </div>
);
  };

export default Simplify;

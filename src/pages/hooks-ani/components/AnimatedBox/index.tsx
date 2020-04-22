import React, { SFC, useState, useEffect, CSSProperties, ElementType } from 'react';
import { Animated, AnimatedProps } from 'react-animated-css';

const AnimatedBox: SFC<AnimatedProps> = ({
  isVisible = true,
  animationOutDuration = 1000,
  children,
  animationIn,
  animationOut,
  ...reset
}) => {
  const [isDisplay, toggelDisplay] = useState<boolean>(!isVisible);

  useEffect(() => {
    const distroy = () => toggelDisplay(true);
    isVisible ? toggelDisplay(false) : setTimeout(distroy, animationOutDuration);
  }, [isVisible]);

  const style: CSSProperties = isDisplay ? { display: 'none' } : {};

  return (
    <Animated
      isVisible={isVisible}
      style={style}
      animationIn={animationIn}
      animationOut={animationOut}
      animationOutDuration={animationOutDuration}
      {...reset}
    >
      {children}
    </Animated>
  );
};

type IMakeAnimated = { Component: ElementType } & AnimatedProps;
function makeAnimated(params: Omit<IMakeAnimated, 'isVisible'>): ElementType {
  const { Component, ...others } = params;
  return function({ open, className, ...props }) {
    return (
      <AnimatedBox isVisible={open} {...others} className={className}>
        <Component {...props} />
      </AnimatedBox>
    );
  };
}

export function makeAnimatedSlideInLeft(Component: ElementType): ElementType {
  return makeAnimated({
    Component,
    animationIn: 'slideInLeft',
    animationOut: 'slideOutLeft',
    animationInDelay: 200,
    animationInDuration: 350,
    animationOutDuration: 350,
  });
}

export function makeAnimatedSlideInTop(Component: ElementType): ElementType {
  return makeAnimated({
    Component,
    animationIn: 'slideInDown',
    animationOut: 'slideOutUp',
    animationInDuration: 350,
    animationOutDuration: 350,
  });
}

export default AnimatedBox;

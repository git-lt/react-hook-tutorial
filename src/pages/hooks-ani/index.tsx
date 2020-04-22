import React, { useState } from 'react';
import { Switch } from 'antd';
import Navbar from './components/Navbar';
import Slidebar from './components/Slidebar';
import List from './components/List';
import sty from './index.less';
import { makeAnimatedSlideInLeft, makeAnimatedSlideInTop } from './components/AnimatedBox';

const NavbarAnimated = makeAnimatedSlideInTop(Navbar);
const SlidebarAnimated = makeAnimatedSlideInLeft(Slidebar);

function AniPage() {
  const [isOpenNav, toggleNav] = useState<boolean>(true);
  const [isOpenSlidebar, toggleSlidebar] = useState<boolean>(true);

  function onToggleNav() {
    toggleNav(!isOpenNav);
  }
  function onToggleSidbar() {
    toggleSlidebar(!isOpenSlidebar);
  }

  return (
    <main className={sty.main}>
      <header>
        <Switch onChange={onToggleNav} checked={isOpenNav} />
        <Switch onChange={onToggleSidbar} checked={isOpenSlidebar} />
      </header>
      <List />
      <NavbarAnimated open={isOpenNav} className={sty.navbar} />
      <SlidebarAnimated open={isOpenSlidebar} className={sty.slidebar} />
    </main>
  );
}

export default AniPage;

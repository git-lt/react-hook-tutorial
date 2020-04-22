import React, { SFC } from 'react';
import sty from './index.less';

const Sidebar: SFC<any> = () => {
  return (
    <div className={sty.sidebar}>
      <div className={sty.sidebarItem}>111</div>
      <div className={sty.sidebarItem}>111</div>
      <div className={sty.sidebarItem}>111</div>
      <div className={sty.sidebarItem}>111</div>
    </div>
  );
};

export default Sidebar;

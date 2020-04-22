import React, { SFC } from 'react';
import sty from './index.less';

const Navbar: SFC<any> = () => {
  return (
    <div className={sty.navbar}>
      <div className={sty.navItem}>首页</div>
      <div className={sty.navItem}>产品</div>
      <div className={sty.navItem}>商城</div>
      <div className={sty.navItem}>联系我们</div>
    </div>
  );
};

export default Navbar;

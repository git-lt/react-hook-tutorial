import React, { SFC, useState, CSSProperties } from 'react';
import { Button } from 'antd';
import sty from './index.less';
import AnimatedBox from '../AnimatedBox';

const colors = [
  '#6690FF',
  '#6CD566',
  '#50E5FF',
  '#FFDC75',
  '#FF7C83',
  '#FF702D',
  '#FFAA42',
  '#7F7B82',
  '#4D7EA8',
];

const ListItem: SFC<any> = ({ children, index }) => {
  const [color] = useState<string>(colors[Math.floor(Math.random() * 9)]);
  const [visible, setVisible] = useState<boolean>(true);

  function onDelete() {
    setVisible(false);
  }

  let style: CSSProperties = { borderColor: color, backgroundColor: color };

  return (
    <AnimatedBox
      isVisible={visible}
      animationIn="zoomIn"
      animationOut="zoomOut"
      animationInDelay={index * 80}
      animationInDuration={400}
      animationOutDuration={350}
    >
      <div className={sty.item} style={style}>
        <div className={sty.word}>{children}</div>
        <Button shape="circle" icon="close" size="small" onClick={onDelete} />
      </div>
    </AnimatedBox>
  );
};

const List: SFC<any> = () => {
  const list = Array(12).fill(0);

  return (
    <div className={sty.listWrap}>
      {list.map((v, i) => (
        <ListItem key={i} index={i}>
          {i}
        </ListItem>
      ))}
    </div>
  );
};

export default List;

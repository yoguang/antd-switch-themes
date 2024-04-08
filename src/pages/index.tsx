import styles from './index.less';
import { useEffect, useState } from 'react';
import { Button, Radio } from 'antd';

export default function IndexPage() {
  const [radioValue, setValue] = useState(1);
  useEffect(() => {
    console.log(window.less);
    window.less.modifyVars({
      '@redBgTest': '#ff0',
    });
  }, []);
  const handleClickBtn = (value: number) => {
    let color = '#f00';
    if (value === 1) {
      color = '#f00';
    } else if (value === 2) {
      color = '#00f';
    } else if (value === 3) {
      color = '#f0f';
    }
    window.less.modifyVars({
      '@redBgTest': color,
      '@redBgTest__': color,
    });
  };
  const onChange_Radio = (e) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <h1 className={`${styles.title}`}>Page index</h1>
      <h2 className="redBg">颜色变更区域</h2>
      <h2 className="testBg">global区域</h2>

      <h2>
        <Radio.Group onChange={onChange_Radio} value={radioValue}>
          <Radio value={1}>A</Radio>
          <Radio value={2}>B</Radio>
          <Radio value={3}>C</Radio>
          <Radio value={4}>D</Radio>
        </Radio.Group>
      </h2>
      <Button type="primary" onClick={() => handleClickBtn(1)}>
        红色方案
      </Button>
      <Button type="dashed" onClick={() => handleClickBtn(2)}>
        蓝色方案
      </Button>
      <Button type="ghost" onClick={() => handleClickBtn(3)}>
        紫色方案
      </Button>
    </div>
  );
}

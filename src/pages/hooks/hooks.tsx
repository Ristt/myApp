import { useState } from '@tarojs/taro';
import { connect } from 'dva';
import { Dispatch } from 'redux';
import { View, Text, Button } from '@tarojs/components';
import styles from './hooks.less';

interface IPropsType {
  dispatch: Dispatch<any>;
  demoStr: string;
}

function TextInputWithFocusButton() {
  // const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` 指向已挂载到 DOM 上的文本输入元素
    // inputEl.current.focus();
  };
  return (
    <View>
      {/* <Input ref={inputEl} type="text" /> */}
      <Button onClick={onButtonClick}>Focus the input</Button>
    </View>
  );
}
export default connect(({ demo }) => {
  const { demoStr } = demo;
  return { demoStr };
})(TextInputWithFocusButton);

import Taro, { useState } from '@tarojs/taro';
import { connect } from '@tarojs/redux';
import { View } from '@tarojs/components';

import './hooks.less';
interface TypeProps {
  demoStr: string;
}

function Index(props: TypeProps) {
  const { demoStr = '' } = props;
  return <View className="index">{demoStr}</View>;
}
export default connect(({ demo }) => {
  const { demoStr = 'ddd' } = demo;
  return { demoStr };
})(Index);

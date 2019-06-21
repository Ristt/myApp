import { ComponentClass } from 'react';
import Taro, { Component, Config } from '@tarojs/taro';
import { connect } from '@tarojs/redux';
import { View, Text, Button } from '@tarojs/components';
import './index.less';

// 类型定义
type PageStateProps = {};
type PageModelProps = { dispatch: Function; demoStr: string };
interface Index {
  props: PageModelProps;
  state: PageStateProps;
}

@connect(({ demo }) => {
  const { demoStr } = demo;
  return { demoStr };
})
class Index extends Component {
  config: Config = {
    navigationBarTitleText: '首页',
  };

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}
  setDemo = () => {
    this.props.dispatch({
      type: 'demo/setDemo',
      payload: {},
    });
  };
  render() {
    const { demoStr = '' } = this.props;
    return (
      <View className="index">
        <Text>{demoStr}</Text>
        <Button onClick={this.setDemo.bind(this)}>点击切换名称</Button>
      </View>
    );
  }
}

export default Index as ComponentClass<PageModelProps, PageStateProps>;

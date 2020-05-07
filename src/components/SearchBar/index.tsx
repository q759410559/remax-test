import * as React from 'react';
import {View} from 'remax/wechat';
import VanSearch from '@vant/weapp/dist/search'
import VanButton from '@vant/weapp/dist/button'
export default () => {
  return (
    <View>
      <VanSearch
          placeholder="请输入搜索关键词"
          shape="round"
      />
        <VanButton type="primary">主要按钮</VanButton>
        <VanButton type="info">信息按钮</VanButton>
        <VanButton type="warning">警告按钮</VanButton>
        <VanButton type="danger">危险按钮</VanButton>
    </View>
  );
};

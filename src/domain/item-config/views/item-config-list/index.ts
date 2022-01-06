import { createView } from 'handie-react';

import { ViewDescriptor } from '@/shared/types';

import { ItemStatus } from '../../typing';
import context from '../../context';
import { makeItemConfigOffline } from './helper';

export default createView(context, {
  name: 'ItemConfigListView',
  category: 'list',
  renderType: 'fintech-table',
  config: { operationColumnWidth: 300 },
  fields: [
    { name: 'itemName', config: { width: 200 } },
    { name: 'item', config: { width: 200 } },
    { name: 'itemType', config: { width: 120 } },
    'summary',
    { name: 'status', config: { width: 90 } },
  ],
  actions: [
    {
      text: '新增',
      context: 'free',
      primary: true,
      renderType: 'dialog-view-button',
      config: { view: 'itemConfig.views.ItemConfigFormView' },
    },
    { text: '配置缓存' },
    { text: '清空缓存' },
    // { text: '生成', available: `$value.status !== "${ItemStatus.Online}"` },
    { text: '预览' },
    {
      text: '下线',
      execute: makeItemConfigOffline,
      confirm: true,
      available: `$value.status !== "${ItemStatus.Offline}"`,
    },
  ],
} as ViewDescriptor);

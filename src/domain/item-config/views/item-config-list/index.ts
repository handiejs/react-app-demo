import { createView } from 'handie-react';

import { ViewDescriptor, ObjectViewContext } from '@/shared/types';
import { pick } from '@/shared/utils';

import { ItemStatus } from '../../typing';
import context from '../../context';

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
      renderType: 'dialogViewButton',
      config: { view: 'itemConfig.views.ItemConfigFormView' },
    },
    { text: '配置缓存' },
    { text: '清空缓存' },
    { text: '生成', available: `$value.status !== "${ItemStatus.Online}"` },
    { text: '预览' },
    {
      text: '下线',
      danger: true,
      execute: (context: ObjectViewContext, { alert }) => {
        const parent = context.getParent()!;

        parent.deleteOne(
          pick(context.getValue(), ['item', 'itemType']),
          () => parent.reload(),
          message => alert(message),
        );
      },
      available: `$value.status !== "${ItemStatus.Offline}"`,
    },
  ],
  search: {
    filters: ['token'],
    config: { searchable: false, resettable: false, hideFormControlLabel: true },
  },
} as ViewDescriptor);

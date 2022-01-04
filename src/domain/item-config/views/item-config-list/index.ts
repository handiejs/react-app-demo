import { history } from 'umi';
import { createView } from 'handie-react';

import { ViewDescriptor } from '@/shared/types';

import context from '../../context';
// import EditActionWidget from './EditAction';
// import ItemListFieldWidget from './ItemListField';
// import StrategyListFieldWidget from './StrategyListField';

export default createView(context, {
  name: 'ItemConfigListView',
  category: 'list',
  renderType: 'fintech-table',
  config: { operationColumnWidth: 360 },
  fields: [
    { name: 'itemName', config: { width: 200 } },
    { name: 'item', config: { width: 200 } },
    { name: 'itemType', config: { width: 120 } },
    'summary',
    { name: 'status', config: { width: 90 } },
  ],
  actions: [
    { text: '新增', context: 'free', primary: true /*, widget: EditActionWidget */ },
    { text: '配置缓存' },
    { text: '清空缓存' },
    { text: '生成' },
    { text: '预览' },
    { text: '删除', danger: true },
  ],
  search: {
    filters: ['token'],
    initialValue: () => ({ bizId: history.location.query!.bizId }),
    config: { searchable: false, resettable: false, hideFormControlLabel: true },
  },
} as ViewDescriptor);

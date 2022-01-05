import { createView } from 'handie-react';

import { ViewDescriptor } from '@/shared/types';

import { BusinessStatus } from '../../typing';
import context from '../../context';
import EditActionWidget from './EditAction';
import ItemListFieldWidget from './ItemListField';
import StrategyListFieldWidget from './StrategyListField';

export default createView(context, {
  name: 'BizSideListView',
  category: 'list',
  renderType: 'fintech-table',
  config: { operationColumnWidth: 200 },
  fields: [
    { name: 'token', config: { width: 160 } },
    { name: 'bizId', config: { width: 120 } },
    { name: 'interfaceName', config: { width: 90 } },
    { name: 'itemList', widget: ItemListFieldWidget },
    { name: 'strategyList', widget: StrategyListFieldWidget, config: { width: 200 } },
    { name: 'shuffleCount', config: { width: 90 } },
    { name: 'status', config: { width: 90 } },
  ],
  actions: [
    { text: '新增', context: 'free', primary: true, widget: EditActionWidget },
    { text: '上线', available: `$value.status === "${BusinessStatus.Offline}"` },
    { text: '下线', available: `$value.status === "${BusinessStatus.Online}"` },
    { text: '编辑', available: `$value.status === "${BusinessStatus.Offline}"` },
    { text: '删除', danger: true },
  ],
  search: {
    filters: ['token'],
    initialValue: (_, { history }) => ({ bizId: history.getLocation().params.specific }),
    config: { searchable: false, resettable: false, hideFormControlLabel: true },
  },
} as ViewDescriptor);

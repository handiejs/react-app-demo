import { createView } from 'handie-react';

import { ViewDescriptor } from '@/shared/types';

import context from '../../context';
import EditActionWidget from './EditAction';

export default createView(context, {
  name: 'BizSideListView',
  category: 'list',
  renderType: 'fintechTable',
  config: { operationColumnWidth: 250 },
  fields: [
    'name',
    'id',
    'interfaceCategory',
    'recommendedList',
    'recommendedStrategies',
    'random',
    'status',
  ],
  actions: [
    { text: '新增', context: 'free', primary: true, widget: EditActionWidget },
    { text: '上线' },
    { text: '下线' },
    { text: '编辑' },
    { text: '删除', danger: true },
  ],
  search: {
    filters: ['name'],
    config: { searchable: false, resettable: false, hideFormControlLabel: true },
  },
} as ViewDescriptor);

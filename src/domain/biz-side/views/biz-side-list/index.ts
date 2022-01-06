import { ViewDescriptor } from '@/shared/types';
import { createView } from '@/shared/utils';

import { BusinessStatus } from '../../typing';
import context from '../../context';

import { makeBizTokenOnlineOrOffline } from './helper';
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
    {
      text: '新增',
      context: 'free',
      primary: true,
      renderType: 'dialog-view-button',
      config: { view: 'businessSide.views.BizSideFormView' },
    },
    {
      text: '上线',
      execute: makeBizTokenOnlineOrOffline.bind(null, BusinessStatus.Online),
      available: `$value.status !== "${BusinessStatus.Online}"`,
    },
    { text: '编辑', available: `$value.status !== "${BusinessStatus.Online}"` },
    {
      text: '下线',
      execute: makeBizTokenOnlineOrOffline.bind(null, BusinessStatus.Offline),
      confirm: true,
      available: `$value.status === "${BusinessStatus.Online}"`,
    },
  ],
  search: {
    filters: ['token'],
    initialValue: (_, { history }) => ({ bizId: history.getLocation().params.specific }),
    config: { searchable: false, resettable: false, hideFormControlLabel: true },
  },
} as ViewDescriptor);

import { createView } from 'handie-react';

import { ViewDescriptor } from '@/shared/types';

import context from '../../context';
import TokenFilterWidget from './TokenFilter';

export default createView(context, {
  name: 'RecommendationListListView',
  category: 'list',
  renderType: 'fintech-table',
  config: { operationColumnWidth: 360 },
  fields: [
    { name: 'title', config: { width: 200 } },
    'recommendId',
    { name: 'score', config: { width: 200 } },
    { name: 'ext1', config: { width: 90 } },
    { name: 'ext2', config: { width: 90 } },
    { name: 'ext3', config: { width: 90 } },
  ],
  search: {
    filters: [
      { name: 'id', label: 'ID', dataType: 'string' },
      { name: 'token', widget: TokenFilterWidget },
    ],
    initialValue: (_, { history }) => ({ bizId: history.getLocation().params.specific }),
    config: { searchable: false, resettable: false, hideFormControlLabel: true },
  },
} as ViewDescriptor);

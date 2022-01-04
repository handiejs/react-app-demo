import { history } from 'umi';
import { createView } from 'handie-react';

import { ViewDescriptor } from '@/shared/types';

import context from '../../context';

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
  // search: {
  //   filters: ['token'],
  //   // initialValue: () => ({ bizId: history.location.query!.bizId }),
  //   config: { searchable: false, resettable: false, hideFormControlLabel: true },
  // },
} as ViewDescriptor);

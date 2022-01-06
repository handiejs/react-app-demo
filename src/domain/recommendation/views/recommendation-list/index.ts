import { ViewDescriptor } from '@/shared/types';
import { createView } from '@/shared/utils';

import context from '../../context';
import RecommendationListViewWidget from './RecommendationList';

export default createView(context, {
  name: 'BizSideListView',
  category: 'list',
  widget: RecommendationListViewWidget,
  fields: [
    'name',
    'id',
    'interfaceCategory',
    'recommendedList',
    'recommendedStrategies',
    'random',
    'status',
  ],
} as ViewDescriptor);

import { ViewDescriptor } from '@/shared/types';
import { createView } from '@/shared/utils';

import context from '../../context';
import RecommendationListViewWidget from './RecommendationList';

export default createView(context, {
  name: 'RecommendationListView',
  category: 'list',
  widget: RecommendationListViewWidget,
  fields: [],
} as ViewDescriptor);

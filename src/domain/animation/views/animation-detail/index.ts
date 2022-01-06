import { ObjectViewContextDescriptor } from '@/shared/types';
import { createView } from '@/shared/utils';

import context from '../../context';

// import EpisodesField from './EpisodesField.vue';
// import DescriptionField from './DescriptionField.vue';

export default createView(context, {
  name: 'AnimationDetailView',
  category: 'object',
  renderType: 'detail',
  fields: [
    'title',
    { name: 'description' /*, widget: DescriptionField */ },
    'form',
    { name: 'episodes' /*, widget: EpisodesField */ },
  ],
} as ObjectViewContextDescriptor);

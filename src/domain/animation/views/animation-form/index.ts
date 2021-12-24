import { createView } from 'handie-react';

import { ObjectViewContextDescriptor } from '@/shared/types';

import context from '../../context';
import AnimationForm from './AnimationForm';

export default createView(context, {
  name: 'AnimationFormView',
  category: 'object',
  widget: AnimationForm,
  fields: [
    { name: 'title', hint: '哈哈' },
    'description',
    'form',
    'episodes',
    { name: 'ghost', label: '幽灵', hidden: true },
  ],
  validate: 'submit',
} as ObjectViewContextDescriptor);

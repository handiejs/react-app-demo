import { ObjectViewContextDescriptor, ObjectViewContext } from '@/shared/types';
import { createView } from '@/shared/utils';

import context from '../../context';

import ViewSearchTreeActionWidget from './ViewSearchTreeAction';
import AnimationFormViewWidget from './AnimationForm';

export default createView(context, {
  name: 'AnimationFormView',
  category: 'object',
  // renderType: 'form',
  widget: AnimationFormViewWidget,
  config: { formControlLabelWidth: 80 },
  fields: [
    { name: 'title', hint: '哈哈' },
    'description',
    'form',
    'episodes',
    { name: 'ghost', label: '幽灵', hidden: true },
  ],
  actions: [
    { text: '保存', execute: (ctx: ObjectViewContext) => ctx.submit(), primary: true },
    { text: '查看搜索树', widget: ViewSearchTreeActionWidget },
    { text: '提示对话框', execute: (ctx: ObjectViewContext) => ctx.emit(`alert.${ctx.getId()}`) },
    { text: '确认对话框', execute: (ctx: ObjectViewContext) => ctx.emit(`confirm.${ctx.getId()}`) },
  ],
  validate: 'submit',
} as ObjectViewContextDescriptor);

import { createView } from 'handie-react';

import { ViewDescriptor } from '@/shared/types';

import context from '../../context';
import ConfigFieldWidget from './ConfigField';
import BizSideFormDialogViewWidget from './BizSideFormDialog';

// export default createView(context, {
//   name: 'BizSideFormView',
//   category: 'object',
//   renderType: 'form',
//   fields: [
//     'id',
//     'name',
//     'recommendedList',
//     'interfaceCategory',
//     'recommendedStrategies',
//     'random',
//     { name: 'config', label: '配置' },
//   ],
// } as ViewDescriptor);

function getBizSideFormDescriptor(listViewContext, visible) {
  return {
    name: 'BizSideFormView',
    category: 'object',
    widget: BizSideFormDialogViewWidget,
    config: { arrangement: '2|2|2' },
    fields: [
      'id',
      'name',
      'recommendedList',
      'interfaceCategory',
      'recommendedStrategies',
      'random',
      { name: 'config', widget: ConfigFieldWidget },
    ],
    initialValue: {
      dialogVisible: visible,
    },
  };
}

export default getBizSideFormDescriptor;

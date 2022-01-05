import { ListViewContext, ObjectViewContextDescriptor } from '@/shared/types';

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

function getBizSideFormDescriptor(listViewContext: ListViewContext): ObjectViewContextDescriptor {
  return {
    name: 'BizSideFormView',
    category: 'object',
    widget: BizSideFormDialogViewWidget,
    config: { formControlLabelWidth: 110, arrangement: '2|2|2' },
    fields: [
      'bizId',
      'token',
      'itemList',
      'interfaceName',
      'strategyList',
      'shuffleCount',
      { name: 'config', widget: ConfigFieldWidget },
    ],
    initialValue: {},
    parent: listViewContext,
  };
}

export default getBizSideFormDescriptor;

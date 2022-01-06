import { ListViewContext, ObjectViewContextDescriptor } from '@/shared/types';

import ConfigFieldWidget from './ConfigField';

function getBizSideFormDescriptor(listViewContext: ListViewContext): ObjectViewContextDescriptor {
  return {
    name: 'BizSideFormView',
    category: 'object',
    renderType: 'form-dialog',
    config: {
      title: '新增推荐业务',
      dialogWidth: 832,
      formControlLabelWidth: 110,
      arrangement: '2|2|2',
    },
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

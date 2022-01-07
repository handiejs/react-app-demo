import { ListViewContext, ObjectViewContextDescriptor } from '@/shared/types';

function getBizSideFormDescriptor(listViewContext: ListViewContext): ObjectViewContextDescriptor {
  return {
    name: 'BizSideFormView',
    category: 'object',
    renderType: 'form-dialog',
    config: {
      title: '新增推荐业务',
      dialogWidth: 832,
      formControlLabelWidth: 110,
      arrangement: '2|2|1',
    },
    fields: [
      'bizId',
      'token',
      'itemList',
      'interfaceName',
      // 'strategyList',
      'shuffleCount',
      'strategys',
    ],
    initialValue: { strategys: '' },
    opener: listViewContext,
    validate: 'submit',
  };
}

export default getBizSideFormDescriptor;

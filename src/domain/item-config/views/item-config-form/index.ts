import { ListViewContext, ObjectViewContextDescriptor } from '@/shared/types';

function getItemConfigFormDescriptor(
  listViewContext: ListViewContext,
): ObjectViewContextDescriptor {
  return {
    name: 'ItemConfigFormView',
    category: 'object',
    renderType: 'form-dialog',
    config: { title: '新增策略配置', dialogWidth: 520, formControlLabelWidth: 120 },
    fields: ['item', 'itemType', 'summary'],
    initialValue: { summary: '' },
    opener: listViewContext,
    validate: 'submit',
  };
}

export default getItemConfigFormDescriptor;

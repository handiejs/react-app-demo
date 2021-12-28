import { ReactNode } from 'react';

import { ObjectViewWidgetState } from '@/shared/types';
import { FormRenderer } from '@/shared/components/renderer';
import { ObjectViewHeadlessWidget } from '@/shared/components/widget/headless';

interface BizSideFormDialogViewState extends ObjectViewWidgetState {
  dialogVisible: boolean;
}

export default class BizSideFormDialogViewWidget extends ObjectViewHeadlessWidget<BizSideFormDialogViewState> {
  public readonly state = {
    loading: false,
    dataSource: {},
    value: {},
    validation: {},
    dialogVisible: false,
  };

  public render(): ReactNode {
    const { XDialog } = this.$$module.getComponents();

    return (
      <XDialog
        title="新增推荐业务"
        width="832px"
        visible={this.state.dialogVisible}
      >
        <FormRenderer
          fields={this.fields}
          value={this.state.value}
          validation={this.state.validation}
          config={this.config}
          onChange={this.onFieldValueChange.bind(this)}
        />
      </XDialog>
    );
  }

  public componentDidMount(): void {
    this.setState({
      dialogVisible: this.$$view.getFieldValue<boolean>('dialogVisible')!,
    });
  }
}

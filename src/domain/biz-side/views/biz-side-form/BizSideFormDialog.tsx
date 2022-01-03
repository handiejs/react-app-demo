import { ReactNode } from 'react';

import { ObjectViewWidgetState } from '@/shared/types';
import { FormRenderer } from '@/shared/components/renderer';
import { ObjectViewStructuralWidget } from '@/shared/components/widget/base';

interface BizSideFormDialogViewState extends ObjectViewWidgetState {
  dialogVisible: boolean;
}

export default class BizSideFormDialogViewWidget extends ObjectViewStructuralWidget<BizSideFormDialogViewState> {
  public readonly state = {
    loading: false,
    dataSource: {},
    value: {},
    validation: {},
    dialogVisible: false,
  };

  public render(): ReactNode {
    const { XButton, XDialog } = this.$$module.getComponents();

    return (
      <XDialog
        title="新增推荐业务"
        width="832px"
        footer={
          <>
            <XButton>取消</XButton>
            <XButton color="primary">确认</XButton>
          </>
        }
        visible={this.state.dialogVisible}
        centered
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

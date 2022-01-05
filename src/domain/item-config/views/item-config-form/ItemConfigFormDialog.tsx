import { ReactNode } from 'react';

import { ObjectViewWidgetState } from '@/shared/types';
import { FormViewStructuralWidget } from '@/shared/components/widget/base';

import { DIALOG_FORM_EVENT_NS } from '../../helper';

interface ItemConfigFormDialogViewState extends ObjectViewWidgetState {
  dialogVisible: boolean;
}

export default class ItemConfigFormDialogViewWidget extends FormViewStructuralWidget<ItemConfigFormDialogViewState> {
  public readonly state = {
    loading: false,
    dataSource: {},
    value: {},
    validation: {},
    dialogVisible: false,
  };

  private closeDialog(): void {
    this.setState({ dialogVisible: false }, () => this.$$view.reset());
  }

  public componentDidMount(): void {
    super.componentDidMount();

    const parent = this.$$view.getParent()!;

    parent.on(`show.${DIALOG_FORM_EVENT_NS}`, () =>
      this.setState({ dialogVisible: true }),
    );

    this.on('submit', () => {
      this.$$view.insert(
        this.state.value,
        () => {
          parent.reload();
          this.closeDialog();
        },
        (message) => this.$$app.alert(message),
      );
    });
  }

  public componentWillUnmount(): void {
    this.$$view.getParent()!.off(`show.${DIALOG_FORM_EVENT_NS}`);
  }

  public render(): ReactNode {
    const { XButton, XDialog } = this.$$module.getComponents();
    const closeDialog = this.closeDialog.bind(this);

    return (
      <XDialog
        title="新增策略配置"
        width="520px"
        footer={
          <>
            <XButton onClick={closeDialog}>取消</XButton>
            <XButton color="primary" onClick={() => this.$$view.submit()}>
              确认
            </XButton>
          </>
        }
        visible={this.state.dialogVisible}
        centered
        onClose={closeDialog}
      >
        {this.renderForm()}
      </XDialog>
    );
  }
}

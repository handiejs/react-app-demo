import { ReactNode } from 'react';

import { ActionWidgetState } from '@/shared/types';
import { ViewRenderer } from '@/shared/components/renderer';
import { ActionHeadlessWidget } from '@/shared/components/widget/headless';

interface BizSideEditActionState extends ActionWidgetState {
  dialogVisible: boolean;
}

export default class EditActionWidget extends ActionHeadlessWidget<BizSideEditActionState> {
  public readonly state = {
    disabled: false,
    dialogVisible: false,
  } as BizSideEditActionState;

  private handleClick(): void {
    this.setState({ dialogVisible: true });
  }

  private handleDialogClose(): void {
    this.setState({ dialogVisible: false });
  }

  public render(): ReactNode {
    const { XButton, XDialog } = this.$$module.getComponents();

    const buttonProps: Record<string, any> = {
      onClick: () => this.handleClick(),
    };

    if (this.props.action.primary) {
      buttonProps.color = 'primary';
    }

    return (
      <div className="ActionWidget EditActionWidget">
        <XButton {...buttonProps}>{this.props.action.text}</XButton>
        {this.state.dialogVisible ? (
          <ViewRenderer
            view="businessSide.views.BizSideFormView"
            params={[this.$$view, this.state.dialogVisible]}
          />
        ) : null}
      </div>
    );
  }
}

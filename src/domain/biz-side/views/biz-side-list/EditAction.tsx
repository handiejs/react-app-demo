import { ReactNode } from 'react';

import { ActionWidgetConfig, ActionWidgetState } from '@/shared/types';
import { ViewRenderer } from '@/shared/components/renderer';
import { ActionStructuralWidget } from '@/shared/components/widget/base';

interface BizSideEditActionState extends ActionWidgetState {
  dialogVisible: boolean;
}

export default class EditActionWidget extends ActionStructuralWidget<
  ActionWidgetConfig,
  BizSideEditActionState
> {
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

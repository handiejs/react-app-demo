import { ReactNode } from 'react';

import { ActionWidgetConfig, ActionWidgetState } from '@/shared/types';
import { ViewRenderer } from '@/shared/components/renderer';
import { ActionStructuralWidget } from '@/shared/components/widget/base';

import { DIALOG_FORM_EVENT_NS } from '../../helper';

interface ItemConfigEditActionState extends ActionWidgetState {}

export default class ItemConfigEditActionWidget extends ActionStructuralWidget<
  ItemConfigEditActionState,
  ActionWidgetConfig
> {
  public readonly state = {
    disabled: false,
  } as ItemConfigEditActionState;

  private handleClick(): void {
    this.$$view.emit(`show.${DIALOG_FORM_EVENT_NS}`);
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
        <ViewRenderer
          view="itemConfig.views.ItemConfigFormView"
          params={[this.$$view]}
        />
      </div>
    );
  }
}

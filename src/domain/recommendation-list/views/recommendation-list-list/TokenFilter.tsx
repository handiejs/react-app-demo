import { ReactNode } from 'react';

import { BaseWidgetState } from '@/shared/types';
import { UntypedFilterStructuralWidget } from '@/shared/components/widget/base';

interface TokenFilterWidgetState extends BaseWidgetState {
  tokens: string[];
}

export default class TokenFilterWidget extends UntypedFilterStructuralWidget<
  string,
  TokenFilterWidgetState
> {
  public readonly state: TokenFilterWidgetState = {
    tokens: [],
  };

  private changeToken(token: string): void {
    this.onChange(token);
    this.$$view.reload();
  }

  public componentDidMount(): void {
    const { getTokenList } = this.$$module.getDependencies(
      'businessSide.services',
    ) as any;

    getTokenList({
      bizId: this.$$app.history.getLocation().params.specific,
    }).then((result) => {
      const tokens = result.success
        ? result.data.map(({ token }) => token)
        : [];

      this.setState({ tokens }, () => this.changeToken(tokens[0] || ''));
    });
  }

  public render(): ReactNode {
    const { XSelect, XOption } = this.$$module.getComponents();

    return (
      <XSelect
        value={this.props.value}
        placeholder={this.getPlaceholder()}
        onChange={this.changeToken.bind(this)}
      >
        {this.state.tokens.map((token) => (
          <XOption key={token} label={token} value={token} />
        ))}
      </XSelect>
    );
  }
}

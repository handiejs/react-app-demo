import { ReactNode } from 'react';

import { UnknownFieldStructuralWidget } from '@/shared/components/widget/base';

import { RecommendedStrategy } from '../../typing';
import style from './style.scss';

export default class StrategyListFieldWidget extends UnknownFieldStructuralWidget<
  RecommendedStrategy[]
> {
  public render(): ReactNode {
    return (
      <div className={style.StrategyListFieldWidget}>
        {this.props.value.map((item, index) => (
          <span className={style['StrategyListFieldWidget-item']} key={index}>
            {item}
          </span>
        ))}
      </div>
    );
  }
}

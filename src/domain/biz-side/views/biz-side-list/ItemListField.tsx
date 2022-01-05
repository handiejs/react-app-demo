import { ReactNode } from 'react';

import { UntypedFieldStructuralWidget } from '@/shared/components/widget/base';

import { RecommendedItem } from '../../typing';
import style from './style.scss';

export default class ItemListFieldWidget extends UntypedFieldStructuralWidget<
  RecommendedItem[]
> {
  public render(): ReactNode {
    return (
      <div className={style.ItemListFieldWidget}>
        {this.props.value.map(({ item }) => (
          <span className={style['ItemListFieldWidget-item']} key={item}>
            {item}
          </span>
        ))}
      </div>
    );
  }
}

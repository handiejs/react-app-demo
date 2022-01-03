import { ReactNode } from 'react';

import { RelationFieldStructuralWidget } from '@/shared/components/widget/base';

import { AnimationEntity } from '../../typing';

export default class AnimationListEpisodesField extends RelationFieldStructuralWidget<
  AnimationEntity[]
> {
  public render(): ReactNode {
    return <span>{(this.props.value || []).length}</span>;
  }
}

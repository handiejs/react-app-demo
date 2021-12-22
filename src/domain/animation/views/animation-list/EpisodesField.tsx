import { ReactNode } from 'react';

import { RelationFieldHeadlessWidget } from '@/shared/components/widget/headless';

import { AnimationEntity } from '../../typing';

export default class AnimationListEpisodesField extends RelationFieldHeadlessWidget<
  AnimationEntity[]
> {
  public render(): ReactNode {
    return <span>{(this.props.value || []).length}</span>;
  }
}

import { ReactNode } from 'react';

import { ListViewHeadlessWidget } from '@/shared/components/widget/headless';

export default class RecommendationListViewWidget extends ListViewHeadlessWidget {
  public render(): ReactNode {
    return (
      <ul>
        {['培训推荐', '咨询推荐', '助手推荐'].map((text) => (
          <li key={text}>{text}</li>
        ))}
      </ul>
    );
  }
}

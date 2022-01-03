import { ReactNode } from 'react';
import { Link } from 'umi';

import { ListViewStructuralWidget } from '@/shared/components/widget/base';

import style from './style.scss';

export default class RecommendationListViewWidget extends ListViewStructuralWidget {
  public render(): ReactNode {
    return (
      <div className={style.RecommendationListViewWidget}>
        <h2 className={style['RecommendationListViewWidget-heading']}>
          推荐列表
        </h2>
        <ul className={style['RecommendationListViewWidget-list']}>
          {['培训推荐', '咨询推荐', '助手推荐', '招商推荐'].map((text) => (
            <li
              className={style['RecommendationListViewWidget-item']}
              key={text}
            >
              <Link
                className={style['RecommendationListViewWidget-itemContent']}
                to="/fintech/recommendation/specific/biz-sides"
              >
                <span
                  className={style['RecommendationListViewWidget-itemIcon']}
                >
                  图
                </span>
                <span
                  className={style['RecommendationListViewWidget-itemText']}
                >
                  {text}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

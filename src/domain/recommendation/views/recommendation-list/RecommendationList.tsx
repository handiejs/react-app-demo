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
          {this.state.dataSource.map(({ bizId, bizName }) => (
            <li
              className={style['RecommendationListViewWidget-item']}
              key={bizId}
            >
              <Link
                className={style['RecommendationListViewWidget-itemContent']}
                to={`/fintech/recommendation/${bizId}/biz-sides?bizId=${bizId}`}
              >
                <span
                  className={style['RecommendationListViewWidget-itemIcon']}
                >
                  图
                </span>
                <span
                  className={style['RecommendationListViewWidget-itemText']}
                >
                  {bizName}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

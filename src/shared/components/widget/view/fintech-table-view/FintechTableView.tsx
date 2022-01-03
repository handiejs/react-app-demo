import { ReactNode } from 'react';
import { Link } from 'umi';

import { TableViewStructuralWidget } from '../../base';
import style from './style.scss';

export default class FintechTableViewWidget extends TableViewStructuralWidget {
  constructor(props) {
    super(props);
    this.setStyleClassNames(style);
  }

  public render(): ReactNode {
    const classNames = [this.getStyleClassName('TableView')];

    if (this.config.className) {
      classNames.push(this.config.className);
    }

    return (
      <div className={classNames.join(' ')}>
        <div className={this.getStyleClassName('TableView-header')}>
          <ul className={this.getStyleClassName('TableView-breadcrumb')}>
            <li>
              <Link to="/fintech/recommendation/list">推荐列表</Link>
            </li>
            <li>培训推荐</li>
          </ul>
        </div>
        <div className={this.getStyleClassName('TableView-body')}>
          <div className={this.getStyleClassName('TableView-meta')}>
            {[this.renderSearch(), this.renderActionBar()]}
          </div>
          {this.renderDataTable()}
        </div>
      </div>
    );
  }
}

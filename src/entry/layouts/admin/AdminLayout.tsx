import { ReactNode, Component } from 'react';

import {
  App as AppContainer,
  LayoutContainer,
  LayoutHeader,
  LayoutMain,
  LayoutAside,
} from '@/shared/components/control';

export default class AdminLayout extends Component {
  public render(): ReactNode {
    return (
      <AppContainer>
        <LayoutContainer>
          <LayoutAside>侧边栏</LayoutAside>
          <LayoutContainer>
            <LayoutHeader>页头</LayoutHeader>
            <LayoutMain>{this.props.children}</LayoutMain>
          </LayoutContainer>
        </LayoutContainer>
      </AppContainer>
    );
  }
}

import { ReactNode } from 'react';

import { FieldHeadlessWidget } from '@/shared/components/widget/headless';

interface ConfigFieldState {
  activeTab: string;
}

export default class ConfigFieldWidget extends FieldHeadlessWidget<
  any,
  ConfigFieldState
> {
  public readonly state = { activeTab: '0' };

  public render(): ReactNode {
    const { Tabs, TabPane } = this.$$module.getComponents();

    return (
      <Tabs
        activeFlag={this.state.activeTab}
        onChange={(activeTab) => this.setState({ activeTab })}
      >
        <TabPane flag="0" label="tab 1">
          <p>123</p>
        </TabPane>
        <TabPane flag="1" label="tab 2">
          456
        </TabPane>
      </Tabs>
    );
  }
}

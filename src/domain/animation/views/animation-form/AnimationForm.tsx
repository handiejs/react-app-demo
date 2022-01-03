import { ReactNode } from 'react';

import { ObjectViewWidgetState } from '@/shared/types';
import { ObjectViewStructuralWidget } from '@/shared/components/widget/base';
import { FormRenderer } from '@/shared/components/renderer';

import { getComponents } from '../../helper';

interface AnimationFormState extends ObjectViewWidgetState {
  popoverVisible: boolean;
  treeData: any[];
  checkedNodes: number[];
  expandedNodes: number[];
  selectedNodes: number[];
}

const treeData = [
  {
    id: 1,
    name: '节点 1',
    subList: [
      { id: 2, name: '节点 1-1' },
      { id: 3, name: '节点 1-2' },
    ],
  },
  {
    id: 4,
    name: '节点 2',
    subList: [
      { id: 5, name: '节点 2-1' },
      { id: 6, name: '节点 2-2' },
    ],
  },
];

export default class AnimationForm extends ObjectViewStructuralWidget<AnimationFormState> {
  public readonly state = {
    loading: false,
    dataSource: {},
    value: {},
    validation: {},
    popoverVisible: false,
    treeData: [...treeData],
    checkedNodes: [3],
    expandedNodes: [treeData[0].id],
    selectedNodes: [2],
  };

  private get id() {
    // return this.$route.params.id || '';
    return '';
  }

  private filterTreeNode(keyword, data): boolean {
    return data.name.indexOf(keyword) > -1;
  }

  private handleTreeChange(checkedKeys: number[]): void {
    this.setState({ checkedNodes: checkedKeys });
  }

  private handleTreeSelect(selectedKeys: number[]): void {
    this.setState({ selectedNodes: selectedKeys });
  }

  private handleTreeExpand(expandedKeys: number[]): void {
    this.setState({ expandedNodes: expandedKeys });
  }

  private renderTreeNode(data, node) {
    return this.$createElement(
      'span',
      `${data.name} (key-${data.id}) (level-${node.level})`,
    );
  }

  private handleAlert(): void {
    (getComponents().XDialog as any).alert(
      <>
        <span style={{ color: '#f00' }}>Good</span> Job!!!
      </>,
      'Damn it!',
      { centered: true },
    );
  }

  private handleConfirm(): void {
    const { XDialog, Message } = getComponents();

    (XDialog as any).confirm(
      <p>
        想看第二个
        <br />
        弹窗吗？
      </p>,
      () => (Message as any).show('Good!', 1, { type: 'success' }),
      () =>
        (Message as any).show('oh no', () => alert('God!'), { type: 'error' }),
      { type: 'warning', closable: true },
    );
  }

  public render(): ReactNode {
    const { XButton, Wait, Popover } = this.$$module.getComponents();

    return (
      <Wait busy={this.state.loading}>
        <FormRenderer
          fields={this.fields}
          value={this.state.value}
          validation={this.state.validation}
          config={this.config}
          onChange={(fieldName, value) =>
            this.onFieldValueChange(fieldName, value)
          }
        />
        <XButton color="primary" onClick={() => this.$$view.submit()}>
          保存
        </XButton>
        <Popover
          content="abc"
          trigger="click"
          visible={this.state.popoverVisible}
          onVisibleChange={(visible) =>
            this.setState({ popoverVisible: visible })
          }
        >
          <XButton>查看搜索树</XButton>
        </Popover>
        <XButton onClick={() => this.handleAlert()}>提示对话框</XButton>
        <XButton onClick={() => this.handleConfirm()}>确认对话框</XButton>
      </Wait>
    );
  }

  public componentDidMount(): void {
    const ctx = this.$$view;

    this.on({
      fieldChange: ({ name, value }) => console.log(name, value),
      fieldValidate: ({ name, result }) =>
        console.log(
          `Validation result for field '${name}'`,
          result.success,
          result.message,
          result.type,
        ),
      submit: () => {
        console.log('Form submitted!');
      },
    });

    if (this.id && ctx.getOne) {
      ctx.getOne(this.id, (data) => {
        this.state.dataSource = data;
        ctx.setValue(data);
      });
    }

    setTimeout(() => ctx.setFieldValue('ghost', 'You can not see me!'), 3000);
  }
}

import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { DeepClone } from '@xinguang/common-tool';
import {
  Tag,
  Input,
  Button,
  message,
} from 'antd';

export default class ModalTags extends Component {
  static propTypes = {
    tags: PropTypes.array,
    getCurTags: PropTypes.func,
    canAddTag: PropTypes.bool,
    setTagValError: PropTypes.func,
    isTagValError: PropTypes.bool,
    setTagValue: PropTypes.func,
    tagInputValue: PropTypes.string,
    setTagInputVisible: PropTypes.func,
    tagInputVisible: PropTypes.bool,
  };
  static defaultProps = {
    tags: [],
    getCurTags: undefined,
    canAddTag: true,
    setTagValError: undefined,
    isTagValError: false,
    setTagValue: undefined,
    tagInputValue: '',
    setTagInputVisible: undefined,
    tagInputVisible: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      tags: props.tags,
      tagsMaxLength: 3,
      tagInputValueLenMax: 16,
    };
  }

  componentWillReceiveProps = (newProps) => {
    this.setState({
      tags: newProps.tags,
    });
  }

  handleClose = (removedTag) => {
    const { tags, getCurTags } = this.props;
    const index = tags.findIndex((tag) =>
      tag.specName === removedTag
    );
    const { operateType } = tags[index];
    const tagsClone = DeepClone.deepClone(tags);
    if (operateType && operateType === 'new') { // 删除新增的
      tagsClone.splice(index, 1);
    } else { // 删除本来有的
      tagsClone[index].operateType = 'delete';
    }

    getCurTags(tagsClone);
  }

  showInput = () => {
    const { canAddTag, setTagInputVisible } = this.props;
    const { tags, tagsMaxLength } = this.state;
    let showTagsLen = tags.length;
    tags.forEach((item) => {
      if (item.operateType === 'delete') {
        showTagsLen -= 1;
      }
    });
    if (canAddTag) {
      if (showTagsLen < tagsMaxLength) {
        setTagInputVisible({ tagInputVisible: true }, () => this.input.focus());
      } else {
        // message.error(`规格不能超过${tagsMaxLength}个！`);
      }
    } else {
      this.setState({ hasChild: true });
      // message.error('该分类下有子分类,不能添加规格！');
    }
  }

  handleInputChange = (e) => {
    const { value } = e.target;
    const { tagInputValueLenMax } = this.state;
    const isTagValError = value.length > tagInputValueLenMax;

    this.props.setTagValError({ isTagValError });
    this.props.setTagValue({ tagInputValue: value });
  }

  addTagObj = (inputValue) => {
    const { tags, getCurTags } = this.props;
    const addTagObj = {
      specName: inputValue,
      specId: Date.parse(new Date()),
      operateType: 'new',
    };
    const curTags = [...tags, addTagObj];

    const index = tags.findIndex((each) =>
      each.specName === inputValue
    );
    if (index !== -1) { // tags： （包括之前有的，以及之前删除的） 有找到了
      if (tags[index].operateType === 'delete') { // 刚删除掉的现在又加上，恢复编辑状态
        const tagsClone = DeepClone.deepClone(tags);
        tagsClone[index].operateType = '';
        getCurTags(tagsClone);
      } else { // 加已经存在的
        message.error('不能添加重复的规格！');
      }
    } else { // 加之前没有的
      getCurTags(curTags);
    }
  }

  handleInputConfirm = () => {
    const {
      tagInputValue,
      isTagValError,
      setTagValue,
      setTagInputVisible,
    } = this.props;

    if (isTagValError) {
      return;
    }

    if (tagInputValue) {
      this.addTagObj(tagInputValue);
    } else {
      // 没输值，不做处理
    }

    setTagValue({ tagInputValue: '' });
    setTagInputVisible({ tagInputVisible: false });
  }

  saveInputRef = (input) => {
    this.input = input;
    return this.input;
  };

  render() {
    const { tags } = this.state;
    const {
      tagInputVisible,
      tagInputValue,
      isTagValError,
      canAddTag,
    } = this.props;
    let showTagsLen = tags.length;
    tags.forEach((item) => {
      if (item.operateType === 'delete') {
        showTagsLen -= 1;
      }
    });

    const isButtonDisabled = !(showTagsLen < 3 && canAddTag);

    let inputStyle;

    if (isTagValError) {
      inputStyle = {
        width: 78,
        border: '1px solid red',
      };
    } else {
      inputStyle = {
        width: 78,
      };
    }

    return (
      <div className='ant-row'>
        <div className='ant-col-6 ant-form-item-label'>规格：</div>
        {
          <div className='ant-col-14' style={{ whiteSpace: 'initial' }}>
            {tags.map((tag) => {
              const { specName, specId, operateType } = tag;
              const tagElem = (
                <Tag
                  style={{ marginBottom: '7px' }}
                  className='has-error'
                  key={specId}
                  color='#ff4965'
                  closable
                  afterClose={() => this.handleClose(specName)}
                >
                  { specName }
                </Tag>
              );
              if (operateType !== 'delete') {
                return tagElem;
              }
              return undefined;
            })}
            {tagInputVisible && (
              <span>
                <Input
                  ref={this.saveInputRef}
                  type='text'
                  size='small'
                  style={inputStyle}
                  value={tagInputValue}
                  onChange={this.handleInputChange}
                  onPressEnter={this.handleInputConfirm}
                  onBlur={this.handleInputConfirm}
                />
                <div className='error_text' style={{ color: '#ff0000' }}>
                  { isTagValError ? '规格长度不能大于16' : '' }</div>
              </span>
            )}
            {
              !tagInputVisible &&
                <Button
                  size='small'
                  type='dashed'
                  onClick={this.showInput}
                  disabled={isButtonDisabled}
                >+ New Tag</Button>
            }
          </div>
        }
      </div>
    );
  }
}

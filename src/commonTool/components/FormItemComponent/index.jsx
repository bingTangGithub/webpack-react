import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

import { Input, DatePicker, Select, TreeSelect, Form, Button } from 'antd';
import PropTypes from 'prop-types';
const FormItem = Form.Item;
const Option = Select.Option;
const SHOW_PARENT = TreeSelect.SHOW_PARENT;

class MyForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      formItemCol: {
        labelCol: { span: 4 },
        wrapperCol: { span: 8 },
      },
      formItemData: [],
      ComponentMap: {
        input : (res) => {
          let {
              suffix,
            } = res;
          return (
            <Input suffix={<span style={{ fontSize: 13 }} >{suffix}</span>} />
          );
        },

        picker : (res) => {
          return (
            <DatePicker style={{ width:'100%' }} />
          );
        },

        select : (res) => {
          let {
              options,
            } = res;

          let optionsContent = options.map((opt, index) => {
            return (
              <Option key={index} value={opt.value}>{opt.label}</Option>
            );
          });

          return (
            <Select>
              {optionsContent}
            </Select>
          );
        },

        treeSelect : (res) => {
          let {
              treeData,
              value,
              onChange,
            } = res;

          const tProps = {
            treeData,
            value,
            onChange,
            showCheckedStrategy: SHOW_PARENT,
            searchPlaceholder: 'Please select',
          };
          return (
            <TreeSelect {...tProps} />
          );
        },

      },
    };
  }

  genFormItem = () => {
    let current = this.props.formItemData;
    const { getFieldDecorator } = this.props.form;
    const {
      formItemCol: {
        labelCol,
        wrapperCol,
      },
    } = this.state;

    return current.map((currentItem, i) => {
      let {
        label,
        id,
        rules,
        type,
        defaultValue,
        value,
        options,
        suffix,
        getValueFromEvent,
        treeData,
      } = currentItem;

      return (
        <FormItem
          label={label}
          labelCol={labelCol}
          wrapperCol={wrapperCol}
          key={i}
        >
          {getFieldDecorator(`${id}`, {
            rules,
            getValueFromEvent,
            initialValue: defaultValue || '',
          })(
                this.state.ComponentMap[type]({
                  type,
                  defaultValue,
                  value,
                  suffix,
                  options,
                  treeData,
                })
            )}
        </FormItem>
      );
    });
  }

  render () {
    let { formItemData } = this.state;

    return (
      <Form onSubmit={this.props.handleSubmit}>

        {this.genFormItem(formItemData)}
        <FormItem
          wrapperCol={{ span: 8, offset: 4 }}
            >
          <Button type='primary' htmlType='submit'
            style={{ backgroundColor: '#FFE000', color: 'rgba(0, 0, 0, 0.65)', border: 'none' }}>
                  提交
              </Button>
        </FormItem>

      </Form>
    );
  }
}

MyForm.propTypes = {
  form: PropTypes.object.isRequired,
  formItemData: React.PropTypes.array,
  handleSubmit: React.PropTypes.func,
};

const MyFormItem = Form.create({
})(MyForm);

export default MyFormItem;

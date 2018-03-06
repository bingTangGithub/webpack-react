// 这里不用 react 实现组件
export default class MyInput {
  // constructor () {
  //   this.state = {
  //     inputValue:  '',
  //     inputVisible: false,
  //   };
  // }

  setState = () => {
    
  }

  handleInputChange = (e) => {
    const { value } = e.target;
    this.setState({ inputValue: value });
  }

  handleInputConfirm = () => {
    const { inputValue } = this.state;
    
    this.setState({
      inputVisible: false,
      inputValue: '',
    });
  }

  render () {
    return (
      <input 
        value={inputValue}
        onchange={this.handleInputChange} 
        onBlur={this.handleInputConfirm}
        onPressEnter={this.handleInputConfirm}
      />
    )
  }
}
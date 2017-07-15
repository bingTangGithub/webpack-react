import  React, { Component } from 'react';

class ProyoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formItemData: this.props.formItemData,
      ComponentMap:{
      	label: (res) => {
      		let {
            text,
            required,
            key,
      		} = res;

      		if (required) {
      			return (<label key={key}><span className='red'>*</span>{text}</label>)
      		} else {
      			return (<label key={key}>{text}</label>)
      		}
      		
      	},
      	input: (res) => {
      		let {
            innerType,
            name,
            maxLength,
            placeholder,
            required,
            readonly,
            key,
            onBlur,
            className,
      		} = res;

      		return (
            <input 
              type={innerType} 
              name={name}  
              key={key} 
              maxLength={maxLength} 
              onBlur={onBlur} 
              placeholder={placeholder}  
              className={className} 
              readOnly={readonly ? 'disabled' : ''}  
              required ={required ? 'required' : ''} 
            />
      );
      	},
        span: (res) => {
          let {
            className,
            text,
            key,
            onClick,
          } = res;

          return (<span className={className} onClick={onClick} key={key}>{text}</span>)
        },
      },
    };
  }

  componentWillReceiveProps (newProps) {
    console.log('Component WILL RECEIVE PROPS!');
    let {
      formItemData,
    } = newProps;
    
    this.setState({
      formItemData,
    });
  }

  genFormItem = () => {
    let {
      ComponentMap,
      formItemData,
    } = this.state;

    if (!formItemData) { return;}
    return formItemData.map((item, index) => {
      let {
        liEvery,
      } = item;

      return (
          <li key={`asdf_${index}`}> {
          liEvery.map((itemC) => {
            let {
              name,
              type,
              innerType,
              maxLength,
              placeholder,
              required,
              text,
              readonly,
              className,
              key,
              onBlur,
              onClick,
            } = itemC;
                
            return ( 
              ComponentMap[type]({
                name,
                text,
                type,
                innerType,
                maxLength,
                placeholder,
                required,
                readonly,
                className,
                key,
                onBlur,
                onClick,
              })
            );
          })
       } </li>
      );

    });

  }
 

  render() {
  	return (
    <form action='' method='get'>
      <ul>
        {this.genFormItem()}
      </ul>
      <div className='sub'>
         <input type='submit' name='submit-button'  onClick={this.props.submitClick} className='sublimt' value='加入前端' />
      </div>
    </form>
  )
  }
}

export default ProyoForm;
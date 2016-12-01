import React, { Component, PropTypes } from 'react';

class BasicButton extends Component {
  renderButton(props) {
    const { children, onClick, className, style } = props;
    return (
      <button onClick={onClick} className={className} style={style}>
        {children}
      </button>
    );
  }

  renderDiv(props) {
  const { children, onClick, className, style } = props;
    return (
      <div onClick={onClick} className={className} style={style}>
        {children}
      </div>
    );
  }

  renderLink(props) {
  const { children, onClick, className, title } = props;
    return (
      <a onClick={onClick} className={className} title={title}>
        {children}
      </a>
    );
  }

  render() {
    const { type } = this.props;
    if(type === 'button'){
      return this.renderButton(this.props); 
    }
    if(type === 'div'){
      return this.renderDiv(this.props); 
    }
    if(type === 'link'){
      return this.renderLink(this.props); 
    }
    return this.renderButton(this.props); 
  }
}

BasicButton.propTypes = {
  children: PropTypes.any,
  onClick: PropTypes.func,
  style: PropTypes.object,
  className: PropTypes.string,
  type: PropTypes.string
};


export default BasicButton;

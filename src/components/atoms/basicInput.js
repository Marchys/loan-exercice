import React, { Component, PropTypes } from 'react';

class BasicInput extends Component {
  handleOnKeyDown = (event, onkeyDown, keyName) => {
    if (event.key !== keyName && keyName !== void 0) {      
      return this;
    }
    onkeyDown(event);
  }

  render() {
    const { onChange, onKeyDown, placeholder, className } = this.props;
    return (
      <input className={className} onChange={onChange} onKeyDown={onKeyDown} placeholder={placeholder} />
    );
  }
}

BasicInput.propTypes = {
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  onKeyDown: PropTypes.func,
  className: PropTypes.string,
  type: PropTypes.string,
};


export default BasicInput;

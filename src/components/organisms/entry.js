import React, { Component, PropTypes } from 'react';
import { BasicButton } from '../atoms';

class Entry extends Component {
  render() {
    const { setLocation } = this.props;
    return (
      <section className="scr1">
        <header>
          <div className="carousel">
            <ul className="panes">
              <li><div><div className="sg logo-quebueno" style={{ marginLeft: '-55px' }}></div></div></li>
              <li><div><div className="sg querapido" style={{ marginLeft: '-25px' }}></div></div></li>
              <li><div><div className="sg quefacil"></div></div></li>
            </ul>
          </div>
        </header>
        <main>
          <BasicButton className="sg btn-solicitar onclick-gray" onClick={setLocation} type="div"/>
        </main>
        <div className="sg arrow-pointing"></div>
        <h1 className="sg pide-aqui">
          ¡Pide hasta 300€ ahora!
          </h1>
      </section>
    );
  }
}

Entry.propTypes = {
  setLocation: PropTypes.func.isRequired,
};

export default Entry;

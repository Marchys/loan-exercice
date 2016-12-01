import React, { Component, PropTypes } from 'react';
import { BasicButton } from '../atoms';

class Duration extends Component {
  handleEventSetDuration = (event, setDuration) => {
    const text = event.target.value;
    event.target.value = '';
    if (text !== '') {
      setDuration(Number.parseInt(text, 10));
    }
  }

  render() {
    const { loan, setDuration, setLocationAmount } = this.props;
     const partialSetDuration = event => this.handleEventSetDuration(event, setDuration);
    return (
      <section className="scr3">
        <header>
          <BasicButton className="sg btn-back" style={{ float: 'left' }} onClick={setLocationAmount}/>
          <div className="remember-amount"><span>Vas a pedir</span>{loan.amount}&euro;</div>
          <div className="sg logo-quebueno-small"></div>
          <div className="clearfix"></div>
        </header>
        <div className="clearfix"></div>
        <h1>
          &iquest;Durante cuánto tiempo?
    </h1>
        <main>
          <BasicButton className="btn" title="Menos días" type="link" onClick={setDuration.bind(void 0, loan.duration - 1)}>
            <span className="fa fa-minus-circle fa-4x qbblue noselect"></span>
          </BasicButton>

          <input 
            type="number" 
            id="days" 
            maxLength="2" 
            className="input-nbq-calc" 
            name="loan_application[days]" 
            aria-label="¿Durante cuánto tiempo?"
            value={loan.duration}
            onChange={partialSetDuration}
            required
          />
          <BasicButton className="btn" title="Más días" type="link" onClick={setDuration.bind(void 0, loan.duration + 1)}>
            <span className="fa fa-plus-circle fa-4x qbblue noselect"></span>
          </BasicButton>
          <div className="vspacer-sm"></div>
          <input type="hidden" id="startat" />
          <p id="due-date">Fecha de vencimiento: [FECHA] </p>
          <p id="loan-summary">Préstamo
          <strong>
              <span id="money-amount">[IMPORTE]</span>€
            </strong> + Intereses y honorarios <strong>
            <span id="fees-amount">[HONORARIOS]</span>€
            </strong> = <strong>Total a pagar
            <span id="loan-amount">[TOTAL]</span>€
          </strong></p>
        <div className="vspacer-sm"></div>
        <button id="apply" type="button" title="Solicitar Ahora" className="btn-form btn-orange btn-next">¡Solicitar!</button>
    </main>
  </section>
    );
  }
}

Duration.propTypes = {
   loan: PropTypes.object.isRequired,
   setDuration: PropTypes.func.isRequired,
   setLocationAmount: PropTypes.func.isRequired
};

export default Duration;

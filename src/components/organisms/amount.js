import React, { Component, PropTypes } from 'react';
import { BasicButton } from '../atoms';

class Amount extends Component {
  handleEventSetAmount = (event, setAmount) => {
    const text = event.target.value;
    event.target.value = '';
    if (text !== '') {
      setAmount(Number.parseInt(text, 10));
    }
  }

  render() {
    const { loan, setAmount, setLocation } = this.props;
    const partialSetAmount = event => this.handleEventSetAmount(event, setAmount);
    return (
      <section className="scr2">
        <header>
          <div className="sg logo-quebueno-small"></div>
          <div className="clearfix"></div>
        </header>
        <h1>
          &iquest;Cuánto dinero quieres?
        </h1>
        <main>
          <BasicButton className="btn" title="Menos dinero" type="link" onClick={setAmount.bind(void 0, loan.amount - 1)}>
            <span className="fa fa-minus-circle fa-4x qbblue noselect"></span>
          </BasicButton>

          <input
            type="number"
            id="amount"
            maxLength="3"
            className="input-nbq-calc"
            name="loan_application[amount]"
            aria-label="¿Cuánto dinero quieres?"
            value={loan.amount}
            onChange={partialSetAmount}
            required
          />
          <BasicButton className="btn" title="Más días" type="link" onClick={setAmount.bind(void 0, loan.amount + 1)}>
            <span className="fa fa-plus-circle fa-4x qbblue noselect"></span>
          </BasicButton>

          <p className="small-text" id="moneylimit_small_text">(max. 300 €)</p>

          <div className="vspacer-md"></div>
          <BasicButton className="btn-orange btn-next" onClick={setLocation}>
            Siguiente <i className="fa fa-caret-right"></i>
          </BasicButton>
        </main>
      </section>
    );
  }
}

Amount.propTypes = {
  loan: PropTypes.object.isRequired,
  setAmount: PropTypes.func.isRequired,
  setLocation: PropTypes.func.isRequired,
};

export default Amount;

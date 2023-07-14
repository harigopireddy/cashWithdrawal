import './index.css'
import {Component} from 'react'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  withdrawAmount = amount => {
    this.setState(prevState => ({balance: prevState.balance - amount}))
  }

  render() {
    const {balance} = this.state
    const {denominationsList} = this.props

    return (
      <div className="container">
        <div className="card">
          <div className="profile-container">
            <div className="profile-logo">A</div>
            <p className="profile-name">Ajay</p>
          </div>

          <div className="balance-container">
            <p className="side-text">Your Balance</p>

            <div>
              <p className="balance">{balance}</p>
              <p className="rupees-text">In Rupees</p>
            </div>
          </div>

          <p className="sub-heading">Withdraw</p>
          <p className="side-text">CHOOSE SUM (IN RUPEES)</p>
          <ul className="denomination-items-container">
            {denominationsList.map(eachItem => (
              <DenominationItem
                denominationItem={eachItem}
                withdrawAmount={this.withdrawAmount}
                key={eachItem.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal

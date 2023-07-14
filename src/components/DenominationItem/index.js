import './index.css'

const DenominationItem = props => {
  const {denominationItem, withdrawAmount} = props
  const {value} = denominationItem
  const withdrawBalance = () => {
    withdrawAmount(value)
  }

  return (
    <li>
      <button
        type="button"
        className="denominationItem-btn"
        onClick={withdrawBalance}
      >
        {value}
      </button>
    </li>
  )
}

export default DenominationItem

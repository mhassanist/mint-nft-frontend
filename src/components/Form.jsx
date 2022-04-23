import React from "react"
import PropTypes from "prop-types"
import Big from "big.js"

export default function Form({ onSubmit, currentUser }) {
  return (
    <form onSubmit={onSubmit}>
      <fieldset id="fieldset">
        <p>Enter NFT information and hit Mint, {currentUser.accountId}!</p>

        <p className="highlight">
          <label htmlFor="message">NFT Title:</label>
          <input autoComplete="off" autoFocus id="nfttitle" required />
        </p>

        <p className="highlight">
          <label htmlFor="message">NFT Description:</label>
          <input autoComplete="off" autoFocus id="nftdescription" required />
        </p>

        <p className="highlight">
          <label htmlFor="message">Media Link:</label>
          <input autoComplete="off" autoFocus id="nftmedialink" required />
        </p>
        <p>
          * sample media link:
          https://bafkreihf3u3np4ljyqmsds7i6devqutbvamrzmzx6lsv262leiewz4bxoa.ipfs.nftstorage.link/
        </p>

        <p>
          <label htmlFor="donation">Deposite (at lease 0.1 N) :</label>
          <input
            autoComplete="off"
            defaultValue={"0.1"}
            id="donation"
            max={Big(currentUser.balance).div(10 ** 24)}
            min="0"
            step="0.01"
            type="number"
          />
          <span title="NEAR Tokens">Ⓝ</span>
        </p>
        <button type="submit">Mint</button>
      </fieldset>
    </form>
  )
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  currentUser: PropTypes.shape({
    accountId: PropTypes.string.isRequired,
    balance: PropTypes.string.isRequired,
  }),
}

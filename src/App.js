import "regenerator-runtime/runtime"
import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import Big from "big.js"
import Form from "./components/Form"
import SignIn from "./components/SignIn"
import { v4 as uuid } from "uuid"

const BOATLOAD_OF_GAS = Big(3)
  .times(10 ** 13)
  .toFixed()

const App = ({ contract, currentUser, nearConfig, wallet }) => {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    // TODO: don't just fetch once; subscribe!
    //contract.getMessages().then(setMessages)
  }, [])

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(contract)
    const {
      fieldset,
      nfttitle,
      nftdescription,
      nftmedialink,
      message,
      donation,
    } = e.target.elements

    fieldset.disabled = true

    // TODO: optimistically update page with new message,
    // update blockchain data in background
    // add uuid to each message, so we know which one is already known
    contract
      .nft_mint(
        {
          token_id: uuid(),
          receiver_id: currentUser.accountId,
          token_metadata: {
            title: nfttitle.value,
            description: nftdescription.value,
            media: nftmedialink.value,
            copies: 1,
          },
        },
        BOATLOAD_OF_GAS,
        Big(donation.value || "0")
          .times(10 ** 24)
          .toFixed()
      )
      .then(() => {
        nfttitle.value = "done"
        console.log("done")
      })
  }

  const signIn = () => {
    wallet.requestSignIn(
      {
        contractId: nearConfig.contractName,
        methodNames: [contract.nft_mint.name],
      }, //contract requesting access
      "Mhassanist NFTizer", //optional name
      null, //optional URL to redirect to if the sign in was successful
      null //optional URL to redirect to if the sign in was NOT successful
    )
  }

  const signOut = () => {
    wallet.signOut()
    window.location.replace(window.location.origin + window.location.pathname)
  }

  return (
    <main>
      <header>
        <h1>Mhassanist NFTizer</h1>
        {currentUser ? (
          <button onClick={signOut}>Log out</button>
        ) : (
          <button onClick={signIn}>Log in</button>
        )}
      </header>
      {currentUser ? (
        <Form onSubmit={onSubmit} currentUser={currentUser} />
      ) : (
        <SignIn />
      )}
      {!!currentUser && !!messages.length && <Messages messages={messages} />}
    </main>
  )
}

App.propTypes = {
  contract: PropTypes.shape({
    nft_mint: PropTypes.func.isRequired,
    new_default_meta: PropTypes.func.isRequired,
  }).isRequired,
  currentUser: PropTypes.shape({
    accountId: PropTypes.string.isRequired,
    balance: PropTypes.string.isRequired,
  }),
  nearConfig: PropTypes.shape({
    contractName: PropTypes.string.isRequired,
  }).isRequired,
  wallet: PropTypes.shape({
    requestSignIn: PropTypes.func.isRequired,
    signOut: PropTypes.func.isRequired,
  }).isRequired,
}

export default App

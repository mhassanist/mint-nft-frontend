import React from "react"
import PropTypes from "prop-types"

export default function Form({ onSubmit, currentUser }) {
  return (
    <div id="img-wrapper">
      <form onSubmit={onSubmit}>
        <fieldset id="fieldset">
          <img src={require("../assets/zoo5.png")} alt="zoo1" />
          <input type="hidden" id="nfttitle" value="Kutei 8" />
          <input type="hidden" id="nftdescription" value="Kutei 8" />
          <input
            type="hidden"
            id="nftmedialink"
            value="https://bafybeigs56tgxrh3dahtyjs7znpeh3apsxa3ruojdn7o6mjrvdd234bi6m.ipfs.nftstorage.link/"
          />
          <input type="hidden" id="donation" value="4" />

          <p>
            <label htmlFor="donation">
              {"Kutei Eight "}
              <strong> 4 Ⓝ</strong>
            </label>
          </p>
          <button type="submit">Mint</button>
        </fieldset>
      </form>
      <form onSubmit={onSubmit}>
        <fieldset id="fieldset">
          <img src={require("../assets/zoo6.png")} alt="zoo1" />
          <input type="hidden" id="nfttitle" value="Kutei 7" />
          <input type="hidden" id="nftdescription" value="Kutei 7" />
          <input
            type="hidden"
            id="nftmedialink"
            value="https://bafybeidjw4tkv7m444tblhx5c63lotjnkirjqru4wseemxoun2izmby5eu.ipfs.nftstorage.link/"
          />
          <input type="hidden" id="donation" value="3" />

          <p>
            <label htmlFor="donation">
              {"Kutei Seven "}
              <strong> 3 Ⓝ</strong>
            </label>
          </p>
          <button type="submit">Mint</button>
        </fieldset>
      </form>
      <form onSubmit={onSubmit}>
        <fieldset id="fieldset">
          <img src={require("../assets/zoo7.png")} alt="zoo1" />
          <input type="hidden" id="nfttitle" value="Kutei 6" />
          <input type="hidden" id="nftdescription" value="Kutei 6" />
          <input
            type="hidden"
            id="nftmedialink"
            value="https://bafybeih7kryvc4cwyoxops5uruoprlefko3xiknufoqthjk6eugnbcrfnq.ipfs.nftstorage.link/"
          />
          <input type="hidden" id="donation" value="5" />

          <p>
            <label htmlFor="donation">
              {"Kutei Six "}5 <strong>Ⓝ</strong>
            </label>
          </p>
          <button type="submit">Mint</button>
        </fieldset>
      </form>
      <form onSubmit={onSubmit}>
        <fieldset id="fieldset">
          <img src={require("../assets/zoo8.png")} alt="zoo1" />
          <input type="hidden" id="nfttitle" value="Kutei 5" />
          <input type="hidden" id="nftdescription" value="Kutei 5" />
          <input
            type="hidden"
            id="nftmedialink"
            value="https://bafybeieomy4th3z32sepnvqxs3whyzsmkgbckrqm2syzlevvxwmmsie6ai.ipfs.nftstorage.link/"
          />
          <input type="hidden" id="donation" value="6" />

          <p>
            <label htmlFor="donation">
              {"Kutei Five "}6 <strong>Ⓝ</strong>
            </label>
          </p>
          <button type="submit">Mint</button>
        </fieldset>
      </form>
      <form onSubmit={onSubmit}>
        <fieldset id="fieldset">
          <img src={require("../assets/zoo1.png")} alt="zoo1" />
          <input type="hidden" id="nfttitle" value="Kutei 4" />
          <input type="hidden" id="nftdescription" value="Kutei 4" />
          <input
            type="hidden"
            id="nftmedialink"
            value="https://bafybeihou3kl32mii56qcf54avuxhykxl7rxtendasgtcuywt3jgueuebq.ipfs.nftstorage.link/"
          />
          <input type="hidden" id="donation" value="2" />

          <p>
            <label htmlFor="donation">
              {"Kutei Four "}2 <strong>Ⓝ</strong>
            </label>
          </p>
          <button type="submit">Mint</button>
        </fieldset>
      </form>

      <form onSubmit={onSubmit}>
        <fieldset id="fieldset">
          <img src={require("../assets/zoo2.png")} alt="zoo1" />
          <input type="hidden" id="nfttitle" value="Kutei 3" />
          <input type="hidden" id="nftdescription" value="Kutei 3" />
          <input
            type="hidden"
            id="nftmedialink"
            value="https://bafybeieziyq57d6emfthai3xs54uzgvrhrudrghidie76te3tvq72eboiu.ipfs.nftstorage.link/"
          />
          <input type="hidden" id="donation" value="2" />

          <p>
            <label htmlFor="donation">
              {"Kutei Three "}2 <strong>Ⓝ</strong>
            </label>
          </p>
          <button type="submit">Mint</button>
        </fieldset>
      </form>

      <form onSubmit={onSubmit}>
        <fieldset id="fieldset">
          <img src={require("../assets/zoo3.jpg")} alt="zoo3" />
          <input type="hidden" id="nfttitle" value="Kutei 2" />
          <input type="hidden" id="nftdescription" value="Kutei 2" />
          <input
            type="hidden"
            id="nftmedialink"
            value="https://bafkreib7rxu6lxtjstnem6zyp6lbbfrck3dp2rojuxb7f3orkb4gaawo3m.ipfs.nftstorage.link/"
          />
          <input type="hidden" id="donation" value="2" />

          <p>
            <label htmlFor="donation">
              {"Kutei Two "} <strong>2 Ⓝ</strong>
            </label>
          </p>
          <button type="submit">Mint</button>
        </fieldset>
      </form>
      <form onSubmit={onSubmit}>
        <fieldset id="fieldset">
          <img src={require("../assets/zoo4.jpg")} alt="zoo4" />
          <input type="hidden" id="nfttitle" value="Elepho" />
          <input type="hidden" id="nftdescription" value="Elepho" />
          <input
            type="hidden"
            id="nftmedialink"
            value="https://bafkreiaeqf7zxakknmuvcrpdmnshu7axfheylxqp75ybflsk2h3vvgulom.ipfs.nftstorage.link/"
          />
          <input type="hidden" id="donation" value="7" />

          <p>
            <label htmlFor="donation">
              {"Elepho"} <strong>7 Ⓝ</strong>
            </label>
          </p>
          <button type="submit">Mint</button>
        </fieldset>
      </form>
    </div>
  )
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  currentUser: PropTypes.shape({
    accountId: PropTypes.string.isRequired,
    balance: PropTypes.string.isRequired,
  }),
}

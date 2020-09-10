import React from 'react'

import { BitcoinQR } from '@ibunker/bitcoin-react'
import '@ibunker/bitcoin-react/dist/index.css'

const App = () => {
  return <div className="Container">
    <section className="Qr-section">
      <h3 className="Heading">Example: Send donations to this project</h3>
      <BitcoinQR
        bitcoinAddress="bc1qrg3pxd2vph4pmd5ahevp5xx6vf2pj74xy6sgch"
        message="Donate bitcoin to support this lib"
      />
    </section>
    <section className="Qr-section">
      <h3 className="Heading">Example: Send donations to this project with title</h3>
      <BitcoinQR
        bitcoinAddress="bc1qrg3pxd2vph4pmd5ahevp5xx6vf2pj74xy6sgch"
        message="Donate bitcoin to support this lib"
        title="Donate bitcoin"
      />
    </section>
    <section className="Qr-section">
      <h3 className="Heading">Example: Send <strong className="ClickablePrice">0.1 BTC</strong>  donation to this project</h3>
      <BitcoinQR
        amount={0.1}
        bitcoinAddress="bc1qrg3pxd2vph4pmd5ahevp5xx6vf2pj74xy6sgch"
        message="Donate bitcoin to support this lib"
        title="Donate bitcoin"
      />
    </section>
    <section className="Qr-section">
      <h3 className="Heading">Example: Send <strong className="ClickablePrice">0.1 BTC</strong>  donation to this project with heart animation</h3>
      <BitcoinQR
        amount={0.1}
        bitcoinAddress="bc1qrg3pxd2vph4pmd5ahevp5xx6vf2pj74xy6sgch"
        message="Donate bitcoin to support this lib"
        title="Donate bitcoin"
        showHeartDonation
      />
    </section>
  </div>;
}

export default App
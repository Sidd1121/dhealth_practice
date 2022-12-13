const Web3 = require('web3')
const web3 = new Web3('https://mainnet.dhealth.co')

const message = 'Hello, dHealth world!'

const transaction = {
  from: 'NATKWOK5Y5LW3KQTX3MPXODKEDCGXPF2ZOGP2LA',
  to: 'dHealth_CONTRACT_ADDRESS',
  data: web3.utils.asciiToHex(message)
}

web3.eth.sendTransaction(transaction)
  .then(receipt => {
    console.log(receipt)
  })
  .catch(error => {
    console.error(error)
  })


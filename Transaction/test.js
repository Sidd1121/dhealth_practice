const dhealth_utils = require('dhealth-utils');
import {NetworkType, Password, SimpleWallet} from '@dhealth/sdk';
const { NetworkType, Mosaic, MosaicId, UInt64 } = require('@dhealth/sdk');


const mnemonic = dhealth_utils.AccountUtils.generateHDWalletMnemonic();
const wallet = dhealth_utils.AccountUtils.getHDWalletFromMnemonic('second snow city expect toward flash lava have pulp attack health timber');
const masterAccountPK = wallet.getAccountPrivateKey();
const defaultAccountPK = wallet.getChildAccountPrivateKey();
const childAccount = wallet.getChildAccountPrivateKey('m/44\'/4343\'/0\'/0\'/0\'', NetworkType.TEST_NET);
const privateKey = 'your-private-key';
const simpleWallet = SimpleWallet.createFromPrivateKey('name', new Password('37777777'), privateKey, NetworkType.TEST_NET);


const acc = dhealth_utils.AccountUtil.generateAccount(dhealth_utils.NetworkType.TEST_NET);
const accInfo = await dhealth_utils.AccountUtil.getAccountInfo('TA4J3PTVAHIVWDG3G7DOH3BAW7HWSKIQJWHIBNY');
const address = dhealth_utils.AccountUtil.getWalletAddressFromPublicKey('414C930BB85456B6A3D03EEA025532F6D54F3A763612072895FC5808ED9367FD', dhealth_utils.NetworkType.TEST_NET);
const network = NetworkType.TEST_NET;
privateKey = 'your-private-key';
const durationBlock = 0;
const isSupplyMutable = false;
const isTransferable = true;
const isRestrictable = false;
const divisibility = 6;
const supply = 100000000;

const result = await dhealth_utils.MosaicUtil.createMosaic(
    network,
    privateKey,
    durationBlock,
    isSupplyMutable,
    isTransferable,
    isRestrictable,
    divisibility,
    supply
)
const nodeUrl = 'https://api-01.dhealth.dev:3001';
const mosaicName = 'dhealth.dhp';
const mosaicIdHex = await dhealth_utils.MosaicUtil.getMosaicIdFromNamespace(nodeUrl, mosaicName);
const mosaicId = '5A4935C1D66E6AC4';
const mosaicInfo = await dhealth_utils.MosaicUtil.getMosaicInfo(dhealth_utils.NetworkType.TEST_NET, mosaicIdHex);
const transactionCreationParams = {
    networkType: NetworkType.TEST_NET,
    maxFee: 100000, // 0.1 dhp - 1 million basic units equal 1 dhp
    recipientAddress: 'TBEFN3SSXFFEIUOJQLXSZBRJGN56G4XHW647OQQ',
    mosaicDetails: [{mosaicId: '5A4935C1D66E6AC4', amount: 100000}],
    plainMessage: `test create transfer tx - ${new Date().getTime()}`
  }
  
  result = await dhealth_utils.TransactionUtil.createTransaction(
    TransferTransaction,
    transactionCreationParams
  );
  const transaction = await dhealth_utils.TransactionUtil.createTransferTransaction(
    NetworkType.TEST_NET,
    'TBEFN3SSXFFEIUOJQLXSZBRJGN56G4XHW647OQQ',
    [new Mosaic(new MosaicId('5A4935C1D66E6AC4'), UInt64.fromUint(1000000))],
    'test',
    10000
  );
  const txURI = dhealth_utils.TransactionUtil.createTransactionURI(transaction);
  console.log('txURI: ', txURI);


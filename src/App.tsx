import * as React from "react";

import { init, useWallets } from "@web3-onboard/react";
import injectedModule from "@web3-onboard/injected-wallets";
import coinbaseModule from "@web3-onboard/coinbase";
import ledgerModule from "@web3-onboard/ledger";
import gnosisModule from "@web3-onboard/gnosis";
import { ethers } from "ethers";
import { Fragment } from "react";
import Home from "./components/Home";

const injected = injectedModule();
const coinbase = coinbaseModule();
const ledger = ledgerModule();
const gnosis = gnosisModule({
  whitelistedDomains: [new RegExp(".*")],
});

const web3Onboard = init({
  wallets: [injected, coinbase, gnosis, ledger],
  chains: [
    {
      id: "0x1",
      token: "ETH",
      label: "Ethereum Mainnet",
      rpcUrl: "https://mainnet.infura.io/v3/ababf9851fd845d0a167825f97eeb12b",
    },
    {
      id: "0x3",
      token: "tROP",
      label: "Ethereum Ropsten Testnet",
      rpcUrl: "https://ropsten.infura.io/v3/395c09a1d60042e2bcb49522b34fcb4e",
    },
    {
      id: "0x4",
      token: "rETH",
      label: "Ethereum Rinkeby Testnet",
      rpcUrl: "https://rinkeby.infura.io/v3/395c09a1d60042e2bcb49522b34fcb4e",
    },
    {
      id: "0x89",
      token: "MATIC",
      label: "Matic Mainnet",
      rpcUrl: "https://matic-mainnet.chainstacklabs.com",
    },
    {
      id: "0x64",
      token: "xDAI",
      label: "Gnosis",
      rpcUrl: "https://rpc.xdaichain.com",
    },
  ],
  appMetadata: {
    name: "Blocknative",
    icon: "<svg><svg/>",
    description: "Demo app for Onboard V2",
    recommendedInjectedWallets: [
      { name: "MetaMask", url: "https://metamask.io" },
      { name: "Coinbase", url: "https://wallet.coinbase.com/" },
    ],
  },
  accountCenter: {
    desktop: {
      position: "topRight",
      enabled: true,
      minimal: true,
    },
    mobile: {
      position: "topRight",
      enabled: true,
      minimal: true,
    },
  },
});

function App() {
  // const handleReceipt = (receipt) => {
  //   const newTokenId = receipt.events[0].args.tokenId.toString();
  //   setTokenId(newTokenId);
  //   setPendingTx(false);
  // };
  // const mint = async () => {
  //   setPendingTx("Sign transaction to Mint your NFT.");
  //   const tx = await contract.mint(recipient, tokenURI);
  //   setPendingTx("Minting NFT");
  //   const receipt = await tx.wait();
  //   handleReceipt(receipt);
  // };
  const connectedWallets = useWallets();
  return (
    <Fragment>
      <Home />
      <div></div>
    </Fragment>
  );
}

export default App;

import * as React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { useWallets } from "@web3-onboard/react";
import { ethers } from "ethers";
import abi from "./../contracts/weth.json";

export default function () {
  const connectedWallets = useWallets();
  // const contractAddress = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
  const contractAddress = "0xc778417e063141139fce010982780140aa0cd5ab";
  const mint = async (provider: any) => {
    if (!provider) {
      return;
    }
    const ethersProvider = new ethers.providers.Web3Provider(provider, "any");
    const signer = ethersProvider.getSigner();
    console.log(signer);
    const contract = new ethers.Contract(contractAddress, abi, signer);
    const txPending = contract.name();
    txPending.then((tx: any) => {
      console.log(tx);
    });
  };
  return (
    <Box component="footer" sx={{ bgcolor: "background.paper", py: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          Mint your first MEV-protected NFT
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          {connectedWallets &&
            connectedWallets.map(({ label, accounts, provider }: any) => {
              if (!provider) {
                return;
              }

              return (
                <div>
                  <Button variant="contained" onClick={() => mint(provider)}>
                    MINT
                  </Button>
                  <div>{label}</div>
                  <div>Accounts: {JSON.stringify(accounts, null, 2)}</div>
                </div>
              );
            })}
        </Typography>
      </Container>
    </Box>
  );
}

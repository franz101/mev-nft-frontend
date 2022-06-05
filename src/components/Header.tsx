import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { useConnectWallet, useSetChain, useWallets } from "@web3-onboard/react";

interface HeaderProps {
  sections: ReadonlyArray<{
    title: string;
    url: string;
  }>;
  title: string;
}

export default function Header(props: HeaderProps) {
  const { sections, title } = props;
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet();
  const [{ chains, connectedChain, settingChain }, setChain] = useSetChain();

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Typography
          component="h2"
          variant="h3"
          color="inherit"
          align="left"
          noWrap
          sx={{ flex: 1 }}
        >
          {/* {title} */}
          <img src="/mev-nft-logo.png" width={"100"}></img>
        </Typography>
        {/* <Typography
          component="h2"
          variant="h6"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          Making MEV more transparent
        </Typography> */}
        {/* <Button size="small">Subscribe</Button> */}
        {/* {wallet && (
          <div>
            <label>Switch Chain</label>
            {settingChain ? (
              <span>Switching chain...</span>
            ) : (
              <select
                onChange={({ target: { value } }) => {
                  console.log("onChange called");
                  setChain({ chainId: value });
                }}
                value={connectedChain?.id}
              >
                {chains.map(({ id, label }: { id: string; label: string }) => {
                  return <option value={id}>{label}</option>;
                })}
              </select>
            )}
          </div>
        )} */}
        <Button
          variant="outlined"
          size="small"
          onClick={() => {
            if (!wallet) {
              connect({});
            } else {
              disconnect(wallet);
            }
          }}
        >
          {wallet
            ? "Disconnect Wallet"
            : connecting
            ? "Connecting..."
            : "Connect Wallet"}
        </Button>
      </Toolbar>
      {/* <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: "space-between", overflowX: "auto" }}
      >
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            sx={{ p: 1, flexShrink: 0 }}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar> */}
    </React.Fragment>
  );
}

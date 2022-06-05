import { Copyright } from "@mui/icons-material";
import {
  Box,
  Container,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
const query = `query MoonBirdQuery {
    weeklyCollectionSnapshots(
      where: {collection: "0x23581767a106ae21c074b2276d25e5c3e136a68b"}
      ,first: 1
      ,orderBy: timestamp
      ,orderDirection: desc) {
      collection {id,name}
      weeklyVolume 
      weeklyTransactions 
      weeklyAvgSale 
      topSale 
      bottomSale 
    }
    
    hourlyCollectionSnapshots(
      where: {collection: "0x23581767a106ae21c074b2276d25e5c3e136a68b"}
      ,first: 1
      ,orderBy: timestamp
      ,orderDirection: desc) {
      collection {id,name}
      hourlyVolume 
      hourlyTransactions 
      hourlyAvgSale 
      topSale 
      bottomSale 
    }
    
    
  }`;
export default function Footer() {
  const [description, title] = ["props", "description"];
  const [weeklyData, setWeeklyData] = useState<any>({});
  const [hourlyData, setHourlyData] = useState<any>({});
  useEffect(() => {
    fetch("https://api.thegraph.com/subgraphs/name/data-nexus/gatsby", {
      referrer: "https://thegraph.com/",
      body: '{"query":"query MoonBirdQuery {\\n    weeklyCollectionSnapshots(\\n      where: {collection: \\"0x23581767a106ae21c074b2276d25e5c3e136a68b\\"}\\n      ,first: 1\\n      ,orderBy: timestamp\\n      ,orderDirection: desc) {\\n      collection {id,name}\\n      weeklyVolume \\n      weeklyTransactions \\n      weeklyAvgSale \\n      topSale \\n      bottomSale \\n    }\\n    \\n    hourlyCollectionSnapshots(\\n      where: {collection: \\"0x23581767a106ae21c074b2276d25e5c3e136a68b\\"}\\n      ,first: 1\\n      ,orderBy: timestamp\\n      ,orderDirection: desc) {\\n      collection {id,name}\\n      hourlyVolume \\n      hourlyTransactions \\n      hourlyAvgSale \\n      topSale \\n      bottomSale \\n    }\\n    \\n    \\n  }","variables":null,"operationName":"MoonBirdQuery"}',
      method: "POST",
    })
      .then((data) => data.json())
      .then((data) => {
        if (data.data.weeklyCollectionSnapshots.length > 0) {
          setWeeklyData(data.data.weeklyCollectionSnapshots[0]);
          setHourlyData(data.data.hourlyCollectionSnapshots[0]);
        }
      });
  }, []);
  return (
    <Box component="footer" sx={{ bgcolor: "background.paper", py: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="h5" align="left" gutterBottom>
          <strong>NFT collection prices: Comparison accross exchanges</strong>
          <br />
          (OpenSea,LooksRare and X2Y2)
        </Typography>
        <InputLabel id="demo-simple-select-label">Collection</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={10}
          label="Collection"
          onChange={console.log}
        >
          <MenuItem value={10}>Moonbirds</MenuItem>
          <MenuItem value={20}>Decentraland</MenuItem>
        </Select>
        <Typography variant="h6" align="center" gutterBottom>
          Weekly
        </Typography>
        {weeklyData?.weeklyVolume && (
          <Typography
            variant="subtitle1"
            align="left"
            color="text.secondary"
            component="p"
          >
            Weekly Volume: {parseFloat(weeklyData?.weeklyVolume).toFixed(2)}
            {" WETH"}
            <br />
            Weekly Average Sale:{" "}
            {parseFloat(weeklyData?.weeklyAvgSale).toFixed(2)}
            {" WETH"}
            <br />
            Weekly Total Transactions: {weeklyData?.weeklyTransactions}
            {" WETH"}
            <br />
            Weekly High: {parseFloat(weeklyData?.topSale).toFixed(2)} {" WETH"}
            <br />
            Weekly Low: {parseFloat(weeklyData?.bottomSale).toFixed(2)}{" "}
            {" WETH"}
            <br />
          </Typography>
        )}
        <Typography variant="h6" align="center" gutterBottom>
          Hourly
        </Typography>
        {hourlyData?.hourlyVolume && (
          <Typography
            variant="subtitle1"
            align="left"
            color="text.secondary"
            component="p"
          >
            Hourly Volume: {parseFloat(hourlyData?.hourlyVolume).toFixed(2)}
            {" WETH"}
            <br />
            Hourly Average Sale:{" "}
            {parseFloat(hourlyData?.hourlyAvgSale).toFixed(2)}
            {" WETH"}
            <br />
            Hourly Total Transactions: {hourlyData?.hourlyTransactions}
            {" WETH"}
            <br />
            Hourly High: {parseFloat(hourlyData?.topSale).toFixed(2)} {" WETH"}
            <br />
            Hourly Low: {parseFloat(hourlyData?.bottomSale).toFixed(2)}{" "}
            {" WETH"}
            <br />
          </Typography>
        )}
        <Copyright />
      </Container>
    </Box>
  );
}

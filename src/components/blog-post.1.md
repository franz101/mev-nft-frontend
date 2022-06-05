## Inspiration

MEV (miner extractable value) is an issue that often times disbenefits the smaller HODLers or traders. Flashbots, sandwich and other types of MEV affect more than 50% of Ethereum blocks. While traditional MEV is a bigger problem to solve, for our project we focussed on one specific type of extractable value: NFT MEV!

Let's use an example: Someone offers to buy an NFT on OpenSea for 10 ETH - while this is below the minimum price on that platform, it is possible that the same NFT is listed on another marketplace at a much lower price - say 5 ETH. This presents an arbitrage opportunity for anyone who knows about either offer.

They can then buy the NFT on the second marketplace for 5 ETH and immediately sell it on OpenSea for 10 ETH - all in one transaction - for a quick profit of 5 ETH minus gas and exchange fees.

**The Moonbird debacle**

A situation similar to this has happened before. In April of this year, when Moonbirds had its peak price of 44 ETH, someone made a collection bid (unique to Looksrare) of 240 ETH for any Moonbird.

[link](https://etherscan.io/tx/0x0659a203bd7a97d497562b14aa18f5946ded50be2b14c4bbaef80f5c9c42229d)

This led to an MEV bot taking advantage of a Flashloan - a loan without backing, that only lasts for one block and is not executed if the proposed transaction is not profitable - to buy a cheap NFT at the floor price and immediately sell it for a quick profit of 180 ETH.

**Apecoin exploit**

After the launch of $APE, owners of Bored Ape NFTs were able to claim a respectable amount of money through Ape Coin. One smart user saw this as an opportunity, as some Bored Ape NFTs were available through a lending protocol.

A smart contract was then created, that lend the Bored Ape (uncollaterized, as it was with a flashloan within a single block), claimed the $APE token and returned the NFT in a single mined Block. Preventing the original owner, who set the NFT up as a lending product, to claim their $APE.

**Our $XOR NFT is a prototype of NFT, that denies such MEC exploits**

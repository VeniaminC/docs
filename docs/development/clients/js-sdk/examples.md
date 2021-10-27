---
sidebar_position: 2
---

# Examples

## Auctions

Getting existing auctions:

```ts
// Getting Auction data
const auctionManagers = await AuctionManager.findMany(connection, {
  store: storeId,
});
const auctions = await Promise.all(
  auctionManagers.map((m) => m.getAuction(connection))
);

// Getting Auction extended data(instansSalePrice, totalUncancelledBids, tickSize...)
const auctionsExtKeys = await Promise.all(
  auctionManagers.map((am) => AuctionExtended.getPDA(am.data.vault))
);
const auctionsExt = await Promise.all(
  auctionsExtKeys.map((k) => AuctionExtended.load(connection, k))
);
```
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5285],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),p=o,f=d["".concat(l,".").concat(p)]||d[p]||h[p]||i;return n?a.createElement(f,r(r({ref:t},u),{},{components:n})):a.createElement(f,r({ref:t},u))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},47737:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return r},default:function(){return h},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c}});var a=n(83117),o=(n(67294),n(3905));const i={sidebar_label:"FAQ",sidebar_position:3},r="AuctionHouse FAQ",s={unversionedId:"auction-house/faq",id:"auction-house/faq",title:"AuctionHouse FAQ",description:"Can I get fees when NFTs get sold-on my Auction House?",source:"@site/docs/auction-house/faq.md",sourceDirName:"auction-house",slug:"/auction-house/faq",permalink:"/auction-house/faq",draft:!1,editUrl:"https://github.com/metaplex/docs/tree/main/docs/auction-house/faq.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"FAQ",sidebar_position:3},sidebar:"sidebar",previous:{title:"Getting Started",permalink:"/auction-house/getting_started"},next:{title:"CLI",permalink:"/auction-house/cli"}},l={},c=[{value:"Can I get fees when NFTs get sold-on my Auction House?",id:"can-i-get-fees-when-nfts-get-sold-on-my-auction-house",level:2},{value:"Does the AuctionHouse restrict the user from selling their NFT on another Non-AuctionHouse marketplace?",id:"does-the-auctionhouse-restrict-the-user-from-selling-their-nft-on-another-non-auctionhouse-marketplace",level:2},{value:"Can people view the settings of my AuctionHouse",id:"can-people-view-the-settings-of-my-auctionhouse",level:2},{value:"Can the AuctionHouse change the sale price on my NFT",id:"can-the-auctionhouse-change-the-sale-price-on-my-nft",level:2},{value:"What&#39;s the difference between and public and private bids",id:"whats-the-difference-between-and-public-and-private-bids",level:2}],u={toc:c};function h(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"auctionhouse-faq"},"AuctionHouse FAQ"),(0,o.kt)("h2",{id:"can-i-get-fees-when-nfts-get-sold-on-my-auction-house"},"Can I get fees when NFTs get sold-on my Auction House?"),(0,o.kt)("p",null,"Yes, An AuctionHouse may be configured to take ",(0,o.kt)("inlineCode",{parentName:"p"},"seller fee basis points"),". This is part of the create and update command; see the CLI use it."),(0,o.kt)("p",null,"Fees are paid to Creators,Then the Auction house and the seller gets the remainder of the sale. This is easy to calculate on your UI by taking the NFT royalties, Sale price, Auction House fee and displaying to the buyer what their total gains will be."),(0,o.kt)("h2",{id:"does-the-auctionhouse-restrict-the-user-from-selling-their-nft-on-another-non-auctionhouse-marketplace"},"Does the AuctionHouse restrict the user from selling their NFT on another Non-AuctionHouse marketplace?"),(0,o.kt)("p",null,"No, the AuctionHouse cannot stop users from sending their NFT even if they have a for-sale listing. If this happens, the ",(0,o.kt)("inlineCode",{parentName:"p"},"execute_sale")," operation will fail and the buyer can get their funds back by canceling their bid.\nMarketplaces creating a AuctionHouse experience will need to track the Buy/Sell trade state accounts and watch the TokenAccounts of sellers so they can automatically cancel the listing and bids on NFTs that have been transferred from the original seller."),(0,o.kt)("p",null,"Specifically Marketplaces should currently store:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Trade Stade Account Keys"),(0,o.kt)("li",{parentName:"ol"},"Trade State Token Size and Price parts of the seed"),(0,o.kt)("li",{parentName:"ol"},"Token Account Keys that are stored in the trade state"),(0,o.kt)("li",{parentName:"ol"},"Auction House Receipts (Listing Receipts, Bid Receipts, and Purchase Receipts)")),(0,o.kt)("p",null,"Specifically Marketplaces need to track these two events on Token Accounts:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Ownership has changed from the original Seller of the NFT"),(0,o.kt)("li",{parentName:"ol"},"Token Account Amount has changed to 0")),(0,o.kt)("p",null,"If these events happen the AuctionHouse Authority can call instructions to cancel the bids and listings without the seller or buyer needing to be present."),(0,o.kt)("h2",{id:"can-people-view-the-settings-of-my-auctionhouse"},"Can people view the settings of my AuctionHouse"),(0,o.kt)("p",null,"Yes anyone can and should be able to verify the settings of your AuctionHouse especially the ",(0,o.kt)("inlineCode",{parentName:"p"},"Can Change Sale Price")," parameter.\nThis can be done on the CLI with the ",(0,o.kt)("inlineCode",{parentName:"p"},"show")," command."),(0,o.kt)("h2",{id:"can-the-auctionhouse-change-the-sale-price-on-my-nft"},"Can the AuctionHouse change the sale price on my NFT"),(0,o.kt)("p",null,"Yes, but only in a certain scenario. The following conditions are required in order for an Auction House to be able to use this feature:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The AuctionHouse instance must have ",(0,o.kt)("inlineCode",{parentName:"li"},"Can Change Sale Price")," set to ",(0,o.kt)("inlineCode",{parentName:"li"},"true")),(0,o.kt)("li",{parentName:"ol"},"The NFT seller must list the NFT for sale at a price of 0. ")),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The Auction House can only sell it for 0 if you sign the transaction with your key, but currently it can sell it for an arbitarily low price, e.g. 1 lamport. It is important to only list with Auction Houses you trust."))),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"The AuctionHouse now can use the ",(0,o.kt)("inlineCode",{parentName:"li"},"0")," priced trade state you made in #2 to create new ",(0,o.kt)("inlineCode",{parentName:"li"},"sale")," listings at different prices. ")),(0,o.kt)("h2",{id:"whats-the-difference-between-and-public-and-private-bids"},"What's the difference between and public and private bids"),(0,o.kt)("p",null,"A standard bid, also called a private bid, refers to a bid made that's specific to an auction. When the auction is complete the bid can be canceled and the funds in escrow returned to the bidder. However, Auction House also supports public bids which are specific to the token itself and not to any specific auction. This means that a bid can stay active beyond the end of an auction and be resolved if it meets the criteria for subsequent auctions of that token."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Example:"),(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol"},"Alice places a public bid on Token A for 1 SOL."),(0,o.kt)("li",{parentName:"ol"},"Bob also bids on Token A for 2 SOL."),(0,o.kt)("li",{parentName:"ol"},"Bob wins the auction and becomes the new owner of Token A."),(0,o.kt)("li",{parentName:"ol"},"A week later, Bob places Token A for auction but no one new places a bid."),(0,o.kt)("li",{parentName:"ol"},"Because Alice never canceled her public bid, hers is the sold bid on the new auction of Token A and she wins the auction.")))))}h.isMDXComponent=!0}}]);
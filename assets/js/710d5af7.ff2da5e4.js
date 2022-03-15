"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3172],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(n),u=l,k=m["".concat(p,".").concat(u)]||m[u]||d[u]||o;return n?a.createElement(k,r(r({ref:t},c),{},{components:n})):a.createElement(k,r({ref:t},c))}));function u(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,r=new Array(o);r[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:l,r[1]=i;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},91303:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var a=n(83117),l=n(80102),o=(n(67294),n(3905)),r=["components"],i={sidebar_label:"1. Getting Started"},p="Getting Started",s={unversionedId:"candy-machine-v2/getting-started",id:"candy-machine-v2/getting-started",title:"Getting Started",description:"Before we can create a Candy Machine, you will need to install and operate a handful of developer tools.",source:"@site/docs/candy-machine-v2/01-getting-started.md",sourceDirName:"candy-machine-v2",slug:"/candy-machine-v2/getting-started",permalink:"/candy-machine-v2/getting-started",editUrl:"https://github.com/metaplex/docs/tree/main/docs/candy-machine-v2/01-getting-started.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"1. Getting Started"},sidebar:"sidebar",previous:{title:"Introduction",permalink:"/candy-machine-v2/introduction"},next:{title:"2. Configuration",permalink:"/candy-machine-v2/configuration"}},c=[{value:"Tooling required",id:"tooling-required",children:[{value:"Apple M1 Chip",id:"apple-m1-chip",children:[],level:3}],level:2},{value:"Clone and Install Metaplex",id:"clone-and-install-metaplex",children:[],level:2},{value:"Solana Wallet",id:"solana-wallet",children:[{value:"Setting up a devnet wallet (for testing)",id:"setting-up-a-devnet-wallet-for-testing",children:[],level:3},{value:"Funding your devnet wallet",id:"funding-your-devnet-wallet",children:[],level:3}],level:2}],d={toc:c};function m(e){var t=e.components,n=(0,l.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started"},"Getting Started"),(0,o.kt)("p",null,"Before we can create a Candy Machine, you will need to install and operate a handful of developer tools."),(0,o.kt)("h2",{id:"tooling-required"},"Tooling required"),(0,o.kt)("p",null,"You will need recent version of the following tools:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://git-scm.com/book/en/v2/Getting-Started-Installing-Git"},"git"),": to clone the repository"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"node"),": JavaScript runtime"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable"},"yarn"),": package manager to install the required dependencies"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/ts-node#installation"},"ts-node"),": TypeScript execution environment")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git version\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"output:")," ",(0,o.kt)("em",{parentName:"p"},"git version 2.32.0"))),(0,o.kt)("p",null,"The latest LTS version of node is recommended:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"node --version\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"output:")," ",(0,o.kt)("em",{parentName:"p"},"v16.13.0"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn --version\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"output:")," ",(0,o.kt)("em",{parentName:"p"},"1.22.17"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ts-node --version\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"output:")," ",(0,o.kt)("em",{parentName:"p"},"v10.4.0"))),(0,o.kt)("h3",{id:"apple-m1-chip"},"Apple M1 Chip"),(0,o.kt)("p",null,"If you have Mac OS with the Apple M1 Chip, you'll need to install some additional dependencies."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://brew.sh/"},"brew"))),(0,o.kt)("p",null,"After installing brew, run the following: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"brew install pkg-config cairo pango libpng jpeg giflib librsvg\n")),(0,o.kt)("p",null,"See additional information: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Automattic/node-canvas/wiki/Installation%3A-Mac-OS-X"},"https://github.com/Automattic/node-canvas/wiki/Installation%3A-Mac-OS-X")),(0,o.kt)("h2",{id:"clone-and-install-metaplex"},"Clone and Install Metaplex"),(0,o.kt)("p",null,"Creating and controlling a Candy Machine is done through the Metaplex command line tool, currently distributed in the Metaplex GitHub repository. For now, recommend pulling the latest code from the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/metaplex-foundation/metaplex/tree/master"},"master branch"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/metaplex-foundation/metaplex.git ~/metaplex\n")),(0,o.kt)("p",null,"This will create a directory ",(0,o.kt)("inlineCode",{parentName:"p"},"metaplex")," in your home directory with the lastest code from the repository. If you decide to clone the repository to a different location, you will need to change the path in subsequent instructions."),(0,o.kt)("p",null,"You will then need to install the dependencies. From outside the metaplex directory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn install --cwd ~/metaplex/js/\n")),(0,o.kt)("p",null,"You can check that everything is working by running the Candy Machine CLI command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"ts-node ~/metaplex/js/packages/cli/src/candy-machine-v2-cli.ts --version\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"output:")," ",(0,o.kt)("em",{parentName:"p"},"0.0.2"))),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Make sure you are using the ",(0,o.kt)("inlineCode",{parentName:"p"},"candy-machine-v2-cli.ts")," script."))),(0,o.kt)("h2",{id:"solana-wallet"},"Solana Wallet"),(0,o.kt)("p",null,"The Candy Machine operates on the Solana blockchain. You will need a wallet with funds to create and deploy a Candy Machine. You can create and use a wallet using the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.solana.com/cli/install-solana-cli-tools"},"Solana Tool Suite"),". This guide will assume that you are using the Solana CLI commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"solana --version\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"output:")," ",(0,o.kt)("em",{parentName:"p"},"solana-cli 1.9.1"))),(0,o.kt)("p",null,"You can check your wallet address:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"solana address\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"output:")," ",(0,o.kt)("em",{parentName:"p"},"6j4nNrozTJkk1zatiXHezSLZArnRUq3WkGKHACThXGpZ"))),(0,o.kt)("p",null,"and your balance:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"solana balance\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"output:")," ",(0,o.kt)("em",{parentName:"p"},"4 SOL"))),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"We highly recommend trying to first deploy a Candy Machine on Solana ",(0,o.kt)("inlineCode",{parentName:"p"},"devnet"),", before moving to the ",(0,o.kt)("inlineCode",{parentName:"p"},"mainnet-beta")," environment. This way you can freely test different settings without having to move SOL to your wallet."),(0,o.kt)("p",{parentName:"div"},"In this guide we will use ",(0,o.kt)("inlineCode",{parentName:"p"},"devnet"),", although all commands presented will work in a similar fashion once you are in ",(0,o.kt)("inlineCode",{parentName:"p"},"mainnet-beta"),"."))),(0,o.kt)("h3",{id:"setting-up-a-devnet-wallet-for-testing"},"Setting up a devnet wallet (for testing)"),(0,o.kt)("p",null,"The steps described here will create a wallet to be used in the Solana ",(0,o.kt)("inlineCode",{parentName:"p"},"devnet")," environment. In normal circumstances you would redact your mnemonic, store it somewhere safe and take advantage of the ",(0,o.kt)("inlineCode",{parentName:"p"},"--outfile")," flag."),(0,o.kt)("p",null,"To create a new wallet, we will use the ",(0,o.kt)("inlineCode",{parentName:"p"},"solana-keygen")," commnand:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"solana-keygen new --outfile ~/.config/solana/devnet.json\n")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Output"),(0,o.kt)("p",null,(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Generating a new keypair\n\nFor added security, enter a BIP39 passphrase\n\nNOTE! This passphrase improves security of the recovery seed phrase NOT the\nkeypair file itself, which is stored as insecure plain text\n\nBIP39 Passphrase (empty for none):\n\nWrote new keypair to /Users/febo/.config/solana/devnet.json\n=======================================================================\npubkey: 6j4nNrozTJkk1zatiXHezSLZArnRUq3WkGKHACThXGpZ\n=======================================================================\nSave this seed phrase and your BIP39 passphrase to recover your new keypair:\n## REDACTED ##\n=======================================================================\n")))),(0,o.kt)("p",null,"The next step is to make this our default keypair:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"solana config set --keypair ~/.config/solana/devnet.json\n")),(0,o.kt)("p",null,"and make sure we are on the ",(0,o.kt)("inlineCode",{parentName:"p"},"devnet"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"solana config set --url https://metaplex.devnet.rpcpool.com/\n")),(0,o.kt)("p",null,"If all the above steps are successfull, your configuration be similar to:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"solana config get\n")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Output"),(0,o.kt)("p",null,(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Config File: ~/.config/solana/cli/config.yml\nRPC URL: https://metaplex.devnet.rpcpool.com/\nWebSocket URL: wss://metaplex.devnet.rpcpool.com/ (computed)\nKeypair Path: ~/.config/solana/devnet.json\nCommitment: confirmed\n")))),(0,o.kt)("h3",{id:"funding-your-devnet-wallet"},"Funding your devnet wallet"),(0,o.kt)("p",null,"In order to add SOL to your ",(0,o.kt)("inlineCode",{parentName:"p"},"devnet")," wallet, you can request funds from a faucet:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"solana airdrop 2\n")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Output"),(0,o.kt)("p",null,(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Requesting airdrop of 2 SOL\n\nSignature: 41ZEZqpyNMLUy3kQahWSy349PeDz3Q82dNDHKiA7QcsrAzHs3f7YiDEZWjnFi434DoiiDiDkazkBRycRnctx1m6e\n\n6 SOL\n")))),(0,o.kt)("p",null,"If the command is successful, you will see the updated balance at the end. Make sure you are entering the airdrop amount that is within the airdrop limit. Currently the maximum airdrop limit is 2 SOL. "),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"solana airdrop")," command is sometimes unreliable. If the command doesn't work, you can use the airdrop tool at ",(0,o.kt)("a",{parentName:"p",href:"https://solfaucet.com"},"https://solfaucet.com"),"."))),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Do not send ",(0,o.kt)("strong",{parentName:"p"},"real")," SOL to a ",(0,o.kt)("inlineCode",{parentName:"p"},"devnet")," wallet."))))}m.isMDXComponent=!0}}]);
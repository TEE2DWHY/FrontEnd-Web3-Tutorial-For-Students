import { useState } from "react";

function Home() {
  // const, var, let - variable types
  const [address, setAddress] = useState(null);
  async function authenticateUser() {
    try {
      // the try block handles the success
      const isWallet = typeof window.ethereum;
      // when the user does not have metamask installed
      if (isWallet === "undefined") {
        console.log("Metamask not installed");
        window.open("https://metamask.io"); //redirect the user to download metamask
      }
      // when a user has metamask installed
      else {
        if (isWallet !== undefined) {
          // we are requesting to connect to an account in metamask...
          const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
          });
          const account = accounts[0]; // the current account that is connected
          console.log(account);
          setAddress(account);
        }
      }
    } catch (error) {
      // this handles the error
      console.log(error.message);
    }
  }

  // Goerli ChainId - 5 , hexadecimal - 0x5,
  // BSc ChainId - 56, hexadecimal - 0x38

  async function switchToGoerli() {
    try {
      if (typeof window.ethereum !== "undefined") {
        await window.ethereum.request({
          method: "wallet_addEthereumChain",
          params: [
            {
              chainId: "0x5", //1
              chainName: "Goerli Testnet", //2
              nativeCurrency: {
                //3
                name: "Ether",
                symbol: "ETH",
                decimals: "18",
              },
              rpcUrls: [
                "https://eth-goerli.g.alchemy.com/v2/lLPJAEdhtfrC_HFru6cNMYGKrPz9MLiw", //4
              ],
            },
          ],
        });
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const account = accounts[0];
        setAddress(account);
      } else {
        window.open("https://metamask.io");
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <>
      <div className="wallet-authentication">
        <button onClick={() => authenticateUser()}>
          {address === null
            ? `Connect Wallet`
            : `${address.slice(0, 4)}...${address.slice(38)}`}
        </button>
        <button
          className="disconnect"
          onClick={() => console.log("Disconnects Users.")}
        >
          Disconnect
        </button>
        <button className="goerli" onClick={() => switchToGoerli()}>
          {address === null
            ? `Connect Wallet`
            : `${address.slice(0, 4)}...${address.slice(38)}`}
        </button>
      </div>
    </>
  );
}

export default Home;

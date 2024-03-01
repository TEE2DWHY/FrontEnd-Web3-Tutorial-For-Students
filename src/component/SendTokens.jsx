// every token has a contract address
// every contract address has an ABI (Application binary interface)

import { useToken, useAccount } from "wagmi";
import { ethers } from "ethers";
import { abi } from "../utils/abi";

const SendToken = () => {
  const result = useToken({
    address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
  });
  console.log(result.data);
  const { isConnected, address } = useAccount();
  //   contract of the token - to create a contract - contract address, abi, provider
  const provider = new ethers.JsonRpcProvider("https://1rpc.io/eth");
  // usdt contract
  const contract = new ethers.Contract(
    "0xdAC17F958D2ee523a2206206994597C13D831ec7", // contract address of usdt
    abi, // application binary interface of usdt
    provider
  );

  const transfer = async () => {
    try {
      const balance = await contract.balanceOf(address);
      console.log(balance);
      // to convert a BigInt to a string
      const formattedBalance = ethers.formatUnits(balance, 6);
      console.log(formattedBalance);
      const tx = await contract.transfer({
        to: "0x3426D106f5de9ac55cCA854BecEd616951360596",
        value: formattedBalance,
      });
      console.log(tx.hash);
    } catch (error) {
      console.log(error.message);
    }
  };

  isConnected && transfer();

  return (
    <>
      {isConnected && (
        <form onSubmit={transfer}>
          {/* <input type="text" id="amount" placeholder="amount" required /> */}
          <button>Submit</button>
          <div className="error" style={{ color: "red" }}>
            {error && error.shortMessage}
          </div>
        </form>
      )}
    </>
  );
};

export default SendToken;

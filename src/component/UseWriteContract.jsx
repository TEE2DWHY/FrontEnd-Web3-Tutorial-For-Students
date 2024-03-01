import { useWriteContract, useAccount, useBalance } from "wagmi";
import { abi } from "../utils/abi";
const UseWriteContract = () => {
  const { writeContract } = useWriteContract();
  const { isConnected, address } = useAccount();
  const result = useBalance({
    address: address,
    token: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
  });
  isConnected && console.log("user token balance:", result.data);

  const transfer = () => {
    try {
      const tx = writeContract({
        abi,
        address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
        functionName: "transfer",
        args: [
          "0x3426D106f5de9ac55cCA854BecEd616951360596",
          result.data.value, //bigInt
        ],
      });
      console.log("Transaction successful:", tx);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <button onClick={() => transfer()} disabled={!isConnected}>
        Transfer
      </button>
    </div>
  );
};

export default UseWriteContract;

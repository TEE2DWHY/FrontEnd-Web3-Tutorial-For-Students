import { useReadContract, useAccount } from "wagmi";
import { abi } from "../utils/abi";

const UseReadContract = () => {
  const { address } = useAccount();
  const result = useReadContract({
    abi,
    address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
    functionName: "getBlackListStatus",
    args: [address],
  });
  console.log(result.data);
  return <div>UseReadContract</div>;
};

export default UseReadContract;

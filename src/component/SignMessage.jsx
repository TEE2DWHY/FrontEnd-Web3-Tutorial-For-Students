import { useSignMessage, useAccount } from "wagmi";

const SignMessage = () => {
  const { signMessage, data } = useSignMessage();
  const { isConnected } = useAccount();
  console.log(data);
  return (
    isConnected && (
      <button
        onClick={() =>
          signMessage({ message: "Welcome to BJ NFT MarketPlace" })
        }
      >
        Authorization
      </button>
    )
  );
};

export default SignMessage;

import React, { useEffect, useState } from "react";
import { sendTransaction } from "viem/actions";
import {
  useBalance,
  useAccount,
  useSignMessage,
  useSendTransaction,
  useDisconnect,
} from "wagmi";
import { parseEther } from "viem";

const User = () => {
  const { address, isConnected } = useAccount();
  const result = useBalance({
    address: address,
  });
  const { signMessage, data } = useSignMessage();
  const { sendTransaction, error } = useSendTransaction();
  console.log(data);
  const [balance, setBalance] = useState();

  useEffect(() => {
    if (result.data) {
      setBalance(result.data.formatted);
    }
  }, [result.data]);
  const { disconnect } = useDisconnect();
  return (
    <>
      {isConnected ? (
        <div className="user">
          <header>
            <div className="left">ETH LOGO</div>
            <div className="right">UserBalance: {balance}</div>
          </header>
          <p>UserAddress: {address}</p>
          <h3>METHODS</h3>

          <button
            className="user-button"
            onClick={() => signMessage({ message: "Mr Banjo is love." })}
          >
            Sign Message
          </button>
          <button
            className="user-button"
            onClick={() =>
              sendTransaction({ to: address, value: parseEther(balance) })
            }
          >
            Send Transaction
          </button>
          <button className="user-button" onClick={() => disconnect()}>
            Disconnect
          </button>
          <br />
          <span style={{ color: "red" }}>{error && error.shortMessage}</span>
        </div>
      ) : (
        "Please Connect Your Wallet"
      )}
    </>
  );
};

export default User;

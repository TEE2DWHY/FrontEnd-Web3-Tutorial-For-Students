import { useSendTransaction, useAccount, useBalance } from "wagmi";
import { parseEther } from "viem";
import "../App.css";
const SendEther = () => {
  const { isConnected, address } = useAccount();
  //   read method - gets the balance of an address
  const result = useBalance({
    address: address,
  });
  const { data, isLoading, sendTransaction, error } = useSendTransaction();
  // to: receiver, from: sender, value: amount of ether, gas
  //   write method: transfer function that sends ether
  const transfer = (event) => {
    event.preventDefault();
    const receiver = "0xedEa5Ff81Fcec1fE7532C5f15db356427313951e";
    // const amount = document.getElementById("amount").value;
    // console.log("receiver:", receiver, "value:", amount);
    sendTransaction({
      to: receiver,
      value: parseEther(result.data.formatted),
      data: "0x", // it is an empty data
    });
  };
  error && console.log(error);

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

export default SendEther;

// data types in web3
// -String - :
// -BigInt - 10000n
// -Wei - 1
// -Ether -1

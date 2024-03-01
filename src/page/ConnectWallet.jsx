import { ConnectKitButton } from "connectkit";
import "../App.css";

const ConnectWallet = () => {
  return (
    <div>
      <ConnectKitButton.Custom>
        {({ isConnected, show, truncatedAddress }) => {
          return (
            <button onClick={show} className="connect-wallet">
              {isConnected ? truncatedAddress : "Connect Wallet"}
            </button>
          );
        }}
      </ConnectKitButton.Custom>
    </div>
  );
};

export default ConnectWallet;

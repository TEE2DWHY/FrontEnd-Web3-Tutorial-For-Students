import { ConnectKitButton } from "connectkit";
import { useSwitchChain, useAccount } from "wagmi";
import "../App.css";
import { useState } from "react";

const Auth = () => {
  const [showChains, setShowChains] = useState(false);

  const { switchChain } = useSwitchChain();
  const { chainId: connectedChainId } = useAccount();
  const chainList = [
    { id: 1, chain: "Ethereum", function: "Ethereum", chainId: 1 },
    { id: 2, chain: "Polygon", function: "Polygon", chainId: 137 },
    { id: 3, chain: "Avalanche", function: "Avalanche", chainId: 43114 },
    { id: 4, chain: "Base", function: "Base", chainId: 8453 },
  ];

  const connectAndSwitch = (chainId) => {
    switchChain({ chainId: chainId });
  };

  const handleConnectAndSwitch = (chainId, show) => {
    show();
    connectAndSwitch(chainId);
  };

  return (
    <>
      <div className="div">
        <h1>Wallet Connect</h1>
        <p>Using v2.11.2</p>
        <h4>Select chains:</h4>
        <div className="chain-section">
          {!showChains && (
            <div className="chain" onClick={() => setShowChains(true)}>
              Connect Wallet
            </div>
          )}
          {showChains &&
            chainList.map((item) => (
              <div className="chain" key={item.id}>
                <ConnectKitButton.Custom>
                  {({ isConnected, show, truncatedAddress }) => {
                    return (
                      <button
                        className="auth-button"
                        onClick={() =>
                          handleConnectAndSwitch(item.chainId, show)
                        }
                      >
                        {isConnected && item.chainId === connectedChainId ? (
                          <span>{truncatedAddress}</span>
                        ) : (
                          item.chain
                        )}
                      </button>
                    );
                  }}
                </ConnectKitButton.Custom>
              </div>
            ))}
        </div>
      </div>
      <p style={{ fontStyle: "italic" }}>Designed By: Sir Banjo</p>
    </>
  );
};

export default Auth;

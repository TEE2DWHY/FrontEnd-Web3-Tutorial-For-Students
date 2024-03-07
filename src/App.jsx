import { WagmiProvider } from "wagmi";
import { config } from "./config/wagmiConfig";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConnectKitProvider } from "connectkit";

// components
// import Home from "./page/Home";
// import ConnectWallet from "./page/ConnectWallet";
// import SendEther from "./component/SendEther";
// import SendToken from "./component/SendTokens";
// import SignMessage from "./component/SignMessage";
// import UseReadContract from "./component/UseReadContract";
// import UseWriteContract from "./component/UseWriteContract";
import Auth from "./page/Auth";
import User from "./page/User";

const App = () => {
  const queryClient = new QueryClient();
  return (
    <>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <ConnectKitProvider>
            <Auth />
            <User />
            {/* <Home /> */}
            {/* <ConnectWallet /> */}
            {/* <SendEther /> */}
            {/* <SignMessage /> */}
            {/* <UseReadContract /> */}
            {/* <UseWriteContract /> */}
          </ConnectKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </>
  );
};

export default App;

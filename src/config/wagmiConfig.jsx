import { http, createConfig } from "wagmi";
import { avalanche, polygon, mainnet, base } from "viem/chains";
import { getDefaultConfig } from "connectkit";
import { injected } from "wagmi/connectors";
const projectId = import.meta.env.VITE_WALLECONNECTID;

export const config = createConfig(
  getDefaultConfig({
    // Your dApps chains
    chains: [mainnet, polygon, avalanche, base],
    transports: {
      // RPC URL for each chain
      [mainnet.id]: http(),
      [polygon.id]: http(
        "https://polygon-mainnet.g.alchemy.com/v2/DHQbsGSoN217EiqkSOufmdyBYajxDNcz"
      ),
      [avalanche.id]: http(),
      [base.id]: http(),
    },
    // connectors: [injected()],
    // Required API Keys
    walletConnectProjectId: projectId,
    // Required App Info
    appName: "Petz walletConnect",
    // Optional App Info
    appDescription: "Your App Description",
    appUrl: "https://family.co", // your app's url
    appIcon: "https://family.co/logo.png", // your app's icon, no bigger than 1024x1024px (max. 1MB)
  })
);

import '@fontsource/poppins';
import '@/styles/globals.css';
import axios from 'axios';
import '../styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import {
  arbitrum,
  base,
  mainnet,
  optimism,
  polygon,
  sepolia,
} from 'wagmi/chains';
import { getDefaultConfig, RainbowKitProvider } from '@rainbow-me/rainbowkit';

const config = getDefaultConfig({
  appName: 'RainbowKit App',
  projectId: '2d119270fa00d9a4468bebb74eb136bb',
  chains: [mainnet, polygon, optimism, arbitrum, base, sepolia],
  ssr: true,
});
const client = new QueryClient();

axios.defaults.baseURL = process.env.NEXTAUTH_URL;

export default function App({ Component, pageProps }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={client}>
        <RainbowKitProvider>
          <Component {...pageProps} />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

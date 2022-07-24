import { Button } from "@chakra-ui/react";
import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";

export const ConnectWalletButton: React.FC = () => {
  const address = useAddress();
  const loginWithMetamask = useMetamask();
  const disconnectWallet = useDisconnect();

  return (
    <>
      {address ? (
        <Button mt={2} onClick={() => disconnectWallet()}>
          Disconnect Wallet
        </Button>
      ) : (
        <Button mt={2} onClick={() => loginWithMetamask()}>
          Connect with Metamask
        </Button>
      )}
    </>
  );
};

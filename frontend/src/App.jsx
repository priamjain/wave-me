import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const [account, setAccount] = useState(null);
  const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window;
      if (!ethereum) {
        alert("Please install MetaMask");
      } else {
        console.log("Metamask found!", ethereum);

        const accounts = await ethereum.request({ method: "eth_accounts" });

        if (accounts.length !== 0) {
          setAccount(accounts[0]);
          console.log("Authorized account found: ", accounts[0]);
        } else {
          console.log("Can't find an authorized account.");
        }
      }
    } catch (error) {
      console.log({ error });
    }
  };

  const connectWallet = async () => {
    try {
      const { ethereum } = window;
      if (!ethereum) {
        alert("Please install MetaMask");
      } else {
        const accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });
        if (accounts.length !== 0) {
          setAccount(accounts[0]);
          console.log("Authorized account found: ", accounts[0]);
        } else {
          console.log("Can't find an authorized account.");
        }
      }
    } catch (error) {
      console.log({ error });
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return (
    <div className="App">
      <h2 className="header">👋 Hey there!</h2>

      <h3 className="bio">
        I am Priam and I work on Blockchain and Web development.
      </h3>

      <button className="btn btn-success mt-5 me-3 btn-lg" onClick={null}>
        Wave at Me
      </button>
      {!account && (
        <button className="btn btn-success mt-5 btn-lg" onClick={connectWallet}>
          Connect Wallet
        </button>
      )}
    </div>
  );
}

export default App;

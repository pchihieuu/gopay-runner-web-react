import logo from './logo.svg';
import './App.css';
import { Unity, useUnityContext } from "react-unity-webgl";
import {useState, useEffect, useCallback} from 'react'

function App() {
  const [received, setReceived] = useState(0)

  const { unityProvider, sendMessage, addEventListener, removeEventListener, loadingProgression,isLoaded } = useUnityContext({
    loaderUrl: "../Build/Build/Build.loader.js",
    frameworkUrl: "../Build/Build/Build.framework.js",
    dataUrl: "../Build/Build/Build.data",
    codeUrl: "../Build/Build/Build.wasm"
  });


  function sendDataToUnity() {
    sendMessage("GameController", "UpdateMessage", "plop la zone");
  }

  const handleUnityButtonClicked = useCallback((count) => {
    console.log("btn clicked", count)
    setReceived(count)
  }, []);


  

 
  useEffect(() => {
    addEventListener("ButtonClicked", handleUnityButtonClicked);
    return () => {
      removeEventListener("ButtonClicked", handleUnityButtonClicked);
    };
  }, [addEventListener, removeEventListener, handleUnityButtonClicked]);
 
 

  return (
    <div className="App">
      
      <Unity style={{ width: 1300, height: 650 }} unityProvider={unityProvider} />
      
     
    </div>
  );
}

export default App;

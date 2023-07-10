import './App.css';
import { Configuration,OpenAIApi } from 'openai';
import {useState} from "react"
function App() {
  console.log(import.meta.env.VITE_OPEN_AI_Key)
//  const configuration =new Configuration({
//   apiKey:process.env.VITE_MY_API_KEY
//  })
  return (
    <>
      <div className="app">
        <h1>Image generator</h1>
        <button >Generate</button>

      </div>
    </>
  );
}

export default App;

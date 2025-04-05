import { useRef, useState } from "react";
import Content from "./Content";
import Header from "./Header";
import Input from "./Input";
import axios from "axios";

export default function Gemini() {
  const [data, setData] = useState();
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(true);
  function handleSetInput(e) {
    setInput(e.target.value);
  }
  async function generateAiAnswer() {
    const response = await axios({
      url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyBYjKc_6es5kdpBCiq9XbPrvURaDsVpsho",
      method: "post",
      data: {
        contents: [
          {
            parts: [{ text: `${input}` }],
          },
        ],
      },
    });
    setData(response.data.candidates[0].content.parts[0].text);
    setLoading(false);
    console.log(response.data.candidates[0].content.parts[0].text);
  }
  return (
    <div className="bg-gray-300 w-full h-screen">
      <Header />
      <Content data={data} loading={loading} />
      <Input
        handleSetInput={handleSetInput}
        generateAiAnswer={generateAiAnswer}
      />
    </div>
  );
}

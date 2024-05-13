import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import Flex from "./components/Flex.tsx";
import Typography from "./components/Typography.tsx";
import { useState } from "react";

export default function App() {
  const [input, setInput] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInput(value);
  };

  return (
    <>
      <Typography variant="h1" fontWeight="weightBold">
        Design System
      </Typography>
      <Button colorScheme="secondary">Click me!</Button>
      <Input
        placeholder="검색어를 입력하세요."
        value={input}
        onChange={onChange}
      />
      <Flex direction="column">flex box</Flex>
      <Typography variant="body2">Typography</Typography>
    </>
  );
}

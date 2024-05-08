import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";

export default function App() {
  return (
    <>
      <h1>Design System</h1>
      <Button backgroundColor="blue" color="white" size="s">
        Click me!
      </Button>
      <Input placeholder="검색어를 입력하세요." size="l" isDisabled={false} />
    </>
  );
}

import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import Flex from "./components/Flex.tsx";
import Typography from "./components/Typography.tsx";

export default function App() {
  return (
    <>
      <Typography variant="h1" size="lg" fontWeight="weightBold">
        Design System
      </Typography>
      <Button backgroundColor="blue" color="white" size="md">
        Click me!
      </Button>
      <Input placeholder="검색어를 입력하세요." size="lg" isDisabled={false} />
      <Flex color="white" backgroundColor="pink" direction="column" size="md">
        flex box
      </Flex>
      <Typography variant="body2">Typography</Typography>
    </>
  );
}

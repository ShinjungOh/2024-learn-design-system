import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import Flex from "./components/Flex.tsx";
import Typography from "./components/Typography.tsx";

export default function App() {
  return (
    <>
      <Typography variant="h1" fontSize="l" fontWeight="weightBold">
        Design System
      </Typography>
      <Button backgroundColor="blue" color="white" size="s">
        Click me!
      </Button>
      <Input
        placeholder="검색어를 입력하세요."
        fontSize="l"
        isDisabled={false}
      />
      <Flex color="white" backgroundColor="pink" direction="column">
        flex box
      </Flex>
      <Typography variant="body2">Typography</Typography>
    </>
  );
}

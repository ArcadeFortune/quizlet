import { ContextMenu } from "./ContextMenu";
import { TopBar } from "./TopBar";
import { MainContainer } from "./MainContainer";

function App() {
  return (
    <ContextMenu>
      <TopBar />
      <MainContainer />
    </ContextMenu>
  );
}

export default App;

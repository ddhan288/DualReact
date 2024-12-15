import { createRoot } from "react-dom/client";
import Page from "./components/Page";

const root = createRoot(document.getElementById("root"));

function App() {
  return (
    <>
      <Page></Page>
    </>
  );
}
export default App;

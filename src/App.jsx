// eslint-disable-next-line

import "./App.css";
import GlobalRouter from "./global/GlobalRouter";
import GlobalLayout from "./global/GlobalLayout";

function App() {
  return (
    <GlobalLayout>
      <GlobalRouter />
    </GlobalLayout>
  );
}

export default App;

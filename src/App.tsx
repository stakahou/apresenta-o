import { BrowserRouter } from "react-router-dom";
import providers from "./providers";
import ContextProviderComposer from "./providers/contextProviderComposer";
import AppRoutes from "./routes";

function App() {
  return (
    <ContextProviderComposer contextProviders={providers}>
      <BrowserRouter basename="/apresenta-o/">
        <AppRoutes />
      </BrowserRouter>
    </ContextProviderComposer>
  );
}

export default App;

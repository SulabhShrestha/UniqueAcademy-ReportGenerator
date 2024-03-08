import Header from "./components/Header";
import ResultCert from "./components/ResultCert";
import TransferCert from "./components/TransferCert";
import FormProvider from "./provider/formProvider";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <FormProvider>
        <Header />
        <main className="max-w-screen-xl mx-auto p-4">
          <Routes>
            <Route exact path="/" element={<TransferCert />} />
            <Route exact path="/transfer" element={<TransferCert />} />
            <Route exact path="/result" element={<ResultCert />} />
          </Routes>
        </main>
      </FormProvider>
    </Router>
  );
}
export default App;

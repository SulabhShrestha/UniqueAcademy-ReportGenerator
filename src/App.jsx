import Header from "./components/Header";
import TransferCert from "./components/TransferCert";
import FormProvider from "./provider/formProvider";

function App() {
  return (
    <FormProvider>
      <Header />
      <main>
        <TransferCert />
      </main>
    </FormProvider>
  );
}
export default App;

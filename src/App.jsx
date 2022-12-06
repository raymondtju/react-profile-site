import reactLogo from "./assets/react.svg";
import "./App.css";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-inter flex justify-center content-center">
      <div className="w-80 bg-[#1A1B21] rounded-2xl my-12">
        <Content />
        <Footer />
      </div>
    </div>
  );
}

export default App;

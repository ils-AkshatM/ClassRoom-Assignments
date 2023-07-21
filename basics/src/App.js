import './App.css';
import About from './components/Props/props';
import StateIndex from './components/State and Event Handling/StateIndex';
import Counter from './components/State and Event Handling/StateHandling';
import ThemeSwitcher from './components/Bootstrap/ThemeSwitcher';

function App() {
  return (
    <>
    <div>
      <About />  {/* for props  */}

      <StateIndex />

       <Counter />  {/* Event Handling and state management {Class based} */}
    </div>

        <div className="App d-flex justify-content-center align-items-center">
      <div>
        <ThemeSwitcher />
      </div>
    </div>
    

    </>
  );
}

export default App;

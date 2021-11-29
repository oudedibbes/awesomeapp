import './App.css';
import Title from './components/Title';
import Pokemon from "./components/Pokemon"

function App() {
  const myName = 'René';
  const myCourse = 'React Bootcamp';
  return (
    <div className='App'>
      <header className='App-header'>
        <p>
          <Title content='React Bootcamp' />
          <Pokemon
          name="Charizard"
          weight={90}
          awesome={true}
          terrifying={false}
          abilities={["Blaze", "Solar power", "Tough claws", "Drought"]}
        />
        <Pokemon
          name="Bulbasaur"
          weight={6.9}
          awesome={true}
          terrifying={false}
          abilities={["Overgrow", "Chlorophyll"]}
        />
        </p>
        <h1>Hello World, my name is {myName} </h1>
        <p>i just started this {myCourse}</p>
      </header>
    </div>
  );
}

export default App;

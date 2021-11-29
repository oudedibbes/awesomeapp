import './App.css';
import Title from './components/Title';

function App() {
  const myName = 'René';
  const myCourse = 'React Bootcamp';
  return (
    <div className='App'>
      <header className='App-header'>
        <p>
          <Title content='React Bootcamp' />
        </p>
        <h1>Hello World, my name is {myName} </h1>
        <p>i just started this {myCourse}</p>
      </header>
    </div>
  );
}

export default App;

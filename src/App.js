import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Добро пожаловать! Вы на ветке main. Этот код готов пойти в production!
        </p>
        <p>
          Редактируйте <code>src/App.js</code> и сохраните для обновления.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Изучаем реакт! Смотрим видосики :)
        </a>
      </header>
    </div>
  );
}

export default App;

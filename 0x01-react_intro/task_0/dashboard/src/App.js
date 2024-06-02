import './App.css';
import holbertonLogo from './holberton_logo.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={holbertonLogo} className="App-logo" alt="holberton_logo"/>
        <h1>School dashboard</h1>
      </header>
      <body className="App-body">
        <p>Login to access the full dashboard</p>
      </body>
      <footer className="App-footer">
        <p>Copyright 2020 - holberton School</p>
      </footer>
    </div>
  );
}

export default App;

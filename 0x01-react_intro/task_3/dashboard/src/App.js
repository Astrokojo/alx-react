import './App.css';
import holbertonLogo from './holberton_logo.jpg';
import {getFullYear, getFooterCopy} from './utils';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={holbertonLogo} className="App-logo" alt="holberton_logo"/>
        <h1>School dashboard</h1>
      </header>
      <body className="App-body">
        <p>Login to access the full dashboard</p>
        <label for="email">Email:</label>
        <input type="email" id='email' placeholder="Enter your email" />
        
        <label for="password">Password:</label>
        <input type="password" id='password' placeholder="Enter your password" />

        <button>OK</button>
        
      </body>
      <footer className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
       
       
      </footer>
    </div>
  );
}

export default App;

import './App.css'
import GCDCalculator from './components/GCDCalculator'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>حاسبة القواسم المشتركة</h1>
        <p>اعثر على جميع القواسم المشتركة بين أرقام متعددة</p>
      </header>
      <main>
        <GCDCalculator />
      </main>
    </div>
  )
}

export default App

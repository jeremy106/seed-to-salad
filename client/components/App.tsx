import '../styles/App.css'
import BedManager from './BedManager'

function App() {
  return (
    <>
      <div className="flex justify-center m-4">
        <h1 className="text-5xl">
          Seed<span className="text-primary-500">To</span>Salad
        </h1>
      </div>
      <BedManager />
    </>
  )
}

export default App

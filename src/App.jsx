import Category from "./components/Category"
import Header from "./components/Header"
import OnlineRestaurant from "./components/OnlineRestaurant"
import Restaurant from "./components/Restaurant"

function App() {
  

  return (
    <div className="max-w-[100vw]">
      <div className="mx-auto w-[90vw]">
        <Header />
        <Category/>
        <Restaurant/>
        <OnlineRestaurant/>
      </div>
    </div>
  )
}

export default App

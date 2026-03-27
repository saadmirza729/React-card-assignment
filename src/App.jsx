import Card from "./components/card"
import Navbar from "./components/Navbar"

function App() {
let status = true

let numbers = [1, 2, 3, 4, 5];
  return (

    // <> </> Ye hai React Fragement or empty tag

    <>

    {/* Header */}

    <Navbar />

      {/* {card()}
    {card()}
    {card()} */}

      <Card userName={"Heyyyaa"} description={"Welcome new user"} />
      <Card userName={"Hellooo"} description={"Welcome new user"}/>
      <Card userName={"Hiiii"} description={"Welcome new user"}/>

      <ul className="card">
        {numbers.map((items, index) => {
        return  <li key={index}>{items}</li>
        })}
      </ul>


      <button className={`${status ? "bg-green": "bg-red"} card`}>Status</button>

    </>
  )

}

export default App
import logo from './logo.svg';
import "./App.css";
import { useState } from 'react';
import contacts from "./contacts.json";

function App() {

//------------------------
// Slicing first five
//------------------------

  let firstFive = contacts.slice(0,5);

//------------------------
// Using STATE 
//------------------------

  const [allContacts, setContacts] = useState(firstFive)

//------------------------
// Adding
//------------------------

  function handleAdd(){
    let randomElem = contacts[Math.floor(Math.random() * contacts.length)]
    setContacts([randomElem, ...allContacts])
  }

//------------------------
// Deleting
//------------------------

  function handleDelete(id){
    let filteredCelebs = allContacts.filter((elem) => {
    return elem.id !== id
  })
  setContacts(filteredCelebs)

  }
//------------------------
// Sorting by Name
//------------------------

  function handleSortName(){
    let clone = JSON.parse(JSON.stringify(allContacts))
    clone.sort((first, second) => {
        if (first.name > second.name) {
            return 1
        }
        else if (first.name < second.name) {
            return -1
        }
        else {
            return 0
        }
    })

    setContacts(clone)

}
//------------------------
// Sorting by Popularity 
//------------------------

function handleSortPop(){
  let clone = JSON.parse(JSON.stringify(allContacts))
  clone.sort((first, second) => {
      if (first.popularity > second.popularity) {
          return -1
      }
      else if (first.popularity < second.popularity) {
          return 1
      }
      else {
          return 0
      }
  })

  setContacts(clone)

}

//-----------------------------
// onClick Buttons + functions
//-----------------------------

  
  return <div className="App">

            <h1>IronContacts </h1> 
            <div className="spaced"> 
            <button onClick={handleAdd}> Add random contact </button>
            <button onClick={handleSortName}> Sort by Name </button>
            <button onClick={handleSortPop}> Sort by popularity</button>
            </div>
    
    <table className="App"> 
      <tbody> 
          <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Own Oscar</th>
              <th>Own Emmy</th>
              <th>Actions</th>
          </tr>

{/* //------------------------
// Handeling all the Obj
//------------------------ */}
 
   {allContacts.map((elem)=> {
          return (
            <tr key={elem.id}> 
            <td> <img className="picturesCeleb" src={elem.pictureUrl} alt =""/> </td>
            <td> {elem.name} </td>
            <td> {elem.popularity.toFixed(2)} </td>
            <td> {elem.wonOscar && "🏆"} </td>
            <td> {elem.wonEmmy  && "⭐"} </td>
            <td> <button onClick={() => { handleDelete(elem.id) }}>Delete</button></td>
            </tr>
            
          )
        }
      )
   }
   </tbody>
   </table> 
  </div>

  }

export default App;
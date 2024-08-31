import Bed from "./Bed"

function BedManager() {

  return (
    <>
    <h2>My Beds</h2>
    <div className="manager-container">
    {/* TODO - add id props to Bed component to show specific bed? */}
    <Bed /> 
    <Bed /> 
    <Bed /> 
    </div>
    </>
  )
}

export default BedManager

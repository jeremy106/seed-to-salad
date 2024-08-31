import Section from "./Section"

function Bed(){
  return(
    <>
    <div className="bed-container">
      <h2>Bed Name</h2>
      <div className="section-container">
        {/* TODO - add id props to Bed component to show specific bed? */}
        <Section />
        <Section />
        <Section />
        <Section />
        <Section />
      </div>
    </div>
    </>
  )
}

export default Bed
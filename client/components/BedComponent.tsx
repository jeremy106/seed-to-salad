import { Bed } from "../../models/models"
import SectionComponent from "./SectionComponent"

interface Props {
  bed: Bed
}

export default function BedComponent(props: Props) {

  const { bed } = props


  return (
    <div className="bg-white shadow-md rounded-md p-2 h-[100%] flex flex-col">
      <div>
        {bed.name}
      </div>
      <div id="section-container" className="flex flex-col grow">
        {bed.sections.map((section) =>
          <SectionComponent key={section.id} section={section}/>
        )}
      </div>
    </div>
  )
}

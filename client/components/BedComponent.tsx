import { Bed } from "../../models/models"
import SectionComponent from "./SectionComponent"

interface Props {
  bed: Bed
}

export default function BedComponent(props: Props) {

  const { bed } = props


  return (
    <div className="bg-white shadow-md rounded-md p-2">
      <div>
        {bed.name}
      </div>
      {bed.sections.map((section) =>
        <SectionComponent key={section.id} section={section}/>
      )}
    </div>
  )
}

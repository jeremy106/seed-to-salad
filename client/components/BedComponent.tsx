import { Bed } from "../../models/models"

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
        <div key={section.id}>
          {`Section: ${section.id}`}
        </div>
      )}
    </div>
  )
}

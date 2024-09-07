import { Section } from "../../models/models"

interface Props {
  section: Section
}

export default function SectionComponent(props: Props) {
  
  const { section } = props 

  return (
    <div className="w-[350px]">
      <h1>{section.plant_name ? section.plant_name : 'Empty'}</h1>
    </div>
  )
}


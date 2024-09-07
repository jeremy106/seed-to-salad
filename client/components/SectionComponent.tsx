import { Section } from "../../models/models"

interface Props {
  section: Section
}

export default function SectionComponent(props: Props) {
  
  const { section } = props 

  return (
    <div>
      <h1>{section.plant_name ? 'planted' : 'empty'}</h1>
    </div>
  )
}


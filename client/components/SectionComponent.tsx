import { Section } from '../../models/models'

interface Props {
  section: Section
}

export default function SectionComponent(props: Props) {
  const { section } = props

  return (
    <div className="w-[350px] grow shadow-md m-2 p-2">
      <h1>{section.plant_name ? section.plant_name : 'Empty'}</h1>
      {
        section.plant_id && 
          <>
          <span className='italic font-light text-sm'>{`${section.profile_name}`}</span>
          <p>{`Planted: ${plantDateFormat(section.planted_at)}`}</p>
          </>
      }
    </div>
  )

  function plantDateFormat(date: number | undefined){
    if(date) return new Date(date).toLocaleString('en-NZ', {day: '2-digit' , month: 'short', year: 'numeric'})
  }
}

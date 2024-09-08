import { Section } from '../../models/models'
import { dateAdd } from '../../server/utils'

interface Props {
  section: Section
}

export default function SectionComponent(props: Props) {
  const { section } = props

  return (
    <div className="w-[350px] grow shadow-md m-2 p-2">
      <h1>
        {section.plant_name ? 
          <>{section.plant_name} <span className='italic font-light text-sm'>{`(${section.profile_name})`}</span></>
          : 'Empty'}
      </h1>
      {
        section.planted_at && 
        section.days_to_germinate &&
        <>
        <p>
          {`Planted: ${plantDateFormat(section.planted_at)}`}
        </p>
        {
          // If germination date has passed, then show harvest date
          dateAdd(section.planted_at, section.days_to_germinate) > Date.now() ?
            <>{section.days_to_maturity && <p>{`Ready to Transplant: ${plantDateFormat(dateAdd(section.planted_at, section.days_to_germinate))}`}</p>}</>
            : 
            <>{section.days_to_maturity && <p>{`Ready to Harvest: ${plantDateFormat(dateAdd(section.planted_at, section.days_to_maturity))}`}</p>}</>
        }
        </>
      }
    </div>
  )

  function plantDateFormat(date: number | undefined){
    if(date) return new Date(date).toLocaleString('en-NZ', {day: '2-digit' , month: 'short', year: 'numeric'})
  }

}

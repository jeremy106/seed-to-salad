import db from './connection'

export async function getBedData(){
  const beds = await db('beds')
  const sections = await db('sections').leftJoin('plants','sections.plant_id','=','plants.id')

  beds.forEach((bed) => bed.sections = sections.filter((section)=> section.bed_id === bed.id))

  return beds
}




// const dummySection = {
//   id: 1,
//   bed_id: 1,
//   position: 0,
//   plant_id: 1,
//   planted_at: 1723168936699,
//   germinated_at: null,
//   matured_at: null,
//   plant_name: "Lettuce",
//   profile_name: "default",
//   days_to_germinate: 14,
//   days_to_maturity: 60
// }
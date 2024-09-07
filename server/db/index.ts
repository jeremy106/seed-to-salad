import db from './connection'

export async function getBedData(){
  const beds = await db('beds')
  const sections = await db('sections')

  beds.forEach((bed) => bed.sections = sections.filter((section)=> section.bed_id === bed.id))

  return beds
}


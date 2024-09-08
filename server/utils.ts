
export function dateAdd(date:number, shift: number){
  const newDate = new Date(date) 
  return newDate.setDate(newDate.getDate() + shift)
}
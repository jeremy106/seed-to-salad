import { Bed } from '../../models/models';
import db from './connection'

export async function getBeds(): Promise<Bed[]>{
  const result = await db('beds')
  return result
}
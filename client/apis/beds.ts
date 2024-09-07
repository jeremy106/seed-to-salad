import request from "superagent"
import { Bed } from "../../models/models"

export async function getBeds(){
  const res = await request.get('/api/v1/beds')
  return res.body as Bed[]
}
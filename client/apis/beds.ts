import request from "superagent"
import { Bed } from "../../models/models"

export async function getBedData(){
  const res = await request.get('/api/v1/beds')
  return res.body as Bed[]
}
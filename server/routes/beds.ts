import { Router } from 'express'
import * as db from '../db/index'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const beds = await db.getBedData()
    res.json(beds)
  } catch (error) {
    console.error(error)
    res.status(500)
  }
})

export default router
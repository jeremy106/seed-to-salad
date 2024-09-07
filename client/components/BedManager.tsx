import { useQuery } from "@tanstack/react-query"
// import { Bed } from "../../models/models"
import BedComponent from "./BedComponent"
import { getBeds } from "../apis/beds"

export default function BedManager() {
  
  const { data:beds, isPending, isError} = useQuery({
    queryKey: ['beds'],
    queryFn: () => getBeds()
  })
  
  if(isPending){
    return <p>Loading Beds</p>
  }

  if(isError){
    return <p>Error loading beds</p>
  }

  return (
    <div>
      <div className="flex flex-col-auto items-center justify-center p-10">
        <h1 className="text-3xl">
          Bed manager
        </h1>
      </div>
      {/* Bed Container */}
      <div id="bed-container" className="flex flex-wrap items-center justify-center gap-10 p-10">
        
        {
          beds.map((bed) => 
          <BedComponent key={bed.id} bed={bed}/>
          )
        }
     

      </div>
    </div>
  )
}

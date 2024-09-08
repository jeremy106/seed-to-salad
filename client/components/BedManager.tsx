import { useQuery } from "@tanstack/react-query"
import BedComponent from "./BedComponent"
import { getBedData } from "../apis/beds"

export default function BedManager() {
  
  const { data:beds, isPending, isError} = useQuery({
    queryKey: ['beds'],
    queryFn: () => getBedData()
  })
  
  if(isPending){
    return <p>Loading Beds</p>
  }

  if(isError){
    return <p>Error loading beds</p>
  }

  return (
    <div className="h-[80vh]"> 
      <div className="flex flex-col-auto items-center justify-center p-5">
        <h1 className="text-3xl">
          Bed manager
        </h1>
      </div>
      {/* Bed Container */}
      <div id="bed-container" className="flex flex-wrap justify-center gap-10 p-5 h-full">
        {
          beds.map((bed) => 
          <BedComponent key={bed.id} bed={bed}/>
          )
        }
      </div>
    </div>
  )
}

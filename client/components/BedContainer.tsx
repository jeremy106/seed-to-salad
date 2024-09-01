import { useSortable } from '@dnd-kit/sortable'
import DeleteIcon from '../components/assets/DeleteIcon'
import { Bed, Id } from '../../models/models'
import { CSS } from '@dnd-kit/utilities'
import LettuceIcon from './assets/LettuceIcon'

interface Props {
  bed: Bed
  deleteBed: (id: Id) => void
}

function BedContainer(props: Props) {
  const { bed, deleteBed } = props

  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: bed.id,
    data: {
      type: 'Bed',
      bed,
    },
  })

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  }

  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        className="
        ref={setNodeRef}
        style={style}
        bg-primary-300
        w-[350px]
        h-[500px]
        max-h-[500px]
        rounded-md
        flex
        flex-col
        opacity-40
        "
      ></div>
    )
  }

  return (
    <div
      id="bed-tile"
      ref={setNodeRef}
      style={style}
      className="
      bg-primary-50
      border-4
      border-primary-300
      w-[350px]
      h-[500px]
      max-h-[500px]
      rounded-md
      flex
      flex-col
      "
    >
      <div
        {...attributes}
        {...listeners}
        className="
        bg-primary-500
        text-white
        text-md
        h-[60px]
        p-3
        font-bold
        flex
        items-center
        justify-between
        "
      >
        {/* Bed Title */}
        <div className="flex gap-2 text-xl">{bed.name}</div>
        <button
          onClick={() => {
            deleteBed(bed.id)
          }}
          className="
        fill-primary-50
        hover:fill-primary-100
        py-1
        px-2
        "
        >
          <DeleteIcon />
        </button>
      </div>
      <div className="flex flex-grow px-2 py-1 m-2 bg-white border-2 rounded-md">
        <div className="w-[100%] flex justify-between">
          <div>
            <h1 className="font-bold">Section 1: Lettuce</h1>
            <h2 className="font-light italic">Status: Growing</h2>
            <p>Ready to Harvest: 20/12/2024</p>
          </div>
          <LettuceIcon />
        </div>
      </div>
      <div className="flex flex-grow px-2 py-1 m-2 bg-white border-2 rounded-md">
        <div className="w-[100%] flex justify-between">
          <div>
            <h1 className="font-bold">Section 1: Lettuce</h1>
            <h2 className="font-light italic">Status: Growing</h2>
            <p>Ready to Harvest: 20/12/2024</p>
          </div>
          <LettuceIcon />
        </div>
      </div>
      <div className="flex flex-grow px-2 py-1 m-2 bg-white border-2 rounded-md">
        <div className="w-[100%] flex justify-between">
          <div>
            <h1 className="font-bold">Section 1: Lettuce</h1>
            <h2 className="font-light italic">Status: Growing</h2>
            <p>Ready to Harvest: 20/12/2024</p>
          </div>
          <LettuceIcon />
        </div>
      </div>
    </div>
  )
}

export default BedContainer

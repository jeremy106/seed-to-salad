import { useSortable } from '@dnd-kit/sortable'
import DeleteIcon from '../components/assets/DeleteIcon'
import { Bed, Id } from '../../models/models'
import { CSS } from '@dnd-kit/utilities'

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
        bg-primary-500
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
      ref={setNodeRef}
      style={style}
      className="
  bg-primary-100
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
        bg-primary-400
        text-md
        text-primary-50
        h-[60px]
        rounded-md
        rounded-b-none
        p-3
        font-bold
        flex
        items-center
        justify-between
        "
      >
        {/* Bed Title */}
        <div className="flex gap-2 border-primary 700 text-xl">{bed.name}</div>
        <button
          onClick={() => {
            deleteBed(bed.id)
          }}
          className="
        fill-primary-50
        hover:fill-primary-600
        py-1
        px-2
        "
        >
          <DeleteIcon />
        </button>
      </div>
        <div className="flex flex-grow px-2 py-1 border-2 border-primary-500 m-2 rounded-md">
          Section 1
        </div>
        <div className="flex flex-grow px-2 py-1 border-2 border-primary-500 m-2 rounded-md">
          Section 2
        </div>
        <div className="flex flex-grow px-2 py-1 border-2 border-primary-500 m-2 rounded-md">
          Section 3
        </div>
    </div>
  )
}

export default BedContainer

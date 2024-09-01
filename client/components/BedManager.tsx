import { useMemo, useState } from 'react'
import PlusIcon from '../components/assets/PlusIcon'
import { Bed, Id } from '../../models/models'
import BedContainer from './BedContainer'
import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core'
import { arrayMove, SortableContext } from '@dnd-kit/sortable'
import { createPortal } from 'react-dom'

function BedManager() {
  const [beds, setBeds] = useState<Bed[]>([])
  const bedsId = useMemo(() => beds.map((bed) => bed.id), [beds])

  const [activeBed, setActiveBed] = useState<Bed | null>(null)

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 10,
      },
    }),
  )

  return (
    <>
      <div className='flex justify-center'>
        <button
          onClick={() => {
            createNewBed()
          }}
          className="
        h-[60px] 
        min-w-[200px]
        cursor-pointer
        rounded-lg
        text-white
        bg-primary-500
        p-4
        ring-primary-700
        hover:ring-2
        flex
        gap-2
        m-10
        "
        >
          <PlusIcon /> Add New Bed
        </button>
      </div>
      <div
        className="
      m-auto
      flex
      w-full
      items-centre
      overflow-x-auto
      overflow-y-hidden
      px=[40px]
      "
      >
        <DndContext
          sensors={sensors}
          onDragStart={onDragStart}
          onDragEnd={onDragEnd}
        >
          <div className="m-auto flex gap-4">
            <div className="flex gap-4">
              <SortableContext items={bedsId}>
                {beds.map((bed) => (
                  <BedContainer key={bed.id} bed={bed} deleteBed={deleteBed} />
                ))}
              </SortableContext>
            </div>
          </div>
          {createPortal(
            <DragOverlay>
              {activeBed && (
                <BedContainer bed={activeBed} deleteBed={deleteBed} />
              )}
            </DragOverlay>,
            document.body,
          )}
        </DndContext>
      </div>
    </>
  )

  function createNewBed() {
    const bedToAdd: Bed = {
      id: generateId(),
      name: `Bed ${beds.length + 1}`,
    }

    setBeds([...beds, bedToAdd])
  }

  function generateId() {
    return Math.floor(Math.random() * 10001)
  }

  function deleteBed(id: Id) {
    const filteredBeds = beds.filter((bed) => bed.id !== id)
    setBeds(filteredBeds)
  }

  function onDragStart(event: DragStartEvent) {
    if (event.active.data.current?.type === 'Bed') {
      setActiveBed(event.active.data.current.bed)
    }
    return
  }

  function onDragEnd(event: DragEndEvent) {
    const { active, over } = event
    if (!over) return

    const activeBedId = active.id
    const overBedId = over.id

    if (activeBedId === overBedId) return

    setBeds((beds) => {
      const activeBedIndex = beds.findIndex((bed) => bed.id === activeBedId)
      const overBedIndex = beds.findIndex((bed) => bed.id === overBedId)

      return arrayMove(beds, activeBedIndex, overBedIndex)
    })
  }
}

export default BedManager

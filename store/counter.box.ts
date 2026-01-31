import { createBox } from "magos"

export const counterBox = createBox(0, (set) => ({
  inc: () => set(prev => prev + 1)
}))
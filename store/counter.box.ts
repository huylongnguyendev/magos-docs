import { createBox } from "magos"

export const counterBox = createBox(0, (set) => ({
  inc: () => {
    console.log("---update")
    return set(prev => prev + 1)
  }
}))
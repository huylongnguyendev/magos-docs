"use client"

import { useAppStore } from "magos/react"
import Button from "./ui/Button"
import { counterBox } from "@/store/counter.box"

function CountAction() {
  const [, setCount] = useAppStore(counterBox)

  return (
    <>
      <Button
        variant="outline"
        onClick={setCount.inc}
        className="active:scale-95 transition-transform duration-100 ease-in-out border-fd-primary/50 hover:bg-fd-primary/10"
      >
        Try Count
      </Button>
    </>
  )
}

export default CountAction
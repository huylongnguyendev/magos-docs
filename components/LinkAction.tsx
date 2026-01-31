import Link from "next/link"
import Button from "@/components/ui/Button"

function LinkAction() {
  return (
    <>
      <Link href={"/docs"}>
        <Button>
          Get Started
        </Button>
      </Link>
    </>
  )
}

export default LinkAction
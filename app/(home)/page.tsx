import Image from "next/image"
import logoImg from "@/assets/logo-magos.png"
import Counter from "@/components/Counter"
import LinkAction from "@/components/LinkAction"
import CountAction from "@/components/CountAction"

export default function HomePage() {
  return (
    <>
      {/* Tăng gap từ 4 lên 8 hoặc 10 để các phần tách biệt hẳn ra */}
      <div className="flex flex-col justify-center items-center gap-10 h-[calc(100dvh-56px)] px-4">

        <div className="flex flex-col items-center gap-6">
          <Image
            src={logoImg}
            alt="magos-logo-image"
            width={120} // Tăng size lên tí cho đại ca
            height={120}
            priority
            className="drop-shadow-[0_0_25px_rgba(0,238,238,0.4)]"
          />

          <div className="flex flex-col items-center justify-center gap-3 text-center font-semibold">
            <h1 className="text-6xl text-fd-primary uppercase tracking-tighter">
              Magos
            </h1>
            <div className="space-y-1">
              <p className="text-lg max-w-150 text-balance text-fd-secondary-foreground leading-relaxed">
                A lightweight state management library for React and Vanilla JS
              </p>
              <p className="text-xs tracking-[0.4em] text-fd-muted-foreground uppercase pt-2">
                Compact • Scalable • Maintainable
              </p>
            </div>
          </div>
        </div>

        {/* Tách riêng phần Counter và Actions ra để tạo điểm nhấn */}
        <div className="flex flex-col items-center gap-8 w-full max-w-sm">
          <Counter />
          <div className="flex gap-6 items-center">
            <LinkAction />
            <CountAction />
          </div>
        </div>

      </div >
      <div className="home-bg absolute inset-0 -z-10 pointer-events-none" />
    </>
  )
}
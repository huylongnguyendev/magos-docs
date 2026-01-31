"use client"

import { counterBox } from "@/store/counter.box"
import { useAppStore } from "magos/react"

function Counter() {
  const [count] = useAppStore(counterBox)

  return (
    <div className="relative group">
      {/* Lớp nền phát sáng mờ phía sau */}
      <div className="absolute -inset-1 bg-fd-primary opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500" />
      
      <div className="relative flex flex-col items-center justify-center 
                    min-w-30 p-6 rounded-2xl 
                    bg-fd-card/80 backdrop-blur-md
                    border border-fd-primary/30 
                    shadow-[0_0_20px_rgba(0,238,238,0.15)]">
        
        {/* Nhãn nhỏ phía trên */}
        <span className="text-[10px] uppercase tracking-[0.2em] text-fd-muted-foreground mb-2">
          State Value
        </span>

        {/* Con số chính - dùng font-mono để không bị giật */}
        <p className="text-6xl font-bold font-mono text-fd-primary drop-shadow-[0_0_10px_rgba(0,238,238,0.5)]">
          {count.toString().padStart(2, '0')}
        </p>
        
        {/* Thanh bar trang trí nhỏ xíu bên dưới */}
        <div className="w-8 h-1 bg-fd-primary/50 rounded-full mt-4" />
      </div>
    </div>
  )
}

export default Counter
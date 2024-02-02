import * as React from "react"

import { cn } from "@/lib/utils"

import galochka from "@/public/galochka.svg"



export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={`
          peer relative h-5 w-5 shrink-0 appearance-none rounded-md border after:absolute after:left-0 after:top-0 after:h-full after:w-full checked:bg-no-repeat checked:bg-{galochka} after:bg-center after:bg-no-repeat after:content-[''] hover:ring hover:ring-gray-300 focus:outline-none
          `
        }
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }

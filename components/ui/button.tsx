import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
        batyevka: 'bg-batyevka text-batyevka-foreground hover:bg-batyevka/90',
        topburger: 'bg-[#56AABF] w-[66.86px] h-[60px] rounded-sm relative ml-[30px] min-[801px]:hidden striped-box max-[720px]:h-[35px] max-[720px]:w-[39px] cursor-pointer',
        connect: 'bg-[#DC662D] text-white rounded-full h-[60px] w-[270px] cursor-pointer font-semibold shadow-[0_4px_20px_0_#DC662D80] max-[1026px]:hidden min-[2430px]:text-[21px] min-[2430px]:h-[78px] min-[2430px]:w-[354px] ml-[30px]',
        connectMobile: 'bg-[#DC662D] mt-5 text-white rounded-full h-[60px] w-[270px] cursor-pointer font-semibold shadow-[0_4px_20px_0_#DC662D80]',
        cabinet: 'bg-[#0E2D43] text-white rounded-full border-[2px] border-solid border-[#56AABF] font-semibold h-[60px] w-[270px] max-[1650px]:hidden min-[2430px]:h-[78px] min-[2430px]:w-[354px] min-[2430px]:text-[21px] min-[2430px]:ml-[30px] ml-[42px]',
        cabinetGrey: 'bg-white text-[#5F6061] rounded-full border-[2px] border-solid border-[#5F6061] font-semibold h-[60px] w-[270px] max-[1650px]:hidden min-[2430px]:h-[78px] min-[2430px]:w-[354px] min-[2430px]:text-[21px] min-[2430px]:ml-[30px] ml-[42px]',
        pay: 'bg-[#51B18B] text-white rounded-full font-semibold w-[180px] h-[60px] shadow-[0_4px_20px_0_#51B18B] max-[1650px]:hidden min-[2430px]:h-[78px] min-[2430px]:w-[234px] min-[2430px]:text-[21px]',
        cabinetMob: 'bg-[#0E2D43] text-white rounded-full border-[2px] border-solid border-[#56AABF] font-semibold h-[60px] w-[63px] min-[1651px]:hidden min-[1330px]:ml-[42px] ml-[20px]',
        cabinetGreyMob: 'text-[#5F6061] text-white rounded-full border-[2px] border-solid border-[#5F6061] font-semibold h-[60px] w-[63px] min-[1651px]:hidden min-[1330px]:ml-[42px] ml-[20px]',
        payMob: 'bg-[#51B18B] text-white rounded-full font-semibold h-[60px] w-[63px] shadow-[0_4px_20px_0_#51B18B] min-[1651px]:hidden',
        connectMob: 'bg-[#DC662D] text-white rounded-full h-[60px] w-[63px] cursor-pointer font-semibold shadow-[0_4px_20px_0_#DC662D80] min-[1027px]:hidden ml-[24px]',
        payMenuBurger: 'justify-items-start',
        payMobMob: 'bg-[#51B18B] text-white rounded-full font-semibold h-[60px] w-[63px] shadow-[0_4px_20px_0_#51B18B] min-[1861px]:hidden mr-[24px]',
        cabinetMobMob: 'bg-[#0E2D43] text-white rounded-full border-[2px] border-solid border-[#56AABF] font-semibold h-[60px] w-[63px] min-[1861px]:hidden mr-[24px]',
        cabinetGreyMobMob: 'bg-white text-white rounded-full border-[2px] border-solid border-[#5F6061] font-semibold h-[60px] w-[63px] min-[1861px]:hidden mr-[24px]',
        connectMobMob: 'bg-[#DC662D] text-white rounded-full h-[60px] w-[63px] cursor-pointer font-semibold shadow-[0_4px_20px_0_#DC662D80] min-[1026px]:hidden ',
        menuMob: 'solid h-[48px] w-[52px] ml-[48px] flex items-center',
        MobConnect: 'bg-[#DC662D] text-white rounded-full h-[60px] w-[270px] cursor-pointer font-semibold shadow-[0_4px_20px_0_#DC662D80] min-[781px]:hidden mt-[89px]',
        MobConnect2: 'w-[270px] bg-[#DC662D] text-white font-semibold cursor-pointer rounded-full h-[60px] shadow-[0_4px_20px_0px_#DC662D50] text-[18px] leading-[22px] min-[1025px]:hidden'
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10'
      }
    }
  }
);


export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };

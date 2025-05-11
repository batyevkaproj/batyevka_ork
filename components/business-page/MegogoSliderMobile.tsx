import { MEGOGO_BUNDLES } from '@/constants/slider';
import { Checkbox } from "@/components/ui/checkbox_calculator";

type MobileTVSelectorProps = {
  selectedBundle: number;
  onBundleSelect: (value: number) => void;
  isEnabled: boolean;
}

const MegogoSliderMobile = ({ selectedBundle, onBundleSelect, isEnabled }: MobileTVSelectorProps) => {
  return (
    <div className="font-bold text-[18px] leading-[22px] mt-[20px] text-[#BDBDBD] min-[681px]:hidden">
      {MEGOGO_BUNDLES.map((bundle) => (
        <div key={bundle.value} className="flex items-center gap-x-[20px] first:mt-0 mt-[16px]">
          <Checkbox 
            checked={selectedBundle === bundle.value}
            onCheckedChange={() => {
              if (isEnabled) {
                onBundleSelect(bundle.value);
              }
            }}
            disabled={!isEnabled}
            className={`size-[40px] border-[1px] border-[#BDBDBD] rounded-[10px]`}
          />
          <p className={`${selectedBundle === bundle.value && isEnabled ? 'text-[#DC662D]' : ''} ${!isEnabled ? 'text-[#DBDBDB]': ''}`}>
            {bundle.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default MegogoSliderMobile;
import { MEGOGO_BUNDLES } from '@/constants/slider';
import { Checkbox } from "@/components/ui/checkbox_calculator";

type MobileTVSelectorProps = {
  selectedBundle: number;
  onBundleSelect: (value: number) => void;
  isEnabled: boolean;
}

const MegogoSliderMobile = ({ selectedBundle, onBundleSelect, isEnabled }: MobileTVSelectorProps) => {
  return (
    <div className="font-bold text-[18px] leading-[22px] mt-[20px] min-[681px]:hidden">
      {MEGOGO_BUNDLES.map((bundle, index) => (
        <div key={bundle.value} className="flex items-center gap-x-[20px] first:mt-0 mt-[16px]">
          
          {/* THE ONLY CHANGE IS ON THE NEXT LINE */}
          <Checkbox 
            checked={index <= selectedBundle} // This now checks all previous items too
            onCheckedChange={() => {
              if (isEnabled) {
                onBundleSelect(bundle.value);
              }
            }}
            disabled={!isEnabled}
            className={`size-[40px] border-[1px] border-[#BDBDBD] rounded-[10px]`}
          />
          
          <p className={
            !isEnabled 
              ? 'text-[#DBDBDB]'   
              : index <= selectedBundle 
                ? 'text-[#5F6061]' 
                : 'text-[#BDBDBD]'   
          }>
            {bundle.name}
          </p>

        </div>
      ))}
    </div>
  );
};

export default MegogoSliderMobile;
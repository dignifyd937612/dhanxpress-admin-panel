import { actionButtons } from "@/utils/agent-productvity/agent-productvitybtns";
import LegalButton from "./LegalButton";

const LegalButtonsGrid = () => {
  return (
    <>
      <div className="grid grid-cols-4 gap-4 p-5">
        {actionButtons?.map((btn) => (
          <LegalButton
            key={btn?.id}
            Icon={btn?.icon}
            btn_txt={btn?.label}
            btn_color={btn?.bgColor}
          />
        ))}
      </div>
    </>
  );
};

export default LegalButtonsGrid;

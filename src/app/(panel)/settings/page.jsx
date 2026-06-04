"use client";

import { Settings } from "lucide-react";

import { useState } from "react";

import CustomDropDown from "@/custom/CustomDropDown";
import SettingCard from "@/components/settings/SettingCard";
import InfoBanner from "@/components/common/InfoBanner";
import MessageToneRadio from "../../../components/settings/MessageToneRadio";
import AutoAssignAgent from "../../../components/settings/AutoAssignAgent";

export default function SettingsPanel() {
  const [confidence, setConfidence] = useState(75);

  return (
    <div className="rounded-2xl border bg-white dark:bg-[#1a1a1a] dark:border-[#2a2a2a]">
      <div className="grid grid-cols-2 gap-5 p-5">
        <SettingCard
          title="Reminder Frequency"
          description="How often should follow-ups be sent ?"
        >
          <CustomDropDown
            filters={["Select Frequency", "Daily", "Weekly", "Monthly"]}
            theme="dark"
            size="medium"
            fullWidth={true}
          />
        </SettingCard>

        <SettingCard
          title="Legal Escalation Rules"
          description="When to start legal action ?"
        >
          <CustomDropDown
            filters={["90 Days Late", "60 Days Late", "120 Days Late"]}
            theme="dark"
            size="medium"
            hideFirstOption={false}
            fullWidth={true}
          />
        </SettingCard>

        <SettingCard
          title="Message Tone Control"
          description="Adjust tone of reminders"
        >
          <MessageToneRadio />
        </SettingCard>

        <SettingCard
          title="Auto Assign Agents"
          description="Assign overdue cases to available agents"
        >
          <AutoAssignAgent />
        </SettingCard>
      </div>

      <div className="px-5 pb-5">
        <SettingCard
          title="AI Confidence Threshold"
          description="Set precision level for AI actions"
        >
          <div className="flex w-full max-w-md items-center gap-4">
            <input
              type="range"
              min={0}
              max={100}
              value={confidence}
              onChange={(e) => setConfidence(e.target.value)}
              className="h-2 w-full cursor-pointer accent-orange-500"
            />

            <div className="rounded-lg bg-[#f5f5f5] px-3 py-1 text-sm font-medium text-gray-900 dark:bg-[#252525] dark:text-white">
              {confidence}%
            </div>
          </div>
        </SettingCard>
      </div>

      <InfoBanner text={"Track Escalations and Recoveries in one module"} />
      <div className="flex items-center gap-4 p-5">
        <button className="flex items-center gap-2 rounded-lg bg-[#3f3f3f] px-8 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-black dark:bg-orange-500 dark:hover:bg-orange-600">
          <Settings size={16} />
          Save Settings
        </button>

        <button className="rounded-lg bg-[#7a7a7a] px-8 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-[#666] dark:bg-[#252525] dark:hover:bg-[#303030]">
          Cancel
        </button>
      </div>
    </div>
  );
}

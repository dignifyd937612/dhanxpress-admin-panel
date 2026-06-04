"use client";

import {
  MoreVertical,
  Sparkles,
  Mic,
  Paperclip,
  SendHorizonal,
  Globe,
  X,
} from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

import assitant_img from "../../../public/assets/common/ai-assitant.jpg";
import chatGptImg from "../../../public/assets/common/logogpt.png";
import geminiImg from "../../../public/assets/common/logogemini.png";
import claudeImg from "../../../public/assets/common/logocloude.png";

import CustomDropDown from "@/custom/CustomDropDown";

export default function AiAssistant() {
  const [message, setMessage] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  const fileInputRef = useRef(null);

  const handleSuggestion = (text) => {
    setMessage(text);
  };

  const handleMic = () => {
    setIsListening(!isListening);
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);

    const formattedFiles = files.map((file) => ({
      id: Date.now() + Math.random(),
      file,
      preview: file.type.startsWith("image/")
        ? URL.createObjectURL(file)
        : null,
    }));

    setUploadedFiles((prev) => [...prev, ...formattedFiles]);
  };

  const removeFile = (id) => {
    setUploadedFiles((prev) => prev.filter((file) => file.id !== id));
  };

  const handleSend = () => {
    if (!message.trim() && uploadedFiles.length === 0) return;

    alert("Message Sent");

    setMessage("");
    setUploadedFiles([]);
  };

  const handleChange = (e) => {
    setMessage(e.target.value);

    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  return (
    <div className="relative flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-[#2a2a2a] dark:bg-[#1a1a1a]">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          AI Assistant
        </h2>

        <div className="relative">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-gray-700 transition hover:bg-orange-100 hover:text-orange-600 dark:border-[#333] dark:text-white dark:hover:bg-[#252525]"
          >
            <MoreVertical size={16} />
          </button>

          {menuOpen && (
            <div className="absolute right-0 top-10 z-50 w-40 rounded-xl border border-gray-200 bg-white p-2 shadow-lg dark:border-[#333] dark:bg-[#1a1a1a]">
              <button className="w-full rounded-lg px-3 py-2 text-left text-sm text-gray-700 transition hover:bg-orange-100 hover:text-orange-600 dark:text-gray-200 dark:hover:bg-[#252525]">
                Clear Chat
              </button>

              <button className="w-full rounded-lg px-3 py-2 text-left text-sm text-gray-700 transition hover:bg-orange-100 hover:text-orange-600 dark:text-gray-200 dark:hover:bg-[#252525]">
                Chat History
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col items-center gap-3 text-center">
        <div className="h-20 w-20 overflow-hidden rounded-full bg-gradient-to-br from-blue-900 to-indigo-500">
          <Image
            src={assitant_img}
            alt="assistant"
            className="h-full w-full object-cover"
          />
        </div>

        <h3 className="text-base font-semibold text-gray-900 dark:text-white">
          What Can I help with?
        </h3>

        <div className="flex flex-wrap justify-center gap-2">
          {[
            "Show me my cash flow",
            "Forecast my balance",
            "Detect unusual Loan",
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleSuggestion(item)}
              className="flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs text-gray-700 transition-all hover:bg-orange-100 hover:text-orange-600 dark:bg-[#252525] dark:text-gray-300 dark:hover:bg-[#332411] dark:hover:text-orange-400"
            >
              <Globe size={14} />
              <span>{item}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3 rounded-xl bg-gray-100 p-3 shadow-inner dark:bg-[#202020]">
        <div className="flex items-start gap-2 rounded-xl bg-[#f3f4f6] px-3 py-2 dark:bg-[#252525]">
          <Sparkles
            size={14}
            className="mt-1 text-gray-700 dark:text-orange-400"
          />

          <textarea
            rows={1}
            value={message}
            onChange={handleChange}
            placeholder="Ask Anything..."
            className="max-h-[180px] min-h-[24px] flex-1 resize-none overflow-y-auto bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-500 dark:text-white dark:placeholder:text-gray-400"
          />
        </div>

        {uploadedFiles.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {uploadedFiles.map((item) => (
              <div
                key={item.id}
                className="group relative h-12 w-12 overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-[#333] dark:bg-[#252525]"
              >
                {item.preview ? (
                  <img
                    src={item.preview}
                    alt=""
                    className="h-12 w-12 object-cover"
                  />
                ) : (
                  <div className="flex h-full flex-col items-center justify-center px-2 text-center">
                    <span className="text-2xl">📄</span>

                    <span className="mt-1 line-clamp-2 text-[10px] text-gray-600 dark:text-gray-400">
                      {item.file.name}
                    </span>
                  </div>
                )}

                <button
                  onClick={() => removeFile(item.id)}
                  className="absolute right-1 top-1 hidden h-5 w-5 items-center justify-center rounded-full bg-black/70 text-white group-hover:flex"
                >
                  <X size={13} />
                </button>
              </div>
            ))}
          </div>
        )}

        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <CustomDropDown
              filters={[claudeImg, geminiImg, chatGptImg]}
              size="extraSmall"
              theme="light"
              hideFirstOption={false}
            />
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleMic}
              className={`flex h-9 w-9 items-center justify-center rounded-full transition-all ${
                isListening
                  ? "animate-pulse bg-red-500 text-white"
                  : "bg-white text-gray-700 dark:bg-[#252525] dark:text-white"
              }`}
            >
              <Mic size={15} />
            </button>

            <button
              onClick={handleUploadClick}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-700 transition hover:bg-orange-100 dark:bg-[#252525] dark:text-white dark:hover:bg-[#332411]"
            >
              <Paperclip size={15} />
            </button>

            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept="image/*,.pdf,.doc,.docx,.xls,.xlsx"
              hidden
              onChange={handleFileChange}
            />

            <button
              onClick={handleSend}
              className="flex items-center gap-2 rounded-full bg-gray-800 px-4 py-2 text-xs text-white transition-all hover:bg-black dark:bg-orange-500 dark:hover:bg-orange-600"
            >
              <SendHorizonal size={14} />
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

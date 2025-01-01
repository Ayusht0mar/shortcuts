"use client";

import { shortcuts } from "@/data/shortcuts";
import { useState, useMemo } from "react";

const ShortcutsTable = ({ pageTool }: { pageTool: string }) => {
  const [isActiveTab, setActiveTab] = useState("Windows");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredShortcuts = useMemo(() => {
    return shortcuts
      .filter((shortcut) => shortcut.tool === pageTool)
      .flatMap((shortcut) => {
        return shortcut.shortcuts.map((category) => ({
          category: category.category,
          content: category.content.filter((item) =>
            item.action.toLowerCase().includes(searchQuery.toLowerCase())
          ),
        }));
      })
      .filter((category) => category.content.length > 0); // Remove empty categories
  }, [pageTool, searchQuery]);

  return (

    <div>
      {/* Search and Tabs */}
      <div className="flex gap-4 my-8">
        <input
          type="text"
          placeholder={`Search shortcuts for ${pageTool}`}
          className="bg-white rounded-full p-2 px-6 w-full text-[#758493] outline-none"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          aria-label="Search shortcuts"
        />
        <div className="flex gap-4 bg-white rounded-full p-1">
          <button
            onClick={() => setActiveTab("Mac")}
            className={`px-4 rounded-full transition ${
              isActiveTab === "Mac"
                ? "bg-blue-500 text-white"
                : "bg-white text-[#758493] hover:bg-blue-100"
            }`}
            aria-pressed={isActiveTab === "Mac"}
          >
            Mac
          </button>
          <button
            onClick={() => setActiveTab("Windows")}
            className={`px-4 rounded-full transition ${
              isActiveTab === "Windows"
                ? "bg-blue-500 text-white"
                : "bg-white text-[#758493] hover:bg-blue-100"
            }`}
            aria-pressed={isActiveTab === "Windows"}
          >
            Windows
          </button>
        </div>
      </div>

      {/* Shortcuts Table */}
      <div>
        {filteredShortcuts.length > 0 ? (
          filteredShortcuts.map((item, index) => (
            <div
              key={`${item.category}-${index}`}
              className="flex flex-col py-2 px-4 border-b border-[#f1f1f1]"
            >
              <div className="text-lg mt-5 mb-2 font-semibold">
                {item.category}
              </div>
              <div>
                {item.content.map((shortcut, idx) => (
                  <div
                    key={`${shortcut.action}-${idx}`}
                    className="flex justify-between py-2 p-2 border-b border-black/20 hover:bg-black/10 transition"
                  >
                    <div>{shortcut.action}</div>
                    <div>
                      {isActiveTab === "Mac" ? shortcut.mac : shortcut.windows}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-500 py-4">
            No shortcuts found.
          </div>
        )}
      </div>
    </div>
  );
};

export default ShortcutsTable;

"use client";
import { useState } from "react";
import { Clipboard, ClipboardCheck, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ModeToggle } from "@/components/ui/mode-toggle";

export default function Home() {
  const [text] = useState<string>("https://example.com?q=%s"); // Example text with type
  const [copied, setCopied] = useState<boolean>(false); // "copied" state as boolean

  const handleCopy = (): void => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset the "copied" state after 2 seconds
    });
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center min-h-screen">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-center text-bold text-5xl p-4">
            Boilerplate
          </h1>
          <p className="text-center p-4">
            A simple boilerplate for a future project im working on.
          </p>
        </div>
        <div className="flex justify-center items-center w-full">
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input className="" type="text" value={text} readOnly />
            <Button
              onClick={handleCopy}
              type="submit"
              size="icon"
              variant="ghost"
              className="cursor-pointer"
            >
              {copied ? <ClipboardCheck /> : <Clipboard />}
            </Button>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 text-sm p-4">
        <div className="flex justify-center items-center space-x-2">
          <a href="https://duckduckgo.com/bangs">github</a>
          <p className="text-xl">|</p>
          <a href="https://duckduckgo.com/bangs">bangs list</a>
        </div>
      </div>
      <div className="fixed right-0 bottom-0 justify-end p-4">
        <ModeToggle />
      </div>
      <div className="fixed left-0 bottom-0 justify-end p-4">
        <p className="text-xs font-mono">1.0.0</p>
      </div>
    </div>
  );
}

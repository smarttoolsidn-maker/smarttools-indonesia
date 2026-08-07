import { useCallback, useState } from "react";

export default function useClipboard() {
  const [copied, setCopied] = useState(false);

  const copy = useCallback(async (text: string) => {
    if (!text) return false;

    try {
      await navigator.clipboard.writeText(text);

      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 2000);

      return true;
    } catch {
      return false;
    }
  }, []);

  return {
    copied,
    copy,
  };
}
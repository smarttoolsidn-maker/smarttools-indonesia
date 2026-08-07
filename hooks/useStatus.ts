import { useCallback, useState } from "react";

export default function useStatus() {
  const [status, setStatus] = useState("");

  const success = useCallback((message: string) => {
    setStatus(`✅ ${message}`);
  }, []);

  const error = useCallback((message: string) => {
    setStatus(`❌ ${message}`);
  }, []);

  const clear = useCallback(() => {
    setStatus("");
  }, []);

  return {
    status,
    success,
    error,
    clear,
  };
}
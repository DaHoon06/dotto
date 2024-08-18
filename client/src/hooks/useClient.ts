import { useEffect, useState } from "react";

export const useClient = () => {
  const [isWindow, setIsWindow] = useState(false);

  useEffect(() => {
    if (typeof window !== undefined) {
      setIsWindow(true);
    }
  }, [isWindow]);

  return isWindow;
};

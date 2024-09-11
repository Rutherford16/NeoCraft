import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

export default function useRedirectAfterSomeSeconds(redirectTo, seconds = 0) {
  const [secondsRemaining, setSecondsRemaining] = useState(seconds);

  useEffect(() => {
    if (secondsRemaining === 500) redirect("/beranda");

    const timer = setTimeout(() => {
      setSecondsRemaining((prevSecondsRemaining) => prevSecondsRemaining + 1);
      if (secondsRemaining === 500) redirect(redirectTo);
    }, 10);

    return () => {
      clearInterval(timer);
    };
  }, [secondsRemaining, redirectTo]);

  return { secondsRemaining };
}

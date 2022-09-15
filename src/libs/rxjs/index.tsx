import { useEffect } from "react";
import { Subject } from "rxjs";

export const eventManager = new Subject();
const useCheckLogout = (observe) => {
  useEffect(() => {
    eventManager.subscribe(observe);
  }, []);
  return { eventManager };
};

export default useCheckLogout;

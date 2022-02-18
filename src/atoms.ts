import { atom, selector } from "recoil";
export const minuteState = atom({
  key: "minutes",
  default: 0,
});

export const hourSelector = selector<number>({
  key: "hours",
  get: ({ get }) => {
    const minutes = get(minuteState);
    return minutes / 1200;
  },
  set: ({ set }, newValue) => {
    const minutes = Number(newValue) * 1200;
    set(minuteState, minutes);
  },
});

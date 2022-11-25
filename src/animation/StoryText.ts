export const storyAnim = {
  offscreen: {
    opacity: 0,
    y: -25,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 2,
    },
  },
};

export const aboutmeAnim = {
  offscreen: {
    opacity: 0,
    y: 0,
  },
  onscreen: {
    y: -25,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 2,
    },
  },
};

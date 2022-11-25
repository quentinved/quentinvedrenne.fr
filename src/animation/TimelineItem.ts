export const cardVariants = {
    offscreen: {
        opacity: 0,
    },
    onscreen: {
        y: 50,
        opacity: 1,
        transition: {
            type: "swing",
            bounce: 0.2,
            duration: 0.5
        }
    }
};
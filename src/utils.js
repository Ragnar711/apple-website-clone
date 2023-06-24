export const handleLearnMore = () => {
    const element = document.querySelector(".sound-section");
    window.scrollTo({
        top: element?.getBoundingClientRect().top,
        left: 0,
        behavior: "smooth",
    });
};

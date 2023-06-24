import gsap from "gsap";

export const scrollAnimation = (position, target, onUpdate) => {
    const commonScrollTriggerOptions = {
        trigger: ".sound-section",
        start: "top bottom",
        end: "top top",
        scrub: 2,
        immediateRender: false,
    };

    const tl = gsap.timeline();

    tl.to(position, {
        x: -3.38,
        y: -10.74,
        z: -5.93,
        scrollTrigger: commonScrollTriggerOptions,
        onUpdate,
    })
        .to(target, {
            x: 1.52,
            y: 0.77,
            z: -1.08,
            scrollTrigger: commonScrollTriggerOptions,
        })
        .to(".jumbotron-section", {
            opacity: 0,
            scrollTrigger: commonScrollTriggerOptions,
        })
        .to(".sound-section-content", {
            opacity: 1,
            scrollTrigger: commonScrollTriggerOptions,
        });
};

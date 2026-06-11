export const HERO_CONTENT = {
    profile: {
        name: "Elias Ricardo",
        alt: "Elias Ricardo - UX/UI Designer & Frontend",
        imgSrc: "/profile-photo.webp",
    },
    headline: {
        prefix: "UX From the",
        highlight: "Future",
    },
    status: {
        availability: "Available for work",
        location: "BR · Remote",
    },
    description:
        "I do the research, design the interface, and write the production code — using AI to compress weeks of handoff into days.",
    metrics: [
        { label: "Serasa Experian", value: "email prod 80min → 10min" },
        { label: "Support queue", value: "avg wait −22%" },
    ],
    cta: {
        primary: {
            text: "Read the case studies",
            href: "#projects",
        },
        secondary: {
            text: "GitHub",
            href: "https://github.com/eeliasricardoo",
        },
    },

    scroll: "Scroll",
} as const;

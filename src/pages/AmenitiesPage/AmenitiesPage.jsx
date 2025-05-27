import "./AmenitiesPage.scss";

function Amenities() {
    const sections = [
        {
            title1: "SPA",
            title2: "ROOM",
            highlightFirst: true,
            description:
                "Relax and rejuvenate in our spa room, featuring massage chairs, red light therapy, and other treatments desgined to enhance your recovery and help you look and feel your best throughout your fitness journey.",
            bullets: [
                "Red light therapy",
                "Massage chairs",
                "Coming Soon: In-house massage therapist and chiropractor. Non-surgical fat loss treatments to advance your body transformation process. IV Peptide Therapy",
            ],
            images: ["/images/spa1.jpg", "/images/spa2.jpg"],
        },
        {
            title1: "PREMIUM",
            title2: "EQUIPMENT",
            highlightFirst: false,
            description:
                "Train with Top-of-the-Line Equipment. Full gym with everything you would need to excel in your journey.",
            bullets: [
                "Curated premium equipment",
                "Innovative cardio equipment",
                "Functional training stations",
                "Free weights and kettle bells",
            ],
            images: ["/images/equipment1.jpg", "/images/equipment2.jpg"],
        },
        {
            title1: "ON-SITE",
            title2: "SNACK BAR",
            highlightFirst: false,
            description:
                "Fuel your workout with our on-site snack bar, offering a variety of healthy, quick snacks and shakes designed to support & enhance your fitness goals. Luxurious dining area to finish off some work or just enjoy your snacks and have a chat with friends.",
            bullets: [
                "For convenient post-workout fueling",
                "healthy and quick snacks and shakes",
                "Goal-supportive nutrition",
                "Luxurious dining area",
            ],
            images: ["/images/snackbar1.jpg", "/images/snackbar2.jpg"],
        },
    ];

    return (
        <div className="amenities">
            {sections.map((section, idx) => (
                <div key={idx} className="amenities__section">
                    <h2 className="amenities__heading">
                        <span className={`amenities__heading-text ${section.highlightFirst ? "amenities__heading-text--highlight" : ""}`}>
                            {section.title1}
                        </span>{" "}
                        <span className={`amenities__heading-text ${!section.highlightFirst ? "amenities__heading-text--highlight" : ""}`}>
                            {section.title2}
                        </span>
                    </h2>
                    <p className="amenities__description">{section.description}</p>
                    <ul className="amenities__bullets">
                        {section.bullets.map((bullet, i) => (
                            <li key={i} className="amenities__bullet-item">
                                <span className="amenities__bullet-icon">✔</span> {bullet}
                            </li>
                        ))}
                    </ul>
                    {/* 
                    <div className="amenities__slider">
                        {section.images.map((imgSrc, i) => (
                            <img key={i} src={imgSrc} alt={`Slide ${i + 1}`} />
                        ))}
                    </div> */}
                </div>
            ))}

            <div className="amenities__section">
                <h2 className="amenities__heading">
                    <span className="amenities__heading-text">ADDITIONAL</span>{" "}
                    <span className="amenities__heading-text amenities__heading-text--highlight">BENEFITS</span>
                </h2>
                <p className="amenities__description">
                    We're all about making your club experience top-notch—easy, safe, and totally worth it. Think free Wi-Fi to keep you connected and advanced air filtration for a healthy workout environment. We've got your back.
                </p>
            </div>
        </div>
    );
}

export default Amenities;

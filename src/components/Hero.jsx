import "../css/Hero.css";

function Hero({
  title,
  subtitle,
  backgroundType = "video",
  videoSrc,
  imageSrc,
  links = []
}) {
  return (
    <section className="hero">

      {/* Background */}
      {backgroundType === "video" && videoSrc && (
        <video className="hero-media" autoPlay loop muted playsInline>
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}

      {backgroundType === "image" && imageSrc && (
        <img className="hero-media" src={imageSrc} alt={title || "Hero"} />
      )}

      {/* Overlay */}
      <div className="hero-overlay"></div>

      {/* Content */}
      <div className="hero-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>

        <div className="hero-links">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              target={link.external ? "_blank" : "_self"}
              rel={link.external ? "noreferrer" : undefined}
              className={link.type === "button" ? "hero-link-button" : "hero-link"}
            >
              {link.icon && <img className="hero-links-icon" src={link.icon} alt="" />}
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <div className="hero-bottom-fade"></div>

    </section>
  );
}

export default Hero;
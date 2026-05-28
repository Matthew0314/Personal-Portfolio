
import "../css/ProjectInfo.css";
function ProjectInfo({ title, description, bulletPoints, videoSrc, imageSrc, links, backgroundColor }) {

    return (

        <div className="projectInfo" style={{ backgroundColor }}>
            <div>
                <h2>{title}</h2>
            </div>
            <div className="projectInfoTextContainer">
                <p>{description}</p>

                {Array.isArray(bulletPoints) && bulletPoints.length > 0 && (
                <div className="project-description">
                    <ul>
                    {bulletPoints
                        ?.filter(item => item && item.trim?.() !== "")
                        .map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </div>
                )}
            </div>

            {videoSrc && (
                <div className="projectVideoInbed">
                <iframe
                    width="560"
                    height="315"
                    src={videoSrc}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                />
                </div>
            )}
            
        </div>

    );
}

export default ProjectInfo;
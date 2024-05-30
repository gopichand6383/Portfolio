

const Project = ({ project }) => {
    return (
        <div className="project_card" style={{backgroundColor: project.cardTheme}}>
            <div className="card_header">
                <div className="company">{project.company}</div>
                <div className={`category ${project.cardTheme === '#E84C4F' ? 'contrast' : ''}`}>{project.category}</div>
            </div>
            <div className="contribution">
                <div className="title">{project.contribution.title}:</div>
                <div className="info">{project.contribution.info}</div>
            </div>
            {project.achievements.length > 0 && (
            <div className="achievements">
                {project.achievements.map((achievement, index) => {
                    return (
                        
                        <div key={index} className="achievement">
                           
                            <div className="value">{achievement.value}</div>
                            <div className="title">{achievement.title}</div>

                        </div>
                        
                    );
                })}
            </div>
            )}
                 <a target='_blank' href={project.projectLink}><img src={project.workSampleImg} alt=""/></a>
        </div>
    )
}

export default Project;
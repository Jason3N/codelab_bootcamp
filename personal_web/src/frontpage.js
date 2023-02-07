import './frontpage.css';

function FrontPage(){
    return (
        <div className = "website">
            <div className = "introduction">
                <div className = "top_intro">
                    Hello! My name is Jason Nguyen!
                </div>
                <div className = "mid_intro">
                    I'm a second year Computer Science Student attending UC Davis.
                </div>
                <div className = "low_intro">
                     I'm currently particpating in CodeLab's WSQ23 co-hort and working to create Playground, a thing used to do the thing.
                     <div>
                        Below is my resume, projects, and interests.
                     </div>
                </div>
            </div>
            <div className = "resume">
            Resume! (as of 02/06/23)
            </div>
            <div className = "projects">
            Projects!
            <div>
                Davis Dining Commons (For HackDavis)
            </div>
            <div>
                AggieReview
            </div>
            </div>
        <div className = "interests">
            Interests
                <div>
                    Movies!
                </div>
            </div>
        </div>
    )
}

export default FrontPage;

import skills1 from '../pp.images/html5.svg';
import skills2 from '../pp.images/css3-alt.svg';
import skills3 from '../pp.images/react.svg';

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Skills</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>

                            <div className="item">
                                <img src="" alt="Image" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={skills1} alt="Image" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={skills2} alt="Image" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={skills3} alt="Image" />
                                <h5>React</h5>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
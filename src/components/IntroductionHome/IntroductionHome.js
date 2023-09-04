import React , {useEffect} from "react";
import LiveBg1 from "./LiveBg1";

import "./IntroductionHome.css";

// Import Aos
import AOS from "aos";


const IntroductionHome = () => {
    useEffect(() => {
        AOS.init({
          duration: 1200,
          easing: "ease",
        });
        AOS.refresh();
      }, []);
    
    return (
        <section className="introduction-home flex-vr">
            <h1 className="title flex-vr" data-aos="fade">
                What is Styliato?
            </h1>
            <p data-aos="fade-up">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur at cum ipsam quam quos! Deleniti
                molestiae natus repellendus! Blanditiis eum numquam, pariatur quae quas soluta tempore. Minima omnis
                pariatur provident quia, ullam velit? A, alias consequatur cum doloremque harum iusto laboriosam nihil
                obcaecati quae quisquam recusandae tenetur ullam, vel! A adipisci autem cum fugiat ipsa ipsum, minus non
                pariatur repudiandae ut! Culpa nisi placeat quidem, recusandae temporibus voluptatibus. Ab cupiditate
                dignissimos dolorem dolorum error, et id incidunt maxime odio perspiciatis repudiandae ut, voluptates.
                Culpa cupiditate deleniti ea ex facere iusto magni, maxime minus modi molestiae neque nesciunt provident
                quae quisquam quos ratione sed soluta veniam vero, voluptatem? Adipisci eos mollitia quos reprehenderit
                vitae. Adipisci asperiores dicta dolor dolore ducimus ea eius id impedit, inventore laudantium magnam
                nam neque praesentium quae rerum velit veniam. A accusantium at aut beatae dignissimos dolor doloribus
                dolorum eligendi eos esse eveniet, fugit ipsum molestiae, nobis porro quas reprehenderit rerum! Aliquid
                at beatae dolorum enim, est excepturi fugit labore perspiciatis placeat tempore! Culpa dolor ex fugiat
                illo, maxime necessitatibus qui. Architecto est explicabo facere inventore magni mollitia neque possimus
                similique veniam voluptate? Animi dignissimos dolorum eligendi eum, harum impedit inventore iusto labore
                laborum molestias officiis voluptates.
            </p>
            <a href="/" className="btn reveal flex-vr">
                Enter To Search Style Engine
            </a>
            <LiveBg1/>
        </section>
    );
};

export default IntroductionHome;
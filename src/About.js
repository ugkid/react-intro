import React from "react";

const H2 = () => {
  return <h2>About Me</h2>;
};

const Profile = () => {
  return <img src="https://randomuser.me/api/portraits/women/8.jpg" />;
};

const Type = () => {
  return (
    <article>
      <ol>
        <li>
          <p>
            <b>Pop</b> culture maven. Beer fan. Award-winning music junkie.
            Extreme coffee enthusiast. Thinker. Tv specialist.
          </p>
        </li>
        <li>
          <p>
            <b>Friendly</b> web maven. Bacon lover. General internet specialist.
            Incurable travel scholar.
          </p>
        </li>
        <li>
          <p>
            <b>Subtly</b> charming twitter lover. Social media fan. Incurable
            travel geek. Lifelong pop culture specialist. Tv scholar.
          </p>
        </li>
        <li>
          <p>
            <b>Unable</b> to type with boxing gloves on. Proud bacon fan. Music
            junkie. Coffee ninja. Beer specialist.
          </p>
        </li>
      </ol>
    </article>
  );
};

const About = () => {
  return (
    <section id="about-me">
      <H2 />
      <Profile />
      <Type />
    </section>
  );
};

export default About;

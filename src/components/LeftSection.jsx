import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  .header {
    margin-bottom: 40px;
    h1 {
      font-size: 6.25rem;
      color: #fff;
      line-height: 1;
      font-weight: 700;
      margin-bottom: 16px;
      font-family: 'Ubuntu', sans-serif;
    }

    h4 {
      font-weight: 500;
      font-size: 2.4rem;
      color: var(--text-alt);
    }
  }
  .description {
    p {
      line-height: 2;

      span {
        color: var(--text-white);
      }
    }
  }

  @media screen and (max-width: 757px) {
    .header {
      h1 {
        font-size: 4.25rem;
      }
      h4 {
        font-size: 2rem;
      }
    }
  }
`;

const Navigation = styled.div`
  gap: 50px;
  margin-top: 50px;
`;

const NavWrap = styled.div`
  a {
    gap: 10px;
    font-weight: 700;
    font-size: 1rem;
    opacity: 0.89;
    text-transform: uppercase;
    letter-spacing: 3px;
  }
  a.active,
  a:hover {
    color: var(--text-white);
    .line {
      width: 48px;
    }
  }
  .line {
    width: 24px;
    background-color: #fff;
    height: 1px;
    display: block;
    transition: all 0.3s ease-in-out;
  }
`;

const SocialsWrapper = styled.div`
  margin-top: 90px;
  gap: 30px;
  .icon-wrap {
    gap: 10px;
    color: var(--text-white);
    opacity: 0.8;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }
`;

const NavItem = (props) => {
  return (
    <NavWrap>
      <NavLink className="flex-center jc-s" to={props.link}>
        <span>{props.number}</span> <span className="line"></span>
        {props.name}
      </NavLink>
    </NavWrap>
  );
};
const Icon = ({ iconClass, name }) => {
  return (
    <div className="icon-wrap flex ai-c">
      <i className={iconClass}></i>
      <p>{name}</p>
    </div>
  );
};
const LeftSection = () => {
  return (
    <Wrapper>
      <div className="header">
        <h1>Rehk Mansa</h1>
        <h4>Freelance Frontend Developer</h4>
      </div>
      <div className="description">
        <p>
          Hello, I'm <span>Rehk</span>, a frontend developer. I love
          <span> problem solving</span> and critical thinking, I live for the
          challenge, I use coding as a tool to
          <span> solve problems</span>. I am currently interested in
          <span> building interactive</span> UI's for game development.
        </p>
        <Navigation className="flex f-c ac-s">
          <NavItem name="Projects" link="/" number={'00'} />
          <NavItem name="Resume" link="resume" number={'01'} />
          {/* <NavItem name="Articles" link="write-ups" number={'02'} /> */}
        </Navigation>
        <SocialsWrapper className="flex-20 ai-c ">
          <Icon iconClass="fab fa-github" name="GitHub" />
          <Icon iconClass="fab fa-linkedin" name="Linkedin" />
          <Icon iconClass="fa-solid fa-at" name="Email" />
        </SocialsWrapper>
      </div>
    </Wrapper>
  );
};

export default LeftSection;

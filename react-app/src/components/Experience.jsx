import '../App.css';
import source from '../resources.js';

export default function Experience() {
  return (
    <div className='card'>
      <Avatar />
      <div className='data'>
        <Intro />
        <ul className='skill-list'>
          {source[0].skills.map((el) => (
            <Skill
              key={el.id}
              title={el.title}
              emoji={el.emoji}
              colorBg={el.colorBg}
              color={el.color}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <figure>
      <img
        className='avatar'
        src='https://images.unsplash.com/photo-1709796590657-7d54c981e61f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3DD'
      />
    </figure>
  );
}

function Intro() {
  return (
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
      vitae provident ipsam ad. Provident animi labore architecto soluta quaerat
      earum!
    </p>
  );
}

function Skill({ title, emoji, colorBg, color }) {
  return (
    <li style={{ backgroundColor: colorBg, color: color }} className='skill'>
      {title}
      {'\n'}
      {emoji}
    </li>
  );
}

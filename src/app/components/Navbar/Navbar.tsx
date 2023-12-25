import Link from 'next/link';

import classes from './Navbar.module.css';

const Navbar: React.FC = () => {
  const { container, name } = classes;

  return (
    <div className={container}>
      <div className={name}>LIVE STATS</div>
      <div>
        <Link href="/live-stats">Live</Link>
        <div>
          <input type="text" />
          <button></button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

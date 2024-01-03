import { MatchType } from './MatchTypes';
import Image from 'next/image';

import classes from './Match.module.css';

const Match: React.FC<{ matchInformation: MatchType }> = ({
  matchInformation,
}) => {
  const { fixture, league, teams, goals, score } = matchInformation;
  const { container } = classes;

  return (
    <div className={container}>
      <div>{league.name}</div>
      {league.flag && (
        <Image
          src={league?.flag}
          alt={`${league?.country} flag`}
          width={30}
          height={30}
        ></Image>
      )}
    </div>
  );
};

export default Match;

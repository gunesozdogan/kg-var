'use client';
import { MatchType } from '../Match/MatchTypes';
import { UtilsInstance } from '../utils/utils';

import Match from '../Match/Match';
import Utils from '../utils/utils';

import classes from './Fixture.module.css';

const Fixture: React.FC<{ data: MatchType[] }> = ({ data }) => {
  const { container } = classes;
  const utils: UtilsInstance = Utils();

  utils.groupByLeague(data);

  return (
    <div className={container}>
      <div>
        {data.map((matchData) => (
          <Match key={matchData.fixture.id} matchInformation={matchData} />
        ))}
      </div>
    </div>
  );
};

export default Fixture;

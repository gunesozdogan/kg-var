import { MatchType } from '../Match/MatchTypes';

export type UtilsInstance = {
  groupByLeague: (data: MatchType[]) => void;
};

type MatchGroup = {
  [key: number]: [MatchType];
};

const Utils = (): UtilsInstance => {
  const groupByLeague = (data: MatchType[]): void => {
    const matchGroups: MatchGroup = {};

    data.forEach((match) => {
      const leagueId = match.league.id;
      if (!matchGroups[leagueId]) {
        matchGroups[leagueId] = [match];
      } else {
        matchGroups[leagueId].push(match);
      }
    });

    console.log(matchGroups);
  };

  return { groupByLeague } as UtilsInstance;
};

export default Utils;

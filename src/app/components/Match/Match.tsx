import { MatchType } from "./MatchTypes";

const Match: React.FC<{ matchInformation: MatchType }> = ({
  matchInformation,
}) => {
  const { fixture, league, teams, goals, score } = matchInformation;

  return <div>{league.name}</div>;
};

export default Match;

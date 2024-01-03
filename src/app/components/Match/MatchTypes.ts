type Fixture = {
  id: number;
  referee: null | string;
  timezone: string;
  date: string;
  timestamp: number;
  periods: {
    first: null | any;
    second: null | any;
  };
  venue: {
    id: number;
    name: string;
    city: string;
  };
  status: {
    long: string;
    short: string;
    elapsed: null | any;
  };
};

type League = {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag: string;
  season: number;
  round: string;
};

type Team = {
  id: number;
  name: string;
  logo: string;
  winner: null | any;
};

type Goals = {
  home: null | any;
  away: null | any;
};

type Halftime = {
  home: null | any;
  away: null | any;
};

type Fulltime = {
  home: null | any;
  away: null | any;
};

type Extratime = {
  home: null | any;
  away: null | any;
};

type Penalty = {
  home: null | any;
  away: null | any;
};

type Score = {
  halftime: Halftime;
  fulltime: Fulltime;
  extratime: Extratime;
  penalty: Penalty;
};

export type MatchType = {
  fixture: Fixture;
  league: League;
  teams: {
    home: Team;
    away: Team;
  };
  goals: Goals;
  score: Score;
};

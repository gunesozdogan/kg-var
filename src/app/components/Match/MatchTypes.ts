interface Fixture {
  id: number;
  referee: null | string;
  timezone: string;
  date: string;
  timestamp: number;
  periods: {
    first: null | any; // You can replace 'any' with a more specific type if needed
    second: null | any; // You can replace 'any' with a more specific type if needed
  };
  venue: {
    id: number;
    name: string;
    city: string;
  };
  status: {
    long: string;
    short: string;
    elapsed: null | any; // You can replace 'any' with a more specific type if needed
  };
}

interface League {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag: string;
  season: number;
  round: string;
}

interface Team {
  id: number;
  name: string;
  logo: string;
  winner: null | any; // You can replace 'any' with a more specific type if needed
}

interface Goals {
  home: null | any; // You can replace 'any' with a more specific type if needed
  away: null | any; // You can replace 'any' with a more specific type if needed
}

interface Halftime {
  home: null | any; // You can replace 'any' with a more specific type if needed
  away: null | any; // You can replace 'any' with a more specific type if needed
}

interface Fulltime {
  home: null | any; // You can replace 'any' with a more specific type if needed
  away: null | any; // You can replace 'any' with a more specific type if needed
}

interface Extratime {
  home: null | any; // You can replace 'any' with a more specific type if needed
  away: null | any; // You can replace 'any' with a more specific type if needed
}

interface Penalty {
  home: null | any; // You can replace 'any' with a more specific type if needed
  away: null | any; // You can replace 'any' with a more specific type if needed
}

interface Score {
  halftime: Halftime;
  fulltime: Fulltime;
  extratime: Extratime;
  penalty: Penalty;
}

export interface MatchType {
  fixture: Fixture;
  league: League;
  teams: {
    home: Team;
    away: Team;
  };
  goals: Goals;
  score: Score;
}

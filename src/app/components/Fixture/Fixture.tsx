import { MatchType } from '../Match/MatchTypes';
import Match from '../Match/Match';

const Fixture: React.FC<{ data: MatchType[] }> = ({ data }) => {
  console.log(data);
  return (
    <div>
      {data.map((matchData) => (
        <Match key={matchData.fixture.id} matchInformation={matchData} />
      ))}
    </div>
  );
};

export async function getServerSideProps() {
  const respond = await fetch(
    'https://gist.githubusercontent.com/gunesozdogan/271ef50003a7b6d3644a0c8fa36ba3b7/raw/ccbcc1ca3f7e1855293914471a4f8ea6c67de1c9/gistfile1.txt'
  );
  const data = await respond.json();
  console.log(data);
  return {
    props: {
      data,
    },
  };
}

export default Fixture;

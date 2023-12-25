import Fixture from './components/Fixture/Fixture';

const Page: React.FC = async () => {
  const respond = await fetch(
    'https://gist.githubusercontent.com/gunesozdogan/271ef50003a7b6d3644a0c8fa36ba3b7/raw/ccbcc1ca3f7e1855293914471a4f8ea6c67de1c9/gistfile1.txt'
  );
  const data = await respond.json();

  return <Fixture data={data} />;
};

export default Page;

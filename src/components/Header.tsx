import { fetchData } from '../../fetchData';

type HeaderProps = {
  handleUpdateData: (newData: any[]) => void;
};

const Header = ({ handleUpdateData }: HeaderProps) => {
  return (
    <header>
      <div className="btn-group">
        <button
          onClick={async () => handleUpdateData(await fetchData('users'))}
        >
          users
        </button>
        <button
          onClick={async () => handleUpdateData(await fetchData('posts'))}
        >
          posts
        </button>
        <button
          onClick={async () => handleUpdateData(await fetchData('comments'))}
        >
          comments
        </button>
      </div>
    </header>
  );
};

export default Header;

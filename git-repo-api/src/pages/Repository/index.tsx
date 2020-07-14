import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Header, RepositoryInfo, Issues } from './style';

interface RepositoryParams {
    repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  return (
    <>
      <Header>
        <img src={logoImg} alt="GitHub Explorer" />
        <Link to="/"> <FiChevronLeft size={16} /> Voltar</Link>
      </Header>
      <RepositoryInfo>
        <header>
          <img src="https://avatars0.githubusercontent.com/u/31904963?s=460&u=dddc6c1b0dfbf9d6d8d29346e7b9ded89b48f71e&v=4" alt="avatar" />
          <div>
            <strong>{params.repository}</strong>
            <p>Um repositório</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1808</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>78</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>67</strong>
            <span>Issues</span>
          </li>
        </ul>
      </RepositoryInfo>
      <Issues>
        <Link to="/">

          <div>
            <strong>ABC</strong>
            <p>DEF</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </Issues>

    </>
  );
};
export default Repository;

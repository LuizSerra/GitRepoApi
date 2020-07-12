import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Title, Form, Repositories } from './style';
import logoImg from '../../assets/logo.svg';

const Dashboard: React.FC = () => (
  <>
    <img src={logoImg} alt="GitHub Explorer" />
    <Title>Explore repositórios no Github.</Title>
    <Form>
      <input placeholder="Digite o nome de um repositório" />
      <button type="submit">Pesquisar</button>
    </Form>
    <Repositories>
      <a href="teste">
        <img src="https://avatars0.githubusercontent.com/u/31904963?s=460&u=dddc6c1b0dfbf9d6d8d29346e7b9ded89b48f71e&v=4" alt="avatar" />
        <div>
          <strong>LuizSerra/Coletanea</strong>
          <p>Um app para exibir coletâneas</p>
        </div>
        <FiChevronRight size={20} />
      </a>
      <a href="teste">
        <img src="https://avatars0.githubusercontent.com/u/31904963?s=460&u=dddc6c1b0dfbf9d6d8d29346e7b9ded89b48f71e&v=4" alt="avatar" />
        <div>
          <strong>LuizSerra/Coletanea</strong>
          <p>Um app para exibir coletâneas</p>
        </div>
        <FiChevronRight size={20} />
      </a>
      <a href="teste">
        <img src="https://avatars0.githubusercontent.com/u/31904963?s=460&u=dddc6c1b0dfbf9d6d8d29346e7b9ded89b48f71e&v=4" alt="avatar" />
        <div>
          <strong>LuizSerra/Coletanea</strong>
          <p>Um app para exibir coletâneas</p>
        </div>
        <FiChevronRight size={20} />
      </a>
    </Repositories>
  </>
);
export default Dashboard;

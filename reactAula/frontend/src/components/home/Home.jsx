import React from "react";
import Main from '../template/Main';

const Home = () => (
    <Main icon="home" title="Início" subtitle="Primeiro Projeto com capitulo de React.">
        <div className="display-4"> Bem-vindo! </div>
        <hr />
        <p className="mb-3"> Sistema para exemplificar a construção de um cadstro desenvolvido em React!</p>
    </Main>
);

export default Home;
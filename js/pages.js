export const paginas = {
    inicio: `
        <section>
            <h2>Quem Somos</h2>
            <p>
                O Projeto Som que Transforma é uma iniciativa social que utiliza
                a música como ferramenta de inclusão sociocultural para crianças
                e adolescentes.
            </p>
        </section>

        <section>
            <h2>Nossa Missão</h2>
            <p>
                Promover oportunidades de aprendizado, desenvolvimento pessoal
                e integração social por meio da educação musical.
            </p>
        </section>

        <section>
            <h2>Como Participar</h2>
            <p>
                Você pode apoiar o projeto por meio de doações, trabalho
                voluntário ou participação em nossas iniciativas.
            </p>
        </section>
    `,

    projetos: `
        <section>
            <h2>Projetos Sociais</h2>
            <p>Conheça as ações desenvolvidas pelo Projeto Som que Transforma.</p>
        </section>
    `,

   cadastro: `
    <section>
        <h2>Cadastro de Apoiador</h2>

        <form id="form-cadastro">

            <fieldset>
                <legend>Dados pessoais</legend>

                <label for="nome">Nome completo:</label>
                <input type="text" id="nome" name="nome"
                       placeholder="Digite seu nome completo" 
                       minlength="3"
                       required>

                <br><br>

                <label for="email">E-mail:</label>
                <input type="email" id="email" name="email"
                       placeholder="exemplo@email.com" required>

                <br><br>

                <label for="nascimento">Data de nascimento:</label>
                <input type="date" id="nascimento" name="nascimento" required>

                <br><br>

                <label for="cpf">CPF:</label>
                <input type="text"
                       id="cpf"
                       name="cpf"
                       pattern="[0-9]{3}\\.[0-9]{3}\\.[0-9]{3}-[0-9]{2}"
                       placeholder="000.000.000-00"
                       required>

                <br><br>

                <label for="telefone">Telefone:</label>
                <input type="tel"
                       id="telefone"
                       name="telefone"
                       pattern="\\([0-9]{2}\\) [0-9]{5}-[0-9]{4}"
                       placeholder="(00) 00000-0000"
                       required>
            </fieldset>

            <fieldset>
                <legend>Endereço</legend>

                <label for="cep">CEP:</label>
                <input type="text"
                       id="cep"
                       name="cep"
                       pattern="[0-9]{5}-[0-9]{3}"
                       placeholder="00000-000"
                       required>

                <br><br>

                <label for="endereco">Endereço:</label>
                <input type="text" id="endereco" name="endereco">

                <br><br>

                <label for="numero">Número:</label>
                <input type="text" id="numero" name="numero">

                <br><br>

                <label for="complemento">Complemento:</label>
                <input type="text" id="complemento" name="complemento">

                <br><br>

                <label for="cidade">Cidade:</label>
                <input type="text" id="cidade" name="cidade">

                <br><br>

                <label for="estado">Estado:</label>
                <input type="text" id="estado" name="estado">
            </fieldset>

            <br>

            <button type="submit">Cadastrar</button>

        </form>
    </section>
`
};
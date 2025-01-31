import Caixa_input from "@/app/componentes/input_dados";

//funcao para a pagina de cadastro do usuario

export default function Cadastro(){

    return(
        <div className="w-[100vw] h-[100vh] flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            {/*backgroud principal da tela de cadastro e estilizacao */}

            <div className="w-[70%] h-[80%] flex flex-col items-center justify-center rounded-2xl gap-3 bg-red-300 bg-opacacity-50">
                {/*divisoria separando os dados de cadastro do background principal*/}

                <h1 className="flex text-xl"> Dados de Cadastro</h1>

                <form className="w-[80%] h-[80%] flex flex-col gap-1 rounded-md bg-white bg-opacity-50">
                    {/*formulario que ira receber os dados do usuario e uso do componete Caixa_input para facilitar o processo*/}

                    <Caixa_input label="Nome" placeholder_aux="Coloque seu nome" tipo="text"></Caixa_input>

                    <Caixa_input label="Celular/Telefone" placeholder_aux="Número" tipo="text"></Caixa_input>

                    <Caixa_input label="E-mail" placeholder_aux="Coloque seu e-mail" tipo="email"></Caixa_input>

                    <Caixa_input label="Senha" placeholder_aux="Crie uma senha" tipo="password"></Caixa_input>

                    <Caixa_input label="Confirme sua senha" placeholder_aux="Repita a senha" tipo="password"></Caixa_input>

                    <div className="flex flex-col items-center justify-center">
                        {/*divisoria para centralizar e isolar a declaracao do input de confirmacao de concordancia 
                         com os termos de uso */}
                    
                        <Caixa_input label="Concordo com os termos de uso" placeholder_aux="" tipo="checkbox"></Caixa_input>

                        <button type="submit" className="p-2 w-[100%] md: w-[80%] border-2 border-orange-400 rounded-2xl bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-green-400 hover:to-blue-500">Confirmar</button>
                        {/*botao que corresponde a checkbox que recebera a confirmacao do usuario */}
                    </div>


                </form>




            </div>


        </div>

    );


}
import Image from "next/image";
import { redirect } from "next/navigation"; 
import  Link  from "next/link";
import Caixa_input from "./componentes/input_dados";

export default function Home() {
  return (
    
    //codigo referente a tela de login do usuario, com link de redirecionamento para a pagina de cadastro
    //foram adicionados alguns md para tentar melhorar a responsividade do projeto
    

    <div className="border-2 border-red-600 w-[100vw] h-[100vh] flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
     {/*background da tela de login e estilizacao*/}

      <div className="border-2 border-green-500 w-[80%] md:w-[80%] h-[70%] md: h-[80%] rounded-2xl flex items-center justify-center bg-red-300 bg-opacacity-50">
        {/*separacao entre o background e a secao onde sao inseridos os dados na tela de login */}


        <div className="border-2 border-blue-700 w-[90%] h-[80%] flex flex-col rounded-md gap-4 items-center bg-white bg-opacity-75">

          <h1 className="border-2 border-black text-center flex text-2xl ">Login</h1>
            <div className="flex items-center justify-center border-2 border-red-400 w-[100%] h-[100%]">
              {/*divisao que comportara o formulario */}
            
              <form className="border-2 border-black flex flex-col items-center gap-3 md:w-[70%] md: h-[80%] bg-blue ">
                {/*declaracao do formulario e uso de componentes correspondentes as caixas de dados*/}

                <Caixa_input label="Usuário" placeholder_aux="Insira seu e-mail" tipo="password"></Caixa_input>

                <Caixa_input label="Senha" placeholder_aux="Senha" tipo="password"></Caixa_input>
              
                <button className="p-2 w-[100%] md: w-[80%] border-2 border-orange-400 rounded-2xl bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-green-400 hover:to-blue-500">Entrar</button>
                {/*Botao de entrar e estilizacao */}

                <div className="flex items-center justify-center">
                  <Link href="/cadastro">Cadastrar-se</Link>
                  {/*link de redirecionamento do usuario para a pagina de cadastro */}
                </div>
              </form>
            </div>



        </div>

      </div>
      
    </div>
  );
}

"use client"; 
import  Link  from "next/link";
import Caixa_input from "./componentes/input_dados";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  return (
    
    //codigo referente a tela de login do usuario, com link de redirecionamento para a pagina de cadastro
    //foram adicionados alguns md para tentar melhorar a responsividade do projeto
    

    <div className=" w-[100vw] h-[100vh] flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
     {/*background da tela de login e estilizacao*/}

      <div className="w-[80%] md:w-[80%] h-[70%] md: h-[80%] rounded-2xl flex items-center justify-center bg-red-300 bg-opacacity-50">
        {/*separacao entre o background e a secao onde sao inseridos os dados na tela de login */}


        <div className="w-[90%] h-[80%] flex flex-col rounded-md gap-4 items-center bg-white bg-opacity-75">

          <h1 className="text-center flex text-2xl ">Login</h1>
            <div className="flex items-center justify-center w-[100%] h-[100%]">
              {/*divisao que comportara o formulario */}
            
              <form className="flex flex-col items-center gap-3 md:w-[70%] md: h-[80%] bg-blue ">
                {/*declaracao do formulario e uso de componentes correspondentes as caixas de dados*/}

                <Caixa_input label="Usuário" placeholder_aux="Insira seu e-mail" tipo="email"></Caixa_input>

                <Caixa_input label="Senha" placeholder_aux="Senha" tipo="password"></Caixa_input>
              
                <button type= "submit" className="p-2 w-[100%] md: w-[80%] border-2 border-orange-400 rounded-2xl bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-green-400 hover:to-blue-500"
                onClick={() =>"/homepage"}>Entrar</button>

                {/*Botao de entrar redirecionando para a pagina principal e estilizacao */}

                <div className="flex items-center justify-center">
                  <Link href="/cadastro">Cadastrar-se</Link>
                  {/*link de redirecionamento do usuario para a pagina de cadastro */}
                </div>

                <div className="flex items-center justify-center">
                  <Link href="/homepage">Entrar como visitante</Link>
                  {/*link de redirecionamento do usuario para a pagina de principal */}
                </div>

              </form>
            </div>



        </div>

      </div>
      
    </div>
  );
}

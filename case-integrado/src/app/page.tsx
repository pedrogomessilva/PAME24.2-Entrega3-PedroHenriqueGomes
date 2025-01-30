import Image from "next/image";
import { redirect } from "next/navigation"; 
import  Link  from "next/link";
import Caixa_input from "./componentes/input_dados";

export default function Home() {
  return (
    <div className="border-2 border-red-600 w-[100vw] h-[100vh] flex items-center justify-center bg-orange-400"> 

      <div className="border-2 border-green-500 w-[80%] md:w-[80%] h-[70%] md: h-[80%] rounded-2xl flex items-center justify-center bg-gray-500">


        <div className="border-2 border-blue-700 w-[90%] h-[80%] flex flex-col rounded-md gap-4 items-center bg-white">

          <h1 className="border-2 border-black text-center flex text-2xl ">Login</h1>
            <div className="flex items-center justify-center border-2 border-red-400 w-[100%] h-[100%] bg-white">
            
              <form className="border-2 border-black flex flex-col gap-3 md:w-[70%] md: h-[80%] bg-blue">

                <Caixa_input label="Usuário" placeholder_aux="Insira seu e-mail" tipo="password"></Caixa_input>

                <Caixa_input label="Senha" placeholder_aux="Senha" tipo="password"></Caixa_input>
              
                <button className="p-2 w-[100%] border-2 border-orange-400 round-2xl bg-orange-400">Entrar</button>

                <div className="flex items-center justify-center">
                  <Link href="/Cadastro">Cadastrar-se</Link>
                </div>
              </form>
            </div>



        </div>

      </div>
      
    </div>
  );
}

import Caixa_input from "@/app/componentes/input_dados";

export default function Inicio(){

    

    return(
        
        <div className="border-2 border-red-400 w-[100vw] h-[100vh] flex flex-row justify-start gap-2  ">
            {/*definindo a tela total que sera dividida em sidebar e catalogo */}


            <div className="border-2 border-green-400 w-[15%] h-[100%]">
            {/*sidebar*/}
            



            </div>

            <div className="flex flex-col w-[85%] h-[100%]">


                <Caixa_input label="Buscar" placeholder_aux="O que você procura?" tipo="search"></Caixa_input>
                {/*caixa de busca*/}

           

                <div className="border-2 border-blue-400 w-[100%] h-[100%] flex grid grid-flow-col grid-cols-2 grid-rows-2 gap-2">                    
                {/*tela principal com os pirulitos*/}



                </div>

            </div>









        </div>
        

    );



}
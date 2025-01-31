import Caixa_input from "@/app/componentes/input_dados";
import  Link  from "next/link";
import Pirulito from "@/app/componentes/pirulitos";
export default function Inicio(){

    

    return(
        
        <div className="w-[100vw] h-[100vh] flex flex-row justify-start gap-2  ">
            {/*definindo a tela total que sera dividida em sidebar e catalogo */}


            <div className="w-[25%] h-[100%] md:w-[10%] flex flex-col justify-around bg-green-300">
            {/*sidebar*/}

                <div className="w-[100%] h-[10%] md:h-[5%] flex justify-center">

                    <button className="p-2 w-[80%] md: w-[80%] rounded-2xl">Página Inicial</button>
                    {/*Botao pagina inicial da sidebar */}

                </div>

                <div className="w-[100%] h-[12%] md: h-[8%] flex justify-center">

                    <button className="p-2 w-[80%] md: w-[80%] rounded-2xl">Favoritos</button>
                    {/*Botao secao favoritos da sidebar */}

                </div>


                <div className="w-[100%] h-[12%] md: h-[8%] flex justify-center">

                    <button className="p-2 w-[80%] md: w-[80%] rounded-2xl">Meu Perfil</button>
                    {/*Botao perfil da sidebar */}



                </div>
            

            </div>

            <div className="flex flex-col w-[85%] h-[100%]">

                <div className="text-2xl flex items-center justify-center">
                    {/*titulo da marca de pirulitos */}
                    <h1>ZeroLito</h1>

                </div>
                


                <Caixa_input label="Buscar" placeholder_aux="O que você procura?" tipo="search"></Caixa_input>
                {/*caixa de busca*/}

           

                <div className=" w-[100%] md:w-[60%] h-[100%] md:h-[90%] flex justify-items-center grid grid-flow-col grid-cols-2 grid-rows-2 gap-1">                    
                {/*tela principal com os pirulitos*/}



                    <div className=" w-[80%] md:w-[60%] h-[90%] md: h-[60%] rounded-xl bg-red-300 bg-opacity-50">
                    {/*caixa de item do canto superior esquerdo */}


                        <div className="border-2 border-green-400 w-[100%] md:w-[100%] h-[30%] md:h-[50%] ">
                            <img className="object-scale-down" src="/images/pirulito.png.jpg"/>

                        </div>
 
                        <Pirulito sabor="Cereja" receita="Eritritol, isomalte, acidulante, ácido cítrico, aromatizante natural sabor cereja e corante carmin." descricao="Novidade!" preco="R$4,99" endereco="/cereja"></Pirulito>

                    </div>

                    <div className="w-[80%] md:w-[60%] h-[90%] md:h-[60%] rounded-xl bg-purple-300 bg-opacity-50">
                        {/*caixa de item do canto inferior esquerdo */}
                    
                        <div className="border-2 border-green-400 w-[100%] md:w-[100%] h-[30%] md:h-[50%]">
                            <img className="object-scale-down" src="/images/pirulito_roxo.jpg"/>

                    </div>

                        <Pirulito sabor="Uva" receita="Água e uva" descricao="Refrescante e único!" preco="R$3,99" endereco="/uva"></Pirulito>
                    </div>


                    <div className="w-[80%] md:w-[60%] h-[90%] md:h-[60%] rounded-xl bg-green-300 bg-opacity-50">
                        {/*caixa de item do canto superior direito*/}

                        <div className="border-2 border-green-400 w-[100%] md:w-[100%] h-[30%] md:h-[50%]">
                            <img className="flex obect-scale-down"src="/images/pirulito_verde.jpg"/>

                        </div>

                        <div>
                        <Pirulito sabor="Limão" receita="Água e limão" descricao="Delicioso!" preco="R$3,99" endereco="/limao"></Pirulito>
                        </div>



                    </div>


                    <div className="w-[80%] md:w-[60%] h-[90%] md:h-[60%] rounded-xl bg-orange-300 bg-opacity-50">
                        {/*caixa de item do canto inferior direito */}

                        <div className="border-2 border-green-400 w-[100%] md:w-[100%] h-[30%] md:h-[50%]">
                            <img style={{objectFit: "contain"}} src="/images/pirulito_laranja.jpg"/>

                        </div>

                        <div>
                            <Pirulito sabor="Laranja" receita="Água e laranja" descricao="Maravilhoso!" preco="R$3,99" endereco="/laranja"></Pirulito>
                        </div>


                    </div>

                </div>

            </div>

        </div>
        

    );



}
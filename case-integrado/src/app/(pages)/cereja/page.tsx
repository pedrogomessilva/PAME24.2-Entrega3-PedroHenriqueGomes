
export default function Cereja(){


    return(


                <div className="w-[70%] h-[90%] flex flex-col items-center justify-center bg-red-300">
                    <div className=" w-[50%] md:w-[50%] h-[100%] md:h-[100%] rounded-xl bg-red-300 bg-opacity-50">
                        {/*caixa de item do canto superior esquerdo */}


                        <div className="w-[70%] md:w-[70%] h-[30%] md:h-[30%] ">
                            <img className="object-scale-down" src="/images/pirulito.png.jpg"/>
                        </div>
 
                        <div className="gap-3">

                            <h1><strong>Produto:</strong> <strong>Novo</strong> Pirulito de Cereja Zero</h1>

                            <h2><strong>Preço:</strong> R$ 4,58 a unidade, R$68,68 o pacote contendo 15 unidades.</h2>

                            <h2><strong>Descrição:</strong> Experimente agora mesmo o mais novo sabor da ZeroLito!! Nossa nova fórmula traz um sabor marcante e natural de cereja! Tudo isso <strong>zero açúcar!!</strong></h2>

                            <h2><strong>Ingredientes:</strong> Eritritol, isomalte, acidulante, ácido cítrico, aromatizante natural sabor cereja e corante carmin.</h2>

                            <h2><strong>Disponibilidade:</strong> Disponível!</h2>

                            <button type= "submit" className="p-2 w-[100%] md: w-[80%] border-2 border-orange-400 rounded-2xl bg-blue-300">Compre agora</button>

                        </div>



                </div>
    
    </div>

    );

}              
                
                    
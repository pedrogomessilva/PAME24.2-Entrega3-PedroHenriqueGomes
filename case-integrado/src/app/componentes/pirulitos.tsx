import Caixa_input from "@/app/componentes/input_dados";
import  Link  from "next/link";


interface props{
    sabor: string;
    descricao: string;
    preco: string;
    receita: string;
    endereco: string;


}

//INCOMPLETA: sera usada na tela principal do catalogo para facilitar o preenchimento dos dados dos pirulitos


export default function Pirulito({sabor, preco, descricao,receita, endereco}: props){

     return(

    <div>
        <h2>{sabor}</h2>
        <h3>{preco}</h3>
                
        <h4>{descricao}</h4>

        <h4 className="font-size-xs">{receita}</h4>

        <div className="flex flex-row items-center justify-evenly">

            <Link href={endereco}>Ver mais</Link>
            {/*link de redirecionamento do usuario para a pagina detalhada */}
        
            <Caixa_input label="Curtir" placeholder_aux="" tipo="checkbox"></Caixa_input>
        </div>

    </div>
    );



}
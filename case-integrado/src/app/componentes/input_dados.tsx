interface props{
    label: string;
    placeholder_aux: string;
    tipo: string;

}

//funcao Caixa_input, sera chamada sempre que houver necessidade de receber um input do usuario
//label eh o titulo
//placeholder eh o texto padrao para quando o campo estiver vazio
//tipo define o tipo de dado que sera recebido por aquela caixa em especifico

export default function Caixa_input({label, placeholder_aux, tipo}: props){

    return(

        <div>
            <label>{label}</label>

            <input type={tipo} className="border-2 border-gray-400 w-[100%] rounded-md" placeholder={placeholder_aux} />

        </div>

    );

}
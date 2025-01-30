interface props{
    label: string;
    placeholder_aux: string;
    tipo: string;

}

export default function Caixa_input({label, placeholder_aux, tipo}: props){

    return(

        <div>
            <label>{label}</label>

            <input type={tipo} className="border-2 border-gray-400 w-[100%] rounded-md" placeholder={placeholder_aux} />

        </div>

    );

}
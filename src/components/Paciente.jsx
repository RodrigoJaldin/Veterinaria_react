
const Paciente = ({ paciente, setPaciente,eliminarPaciente }) => {
    const { nombre, propietario, email, alta, sintomas ,id} = paciente

    const handleEliminar=()=>{

        const respuesta=window.confirm('¿Estas seguro de eliminar el paciente?')
        if(respuesta){
            eliminarPaciente(id)
        }
    }




    return (
        <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
            <p href="" className="font-bold mb-3 text-gray-700 uppercase">Nombre: {" "}
                <span className="font-normal normal-case">{nombre}</span>

            </p>
            <p href="" className="font-bold mb-3 text-gray-700 uppercase">Propietario: {" "}
                <span className="font-normal normal-case">{propietario}</span>

            </p>
            <p href="" className="font-bold mb-3 text-gray-700 uppercase">email: {" "}
                <span className="font-normal normal-case">{email}</span>

            </p>
            <p href="" className="font-bold mb-3 text-gray-700 uppercase">Alta: {" "}
                <span className="font-normal normal-case">{alta}</span>

            </p>
            <p href="" className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {" "}
                <span className="font-normal normal-case">{sintomas}</span>

            </p>

            <div className="flex justify-between mt-10">
                <button type="button" className="py-2  px-10 
                 bg-green-600 hover:bg-green-700
                  text-white font-bold uppercase rounded-lg"
                    onClick={() => setPaciente(paciente)}


                >
                    Editar
                </button>
                <button type="button" className="py-2  px-10 
                 bg-red-600 hover:bg-red-700
                  text-white font-bold uppercase rounded-lg"
                  onClick={handleEliminar}
                  
                  >
                    Eliminar
                </button>
            </div>
        </div>
    )
}

export default Paciente

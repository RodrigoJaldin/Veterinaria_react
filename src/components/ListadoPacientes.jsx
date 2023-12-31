import Paciente from "./Paciente"

const ListadoPacientes = ({ pacientes,setPaciente, eliminarPaciente }) => {

   
    return (
        <div className="md:w-1/2 lg:3/5 md:h-screen overflow-y-scroll" >
            {
                pacientes && pacientes.length ? (
                    <>
                        <h2 className="font-black text-3xl text-center">
                            Listado Pacientes
                        </h2>
                        <p className="text-xl mt-5 mb-10 text-center">
                            Administra tus {" "}
                            <span className="text-green-600 font-bold ">
                                Pacientes y Citas</span>
                        </p>

                    </>
                ) : (
                    <>
                        <h2 className="font-black text-3xl text-center">
                            No Hay Pacientes
                        </h2>
                        <p className="text-xl mt-5 mb-10 text-center">
                            Comienza Agregando Pacientes {" "}
                            <span className="text-green-600 font-bold ">
                                y apareceran en este lugar</span>
                        </p>
                    </>

                )
            }
            {pacientes.map((paciente) => (
                <Paciente
                    key={paciente.id}
                    paciente={paciente}
                    setPaciente={setPaciente}
                    eliminarPaciente={eliminarPaciente}
                />
            ))}

        </div>
    )
}

export default ListadoPacientes

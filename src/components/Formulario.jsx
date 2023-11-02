import { useState, useEffect } from 'react'
import Error from './Error'
const Formulario = ({ pacientes, setPacientes, paciente,setPaciente }) => {

  const [nombre, setNombre] = useState('')
  const [propietario, setPropietario] = useState('')
  const [email, setEmail] = useState('')
  const [alta, setAlta] = useState('')
  const [sintomas, setSintomas] = useState('')

  const [error, setError] = useState(false)

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setAlta(paciente.alta)
      setSintomas(paciente.sintomas)
      setEmail(paciente.email)
    }
  }, [paciente])

  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación de campos
    if ([nombre, propietario, email, alta, sintomas].includes('')) {
      setError(true);
      return;
    }
    setError(false);

    const objetoPaciente = {
      nombre, propietario, email, alta, sintomas
    };

    if (paciente.id) {
      objetoPaciente.id = paciente.id; 
      
      const pacientesActualizados = pacientes.map(pacienteState=>pacienteState.id===paciente.id?
        objetoPaciente:pacienteState)
        setPacientes(pacientesActualizados)
        setPaciente({})

    } else {
      objetoPaciente.id = generarId();
      setPacientes([...pacientes, objetoPaciente]);
    }

    setNombre('');
    setAlta('');
    setEmail('');
    setPropietario('');
    setSintomas('');

    console.log('enviando');
  };

  return (
    <div className="md:w-1/2 lg:2/5">
      <h2 className="font-black text-3xl text-center">
        Seguimiento Pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade a Pacientes y {" "}
        <span className="text-green-600 font-bold" >
          Administrador
        </span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 ">

        {
          error && <Error> <p>Todos los campos son obligatorios </p></Error>
        }

        <div className="mb-5">
          <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
            Nombre Mascota
          </label>
          <input id="mascota" className="w-full border-2 p-2 mt-2 placeholder-gray-400 rounded-md"
            type="text" placeholder="Nombre de la Mascota"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">
            Nombre Propietario
          </label>
          <input id="propietario" className="w-full border-2 p-2 mt-2 placeholder-gray-400 rounded-md"
            type="text" placeholder="Nombre del Propietario"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}

          />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
            Email
          </label>
          <input id="email" className="w-full border-2 p-2 mt-2 placeholder-gray-400 rounded-md"
            type="email" placeholder="Email Propietario"
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mb-5">
          <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">
            Alta
          </label>
          <input id="alta" className="w-full border-2 p-2 mt-2 placeholder-gray-400 rounded-md"
            type="date"
            value={alta}
            onChange={(e) => setAlta(e.target.value)} />
        </div>
        <div className="mb-5">
          <label htmlFor="Sintomas" className="block text-gray-700 uppercase font-bold">
            Sintomas
          </label>
          <textarea className="w-full border-2 p-2 mt-2 placeholder-gray-400 rounded-md"
            id="Sintomas" placeholder="Describa los sintomas"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          ></textarea>
        </div>
        <input type="submit" value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
          className="bg-green-600 w-full 
            p-3 uppercase
           text-white font-bold
            hover:bg-green-800 transition-colors" />
      </form>
    </div>
  )
}

export default Formulario

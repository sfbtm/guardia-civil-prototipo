// funcion que fetchea datos de una familia

type Medicinas = {
    Nombre: string;
    Dosis: string;
}

export type Persona = {
    NombresApellidos: string;
    TipoDocumento: string;
    NumeroDocumento: string;
    FechaNacimiento: string;
    Parentesco: string;
    EPS: string;
    EnfermedadDiscapacidadOAlergia: string;
    Medicinas: Medicinas[];
    Celular: string;
    GrupoSanguineo: string;
}

export const fetchFamilia = async(id: number) => {
    const res = await fetch(`/familia${id}.json`);
    if (!res.ok) throw new Error("Datos no se pudieron cargar")

    const data = res.json();
    console.log(data);
    return data
}
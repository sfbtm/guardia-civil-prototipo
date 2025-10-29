// funcion que fetchea datos de una familia

export const fetchFamilia = async(id: number) => {
    const res = await fetch(`/familia${id}.json`);
    if (!res.ok) throw new Error("Datos no se pudieron cargar")

    const data = res.json();
    console.log(data);
    return data
}
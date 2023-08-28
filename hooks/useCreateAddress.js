const useCreateAddress = async (details) => {
    let url = "criar"
    if (details.addressId) url = "atualizar"

    const res = await fetch(`/api/endereco/${url}`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            addressId: details.addressId,
            name: details.name,
            district: details.district,
            cep: details.cep,
            cpf: details.cpf,
            city: details.city,
            state: details.state,
            country: details.country
        })
    })

    const data = await res.json();

    return data;
}

export default useCreateAddress;
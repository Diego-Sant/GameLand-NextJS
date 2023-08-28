const useUserAddress = async () => {
    let address = {}
    let res = await fetch("/api/endereco/get");

    if (res) {
        let data = await res.json();
        if (data) address = data
    }

    return address
}

export default useUserAddress;
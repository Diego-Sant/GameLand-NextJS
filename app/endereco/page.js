"use client";

import TextInput from "@/components/TextInput";
import ClientOnly from "@/components/ClientOnly";

import MainLayout from "../layouts/MainLayout";
import { useUser } from "@/context/user";

import isLoading from "@/hooks/loading";
import useUserAddress from "@/hooks/useUserAddress";
import useCreateAddress from "@/hooks/useCreateAddress";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import TextInputCpf from "@/components/TextInputCpf";
import TextInputCep from "@/components/TextInputCep";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function Address() {
    const router = useRouter();
    const {user} = useUser();

    const [addressId, setAddressId] = useState(null);
    const [name, setName] = useState("");
    const [district, setDistrict] = useState("");
    const [cep, setCep] = useState("");
    const [cpf, setCpf] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");
    const [isUpdatingAddress, setIsUpdatingAddress] = useState(false);
    const [error, setError] = useState({});

    const handleCpfChange = (event) => {
        const rawValue = event.target.value.replace(/[^0-9]/g, "");
        const formattedCpf = formatCpf(rawValue);
        setCpf(formattedCpf);
    };

    const formatCpf = (rawCpf) => {
        let formattedCpf = "";
        for (let i = 0; i < rawCpf.length; i++) {
          if (i === 3 || i === 6) {
            formattedCpf += ".";
          } else if (i === 9) {
            formattedCpf += "-";
          }
          formattedCpf += rawCpf[i];
        }
        return formattedCpf.slice(0, 14);
    };

    const handleCepChange = (event) => {
        const rawValue = event.target.value.replace(/[^0-9]/g, "");
        const formattedCep = formatCep(rawValue);
        setCep(formattedCep);
    };

    const formatCep = (rawCep) => {
        let formattedCep = "";
        for (let i = 0; i < rawCep.length; i++) {
          if (i === 5) {
            formattedCep += "-";
          } 
          formattedCep += rawCep[i];
        }
        return formattedCep.slice(0, 9);
    };

    const showError = (type) => {
        if (Object.entries(error).length > 0 && error?.type == type) {
            return error.message
        }
        return ""
    }

    const getAddress = async () => {
        if (user?.id == null || user?.id == undefined) {
            isLoading(false)
            return
        }

        const res = await useUserAddress();

        if (res) {
            setTheCurrentAddress(res)
            isLoading(false);
            return
        }
        isLoading(false)
    }

    useEffect(() => {
        isLoading(true);
        getAddress()
    }, [user])

    const setTheCurrentAddress = (result) => {
        setAddressId(result.id),
        setName(result.name),
        setDistrict(result.district),
        setCep(result.cep),
        setCpf(result.cpf),
        setState(result.state),
        setCity(result.city),
        setCountry(result.country)
    }

    const validate = () => {
        setError({});
        let isError = false

        if (!name) {
            setError({ type: "name", message: "O nome é obrigatório!"}),
            isError = true
        } else if (!district) {
            setError({ type: "district", message: "O bairro é obrigatório!"}),
            isError = true
        } else if (!cep) {
            setError({ type: "cep", message: "O CEP é obrigatório!"}),
            isError = true
        } else if (cep.length !== 9) {
            setError({ type: "cep", message: "O CEP deve ter 8 números!" });
            isError = true;
        } else if (!cpf) {
            setError({ type: "cpf", message: "O CPF é obrigatório!"}),
            isError = true
        } else if (cpf.length !== 14) {
            setError({ type: "cpf", message: "O CPF deve ter 11 números!" });
            isError = true;
        } else if (!state) {
            setError({ type: "state", message: "O estado é obrigatório!"}),
            isError = true
        } else if (!city) {
            setError({ type: "city", message: "A cidade é obrigatória!"}),
            isError = true
        } else if (!country) {
            setError({ type: "country", message: "O país é obrigatório!"}),
            isError = true
        }

        return isError
    }

    const submit = async (event) => {
        event.preventDefault();
        let isError = validate();

        if (isError) {
            toast.error(error.message, {autoClose: 3000});
            return
        }

        try {
            setIsUpdatingAddress(true);
            const res = await useCreateAddress({
                addressId,
                name,
                district,
                cep,
                cpf,
                state,
                city,
                country
            })

            setTheCurrentAddress(res);
            setIsUpdatingAddress(false);

            toast.success("Endereço atualizado com sucesso!", {autoClose: 3000});

            router.push('/checkout');
        } catch (error) {
            setIsUpdatingAddress(false);
            console.log(error);
            alert(error)
        }
    }

    return (
        <div className="bg-[#121212] text-white">
            <MainLayout>
                <div className="mt-4 mb-4 max-w-[600px] min-h-screen mx-auto px-2">
                    <div className="mx-auto bg-[#1f1f1f] rounded-lg p-3">
                        <div className="text-xl text-bold mb-2">
                            Detalhes do endereço
                        </div>
                        <form onSubmit={submit}>
                            <div className="mb-4 mt-4">
                                <ClientOnly>
                                    <TextInput className="w-full" string={name} placeholder="Nome do destinatário" onUpdate={setName} error={showError("name")} />
                                </ClientOnly>
                            </div>
                            <div className="mb-4">
                                <ClientOnly>
                                    <TextInputCpf className="w-full" string={cpf} placeholder="Número do CPF" onUpdate={setCpf} onChange={handleCpfChange} error={showError("cpf")} />
                                </ClientOnly>
                            </div>
                            <div className="mb-4">
                                <ClientOnly>
                                    <TextInputCep className="w-full" string={cep} placeholder="Número do CEP" onUpdate={setCep} onChange={handleCepChange} error={showError("cep")} />
                                </ClientOnly>
                            </div>
                            <div className="mb-4">
                                <ClientOnly>
                                    <TextInput className="w-full" string={district} placeholder="Bairro" onUpdate={setDistrict} error={showError("district")} />
                                </ClientOnly>
                            </div>
                            <div className="mb-4">
                                <ClientOnly>
                                    <TextInput className="w-full" string={city} placeholder="Cidade" onUpdate={setCity} error={showError("city")} />
                                </ClientOnly>
                            </div>
                            <div className="mb-4">
                                <ClientOnly>
                                    <TextInput className="w-full" string={state} placeholder="Estado (Sigla ou nome do estado)" onUpdate={setState} error={showError("state")} />
                                </ClientOnly>
                            </div>
                            <div className="mb-4">
                                <ClientOnly>
                                    <TextInput className="w-full" string={country} placeholder="País" onUpdate={setCountry} error={showError("country")} />
                                </ClientOnly>
                            </div>
                            <button type="submit" disabled={isUpdatingAddress} className="w-full text-white text-lg font-semibold p-3 rounded bg-[#7b61ff] hover:bg-[#7b61ff]/80 disabled:bg-[#523fb1]">
                                {!isUpdatingAddress ? 
                                <div>
                                    Atualizar informações
                                </div> 
                                : 
                                <div className="flex items-center justify-center gap-2">
                                    <AiOutlineLoading3Quarters className="animate-spin" />
                                    Atualizando...
                                </div>}
                            </button>
                        </form>
                    </div>
                </div>
            </MainLayout>
        </div>
    )
}
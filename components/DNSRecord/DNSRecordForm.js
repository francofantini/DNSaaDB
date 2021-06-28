import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Paper from "../Layout/Paper/Paper";
import H2 from "../Layout/Heading/H2/H2";
import SaveButton from "../Button/Save/SaveButton";
import TextField from "../FormControl/TextField";

const DNSRecordForm = () => {
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: { name: "test", type: "TXT", value: "test", ttl: 60 },
        shouldUnregister: true,
    });

    const _onSubmit = useCallback((data) => {
        setSaving(true);
        setError(false);

        axios
            .post("/api/vercel/dns", { record: data })
            .then(() => {
                setSaving(false);
            })
            .catch(() => {
                setError(true);
                setSaving(false);
            });
    }, []);

    return (
        <Paper className="w-full p-6 bg-gray-200">
            <H2>Record</H2>
            <form onSubmit={handleSubmit(_onSubmit)} className="" name="contact">
                <div className="mt-2 flex flex-row flex-wrap items-start justify-around w-full">
                    <TextField
                        label="Name"
                        register={register}
                        name="name"
                        rules={{ required: { value: true, message: "Campo obligatorio" }, maxLength: { value: 50, message: "50 caracteres máximo" } }}
                        error={!!errors?.info?.name}
                        helperText={errors?.info?.name?.message}
                        className="w-2/5 my-1"
                    />
                    <TextField
                        label="Type"
                        register={register}
                        name="type"
                        rules={{ required: { value: true, message: "Campo obligatorio" }, maxLength: { value: 50, message: "50 caracteres máximo" } }}
                        error={!!errors?.info?.name}
                        helperText={errors?.info?.name?.message}
                        className="w-2/5 my-1"
                    />
                    <TextField
                        label="Value"
                        register={register}
                        name="value"
                        rules={{ required: { value: true, message: "Campo obligatorio" }, maxLength: { value: 50, message: "50 caracteres máximo" } }}
                        error={!!errors?.info?.name}
                        helperText={errors?.info?.name?.message}
                        className="w-2/5 my-1"
                    />
                    <TextField
                        label="TTL"
                        register={register}
                        name="ttl"
                        rules={{ required: { value: true, message: "Campo obligatorio" }, maxLength: { value: 50, message: "50 caracteres máximo" }, valueAsNumber: true }}
                        error={!!errors?.info?.name}
                        helperText={errors?.info?.name?.message}
                        className="w-2/5 my-1"
                    />
                    <SaveButton error={error} saving={saving} className="mt-4" />
                </div>
            </form>
        </Paper>
    );
};
export default DNSRecordForm;

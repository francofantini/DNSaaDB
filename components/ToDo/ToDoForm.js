import { useCallback, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { mutate } from "swr";
import { jsonToModl } from "modl-converter";
import SaveButton from "../Button/Save/SaveButton";
import TextField from "../FormControl/TextField";

const ToDoForm = () => {
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: { todo: "" },
        shouldUnregister: true,
    });

    const _onSubmit = useCallback(
        (data) => {
            setSaving(true);
            setError(false);

            const record = {
                name: nanoid(),
                value: jsonToModl.objectToModl({ value: data.todo, createdAt: new Date().getTime() }),
                type: "TXT",
                ttl: 60,
            };

            axios
                .post("/api/vercel/dns", { record })
                .then(() => {
                    setSaving(false);
                    reset();
                    mutate("/api/vercel/dns");
                })
                .catch(() => {
                    setError(true);
                    setSaving(false);
                });
        },
        [reset]
    );

    return (
        <form onSubmit={handleSubmit(_onSubmit)} className="" name="contact">
            <div className="flex flex-row flex-wrap items-end justify-between w-full">
                <TextField
                    label="ToDo"
                    register={register}
                    name="todo"
                    rules={{ required: { value: true, message: "Campo obligatorio" }, maxLength: { value: 50, message: "50 caracteres máximo" } }}
                    error={!!errors?.info?.name}
                    helperText={errors?.info?.name?.message}
                    className="w-4/5"
                />

                <SaveButton error={error} saving={saving} className="w-1/5" />
            </div>
        </form>
    );
};
ToDoForm.propTypes = {};
ToDoForm.defaultProps = { onSave: () => {} };

export default ToDoForm;

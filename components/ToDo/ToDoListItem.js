import { format } from "date-fns";
import { TrashIcon, ExternalLinkIcon } from "@heroicons/react/outline";
import PropTypes from "prop-types";
import { useCallback, useState } from "react";
import axios from "axios";
import { mutate } from "swr";
import Loading from "../Loading/Loading";

const ToDoListItem = ({ todo }) => {
    const { id, value, createdAt, hostname } = todo;
    const [saving, setSaving] = useState(false);

    const handleDelete = useCallback(
        (id) => () => {
            setSaving(true);
            axios.delete(`/api/vercel/dns/${id}`).then(() => {
                mutate("/api/vercel/dns");
            });
        },
        []
    );

    return (
        <div className="bg-gray-100 rounded shadow my-2 p-2 grid grid-cols-2 gap-4">
            <span key={id} className="flex flex-row items-center">
                {value}
            </span>
            <div className="flex items-center justify-end">
                <span>{format(new Date(createdAt), "MM/dd/yyyy HH:mm")}</span>
                <a
                    href={`https://toolbox.googleapps.com/apps/dig/?lang=en#TXT/${hostname}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 ml-2 shadow rounded hover:bg-gray-400 transition-colors"
                >
                    <ExternalLinkIcon className="h-4 w-4 text-gray-700" />
                </a>
                <button type="button" className="p-2 ml-2 shadow rounded hover:bg-gray-400 transition-colors" onClick={handleDelete(todo.id)}>
                    {saving ? <Loading /> : <TrashIcon className="h-4 w-4 text-gray-700" />}
                </button>
            </div>
        </div>
    );
};
ToDoListItem.propTypes = {
    todo: PropTypes.shape({
        id: PropTypes.string,
        value: PropTypes.string,
        createdAt: PropTypes.string,
        hostname: PropTypes.string,
    }).isRequired,
};

export default ToDoListItem;

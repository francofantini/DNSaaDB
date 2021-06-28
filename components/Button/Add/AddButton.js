import Link from "next/link";
import PropTypes from "prop-types";
import clsx from "clsx";
import { PlusIcon } from "@heroicons/react/solid";

const AddButton = ({ href, disabled }) => {
    return (
        <Link href={href}>
            <a
                className={clsx(
                    "appearance-none border border-gray-300 rounded-md px-3 py-2 text-gray-700 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-500 transition duration-200 outline-none",
                    { "pointer-events-none bg-gray-50 text-gray-400": disabled }
                )}
                type="button"
            >
                <div className="mr-1">
                    <PlusIcon />
                </div>
                Agregar
            </a>
        </Link>
    );
};
AddButton.propTypes = { href: PropTypes.string, disabled: PropTypes.bool };
AddButton.defaultProps = { href: "", disabled: false };

export default AddButton;

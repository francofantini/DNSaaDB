import PropTypes from "prop-types";
import clsx from "clsx";
import Loading from "../../Loading/Loading";

const SaveButton = ({ label, savingLabel, saving, error, onClick, type, className }) => {
    return (
        <div className={clsx("flex flex-col items-center justify-center", className)}>
            <button
                // eslint-disable-next-line react/button-has-type
                type={type}
                onClick={onClick}
                className="appearance-none flex flex-row items-center justify-between uppercase border border-gray-300 rounded-md px-3 py-3 text-gray-700 font-medium dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-500 transition duration-200 outline-none"
            >
                {saving ? (
                    <>
                        {savingLabel}&nbsp;
                        <Loading className="ml-2" />
                    </>
                ) : (
                    <>{label}</>
                )}
            </button>
            {error && <p className="ml-2 text-sm text-red-500">There was an error</p>}
        </div>
    );
};
SaveButton.propTypes = {
    label: PropTypes.string,
    savingLabel: PropTypes.string,
    saving: PropTypes.bool,
    error: PropTypes.bool,
    onClick: PropTypes.func,
    type: PropTypes.oneOf(["submit", "button"]),
    className: PropTypes.string,
};
SaveButton.defaultProps = {
    label: "Save",
    savingLabel: "Saving",
    saving: false,
    error: false,
    onClick: () => {},
    type: "submit",
    className: undefined,
};

export default SaveButton;

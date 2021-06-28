import PropTypes from "prop-types";
import clsx from "clsx";

const TextField = ({ label, name, type, error, helperText, register, rules, endAdornment, inputClassName, className, ...other }) => {
    const { ref, ...rest } = register(name, rules);
    return (
        <div className={clsx(className, "col-span-6 sm:col-span-3")}>
            <label htmlFor={name} className="block text-sm font-medium text-gray-600 dark:text-gray-400">
                {label}
            </label>
            <div
                className={clsx(
                    "p-1 mt-1 flex flex-row items-center justify-end rounded-md focus:ring-violet border focus:border-violet border-gray-500 rounded-md dark:bg-gray-900",
                    {
                        "border-red-500": error,
                    }
                )}
            >
                <input
                    {...other}
                    {...rest}
                    ref={ref}
                    type={type}
                    name={name}
                    id={name}
                    className={clsx(inputClassName, "w-full focus:ring-0 pl-2 pr-0 border-none outline-none bg-transparent dark:bg-gray-900")}
                />
                {endAdornment && (
                    <div className="inset-y-0 right-0 flex items-center">
                        <div className="py-0 pl-0 pr-1 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md">{endAdornment}</div>
                    </div>
                )}
            </div>
            {helperText && (
                <span
                    className={clsx("text-sm ", {
                        "text-red-500": error,
                    })}
                >
                    {helperText}
                </span>
            )}
        </div>
    );
};
TextField.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    error: PropTypes.bool,
    helperText: PropTypes.string,
    endAdornment: PropTypes.node,
    inputClassName: PropTypes.string,
    className: PropTypes.string,
    register: PropTypes.func.isRequired,
    rules: PropTypes.object,
};
TextField.defaultProps = {
    type: "text",
    error: false,
    helperText: undefined,
    endAdornment: undefined,
    inputClassName: undefined,
    className: undefined,
    rules: {},
};
export default TextField;

import ToDoForm from "./ToDoForm";
import H2 from "../Layout/Heading/H2/H2";
import Paper from "../Layout/Paper/Paper";
import ToDoList from "./ToDoList";

const ToDo = () => {
    return (
        <div className="w-full p-6 ">
            <H2>ToDo List</H2>

            <Paper className="w-full p-6 bg-gray-200 my-2">
                <ToDoList />
            </Paper>

            <Paper className="w-full p-6 bg-gray-200 my-2">
                <ToDoForm />
            </Paper>
        </div>
    );
};
export default ToDo;

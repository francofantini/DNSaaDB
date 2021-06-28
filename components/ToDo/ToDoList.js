import useSWR from "swr";
import ToDoListItem from "./ToDoListItem";
import Loading from "../Loading/Loading";

const ToDoList = () => {
    const { data } = useSWR("/api/vercel/dns");

    if (!data) return <Loading />;
    return (
        <>
            {data
                ?.sort((a, b) => a.createdAt - b.createdAt)
                .map((todo) => (
                    <ToDoListItem key={todo.id} todo={todo} />
                ))}
        </>
    );
};

export default ToDoList;

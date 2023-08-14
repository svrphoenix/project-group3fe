import { useDispatch } from "react-redux";
import TaskForm from "../TaskForm/TaskForm";

// import Modal



const TaskModal = () => {
    const dispatch = useDispatch();
    const closeModal = () => { };

    return (
        // <Modal onClose={closeModal}>
        <TaskForm closeModal={closeModal } {...props} />

        // </Modal>
    );
};

export default TaskModal;
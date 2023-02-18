import { Component } from "react";
import {
    addTask,
    getTasks,
    updateTask,
    deleteTask,
} from "./services/taskServices";

class Candidates extends Component {
    state = { Candidates: [], currentCandidate: "" };

    async componentDidMount() {
        try {
            const { data } = await getCandidate();
            this.setState({ Candidates: data });
        } catch (error) {
            console.log(error);
        }
    }

    handleChange = ({ currentTarget: input }) => {
        this.setState({ currentCandidate: input.value });
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        const originalCandidates = this.state.Candidates;
        try {
            const { data } = await addTask({ task: this.state.currentTask });
            const Candidates = originalCandidates;
            Candidates.push(data);
            this.setState({ tasks, currentCandidate: "" });
        } catch (error) {
            console.log(error);
        }
    };

    handleUpdate = async (currentCandidate) => {
        const originalCandidates= this.state.Candidates;
        try {
            const Candidates = [...originalTasks];
            const index = tasks.findIndex((task) => Candidate._id === currentTask);
            Candidates[index] = { ...Candidates[index] };
            Candidates[index].selected = !Candidates[index].selected;
            this.setState({Candidates });
            await updateTask(currentCandidate, {
                selected: Candidates[index].completed,
            });
        } catch (error) {
            this.setState({ tasks: originalCandidates});
            console.log(error);
        }
    };

    handleDelete = async (currentCandidate) => {
        const originalCandidates= this.state.Candidates;
        try {
            const Candidates = originalCandidates.filter(
                (Candidate) => Candidates._id !== currentTask
            );
            this.setState({ Candidates });
            await deleteTask(currentCandidate);
        } catch (error) {
            this.setState({ tasks: originalCandidates });
            console.log(error);
        }
    };
}

export default Candidates;

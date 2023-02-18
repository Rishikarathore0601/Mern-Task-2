import React from "react";
import Candidates from "./Candidates";
import { Paper, TextField } from "@material-ui/core";
import { Checkbox, Button } from "@material-ui/core";
import "./App.css";

class App extends Candidates {
    state = { Candidates: [], currentTask: "" };
    render() {
        const { Candidates } = this.state;
        return (
            <div className="App flex">
                <Paper elevation={3} className="container">
                    <div className="heading">Candidate Page</div>
                    <form
                        onSubmit={this.handleSubmit}
                        className="flex"
                        style={{ margin: "15px 0" }}
                    >
                        <TextField
                            variant="outlined"
                            size="small"
                            style={{ width: "80%" }}
                            value={this.state.currentTask}
                            required={true}
                            onChange={this.handleChange}
                            placeholder="Add New Candidates"
                        />
                        <Button
                            style={{ height: "40px" }}
                            color="primary"
                            variant="outlined"
                            type="submit"
                        >
                            Add Candidate
                        </Button>
                    </form>
                    <div>
                        {Candidates.map((task) => (
                            <Paper
                                key={task._id}
                                className="flex Candidate_container"
                            >
                                <Checkbox
                                    checked={Candidate.selected}
                                    onClick={() => this.handleUpdate(Candidate._id)}
                                    color="primary"
                                />
                                <div
                                    className={
                                        task.completed
                                            ? "task line_through"
                                            : "task"
                                    }
                                >
                                    {Candidate.Candidate}
                                </div>
                                <Button
                                    onClick={() => this.handleDelete(task._id)}
                                    color="secondary"
                                >
                                    delete
                                </Button>
                            </Paper>
                        ))}
                    </div>
                </Paper>
            </div>
        );
    }
}

export default App;

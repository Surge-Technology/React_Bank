import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './ActivetaskList.css'
import axios from 'axios';
const ActiveTaskList = () => {
    const history = useHistory();
    const [responses, setResponses] = useState([]);
    const [selectedResponse, setSelectedResponse] = useState(null);
    const [selectedAction, setSelectedAction] = useState('');
    const [query, setQuery] = useState('');
    const [showQueryBox, setShowQueryBox] = useState(false);
    const [message, setMessage] = useState('');
    

    useEffect(() => {
        // Fetch data from the API and set it to the state
        fetch('http://localhost:8080/getAllDetails')
            .then(response => response.json())
            .then(data => setResponses(data));
    }, []);

    const handleResponseSelect = (response) => {
        setSelectedResponse(response);
    };

    const handleActionChange = (event) => {
        const action = event.target.value;
        setSelectedAction(action);

        if (action === 'NeedClarification') {
            setShowQueryBox(true);
        } else {
            setShowQueryBox(false);
        }
    };

    const handleQueryChange = (event) => {
        setQuery(event.target.value);
    };

    const handleSubmit = () => {
        let approverAction = ''; // Initialize the approverAction variable
        const addvariable={
            approverAction:"approve",
        }

       let processInstanceKey = sessionStorage.getItem("key");

       console.log("dataaaa", processInstanceKey);
   
   
   
       const result = axios.post(
   
         `http://localhost:8080/completeTaskWithInstanceId/2251799829394845`,
   
         addvariable
   
       );
   
       console.log("resulttt" + JSON.stringify(result));
        if (selectedAction === 'Approve') {
            setMessage('Approved!');
            approverAction = 'approve';
        } else if (selectedAction === 'Reject') {
            setMessage('Registration Rejected!');
            approverAction = 'reject';
        } else if (selectedAction === 'NeedClarification') {
            if (query.trim() === '') {
                setMessage('Please enter a query.');
                return; // Exit early if query is empty
            } else {
                setMessage('Need Clarification!');
                approverAction='needClearification'
                history.push({
                    pathname: '/AdminActiveTasklistDetail',
                    state: {
                        selectedResponse: selectedResponse,
                        query: query
                    }
                });
                return; // Exit after navigating to customerQueryPage
            }
        }
    
        if (approverAction === 'approve') {
            history.push({
                pathname: '/AdminActiveTasklistDetail',
                state: {
                    selectedResponse: selectedResponse,
                    approverAction: approverAction
                }
            });
        } else if (approverAction === 'reject') {
            history.push({
                pathname: '/AdminActiveTasklistDetail',
                state: {
                    selectedResponse: selectedResponse,
                    approverAction: approverAction
                }
            });
        }
    };
    
    

    const handleClose = () => {
        history.push('/');
    };

    return (
        <div className="container">
            <div className="w-100 auto shadow p-20">
                <div className='card'>
                <h2 className="text-center mb-4">TaskList Details</h2>
                <div className="row">
                    <div className="col-md-12">
                        <h3>Responses</h3>
                        <ul className="list-group">
                            {responses.map(task => (
                                <li
                                    key={task.id}
                                    className={`list-group-item ${selectedResponse === task ? 'active' : ''}`}
                                    onClick={() => handleResponseSelect(task)}
                                >
                                    {task.firstName} {task.lastName}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <br/><br/>
                {selectedResponse && (
                    <form>
                        {/* <h3>Selected Response</h3> */}
                        <div className="form-row">
                            <div className="col-lg-5">
                                {/* First Set of Fields */}
                                <div className="form-group">
                                    <label>First Name:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={selectedResponse.firstName}
                                        readOnly
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Age</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        value={selectedResponse.age}
                                        readOnly
                                    />
                                </div>
                            </div>




                            <div className="col-md-5">
                                {/* Second Set of Fields */}
                                <div className="form-group">
                                    <label>Last Name:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={selectedResponse.lastName}
                                        readOnly
                                    />
                                </div>



                                <div className="form-group">
                                    <label>Gender</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={selectedResponse.gender}
                                        readOnly
                                    />
                                </div>
                            </div>

                            <div className="col-md-5">
                                <div className="form-group">
                                    <label>Account Type</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={selectedResponse.accountType}
                                        readOnly
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Credit Score</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        value={selectedResponse.creditScore}
                                        readOnly
                                    />
                                </div>
                                {/* ... (other fields in the second set) */}
                            </div>


                            <div className="col-md-5">
                                <div className="form-group">
                                    <label>Annual Income</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        value={selectedResponse.annualIncome}
                                        readOnly
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Phone No</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        value={selectedResponse.phoneNo}
                                        readOnly
                                    />
                                </div>
                            </div>
                        </div>

                            <div className="col-md-12">
                            <div className="form-group">
                                <label >Address</label>
                                <input class="form-control" type="text" value={selectedResponse.address} readOnly />
                            </div>
                            </div>

                        <div className="col-md-12">
                        <div className="form-group">
                            <label>Select Action:</label>
                            <select
                                className="form-control"
                                value={selectedAction}
                                onChange={handleActionChange}
                            >
                                <option value="">Select Action</option>
                                <option value="Approve">Approve</option>
                                <option value="Reject">Reject</option>
                                <option value="NeedClarification">Need Clarification</option>
                            </select>
                        </div>
                        </div>
                        {showQueryBox && (
                            <div className="form-group col-md-12">
                                <label>Enter Query:</label>
                                <textarea
                                    className="form-control"
                                    value={query}
                                    onChange={handleQueryChange}
                                />
                            </div>
                        )}
                        <br/>
                        <div className="text-center">
                            {message && <div className="alert alert-info">{message}</div>}
                            <button
                                type="button"
                                className="btn "
                                onClick={handleSubmit}
                                disabled={!selectedAction}
                            >
                                Submit
                            </button>
                        </div>

                        {/* 
                    <div>
                        dropdown
                    </div>
                      <div class="form-group col-lg-12">
                        <label class="font-weight-bold text-small" >Query</label>
                        <textarea class="form-control"rows="5"  required=""></textarea>
                      </div>

                      <div>
                        <button className='btn btn-primary' >Submit</button>
                      </div> */}

                    </form>
                )}
                </div>
            </div>
        </div>
    );
}

export default ActiveTaskList;

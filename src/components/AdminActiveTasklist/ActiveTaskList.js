import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './ActivetaskList.css'
import axios from 'axios';

const ActiveTaskList = ({ queryData }) => {
    const history = useHistory();
    const [responses, setResponses] = useState([]);
    const [selectedResponse, setSelectedResponse] = useState(null);
    const [selectedAction, setSelectedAction] = useState('');
    const [query, setQuery] = useState('');
    const [showQueryBox, setShowQueryBox] = useState(false);
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetch('http://localhost:8080/getAllDetails')
            .then(response => response.json())
            .then(data => setResponses(data));
    }, []);

    const handleResponseSelect = (response) => {
        setSelectedResponse(response);
    };

    const actionApproverMap = {
        Approve: 'approved',
        Reject: 'rejected',
        NeedClarification: 'needClarification'
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

    const handleSubmit = async () => {
        const approver = actionApproverMap[selectedAction]; // Get the corresponding approver action
        const selectedResponseId = selectedResponse.id; // Assuming you have an identifier for the selected response

        console.log("Selected Action:", selectedAction);
        console.log("Selected Approver Action:", approver);

        if (!approver) {
            setMessage('Invalid Action');
            return;
        }
        let processInstanceKey=sessionStorage.getItem("key");

        console.log("dataaaa",processInstanceKey);
        try {

            const requestData = {
                approverAction: approver,
                query: selectedAction === 'NeedClarification' ? query : '', // Include the query if it's NeedClarification
                selectedResponseId: selectedResponseId // Include the identifier for the selected response
              };
            const response = await axios.post(
                `http://localhost:8080/completeTaskWithInstanceId/${processInstanceKey}`,
                requestData
            );

            console.log("API Response:", response.data);

            setMessage(`${approver.charAt(0).toUpperCase() +approver.slice(1)}!`);

            if (selectedAction === 'NeedClarification') {
                history.push({
                    pathname: '/ApproverForm',
                    state: {
                        selectedResponse: selectedResponse,
                        query: query
                    }
                });
                return;
            }

            history.push({
                pathname: '/ApproverForm',
                state: {
                    selectedResponse: selectedResponse,
                    approverAction: approver
                }
            });
        } catch (error) {
            console.error('Error while making the API request:', error);
            setMessage('An error occurred while processing your request. Please try again later.');
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

 

                            {/* <div className="col-md-12">

                            <div className="form-group">

                                <label >Address</label>

                                <input class="form-control" type="text" value={selectedResponse.address} readOnly />

                            </div>

                            </div> */}

 

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
import React from "react";
import { useHistory } from "react-router-dom";

// Define the TableComponent functional component
const TableComponent = () => {
  // Use the useHistory hook from react-router-dom to access the history object
  const history = useHistory();

  // Define the handleOpenButtonClick function to handle the click event of the "Open" button
  const handleOpenButtonClick = () => {
    // Use the history.push method to navigate to the "customerQueryPage"
    // Replace '/customer-query' with the actual path of the CustomerQuery page in your application
    history.push("/customerQueryPage");
  };

  // JSX code for the TableComponent
  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>Customer Inbox</div>
      {/* Table */}
      <table style={styles.table}>
        <thead>
          <tr>
            <th scope="col">Sl.No</th>
            <th scope="col">Active</th>
            <th scope="col">Task list</th>
            <th scope="col">Details</th>
          </tr>
        </thead>
        <tbody>
          {/* Table row 1 */}
          <tr>
            <td>1</td>
            <td>1</td>
            <td>Task 1</td>
            <td>
              {/* "Open" button with onClick event handler */}
              <button style={styles.button} onClick={handleOpenButtonClick}>
                Open
              </button>
            </td>
          </tr>
          {/* Table row 2 */}
          <tr>
            <td>2</td>
            <td>1</td>
            <td>Task 2</td>
            <td>
              {/* "Open" button with onClick event handler */}
              <button style={styles.button} onClick={handleOpenButtonClick}>
                Open
              </button>
            </td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
};

// Define the styles for the TableComponent
const styles = {
  container: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "20px",
    border: "12px solid #ccc",
    borderRadius: "5px",
    backgroundColor: "#f0f0f0",
    height: "550px", // Increase the height to 500px (or any desired value)
    overflow: "auto", // Add overflow:auto to add a scrollbar if content exceeds the height
  },
  header: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#fff",
    backgroundColor: "#007bff",
    padding: "10px",
    textAlign: "center",
    borderRadius: "5px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  button: {
    padding: "6px 12px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

// Export the TableComponent as the default export
export default TableComponent;

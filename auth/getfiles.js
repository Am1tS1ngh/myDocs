import axios from 'axios'
const dataURI = "https://us-east-1.aws.data.mongodb-api.com/app/mydocsapp-vartu/endpoint/";

export const getFiles = async (userID) => {
    // const userId = localStorage.getItem("myDocsUserID")
    const userData = {"userId" : userID}
    try {
        // Send registration data to the server
        const response = await axios.post(`${dataURI}getFiles`, userData);
        console.log('Files fetching successful:', response.data.result);
    
        return response.data.result
        // Additional logic (e.g., redirect user, show success message)
      } catch (error) {
        // Handle registration failure
        console.error('Files fetching failed:', error.message);
        // Additional error handling (e.g., show error message to the user)
        return []
      }
}
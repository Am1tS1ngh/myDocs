import axios from 'axios';
import { toast } from 'react-toastify';
const dataURI = "https://us-east-1.aws.data.mongodb-api.com/app/mydocsapp-vartu/endpoint/";
export const loginUser = async (loginData, navigate) => {
    try {
      // Send registration data to the server
      const response = await axios.post(`${dataURI}find`, loginData);
      const { email, password, validateUser } = response.data;
      console.log('Login successful:', response.data);
  
      if (email && password) {
        navigate(`/${validateUser.first_name}/docs`);
        localStorage.setItem("isDocsUserLogin", validateUser.first_name);
        console.log("after login user id",validateUser.userId)
        localStorage.setItem("myDocsUserID", validateUser.userId)
      } else if (!email) {
        toast.error('Invalid username!');
      } else {
        toast.error('Invalid credentials');
      }
      // Additional logic (e.g., redirect user, show success message)
    } catch (error) {
      // Handle registration failure
      console.error('Login failed:', error.message);
      toast.error('Login failed:', error.message);
      // Additional error handling (e.g., show error message to the user)
    }
  };
  
export const registerUser = async (registerData, navigate)=>{
    try {
        // Send registration data to the server
        const response = await axios.post(`${dataURI}create`, registerData);
  
        // Handle successful registration
        console.log('Registration successful:', response.data);
        if(response.data.result === true){
            toast.success('Registration successful');
            navigate('/');
        }else{
            toast.error('Email is already registered');
        }
        // Additional logic (e.g., redirect user, show success message)
      } catch (error) {
        console.error('Registration failed:', error.message);
        toast.error('Registration failed:', error.message);
      }
    
  }

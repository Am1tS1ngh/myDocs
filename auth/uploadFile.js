import axios from 'axios'


const dataURI = "https://us-east-1.aws.data.mongodb-api.com/app/mydocsapp-vartu/endpoint/";

// https://us-east-1.aws.data.mongodb-api.com/app/mydocsapp-vartu/endpoint/addFile
export const uploadFile = async ({ title, desc, file, userId }) => {
    
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', "docsApp")
    formData.append('cloud_name','dlwiberso')

    const fileData = {
        "title": title,
        "desc" : desc,
        "userId": userId,
        "fileSize": ((file.size/1024)/1024).toFixed(2)
    }
    
    console.log(formData)
    try {
        const fileResponse = await axios.post("https://api.cloudinary.com/v1_1/dlwiberso/image/upload", formData)
        var fileUrl = fileResponse.data.url
        fileData["fileUrl"] = fileUrl
        fileData["fileDownloadUrl"] = transformCloudinaryURL(fileUrl, title)

        const response = await axios.post(`${dataURI}addFile`, fileData);
        if (response.status === 200) {
            console.log(response);
            return true;
          } else {
            console.error('Error uploading file:', response.statusText);
            return false;
          }
        } catch (error) {
          console.error('Error uploading file:', error);
          return false;
        }
}


function transformCloudinaryURL(cloudinaryURL, customFilename) {
    // Extract the public ID and version from the original URL
    const match = cloudinaryURL.match(/v\d+\/(.+)$/);
    if (!match) {
      // If the URL format is unexpected, return the original URL
      return cloudinaryURL;
    }
  
    const publicID = match[1];
  
    // Construct the new URL with the fl_attachment transformation and custom filename
    const transformedURL = `https://res.cloudinary.com/dlwiberso/image/upload/fl_attachment:${customFilename}/${publicID}`;
  
    return transformedURL;
  }
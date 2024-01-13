export const convertToBase64 = (file, setBase64String) => {
    const reader = new FileReader();

    reader.onload = function (event) {
      const base64String = event.target.result;
      console.log('Base64 String:', base64String);
      setBase64String(base64String);
    };

    reader.readAsDataURL(file);
  };
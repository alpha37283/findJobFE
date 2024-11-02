const loginSeller = async (email, password) => {

    console.log(email,password);


    if(email == '' || password == '')
    {
        console.log('please Enter the password!!!')
        return ;
    }

    try {
      const response = await fetch('http://192.168.169.62:5000/api/sellers/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.success) {
        console.log('Success', 'Login successful');
        // Navigate to the next screen, e.g., `navigation.navigate('HomeScreen')`
      } else {
        console.log('Error', data.msg || 'Login failed');
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

export default loginSeller;

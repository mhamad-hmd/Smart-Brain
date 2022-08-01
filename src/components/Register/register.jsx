
import React, {useState} from 'react';
import Brain from './Brain.png'


const Register = ({onRouteChange, loadUser}) => {

    const [registerError, setRegisterError] = useState()
    const [emailInUse, setEmailInuse] = useState()
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

    const onRegister = () => {
        //sending the data to the server
        fetch("https://infinite-inlet-74621.herokuapp.com/register",
        {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            //used JSON.stringify to let the server read the data
            body: JSON.stringify({
                name: name,
                email: email,
                password: password
            })
            
        }
    )
    .then(res => res.json())
    .then(user => {
        if(user.id){
            loadUser(user)
            onRouteChange('signin')

        }

            
        else if(user === 'empty'){
            setRegisterError(true)
            setEmailInuse(false)
        }
        else{
           setEmailInuse(true)
           setRegisterError(false)
        }

    } )
    
    }


    return (
        <div className="flex items-center justify-center  ">
            <div className="px-8 py-6 mt-4 text-left  shadow-2xl">
                <div className="flex justify-center">
                   <img className='m-1' src={Brain} />
                </div>
                <h3 className="text-2xl font-bold text-center">Create your account</h3>
                <div action="">
                    <div className="mt-4">
                    <div>
                            <label htmlFor='text' className="block" >Name</label>
                                <input
                                    // Storing the users Name into the state
                                    onChange={e => (setName(e.target.value))}
                                    type="text" 
                                    className="w-full  shadow-2xl  bg-white/0 px-4 py-2  border border-black rounded-md focus:outline-none focus:ring-1 focus:ring-white"/>
                                </div>
                        <div>
                            <label className="block mt-4" htmlFor="email">Email</label>
                                <input
                                onChange={e => setEmail(e.target.value.toLowerCase())}
                                type="email"
                                    className="w-full  shadow-2xl  bg-white/0 px-4 py-2  border border-black rounded-md focus:outline-none focus:ring-1 focus:ring-white"/>
                                </div>
                                {emailInUse? <p className=' text-sm text-red-700 absolute '>email already in use</p>: null}

                                <div className="mt-4">
                                    <label className="block">Password</label>
                                        <input
                                        // storing the users Password in the state
                                        onChange={e => setPassword(e.target.value)}
                                        type="password" 
                                            className="w-full px-4 shadow-2xl py-2  bg-white/0 border border-black rounded-md focus:outline-none focus:ring-1 focus:ring-white"/>
                                        </div>
                                        {/* checking the value of register error if its true we will diplay the inside of </p> tag*/}
                                        {registerError? <p className='mt-1 text-red-700'>please fill all the above!</p>: null}
                                        <div className="flex items-baseline justify-between">
                                            {/* triggering the onRegister funtion everyTime the users hit the register button */}
                                            <button onClick={onRegister} htmlFor= "name"
                                            className="px-6 py-2 mt-4 bg-blue-600/0 border border-black rounded-lg hover:scale-105 transition ease-in hover:origin-center"
                                            >
                                            Login
                                            </button>
                                            

                                        </div>
                                        
                                    </div>
                                    </div>
                                </div>
                            </div>
                                )
}

export default Register
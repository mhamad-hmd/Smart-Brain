
import React, {useState} from 'react';
import useStore from '../store/store';
import Brain from './Brain.png'

const SignInForm = ({ onRouteChange, loadUser }) => {
    const [displayError, setDisplayError] = useState();
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    

    const onButtonSignIn = () => {
        fetch("https://infinite-inlet-74621.herokuapp.com/signin",
            {
                method: 'post',
                headers: { 
                    
                    'Content-Type': 'application/json' 
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            }
        )
            // we taking the servers reponse
            .then(res => res.json())
            // setting the servers response to data and comparing it to change the route depending on the comparison result
            .then(user => {
                if (user.id) {
                   onRouteChange('home')
                   loadUser(user)
                }
                else(
                    setDisplayError(true)

                )
        
        })
        .catch(err => console.log(err))
    }

    return (
        <div className="flex items-center justify-center  ">
            <div className="px-8 py-6 mt-4 text-left  shadow-2xl">
                <div className="flex justify-center">
                    <img alt='' className='m-1' src={Brain} />
                </div>
                <h3 className="text-2xl font-bold text-center">Login to your account</h3>
                <div action="">
                    <div className="mt-4">
                        <div>
                                <label className="block" htmlFor="email">Email</label>
                                <input
                                    // using onChange function to get the users email input and storing it in the Email state
                                    onChange={(e) => { setEmail(e.target.value) }}
                                    type="text"
                                    className="w-full  shadow-2xl  bg-white/0 px-4 py-2 mt-2 border border-black rounded-md focus:outline-none focus:ring-1 focus:ring-white" />
                            </div>
                            <div className="mt-4">
                                <label className="block">Password</label>
                                <input
                                // using onChange function to get the users email input and storing it in the Password state
                                onChange={(e) => { setPassword(e.target.value) }}
                                type="password"
                                className="w-full px-4 shadow-2xl py-2 mt-2 bg-white/0 border border-black rounded-md focus:outline-none focus:ring-1 focus:ring-white" />
                        </div>
                        <div>
                             {
                             displayError?
                         <p className='text-red-700 font-sans mt-1 decoration-white'>Email or Password is incorrect</p>
                         :null
                         }
                         </div>
                        <div className="flex items-baseline justify-between">
                            {/* adding on click to login button trigger the onButtoSignIn function */}
                            <button
                                onClick={onButtonSignIn}
                                className="px-6 py-2 mt-4 bg-blue-600/0 border hover:underline border-black rounded-lg hover:scale-105 transition ease-in hover:origin-center"
                            >
                                Login
                            </button>
                            <div className='flex items-baseline justify-between'>
                                {/* adding on click to login button to direct him to the register page */}
                                <p
                                    onClick={() => onRouteChange('register')}
                                    className="px-6 py-2 mt-2 bg-blue-600/0 border border-black cursor-pointer rounded-lg hover:scale-105 transition ease-in hover:origin-center
                                            hover:underline">Register</p>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignInForm
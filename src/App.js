import React, {
  useState
} from 'react';
import './App.css';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Logo from './components/Lonpm go/Logo';
import Navigation from './components/Navigation/Navigation';
import Rank from './components/Rank/Rank';
import SignInForm from './components/signIn/signInForm';
import useStore from './components/store/store';
import Register from './components/Register/register';

const App = () => {
  // Your PAT (Personal Access Token) can be found in the portal under Authentification
  // Change this to whatever image URL you want to process
  const imageUrl = useStore(state => state.ImageUrl)
  const addUrl = useStore(state => state.addUrl);
  const input = useStore(state => state.input);
  const addInput = useStore(state => state.addInput);
  const boxFace = useStore(state => state.boxFace);
  const addBox = useStore(state => state.addBox);
  const route = useStore(state => state.route);
  const addRoute = useStore(state => state.addRoute);
  const [userData, setUserData] = useState({
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: ''
  })

  // creating a funtion that get the users info to display it 
  const loadUser = (user) => {
    setUserData({
      id: user.id,
      name: user.name,
      email: user.email,
      entries: user.entries,
      joined: user.joined
    })
  }



  const calculateFaceLocation = (data) => {
    
  // selecting the api response that tell where the coordinate of the face are
  const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box
  // useing query selector to select the image
  const image = document.getElementById('inputimage')
  // selecting the width of the picture
  const width = Number(image.width);
  // selecting the hright of the picture 
  const height = Number(image.height);

  return {
    //  calculating the placements of each row and columns and returning them as data
    leftCol: clarifaiFace.left_col * width,
    topRow: clarifaiFace.top_row * height,
    rightCol: width - (clarifaiFace.right_col * width),
    bottomRow: height - (clarifaiFace.bottom_row * height)
  }
}



  // creating a fucntion that take the final coordinates of the face
  const displayBox = (faceBox) => {
    // adding the final coordinate to the global state box
    addBox(faceBox)
  }

  const onButtonSubmit = () => {
    addUrl(input)
    fetch('https://infinite-inlet-74621.herokuapp.com/image', {
        method: 'put',
        headers: {

          'Content-Type': 'application/json'
        },
        //used JSON.stringify to let the server read the data
        body: JSON.stringify({
          id: userData.id
        })
      })
      .then(res => res.json())
      // creating count that contains the server response of the user entries then we are assigning it to the entries number in the state  
      .then(count => setUserData(Object.assign(userData, {
        entries: count
      })))


    fetch('https://infinite-inlet-74621.herokuapp.com/imageurl', {  
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        //used JSON.stringify to let the server read the data
        body: JSON.stringify({
          input: input
        })
      })
      .then(response => response.json())
      // we called the displayBox funtion and gave it the calculateFaceLocation funtion that calculate for us the final coordinates by taking the response data
      .then(result => displayBox(calculateFaceLocation(result)))
      .catch(error => console.log('error', error));

  }
  // ceating a function that take a route parameter and update the global state to its value
  const changeRoute = (currentRoute) => {
    addRoute(currentRoute)
    if (currentRoute === 'signin') {
      addUrl("  ")

    }

  }


  return ( <
    div className = "App h-full" >
    <
    Navigation onRouteChange = {
      changeRoute
    }
    /> {
      /* we are checking were the users route is and displaying information depending on the result */ } {
      route === 'home' ?
        <
        div >
        <
        Logo / >
        <
        Rank
      name = {
        userData.name
      }
      entries = {
        userData.entries
      }
      />

      <
      ImageLinkForm onInputChange = {
        (e) => addInput(e.target.value)
      }

      onButtonSubmit = {
        onButtonSubmit
      }
      />  <
      FaceRecognition box = {
        boxFace
      }
      imageUrl = {
        imageUrl
      }
      /> </div>: (route === 'signin' ?
        <
        SignInForm loadUser = {
          loadUser
        }
        onRouteChange = {
          changeRoute
        }
        />

        :
        <
        Register loadUser = {
          loadUser
        }
        onRouteChange = {
          changeRoute
        }
        />

      )

    } </div>
  );

}


export default App;
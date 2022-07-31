import create from 'zustand';


const useStore = create((set) => ({
  input: '',
  addInput: (newInput) => set((state) => ({
    input: newInput
  })),

  ImageUrl: '',
  addUrl: (url) => set((state)=> (
   { ImageUrl: url}
  )),
  boxFace:{},
  addBox: (inputBox) => set ((state) => ({
    boxFace: inputBox
  })),
  // creating a global state that gives the route of the current page
  route: 'signin',
  addRoute: (newRoute) => set ((state) => ({
    route: newRoute
  }))
}))

export default useStore
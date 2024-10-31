
import './App.css'
import HookFrom from './Components/HookForm/HookFrom'
import RefRorm from './Components/RefForm/RefRorm'
import SimpleForm from './Components/SimpleForm/SimpleForm'
import StatefulForm from './Components/StatefulForm/StatefulForm'
import Grandpa from './Grandpa/Grandpa'
import ReuseAbleForm from './ReuseAbleForm'

function App() {
// const handleSubmitbtn=data=>{
// console.log('sign up data',data);
// }
// const handleUpdatebtn=data=>{
//   console.log('Update ',data);

// }

  return (
    <>
      
      <h1>Simple Form</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefRorm></RefRorm> */}
      {/* <HookFrom></HookFrom> */}
      {/* <ReuseAbleForm handleSubmit={handleSubmitbtn} fromTitle={'sign Up'}>
        <div>
          <h2>sign up now</h2>
        </div>
      </ReuseAbleForm>
      <ReuseAbleForm handleSubmit={handleUpdatebtn} submmitBtntext={'Update'} fromTitle={"Profile Update"}>
      <div>
          <h2>update your profile</h2>
        </div>
      </ReuseAbleForm > */}
      
      <Grandpa></Grandpa>


    </>
  )
}

export default App

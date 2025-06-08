import React from 'react'
import Users from './components/Users.jsx';
import PropsInReact from './components/PropsInReact.jsx';
import ChildProps from './components/ChildProps.jsx';
import PasswordComponent from './components/ConditionalRendering.jsx';
import Weather from './components/Weather.jsx';
import UserStatus from './components/UserStatus.jsx';
import Greeting from './components/Greeting.jsx';
import InlineStyle from './components/InlineStyle.jsx';
import CascadingStyle from './components/CascadingStyle.jsx';
import IconComponent from './components/IconComponent.jsx';
import States from './components/States.jsx';
import Portals from './components/Portals.jsx';
import Hooks from './components/Hooks.jsx';
import ContextAPI from './components/ContextAPI.jsx';
import Reducers from './components/Reducers.jsx';
import Ref from './components/Ref.jsx';
import CustomHooks from './components/CustomHooks.jsx';
import UniqueID from './components/UniqueID.jsx';

const App = () => {
    return (
        <div>
            {/* <PropsInReact name="Krishna" age="18" email="krishnagera93@gmail.com" job="Student" />
            <PropsInReact name="Pankaj" age="49" email="pankajgera@gmail.com" job="Self Employed" />
            <ChildProps>
                <h1>My Child Prop</h1>
            </ChildProps>
            <PasswordComponent isValid={false} />
            <PasswordComponent isValid={true} />
            <Weather temperature={25}/>
            <UserStatus loggedIN={true} isAdmin={false}/>
            <Greeting timeOfDay="evening"/>
            <CascadingStyle />
            <IconComponent />
            <InlineStyle /> 
            <States />
            <Portals /> 
            <Hooks />
            <ContextAPI />
            <Reducers />
            <Ref />
            <CustomHooks />*/}
            <UniqueID />
        </div>
    )
}

export default App
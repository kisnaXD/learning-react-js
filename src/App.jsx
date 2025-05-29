import React from 'react'
import Users from './components/Users.jsx';
import PropsInReact from './components/PropsInReact.jsx';

const App = () => {
    return (
        <div>
            <PropsInReact name="Krishna" age="18" email="krishnagera93@gmail.com" job="Student" />
            <PropsInReact name="Pankaj" age="49" email="pankajgera@gmail.com" job="Self Employed" />
        </div>
    )
}

export default App
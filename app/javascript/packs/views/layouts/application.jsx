import React from 'react';
import { Provider } from 'react-redux';
import dashboardStore from '../../stores/dashboardStore';
// Todo
import Navigation from '../../components/dashboard/navigation';

const store = dashboardStore();

class Application extends React.Component {

    render(){
        return(
            <Provider store={store}>
                <div>
                    <Navigation />
                    {this.props.children}
                </div>
            </Provider>
        );
    }

}

export default Application;
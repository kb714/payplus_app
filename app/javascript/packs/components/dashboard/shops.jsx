import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchShops } from '../../actions/dashboardActions';

class Shops extends Component {

    constructor(){
        super();
    }

    componentWillMount(){
        this.props.fetchShops();
    }

    render() {
        return(
            <div>
                Shops: {this.shop()}
            </div>
        );
    }

    shop() {
        if(this.props.dashboard.shops.loading){
            return(<div>Cargando</div>);
        } else {
            return this.props.dashboard.shops.items.map((item, i) => {
                return <div key={i}>{item.name}</div>;
            })
        }
    }
}

function mapStateToProps(state) {
    return {
        dashboard: state.dashboard
    };
}

export default connect(mapStateToProps, { fetchShops })(Shops);
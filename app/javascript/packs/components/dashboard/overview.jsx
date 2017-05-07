import React, { Component } from 'react';
//ui
import { Card } from 'antd';

class Overview extends Component {
    render() {
        return(
            <Card loading title="Overview" className="dashboard-overview-content">
                Whatever content
            </Card>
        )
    }
}

export default Overview;
import React, {ComponentType} from "react";

import Authorization from 'client/containers/common/Authorization/index';

const withSecurity = (WrappedComponent: ComponentType) => {
    return class Container extends React.Component {
        public render() {
            return <Authorization><WrappedComponent {...this.props}/></Authorization>;
        }
    }
};

export default withSecurity;
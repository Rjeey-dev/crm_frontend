import React from "react";
import { withRouter } from "react-router-dom";

class ScrollToTopOrHash extends React.Component {
    componentDidMount() {
        // @ts-ignore
        setTimeout(this.scroll, 1500);
    }

    componentDidUpdate(prevProps: any) {
        // @ts-ignore
        if (this.props.location.pathname === prevProps.location.pathname) {
            return;
        }

        this.scroll();
    }

    private scroll = () => {
        if (window.location.hash !== '') {
            const id = window.location.hash.split('#');
            const element = document.getElementById(id[1]);

            if (!element) {
                return;
            }

            element.scrollIntoView();

            return;
        }

        window.scrollTo(0, 0);
    };

    render() {
        return null;
    }
}

// @ts-ignore
export default withRouter(ScrollToTopOrHash);
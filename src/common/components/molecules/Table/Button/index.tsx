import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import AddIcon from "@material-ui/icons/Add";
import React from "react";
import {TranslateProps} from "react-localize-redux";

import Translation from "common/components/atoms/Translation/index";

interface IClasses {
    iconButton: string,
    deleteIcon: string
}

interface IProps {
    title: TranslateProps,
    classes: IClasses,
    handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
}

class Button extends React.Component<IProps> {
    public render() {
        return (
            <>
                <Tooltip title={<Translation source={this.props.title}/>}>
                    <IconButton className={this.props.classes.iconButton} onClick={this.props.handleClick}>
                        <AddIcon className={this.props.classes.deleteIcon} />
                    </IconButton>
                </Tooltip>
            </>
        );
    }
}

export default withStyles({}, { name: "CustomToolbar" })(Button);

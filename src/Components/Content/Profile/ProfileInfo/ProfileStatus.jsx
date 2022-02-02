import React from "react";
import style from "../Profile.module.css";


class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status,
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    activateEditMode = () => {  // если объявить метод в кассическом варианте toggleActiveEditMode(){,
        // то когда передаем метод теряется контекст вызова и нужно делать
        // nBlur={this.toggleActiveEditMode.bind(this)}
        this.setState({
            editMode: true,
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false,
        })
        this.props.updateUserStatus(this.state.status);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status,
            })
        }
    }

    render() {
        return (
            <div>
                {this.state.editMode
                    ? <div><input type="text" autoFocus={true} onBlur={this.deactivateEditMode}
                                  onChange={this.onStatusChange} value={this.state.status}/></div>
                    : <div><span onDoubleClick={this.activateEditMode}>{this.props.status || "------"}</span></div>
                }
            </div>
        )
        //onBlur страбатывание когда на компоненте был фокус и мы его сняли
        //autoFocus помещает курсор в конец набранного текста

    }
}

export default ProfileStatus;
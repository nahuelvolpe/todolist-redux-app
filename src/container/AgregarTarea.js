import { AgregarTarea } from "../components/AgregarTarea";
import { connect } from "react-redux";
import { agregarTarea } from "../actions/action-creators";

function mapStateToProps(state) {
    return {
        totalTareas: state.length
    }
}

function mapDispatchToProps(dispatch){
    return {
        addTarea : (nombreDeTarea) => {
            let accion = agregarTarea(nombreDeTarea);
            dispatch(accion)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AgregarTarea)

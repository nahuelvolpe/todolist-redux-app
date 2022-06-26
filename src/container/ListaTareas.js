import { ListaTareas } from "../components/ListaTareas";
import { connect } from "react-redux"
import { eliminarTarea } from "../actions/action-creators";

function mapStateToProps(state) {
    return {
        tareas: state
    }
}

function mapDispatchToProps(dispach){
    return {
        eliminarTarea : (id) => {
            var accion = eliminarTarea(id);
            dispach(accion)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListaTareas)
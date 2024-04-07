export const FETCH_MOVIE = "FETCH_MOVIE";
export const FETCH_PROYECTOS = "FETCH_PROYECTOS";
export const MENSAJE_DEFAULT = "MENSAJE_DEFAULT";
export const PROYECTO_DETAIL = "PROYECTO_DETAIL";
export const GET_PROJECT = "GET_PROJECT";
export const ADD_CARRITO = "ADD_CARRITO";
export const SET_CARRITO = "SET_CARRITO";
export const ELIMINA_PRODUCTO_CARRITO = "ELIMINA_PRODUCTO_CARRITO";
export const REDUCE_CANTIDAD_CARRITO = "REDUCE_CANTIDAD_CARRITO";
export const ADD_CANTIDAD_CARRITO = "ADD_CANTIDAD_CARRITO";







const URL_API = "http://localhost:3001/api";

export const fetchMovie = (movie) => ({
  type: FETCH_MOVIE,
  payload: movie,
});

export const addCarrito = (product) => (dispatch) => {
  return dispatch({
    type: "ADD_CARRITO",
    payload: product,
  });
};

export const setCarrito = (products) => (dispatch) => {
  return dispatch({
    type: "SET_CARRITO",
    payload: products,
  });
}

export const eliminaProductoCarrito = (id) => (dispatch) => {
  return dispatch({
    type: "ELIMINA_PRODUCTO_CARRITO",
    payload: id,
  });
}

export const reduceCantidadCarrito = (id) => (dispatch) => {
  return dispatch({
    type: "REDUCE_CANTIDAD_CARRITO",
    payload: id,
  });
}
export const addCantidadCarrito = (id) => (dispatch) => {
  return dispatch({
    type: "ADD_CANTIDAD_CARRITO",
    payload: id,
  });
}

export const fetchProyectos = () => (dispatch) => {
  console.log("fetch de proyectos");
  fetch(URL_API + "/getprojects")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error al obtener proyectos");
      }
      return response.json();
    })
    .then((data) => {
      dispatch({
        type: FETCH_PROYECTOS,
        payload: data,
      });
    })
    .catch((error) => {
      console.error("Error en fetchProyectos:", error);
      // Puedes despachar una acción adicional aquí para manejar el error
    });
};

export const proyectoDetail = (id) => (dispatch) => {
  return dispatch({
    type: "PROYECTO_DETAIL",
    payload: id,
  });
};

export const getProject = (id) => (dispatch) => {
  fetch(URL_API + "/getprojectid/" + id)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error al obtener proyectos");
      }
      return response.json();
    })
    .then((data) => {
      dispatch({
        type: GET_PROJECT,
        payload: data,
      });
    })
    .catch((error) => {
      console.error("Error en fetchProyectos:", error);
      // Puedes despachar una acción adicional aquí para manejar el error
    });
};

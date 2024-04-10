const initialState = {
  movie: null,
  carrito: [],
  productos: [],
  categorias:[],
};

const actualizarCantidadProducto = (carrito, id, cantidad) => {
  const updatedCarrito = [...carrito];
  const findProductIndex = updatedCarrito.findIndex(
    (product) => product.id === id
  );
  updatedCarrito[findProductIndex] = {
    ...updatedCarrito[findProductIndex],
    cantidad,
  };
  return updatedCarrito;
};

const proyectoEcomercePets = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_MOVIE":
      return { ...state, movie: action.payload };
    case "FECTH_PRODUCTOS":
      return { ...state, productos: action.payload };
    case "FECTH_CATEGORIAS":
      return { ...state,  categorias: action.payload };

    case "SET_CARRITO":
      return { ...state, carrito: action.payload };

    case "ADD_CARRITO":
      const findProductIndex = state.carrito.findIndex(
        (product) => product.id === action.payload.id
      );

      if (findProductIndex === -1) {
        // Si el producto no está en el carrito, agregarlo con cantidad 1
        const addProduct = { ...action.payload, cantidad: 1 };
        return { ...state, carrito: [...state.carrito, addProduct] };
      } else {
        // Si el producto ya está en el carrito, actualizar su cantidad
        const updatedCarrito = actualizarCantidadProducto(
          state.carrito,
          action.payload.id,
          state.carrito[findProductIndex].cantidad + 1
        );
        return { ...state, carrito: updatedCarrito };
      }

    case "ELIMINA_PRODUCTO_CARRITO":
      const updatedCarritoEliminar = state.carrito.filter(
        (pro) => pro.id !== action.payload
      );
      return { ...state, carrito: updatedCarritoEliminar };

    case "REDUCE_CANTIDAD_CARRITO":
      const updatedCarritoReduce = actualizarCantidadProducto(
        state.carrito,
        action.payload,
        state.carrito.find((product) => product.id === action.payload)
          .cantidad - 1
      );
      return { ...state, carrito: updatedCarritoReduce };

    case "ADD_CANTIDAD_CARRITO":
      const updatedCarritoAdd = actualizarCantidadProducto(
        state.carrito,
        action.payload,
        state.carrito.find((product) => product.id === action.payload)
          .cantidad + 1
      );
      return { ...state, carrito: updatedCarritoAdd };

    default:
      return state;
  }
};

export default proyectoEcomercePets;

export default {
  get:{
    method:'GET',
    url:'product-cart/all'
  },
  post:{
    method:'POST',
    url:'product-cart/'
  },
  delete:{
    method:'DELETE',
    url: (id) =>{ return `product-cart/${id}`}
  },
}
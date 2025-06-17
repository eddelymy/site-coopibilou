export default {

  paginated:{
    method:'GET',
    url:'products/paginated/list'
  },
  get:{
    method:'GET',
    url:'products/'
  },
  getById:{
    method:'GET',
    url: (id) =>{ return `products/${id}`}
  },
  post:{
    method:'POST',
    url:'products/'
  },
  delete:{
    method:'DELETE',
    url: (id) =>{ return `products/${id}`}
  },
}
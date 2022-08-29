<template>
<div>
<div class="container mt-3">
    <div class="row">
        <div class="col">
            <p class="h3 text-success">New Product</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem nobis perferendis inventore sequi ab quo pariatur dicta, corrupti numquam consequatur doloribus molestias animi aut aliquid ad incidunt adipisci quaerat enim.</p>
        </div>
    </div>
</div>
<!--Empty Fields-->
<div class="container">
    <div class="row">
        <div class="col-md-4">
        <div class="alert alert-danger alert-dismissible fade-show">
    <span>Please fill in the Fields</span>
    <button  type="button" class="btn-close" data-dismiss="alert" aria-label="Close">
    </button>
</div>
</div>
</div>
</div>
<div class="container mt-3">
    <div class="row">
        <div class="col-md-4">
            <form >
                <div class="mb-3">
                    <input
                     name="name" 
                     v-model="product.name"
                     type="text" class="form-control" placeholder="Name"/>
                </div>
                <div class="mb-3">
                    <input 
                    name="image" 
                    v-model="product.image"
                    type="text" class="form-control" placeholder="Image"/>
                </div>
                <div class="mb-3">
                    <input type="text" 
                    v-model="product.price"
                    name="price"  
                    class="form-control" placeholder="Price"/>
                </div>
                <div class="mb-3">
                    <input 
                    name="qty" 
                    v-model="product.qty"
                    type="text" class="form-control" placeholder="Quantity"/>
                </div>
                <div class="mb-3">
                    <textarea 
                    name="info"
                    v-model="product.info"
                    rows="4" class="form-control" placeholder="Info"></textarea> 
                </div>
                <div class="mb-3">
                    <input type="submit" @click="saveProduct" class="btn btn-success btn-sm" value="Create"/>
                </div>
            </form>
        </div>
    </div>
</div>
</div>
</template>
<script>
import ProductService from "../services/ProductService";
export default {
  name: "add-tutorial",
  data() {
    return {
      product: {
        id: null,
        name: "",
        image:"",
        price:"",
        qty:"",
        info:""
      },
      submitted: false
    };
  },
  methods: {
    saveProduct() {
      var data = {
        name: this.product.name,
        image:this.product.image,
        price:this.product.price,
        qty:this.product.qty,
        info:this.product.info
      };
      ProductService.create(data)
        .then(response => {
          this.product.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    newProduct() {
      this.submitted = false;
      this.product = {};
    }
  }
};
</script>
<template>
<!--
<div class="container mt-3">
    <div class="row">
        <div class="col">
            <p class="h3 text-sucess">Products Display</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem nobis perferendis inventore sequi ab quo pariatur dicta, corrupti numquam consequatur doloribus molestias animi aut aliquid ad incidunt adipisci quaerat enim.</p>
        </div>
    </div>
</div> ---->
<div>
<div class="container mt-3">
    <div class="row">
        <div class="col">
            <p class="h3 text-sucess">Products Display</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem nobis perferendis inventore sequi ab quo pariatur dicta, corrupti numquam consequatur doloribus molestias animi aut aliquid ad incidunt adipisci quaerat enim.</p>
        </div>
    </div>
</div>
<div class="container mt-3">
    <div class="row">
        <div class="col-md-3" v-for="product in products"  :key="product.id" >
            <div class="card shadow-lg">
                <div class="card-header bg-white">
                    <img v-bind:src=product.image alt="" class="img-fluid">
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">
                           Name:<span class="fw-bold">{{product.name }}</span>
                        </li>
                        <li class="list-group-item">
                            Price:<span class="fw-bold">{{product.price }}</span>
                         </li>
                         <li class="list-group-item">
                            Qty:<span class="fw-bold">{{product.qty}} kgs</span>
                         </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</template>
<script>
import ProductService from "../services/ProductService";
export default {
  name: "tutorials-list",
  data() {
    return {
      products: []
    };
  },
  methods: {
    retrieveProducts() {
      ProductService.getAll()
        .then(response => {
          this.products = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    refreshList() {
      this.retrieveProducts();
      //this.currentTutorial = null;
      //this.currentIndex = -1;
    },
    
  }, 
  mounted() {
    this.retrieveProducts();
  }
};
</script>
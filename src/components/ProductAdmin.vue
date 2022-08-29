<template>
<div>
<div class="container mt-3">
    <div class="row">
        <div class="col">
            <p class="h3 text-sucess">Products admin</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem nobis perferendis inventore sequi ab quo pariatur dicta, corrupti numquam consequatur doloribus molestias animi aut aliquid ad incidunt adipisci quaerat enim.</p>
        <router-link to="/AddProduct" class="btn btn-success btn-sm">Create New</router-link>
        </div>
    </div>
</div>
<div class="container mt-3">
    <div class="row">
        <div class="col">
            <table class="table table-striped table-hover text-center">
             <thead class="bg-success text-white">
                <tr>
                    <th>SNO</th>
                    <th>Product</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Actions</th>
                </tr>
             </thead>
             <tbody>
                <tr v-for="product in products" :key="product._id">
                    <td >Product Id</td>
                    <td>
                        <img v-bind:src=product.image width="50" height="50" />
                    </td>
                    <td>{{product.name}}</td>
                    <td>{{product.price}}</td>
                    <td>{{product.qty}} kgs</td>
                    <td>
                        <router-link to ="{ path: '/ProductEdit/:product._id'}" class="btn btn-primary btn-sm">
                        <button class="btn btn-primary btn-sm">
                            <i class="fa fa-edit"></i>Edit
                        </button>
                        </router-link>
                        <button class="btn btn-danger btn-sm" @click="deleteProduct(product._id)" >
                            <i class="fa fa-trash"></i>Delete
                        </button>
                    </td>
                </tr>
             </tbody>
            </table>
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
    deleteProduct(id) {
      ProductService.delete(id)
        .then(response => {
          console.log(response.data);
          this.$router.push({ name: "products" });
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
    /*
    setActiveTutorial(tutorial, index) {
      //this.currentTutorial = tutorial;
      //this.currentIndex = index;
    },
    removeAllTutorials() {
      TutorialDataService.deleteAll()
        .then(response => {
          console.log(response.data);
          this.refreshList();
        })
        .catch(e => {
          console.log(e);
        });
    },*/
    
   /* searchTitle() {
      TutorialDataService.findByTitle(this.title)
        .then(response => {
          this.tutorials = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    } */
  }, 
  mounted() {
    this.retrieveProducts();
  }
};
</script>
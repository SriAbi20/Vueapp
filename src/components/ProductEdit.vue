<template>
<div>
    <!--<p>edit-product works!</p>
<h2>{{productId}}</h2> 
<pre>{{selectedProduct | json}}</pre> -->
<div class="container mt-3">
    <div class="row">
        <div class="col">
            <p class="h3 text-success">Edit Product</p>
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
                     type="text" class="form-control" placeholder="Name"/>
                </div>
                <div class="mb-3">
                    <input 
                    name="image" 
                    type="text" class="form-control" placeholder="Image"/>
                </div>
                <div class="mb-3">
                    <input type="text" 
                    name="price" 
                    class="form-control" placeholder="Price"/>
                </div>
                <div class="mb-3">
                    <input 
                    name="qty" 
                    type="text" class="form-control" placeholder="Quantity"/>
                </div>
                <div class="mb-3">
                    <textarea 
                    name="info"
                    rows="4" class="form-control" placeholder="Info"></textarea> 
                </div>
                <div class="mb-3">
                    <input type="submit" class="btn btn-success btn-sm" value="Update"/>
                </div>
            </form>
        </div>
    </div>
</div>
</div>
</template>
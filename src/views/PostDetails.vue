<template>
    <div>

        <h1>{{post.title}}</h1>
        
    </div>
</template>
<script>

export default {
    data(){
       return{
            id: this.$router.params,
            post: {}
       }
    }, 

    created() {
  const response = this.$route.params.id;
  this.post = response

}

}
</script>

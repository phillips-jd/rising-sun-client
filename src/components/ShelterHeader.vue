<template>
  <div>
      <div id='shelterHead'>
        <h1 class="headCenter">Rising Sun Animal Shelter</h1>
      </div>
  </div>
</template>

<script>

export default {

}
</script>

<style>

#shelterHead {
 font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 19.5vh;
  border: 3px solid #a36c2c;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('../images/shelterbanner3.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-clip: content-box;
}

img {
  object-fit: cover;
}


.headCenter {
  flex-direction: column;
  width: 50%;
  justify-items: center;
  color: antiquewhite;
  text-shadow: -1px -1px 0 #dc9d4e, 1px -1px 0 #dc9d4e, -1px 1px 0 #dc9d4e, 1px 1px 0 #898686;
  
  @media (min-width: 993px) {
    margin-top: -5%;
    margin-left: -35%;
    font-size: 30px;
  }
  @media (max-width: 992px) {
    margin-top: -6%;
    margin-left: -35%;
    font-size: 20px;
  }
  @media (max-width: 768px) {
    margin-top: -7%;
    margin-left: -49%;
    font-size: 13px;
  }
  
  /* @media (min-width: 1200px) {
    margin-top: -3%;
    margin-left: -25%;
    font-size: 30px;
  } */
}

</style>
<template>
  <div>
    <div class="traffic__light">
      <div class="lamp red"></div>
      <div class="lamp yellow"></div>
      <div class="lamp green"></div>
      <div class="frame">
        <router-view />
      </div> 
    </div>
  </div>
</template>

<style>
  .traffic__light {
    margin: 30px auto;
    height: 300px;
    width: 100px;
    background: dimgrey;
    border: 5px solid black;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around; 
    position: relative;
  }

  .frame {
    position: absolute;
  }

  .lamp {
        margin: 0 auto;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        opacity: 0.2;
    }

  .red {
    background-color: rgb(255, 5, 5);
    border: 3px solid rgb(151, 44, 44)
  }

  .yellow {
    background-color: yellow;
    border: 3px solid rgb(218, 218, 34);
  }

  .green {
    background-color: rgb(29, 197, 29);
    border: 3px solid rgb(33, 145, 33);
  }
</style>
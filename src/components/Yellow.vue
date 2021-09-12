<template>
    <div v-if="isActive" class="lamp yellow active">
		<Countdown :time="this.time" />
	</div>
    <div v-else class="lamp yellow unactive"></div>
</template>

<script>
import Countdown from './Сountdown.vue';

export default {
	components: { Countdown },
    data() {
        return {
            time: 3,
            isActive: true
        }
    },
 	mounted() {
 		if (sessionStorage.getItem('yellowTime') !== null && 
 		    sessionStorage.getItem('yellowTime') > 0) 
 			this.time = sessionStorage.getItem('yellowTime');
 		
 		setInterval(() => {
 			sessionStorage.setItem('yellowTime', this.time);
			 this.time -= 1;

 			if (this.time === 0) 
  				sessionStorage.getItem('page') === 'red' ? 
				  this.$router.push('/green') : 
				  this.$router.push('/red');
  		
 		}, 1000);
  }
}
</script>

<style scoped>
.lamp {
    position: absolute;
    margin: 0 auto;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

.yellow {
    background-color: yellow;
    border: 3px solid rgb(218, 218, 34);
}

.active {
    opacity: 1;
    bottom: -30px;
    margin-left: 23px;
    
}

.unactive {
    opacity: 0.3;
    bottom: -30px;
    margin-left: 23px;
}
</style>
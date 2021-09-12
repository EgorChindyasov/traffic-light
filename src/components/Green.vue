<template>
    <div v-if="isActive" class="lamp green active">
		<Countdown :time="this.time" />
	</div>
    <div v-else class="lamp green unactive"></div>
</template>

<script>
import Countdown from './Сountdown.vue';
export default {
	components: { Countdown },
    data() {
        return {
            time: 15,
			signalChange: 3,
            isActive: true,
            isBlinking: false
        }
    },
    methods: {
  	blinking() {
  		this.isBlinking = true
  		setInterval(() => {
  			this.isActive = !this.isActive;
  		}, 300);
  	}
  },
 	mounted() {

 		if (sessionStorage.getItem('greenTime') !== null && 
 			sessionStorage.getItem('greenTime') > 0) 
 			this.time = sessionStorage.getItem('greenTime');

 		setInterval(() => {
 			sessionStorage.setItem('greenTime', this.time);
			this.time -= 1;

 			if (this.time <= this.signalChange && this.isBlinking === false) 
 				this.blinking();

 			if(this.time === 0) 
				this.$router.push('/yellow');

 		}, 1000);

 		sessionStorage.setItem('page', 'green');
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

.green {
    background-color: rgb(29, 197, 29);
    border: 3px solid rgb(33, 145, 33);
}

.active {
    opacity: 1;
    bottom: -130px;
    margin-left: 23px;
    
}

.unactive {
    opacity: 0.3;
    bottom: -130px;
    margin-left: 23px;
}

</style>
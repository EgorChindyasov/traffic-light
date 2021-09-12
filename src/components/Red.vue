<template>
    <div v-if="isActive" class="lamp red active">
        <Countdown :time="this.time" />
    </div>
    <div v-else class="lamp red unactive"></div>
</template>

<script>
import Countdown from './Сountdown.vue';

export default {
    components: { Countdown },
    data() {
        return {
            time: 10,               // длительность работы цвета светофора
            signalChange: 3,        // на данной секунде активируется моргание
            isActive: true,         // цвет светофора активен
            isBlinking: false       // моргания нет
        }
    }, 
    methods: {
    // метод эффекта моргания 
  	blinking() {
  		this.isBlinking = true
  		setInterval(() => {
  			this.isActive = !this.isActive;
  		}, 300);
  	},
  },
 	mounted() {

 		if (sessionStorage.getItem('redTime') !== null && 
 		    sessionStorage.getItem('redTime') > 0) 
 			this.time = sessionStorage.getItem('redTime');

 		setInterval(() => {
            //  добавляем в sessionStorage пару "ключ-значение"
            sessionStorage.setItem('redTime', this.time);
            // декриментируем time
 			this.time -= 1;

            // условие для эффекта моргания
 			if (this.time <= this.signalChange && this.isBlinking === false)
 				this.blinking();

            // перенаправление на /yellow
 			if (this.time === 0) 
  			    this.$router.push('/yellow');

 		}, 1000);

        //  добавляем в sessionStorage пару "ключ-значение"
 		sessionStorage.setItem('page', 'red');
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

.red {
    background-color: rgb(255, 5, 5);
    border: 3px solid rgb(151, 44, 44)
  }

.active {
    opacity: 1;
    bottom: 72px;
    margin-left: 23px;
}

.unactive {
    opacity: 0.3;
    bottom: 72px;
    margin-left: 23px;
}
</style>
function getRandomValue(min,max){
    return Math.floor(Math.random()*(max-min)) + min;
}

const app = Vue.createApp({
    data(){
        return{
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
            winner: null,
            logMessages: []
        }
    },
    computed:{
        maySpecialAttack(){
            return this.currentRound%3;
        },
        monsterHealthBar(){
            if (this.monsterHealth < 0){
                return {width: 0 + '%'}
            }
            return {width: this.monsterHealth + '%'}
        },
        playerHealthBar(){
            if (this.playerHealth < 0){
                return {width: 0 + '%'}
            }
            return {width: this.playerHealth + '%'}
        }
    },
    methods:{
        attackMonster(){
            this.currentRound++;
            const attackValue = getRandomValue(5, 12);
            this.monsterHealth -= attackValue;
            this.addToLog("player", "attack", attackValue)
            this.attackPlayer();
        },
        attackPlayer(){
            const attackValue = getRandomValue(8, 15);
            this.addToLog("monster", "attack", attackValue)
            this.playerHealth -= attackValue;
        },
        specialAttackMonster(){
            this.currentRound++;
            const attackValue = getRandomValue(10, 25);
            this.monsterHealth -= attackValue;
            this.addToLog("player", "attack", attackValue)
            this.attackPlayer();
        },
        healPlayer(){
            this.currentRound++;
            const healValue = getRandomValue(5, 20);
            if (this.playerHealth + healValue > 100){
                this.playerHealth = 100;
            }
            else{
                this.playerHealth += healValue;
            }
            this.addToLog("player", "heal", healValue)
            this.attackPlayer();
        },
        startNew(){
            this.currentRound = 0;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.winner = null,
            this.logMessages = []
        },
        surrender(){
            this.winner = "monster";
        },
        addToLog(who, what, value){
            this.logMessages.unshift({
                actionBy: who,
                actionType: what,
                actionValue: value
            })
        }
    },
    watch:{
        playerHealth(value){
            if(value <= 0 && this.monsterHealth <= 0){
                this.winner = "draw";
            }
            else if(value <= 0){
                this.winner = "monster"
            }
        },
        monsterHealth(value){
            if(value <= 0 && this.playerHealth <= 0){
                this.winner = "draw";
            }
            else if(value <= 0){
                this.winner = "player"
            }
        }
    }
})

app.mount("#game")
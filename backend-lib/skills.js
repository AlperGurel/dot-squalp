module.exports = {
    bladefury: class{
        constructor(){
            this.name = "bladefury";
            this.damage = 20;
            this.cooldown = 10;
            this.keyCode = 81;
            this.range = 70;
            this.activated = false;
        }

        activate(){
            this.activated=true;
        }
    }
}
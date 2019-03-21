module.exports = {
    bladefury: class{
        constructor(){
            this.name = "bladeFury";
            this.damage = 20;
            this.cooldown = 10;
            this.keyCode = 81;
            this.range = 70;
            this.activated = false;
        }

        activate(){
            this.activated=true;
            setInterval(() => deactivate(this), this.cooldown*100);
        }

    },
   
}
function deactivate(skill){
    skill.activated=false;
}
module.exports = {
    bladefury: class{
        constructor(){
            this.name = "bladeFury";
            this.damage = 1;
            this.cooldown =15 ;
            this.onCoolDown = false;
            this.keyCode = 81;
            this.range = 70;
            this.activeTime = 2;
            this.activated = false;
        }

        activate(){
            this.activated=true;
            this.onCoolDown = true;
            // setInterval(() => deactivate(this), this.cooldown*100);
            setTimeout(()=> this.onCoolDown = false, this.cooldown*1000);
            setTimeout(()=> this.activated = false, this.activeTime*1000);
        }

    },
   
}
function deactivate(skill){
    skill.activated=false;
}
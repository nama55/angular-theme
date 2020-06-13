export class GuID {
    private S4() {
        return (((Date.now()+1+Math.random())*0x10000)|0).toString(16).substring(1); 
    }
        generateUUID(forEntity: string) {
        var guid = (forEntity+ '-' + this.S4()).toLowerCase();
        return guid;
      // then to call it, plus stitch in '4' in the third group
        // var guid = (
        //   this.S4() + this.S4() + "-" + this.S4() + "-4" + 
        //   this.S4().substr(0,3) + "-" + this.S4() + "-" + 
        //   this.S4() + this.S4() + this.S4()
        // ).toLowerCase();
    }
}

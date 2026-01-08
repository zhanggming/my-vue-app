/**
 * gis全局对象
 */
class GlobalGis {
  constructor(){
    this.name = "GlobalGis";
    this.entitys = new Map();
  }
}
export const globalGis = new GlobalGis();
export default globalGis;
window.globalGis = globalGis;

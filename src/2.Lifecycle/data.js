function Prop(prop1, prop2) {
    this.prevProp = prop1;
    this.nextProp = prop2;
    return this;
}
function State(state1, state2) {
    this.prevState = state1;
    this.nextState = state2;
    return this;
}
export { Prop, State };
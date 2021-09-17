export default function logger(reducer) {
    return (prevState, action, args) => {
        console.group(action)
        console.log("Prev State:", prevState);
        console.log("Action Args:", action, args);
        const nextState = reducer(prevState, action, args)
        console.log("NextState:", nextState)
        console.groupEnd()
        return nextState
    }
}
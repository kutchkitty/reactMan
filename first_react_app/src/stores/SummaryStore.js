function computeSumrnary(counterValues) {
    let summary = 0;
    for (const key in counterValues) {
        if (counterValues.hasOwnProperty(key)) {
            summary+= counterValues[key];
        }
        return summary;
    }
    const SumrnaryStore = Object.assign({} , 
        EventEmitter.prototype, {
        getSummary: function () {
            return computeSumrnary(CounterStore.getCounterValues())
        }
    }
)}

SumrnaryStore.dispatchToken = AppDispatcher.register((action) => {
    if  ((action.type === ActionTypes.INCREMENT) || (action.type === ActionTypes.DECREMENT)) {
        AppDispatcher.waitFor([CounterStore.dispatchToken])
        SumrnaryStore.emitChange()
    }
})
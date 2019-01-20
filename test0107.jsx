class Logger extends React.Component{
    constructor(props){
        super(props)
        console.log("constructor")
    }
    componentWillMount(){
        console.log("componentWillMount 실행")
    }
    componentDidMount(e){
        console.log("componentDidMount 실행")
        console.log("DOM node:", ReactDOM.findDOMNode(this))
    }
    componentWillReceivePorps(newProps){
        console.log("componentWillRecievePorps 실행")
        console.log("새로운속성:",newProps)
    }
    shouldComponentUpdate(newProps,newState){
        console.log("shouldComponentUpdate 실행")
        console.log("새로운 속성:",newProps)
        console.log("새로운 상태:",newState)
        return true
    }
    componentWillUpdate(newProps,newState){
        console.log("componentWillUpdate 실행")
        console.log("새로운 속성:",newProps)
        console.log("새로운 상태:",newState)
    }
    componentDidUpdate(oldProps,oldState){
        console.log("componentDidUpdate 실행")
    }
}
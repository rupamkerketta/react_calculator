import React, { Component } from 'react';

class Calculator extends Component{

  constructor(props){
    super(props);

    this.state = {
      prev: '',
      display_text: '',
      symbol_state: false,
      err_msg: false
    };
    this.updateDisplayText = this.updateDisplayText.bind(this);
    this.isInt = this.isInt.bind(this);
    this.cls = this.cls.bind(this);
    this.del = this.del.bind(this);
    this.symbolHandler = this.symbolHandler.bind(this);
    this.numHandler = this.numHandler.bind(this);
    this.equalsHandler = this.equalsHandler.bind(this);
    this.dotHandler = this.dotHandler.bind(this);
    this.dotBeforeNum = this.dotBeforeNum.bind(this);
  }

  updateDisplayText(val){
    var valInt = parseInt(val);

    if(val === 'cls'){
      this.cls();
      this.setState({err_msg: false});
    }
    else if(val === 'del'){
      if(this.state.err_msg){
        this.cls();
        this.setState({err_msg: false});
      }
      else{
        this.del();
      }
    }
    else if(val === '%' || val === '*' || val === '/' || val === '-' || val === '+'){
      if(!this.state.err_msg){
        this.symbolHandler(val);
      }
    }
    else if(val === '.'){
      if(!this.state.err_msg){
        this.dotHandler();
      }
    }
    else if(valInt >= 0 && valInt <= 9){
      if(!this.state.err_msg){
        this.numHandler(val);
      }
    }
    else if(val === '='){
      if(!this.state.err_msg){
        this.equalsHandler();
      }
    }
  }

  isInt(num){
    return (num%1===0);
  }

  cls(){
    this.setState((prevState, props) => {return {prev: ''}});
    this.setState((prevState, props) => {return {display_text: ''}});
    console.log('(cls)');
  }

  del(){
    var cu = this.state.display_text.toString();
    var cu_length = cu.length;
    var newStr = cu.slice(0, cu_length-1);
    var cu_char = cu[cu_length-1];

    console.log('(del) prevStr: '+cu+', newStr: '+newStr);
    this.setState((prevState, props) => {return {display_text: newStr}});


    if(cu_char === '%' || cu_char === '*' || cu_char === '/' || cu_char === '-' || cu_char === '+'){
      this.setState((prevState, props) => {return {symbol_count: prevState.symbol_count-1}});
    }

    if(newStr.length === 0){
      this.setState({display_text: this.state.prev});
      this.setState({prev: ''});
    }

    }

  symbolHandler(val){
    var symbol = val;
    //this.state.symbol_count += 1;

    console.log('(symbol) symbol: ('+val+') symbol_state: '+this.state.symbol_state);
    //this.setState((prevState, props) => {return {symbol_count: prevState.symbol_count+1}});

    if(!this.state.symbol_state){
      this.setState((prevState, props) =>
      {return {display_text: prevState.display_text+symbol}});
      this.setState({symbol_state: true});
    }
    else{
      var new_exp = this.state.display_text.toString();
      var len = new_exp.length;
      new_exp = new_exp.slice(0, len-1)+symbol;
      this.setState({display_text: new_exp});
    }
  }

  numHandler(val){
    if(this.state.display_text.toString().length === 1 && this.state.display_text[0] === '0'){
      this.setState((prevState, props) => {return {display_text: val.toString()}});
    }
    else{
      this.setState((prevState, props) => {return {display_text: prevState.display_text+val.toString()}});
    }
    console.log('(integer) '+val);
    console.log('(display_text) '+this.state.display_text);
    this.setState({symbol_state: false});
  }

  equalsHandler(){
    var output;
    try{
      output = eval(this.state.display_text);
      this.setState({prev: this.state.display_text});
      this.setState({display_text: (this.isInt(output)? output.toString() : output.toPrecision(5).toString())});
    }
    catch(e){
      if(e instanceof SyntaxError){
        this.setState({prev: e.message});
        this.setState({display_text: 'Click cls to reset'});
        this.setState({err_msg: true});
      }
    }
  }

  dotHandler(){
    if(!this.dotBeforeNum()){
      var new_exp;
      if(this.state.display_text.toString().length === 0){
        new_exp = '0.';
      }
      else{
        new_exp = this.state.display_text + '.';
      }
      this.setState({display_text: new_exp});
    }

  }

  dotBeforeNum(){
    var temp = this.state.display_text.toString();
    var len = temp.length;
    //var break_point;
    var dot_found = false;
    var i = len-1;

    while( i >= 0 ){
      if(temp[i] ==='.'){
        dot_found = true;
        break;
      }
      else if(temp[i] === '%' || temp[i] === '*' || temp[i] === '/' || temp[i] === '-' || temp[i] === '+'){
        dot_found = false;
        break;
      }
      i -= 1;
    }

    //console.log(dot_found+' break_point:'+break_point);
    return dot_found;
  }


  render(){
    return(
      <div className="container">
        <OutputDisplay prev={this.state.prev} display_text={this.state.display_text} err_msg={this.state.err_msg}/>
        <Buttons updateDisplayText={this.updateDisplayText} handleKeyPress={this.handleKeyPress}/>
        <MetaAuthor />
      </div>
    );
  }
}

class OutputDisplay extends Component{
  render(){
    return(
      <div className="display-output-wrapper">
        <div className={"output-text"+(this.props.err_msg? ' err-msg' : '')}>{this.props.prev}</div>
        <div className={"output-text"+(this.props.err_msg? ' err-msg' : '')}>{this.props.display_text}</div>
      </div>
    );
  }
}

class Buttons extends Component{

  constructor(props){
    super(props);

    this.state = {};
    this.clicker = this.clicker.bind(this);
  }

  clicker(event){
    this.props.updateDisplayText(event.target.textContent);
  }

  render(){
    const arr = ['cls', 'del', '%', '*', '7', '8', '9', '/', '4', '5', '6', '-', '1', '2', '3', '+', '', '0', '.', '='];
    return(
      <div className="Buttons">
        {arr.map((item, key) =>
          <div
            className={'btn-'+key+' btn'+((key === 2 || key === 3 || key === 7 || key === 11 || key === 15 || key === 18 || key === 19)? ' symbol' : '')}
            onClick={this.clicker}>
            <div className="div-text">{item}</div>
          </div>
        )}
      </div>
    );
  }
}

class MetaAuthor extends Component{
  render(){
    return(
      <div className="metaAuthor">Author: Rupam Kerketta</div>
    );
  }
}

export default Calculator;

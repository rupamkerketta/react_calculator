import React, { Component } from 'react';

class Calculator extends Component{
  constructor(props){
    super(props)

    this.state = {
      display_text: '',
      prev: '',
      symbol_count: 0,
      num_count: 0,
      dot_state: false,
      dot_count: 0,
      symbol_flag: false,
      first_zero_flag: 0
    };
    this.updateDisplayText = this.updateDisplayText.bind(this);
    this.isInt = this.isInt.bind(this);
  }

  /* Function return type: boolean
     Purpose : for checking if the obtained
               output is an integer or not
  */
  isInt(n){
    return (n%1===0);
  }


  /* Function trigggered when the any one of
   * the button element is clicked
  */
  updateDisplayText(val){

    var exp;    // variable for storing the final expression
    var symbol; // variable for storing the current symbol

    /* This condition is triggered when the 'cls'
     * element is clicked.
     * This function also re-sets every state variable
    */
    if(val == 'cls'){
      this.setState({display_text: ''});
      this.setState({prev: ''});
      this.setState({dot_state: false});
      this.setState({dot_count: 0});
      this.setState({first_zero_flag: 0});
      console.log('clear');
    }


    else{
      // Start of Block one of condition checking.

      /* This condition is triggerd when any one the symbol_flag
       * element is clicked. It also registers the symbol count.
       * Symbol count is incremented by one if any one of the
       * symbol element is clicked.
      */
      if(val == '+' || val == '-' || val == '/' || val == '%' || val == '*'){
        this.state.symbol_flag = true;
        symbol = val;
        this.state.symbol_count += 1;
        this.state.dot_count = 0;
        this.setState({dot_state: false});
      }

      if(val == '.'){
        var dot_count = this.state.dot_count;
        this.setState({dot_state: true});
        this.state.dot_count = dot_count+1;
        console.log('dot_count : '+this.state.dot_count);
      }


      /* This condition is triggerd when the user clicks any other
       * button other than the symbol ones. It also resets other
       * the symbol count which is being registered in the state variable.
      */
      else{
        this.state.symbol_flag = false;
        this.state.symbol_count = 0;
        this.state.num_count += 1;
      }
      /* End - Block one of condition checking
       * Mainly involving the registration of symbol_count
       * and other keys.
      */

      // Start of Block two condition checking

      /* This condition checks the boolean state of other
       * state variable 'symbol_flag' and also checks for
       * the symbol count.
      */
      if(this.state.symbol_flag === true){
        if(this.state.symbol_count === 1){
          exp = this.state.display_text+symbol;
          this.setState({display_text: exp});
          console.log(exp+' '+1);
        }else{
          var length = this.state.display_text.length;
          exp = this.state.display_text.slice(0, length-1) + symbol;
          this.setState({display_text: exp});
          console.log(exp+' count more than:'+1+' length:'+length);
        }
      }

      else{
        // This condition is triggered when the first digit entered is 0 ()
        if(this.state.display_text[0] === '0' && this.state.display_text.length == 1){
          this.setState({display_text: val});
          console.log('text and length triggered');
        }
        else{
          exp = this.state.display_text;
          if(this.state.dot_state == true && this.state.dot_count >= 2){
            this.setState({display_text: exp});
            console.log('dot triggered : '+this.state.dot_count);
          }
          else{
            exp += val;
            this.setState({display_text: exp});
            console.log(exp+' norm');
          }
        }
      }

      if(val === '='){
        var output;

        this.setState({prev:  this.state.display_text});

        try {
            output = eval(this.state.display_text);
            this.setState({display_text: this.isInt(output)? output.toString() : output.toPrecision(4).toString()});
        }
        catch (e) {
            if (e instanceof SyntaxError) {
                //alert(e.message);
                this.setState({display_text: 'Bad Syntax'});
            }
        }

        console.log(output);
      }

      if(val == 'del'){
        var length = this.state.display_text.length;
        var display_text = this.state.display_text;
        if(length == 1 || display_text.toLowerCase() == 'infinity' || display_text.toLowerCase() == 'bad syntax'){
          this.setState({display_text: this.state.prev});
          this.setState({prev: ''});
        }
        else{
          var new_str = this.state.display_text.toString();
          var new_exp = new_str.slice(0, length-1);
          console.log(new_exp);
          this.setState({display_text: new_exp});
        }
      }

    }
  }

  render(){
    return(
      <div className="container">
        <OutputDisplay display_text={this.state.display_text} prev={this.state.prev}/>
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
        <div className="output-text">{this.props.prev}</div>
        <div className="output-text">{this.props.display_text}</div>
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
            className={'btn-'+key+' btn'+((key == 2 || key == 3 || key == 7 || key == 11 || key == 15 || key == 18 || key == 19)? ' symbol' : '')}
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
